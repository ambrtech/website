#!/usr/bin/env python3
"""
Ambr AI — Image Generation Script

Reads prompts from IMAGE-PROMPTS.md and generates images via the Gemini API.
Images are saved directly to public/images/photography/ with correct filenames.

Usage:
  python scripts/generate-images.py                  # List all prompts
  python scripts/generate-images.py --prompt 4       # Generate prompt #4
  python scripts/generate-images.py --prompt 4 5 6   # Generate prompts 4, 5, and 6
  python scripts/generate-images.py --all-missing     # Generate all that don't exist yet
  python scripts/generate-images.py --prompt 1 --pro  # Use the pro model (slower, higher quality)

Requires:
  pip install google-genai

Environment:
  GEMINI_API_KEY — set in .env or export directly
"""

import argparse
import mimetypes
import os
import re
import sys
import time
from pathlib import Path

MAX_RETRIES = 5
INITIAL_BACKOFF_SECONDS = 2

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent
PROMPTS_FILE = REPO_ROOT / "IMAGE-PROMPTS.md"
OUTPUT_DIR = REPO_ROOT / "public" / "images" / "photography"

MODEL_FLASH = "gemini-3.1-flash-image-preview"
MODEL_PRO = "gemini-3-pro-image-preview"

# Map the aspect ratio text in prompts to Gemini API values
ASPECT_RATIO_MAP = {
    "16:9": "16:9",
    "3:2": "3:2",
    "4:5": "4:5",
    "4:3": "4:3",
    "1:1": "1:1",
}

# ---------------------------------------------------------------------------
# Load .env if present (simple parser, no dependency needed)
# ---------------------------------------------------------------------------

def load_dotenv():
    env_file = REPO_ROOT / ".env"
    if not env_file.exists():
        env_file = REPO_ROOT / ".env.local"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key not in os.environ:
                os.environ[key] = value

# ---------------------------------------------------------------------------
# Parse prompts from IMAGE-PROMPTS.md
# ---------------------------------------------------------------------------

def parse_prompts() -> list[dict]:
    """Parse the markdown file and extract numbered prompts with metadata."""
    content = PROMPTS_FILE.read_text()

    # Match sections like: ### 1. `hero-quiet-reflection.jpeg`
    # or: ### 1. `hero-quiet-reflection.png` (done — regenerate with updated prompt if desired)
    pattern = re.compile(
        r"###\s+(\d+)\.\s+`([^`]+)`\s*(?:\(([^)]*)\))?\s*\n\n(.*?)(?=\n---|\n##|\Z)",
        re.DOTALL,
    )

    prompts = []
    for match in pattern.finditer(content):
        number = int(match.group(1))
        raw_filename = match.group(2)
        status_note = (match.group(3) or "").strip()
        prompt_text = match.group(4).strip()

        # Extract the base name (without extension) for saving
        base_name = Path(raw_filename).stem

        # Detect aspect ratio from prompt text
        aspect_ratio = ""
        for ratio_text, api_value in ASPECT_RATIO_MAP.items():
            if ratio_text in prompt_text:
                aspect_ratio = api_value
                break

        # Check if the image already exists (any extension)
        existing = list(OUTPUT_DIR.glob(f"{base_name}.*"))
        exists = any(
            f.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp") for f in existing
        )

        prompts.append(
            {
                "number": number,
                "base_name": base_name,
                "raw_filename": raw_filename,
                "status_note": status_note,
                "prompt": prompt_text,
                "aspect_ratio": aspect_ratio,
                "exists": exists,
            }
        )

    return prompts


# ---------------------------------------------------------------------------
# Generate a single image
# ---------------------------------------------------------------------------

def generate_image(prompt_data: dict, model: str) -> Path | None:
    """Generate an image from a prompt and save it to the output directory."""
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        print("Error: google-genai not installed. Run: pip install google-genai")
        sys.exit(1)

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set. Add it to .env or export it.")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    # Build the generation config based on the model
    if model == MODEL_PRO:
        config = types.GenerateContentConfig(
            image_config=types.ImageConfig(
                aspect_ratio=prompt_data["aspect_ratio"],
                image_size="4K",
            ),
            response_modalities=["IMAGE", "TEXT"],
        )
    else:
        config = types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_level="HIGH"),
            image_config=types.ImageConfig(
                aspect_ratio=prompt_data["aspect_ratio"],
                image_size="2K",
            ),
            response_modalities=["IMAGE", "TEXT"],
        )

    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=prompt_data["prompt"])],
        ),
    ]

    print(f"  Generating with {model}...")
    print(f"  Aspect ratio: {prompt_data['aspect_ratio'] or 'default'}")

    for attempt in range(MAX_RETRIES):
        try:
            saved_path = None
            for chunk in client.models.generate_content_stream(
                model=model,
                contents=contents,
                config=config,
            ):
                if chunk.parts is None:
                    continue

                part = chunk.parts[0]
                if part.inline_data and part.inline_data.data:
                    ext = mimetypes.guess_extension(part.inline_data.mime_type) or ".jpeg"
                    if ext in (".jpe", ".jpg"):
                        ext = ".jpeg"

                    filename = f"{prompt_data['base_name']}{ext}"
                    filepath = OUTPUT_DIR / filename
                    filepath.write_bytes(part.inline_data.data)

                    size_kb = len(part.inline_data.data) / 1024
                    saved_path = filepath
                    print(f"  Saved: {filepath.relative_to(REPO_ROOT)} ({size_kb:.0f}KB)")
                elif hasattr(part, "text") and part.text:
                    print(f"  Model note: {part.text[:200]}")

            return saved_path

        except Exception as e:
            error_str = str(e).lower()
            is_rate_limit = "429" in error_str or "rate" in error_str or "quota" in error_str or "resource_exhausted" in error_str
            is_server_error = "500" in error_str or "503" in error_str or "unavailable" in error_str

            if (is_rate_limit or is_server_error) and attempt < MAX_RETRIES - 1:
                wait = INITIAL_BACKOFF_SECONDS * (2 ** attempt)
                print(f"  Rate limited / server error. Retrying in {wait}s (attempt {attempt + 1}/{MAX_RETRIES})...")
                time.sleep(wait)
            else:
                print(f"  Error: {e}")
                if attempt < MAX_RETRIES - 1:
                    wait = INITIAL_BACKOFF_SECONDS * (2 ** attempt)
                    print(f"  Retrying in {wait}s (attempt {attempt + 1}/{MAX_RETRIES})...")
                    time.sleep(wait)
                else:
                    print(f"  Failed after {MAX_RETRIES} attempts.")
                    return None

    return None


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    load_dotenv()

    parser = argparse.ArgumentParser(
        description="Generate images for the Ambr AI website from IMAGE-PROMPTS.md"
    )
    parser.add_argument(
        "--prompt",
        type=int,
        nargs="+",
        help="Prompt number(s) to generate (e.g. --prompt 4 or --prompt 4 5 6)",
    )
    parser.add_argument(
        "--all-missing",
        action="store_true",
        help="Generate all prompts that don't have an existing image",
    )
    parser.add_argument(
        "--pro",
        action="store_true",
        help="Use the pro model (gemini-3-pro, slower but higher quality 4K)",
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="List all prompts and their status",
    )
    args = parser.parse_args()

    prompts = parse_prompts()
    if not prompts:
        print(f"No prompts found in {PROMPTS_FILE}")
        sys.exit(1)

    model = MODEL_PRO if args.pro else MODEL_FLASH

    # Default to listing if no action specified
    if not args.prompt and not args.all_missing:
        args.list = True

    if args.list:
        print(f"\n{'#':>3}  {'Status':>8}  {'Ratio':>5}  Filename")
        print(f"{'─' * 3}  {'─' * 8}  {'─' * 5}  {'─' * 40}")
        for p in prompts:
            status = "✓ done" if p["exists"] else "  ·"
            ratio = p["aspect_ratio"] or "—"
            print(f"{p['number']:>3}  {status:>8}  {ratio:>5}  {p['base_name']}")
        print(f"\n{len(prompts)} prompts total, {sum(1 for p in prompts if p['exists'])} generated")
        print(f"\nTo generate: python scripts/generate-images.py --prompt <number>")
        print(f"           : python scripts/generate-images.py --all-missing")
        print(f"Add --pro for higher quality (4K, slower)")
        return

    # Determine which prompts to generate
    if args.all_missing:
        to_generate = [p for p in prompts if not p["exists"]]
        if not to_generate:
            print("All images already exist. Nothing to generate.")
            return
        print(f"Generating {len(to_generate)} missing images with {model}...\n")
    else:
        to_generate = []
        for num in args.prompt:
            matches = [p for p in prompts if p["number"] == num]
            if not matches:
                print(f"Warning: prompt #{num} not found, skipping")
            else:
                to_generate.append(matches[0])

    # Generate
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for i, p in enumerate(to_generate):
        print(f"\n[{i + 1}/{len(to_generate)}] #{p['number']} — {p['base_name']}")
        if p["exists"] and not args.all_missing:
            print(f"  Image already exists. Regenerating (will overwrite)...")
        result = generate_image(p, model)
        if result:
            print(f"  Done.")
        else:
            print(f"  Warning: no image data received from API.")

    print(f"\nFinished. {len(to_generate)} image(s) processed.")


if __name__ == "__main__":
    main()
