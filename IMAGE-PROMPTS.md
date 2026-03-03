# Image Generation Prompts

All images go in `/public/images/photography/`. Generate at high resolution (at least 2400px on the long edge). Filenames use kebab-case describing scene and page context (e.g. `hero-quiet-reflection.jpeg`, `manager-one-to-one.jpeg`).

---

## Prompt Writing Guide

Use this guide when writing new image prompts for the Ambr AI site. The goal is photography that feels human, analog, and imperfect — the opposite of AI-generated stock imagery.

### The core principle

Every image should feel like it was taken by someone who happened to be in the room with a film camera, not a photographer directing a scene. The viewer should think "who took this?" not "this was made for a website."

### What to include in every prompt

**1. Foreground obstruction.** Shoot *through* something — plant leaves, a glass partition, a door frame, a water glass on a desk, someone's shoulder. This creates depth and the feeling that the camera is an observer, not the subject's focus. The obstruction should be out of focus and partially block the frame.

**2. Slightly missed focus.** The focus should land near but not perfectly on the subject's eyes. On the tip of the nose instead of the iris. On the gesturing hand instead of the face. On the glass surface instead of the people behind it. This is how real film photography works when shooting wide open — and it reads as authenticity, not error.

**3. Environmental clutter at frame edges.** Real rooms have stuff. A desk lamp arm intruding from the right. A chair back at the bottom edge. A bag strap. A coat draped over something. A phone face-down on a table. These details should feel unintentional — the photographer didn't tidy the scene.

**4. Uncorrected colour balance.** Specify mixed lighting and say the white balance is uncorrected. Window light pushes warm amber. Overhead fluorescents add a cool undertone. Skin tones should be golden, not neutral. Shadows should be slightly cool. Highlights should bloom warm. This is what film actually does under real office lighting.

**5. Film stock and lens.** Always specify a real film stock (Fuji Pro 400H, Kodak Portra 160/400, Kodak Gold 200) and a real lens (35mm, 50mm, 85mm, 105mm) at a wide aperture (f/1.8–f/4). Mention visible film grain, matte contrast, low contrast. Vary the film stock between prompts for natural variation.

**6. Accidental composition.** The framing should feel slightly off — a degree or two of tilt, subjects not perfectly centred, someone cut at the frame edge. Describe it as "the photographer glanced through the door" or "took one frame before she looked up" or "the photographer is an observer, not a director."

### What NOT to do

- **Never describe a perfectly composed scene.** No centred subjects, no symmetrical framing, no "the subject is positioned in the left third of the frame" (unless something is blocking the right third).
- **Never ask for clean white balance.** No "natural colours" or "accurate skin tones." Always uncorrected, always warm-shifted.
- **Never describe a tidy environment.** No empty desks, no clean backgrounds, no "minimal setting." Real workplaces have stuff.
- **Never use the word "professional" to describe the photography style.** The photography is intentionally un-professional. It's documentary, candid, accidental.
- **Never ask for sharp focus across the frame.** Always wide aperture, always some softness, always a specific focus point that isn't the obvious one.
- **Never ask for dramatic film artefacts.** No heavy light leaks, no extreme vignetting, no cross-processing. The film feel should be subtle — grain, colour cast, halation on highlights — not Instagram-filter obvious.
- **Never include avatars, screens, UI, or product imagery.** The AI product should be invisible in all photography. People are the subject.
- **Never use dark, neon, high-contrast, or sci-fi aesthetics.** The palette is always warm: cream, amber, golden, honeyed wood, muted earth tones.

### Prompt structure template

```
A candid lomography-style photograph [shot through / from behind / over the shoulder of] [foreground element]. [Scene description — who, where, what they're doing]. [Environmental detail — objects, clutter, lived-in quality]. [Lighting — window light, mixed sources, uncorrected]. Shot on [film stock] with a [focal length] lens at [wide aperture]. [Colour description — uncorrected white balance, warm cast, specific tone shifts]. Visible film grain. [Contrast — low, matte]. [Composition description — accidental framing, slight tilt, intrusions at edges]. [Mood — one sentence]. [Aspect ratio]. No text, no logos[, no screens].
```

### Aspect ratios by use

- **16:9** — hero images, editorial landscape breaks
- **3:2** — statement/split content images, general use
- **4:5** — portrait orientation, testimonial headshots

---

## Homepage Images

### 1. `hero-quiet-reflection.png` (done — regenerate with updated prompt if desired)

A candid lomography-style photograph shot through the leaves of an indoor plant in the foreground, partially obstructing the left edge of the frame with soft green bokeh. Beyond the plant, a woman sits at a desk near a large window, headphones resting on the desk beside her, one hand on her chin in quiet reflection. The focus is slightly soft on her face — not blurry, but the kind of gentle miss that happens when shooting wide open on film. The window floods the scene with warm amber light that blooms slightly in the upper-right corner, a natural halation from the backlight. The desk has lived-in detail: a glass of water, a pen, a notebook at an angle. A desk lamp arm intrudes into the right edge of the frame, uncropped. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. The white balance is uncorrected — warm amber cast from the window mixes with slightly cooler overhead light, giving skin tones a golden-green complexity. Visible film grain. Contrast is low and matte. The composition feels accidental, like the photographer was standing in the doorway and took one frame before she looked up. 16:9 aspect ratio. No text, no logos, no screens visible.

---

### 2. `statement-team-conversation.png` (done — regenerate with updated prompt if desired)

A candid lomography-style photograph shot from behind a glass partition or open doorframe, the edge of the door visible as a dark vertical stripe on the far left of the frame. Through the glass, two colleagues sit at a small round table in a cafe or breakout area, mid-conversation. One is gesturing, the other holds a coffee cup. The glass introduces a faint reflection — a ghost of an overhead light, a subtle double-exposure feel. The focus sits on the glass surface, leaving the two people in gentle soft focus behind it. The colour cast is warm and uncorrected: amber from the window behind them, the wooden table glowing honey, their clothing slightly desaturated by the mixed light. The table has a notebook, a pen, a phone face-down — small signs of real life. A chair back or bag strap is visible at the bottom edge of the frame, unintentionally in shot. Shot on Kodak Portra 160 film with a 50mm lens at f/2.4. Low contrast, matte finish, fine grain. The mood is eavesdropping on a genuine moment — the photographer is an observer, not a director. 3:2 aspect ratio. No text, no logos.

---

### 3. `testimonial-woman-smiling.png` (done — regenerate with updated prompt if desired)

A candid lomography-style close-up portrait of a woman mid-laugh, shot through the edge of a glass meeting room wall so a faint vertical reflection bisects the right third of the frame. She is looking slightly off-camera to the left as if responding to someone just out of frame. Her expression is open and unguarded — crinkled eyes, a natural smile that hasn't been asked for. She is in a simple dark top, minimal jewellery. The background is a soft blur of warm neutral tones — an out-of-focus office rendered as abstract shapes of cream and pale wood. The focus is slightly forward of her eyes, landing on the tip of her nose — the kind of near-miss that makes film portraits feel alive. A blurred shoulder or arm belonging to the person she's talking to intrudes at the bottom-left edge. Shot on Fuji Pro 400H film with a 105mm lens at f/1.8. Uncorrected white balance — warm amber from a window behind her mixes with cooler fluorescent overhead, giving the highlights a golden bloom and the shadows a faintly cool undertone. Visible film grain. The composition is tight but imperfect: her face fills the centre-right with breathing room on the left where her gaze directs, but the framing feels slightly hurried. 4:5 aspect ratio (portrait orientation). No text, no logos.

---

### 4. `editorial-hands-detail.jpg`

A candid lomography-inspired close-up photograph shot at a slight angle through the gap between a laptop screen and a coffee cup, both of which create soft, dark, out-of-focus shapes framing the top and left edges. The subject is a person's hands on a wooden table surface during a conversation — one hand mid-gesture with fingers slightly spread, the other resting on an open notebook with faintly visible handwritten notes. A pen sits beside the notebook, a phone face-down nearby. The hands are lit by warm sidelight from a nearby window, but the colour balance is uncorrected — the window light pushes warm amber while the notebook pages pick up a faintly cool reflection from a screen somewhere off-frame. The table surface shows character: coffee ring marks, wood grain, a crumb. The focus lands on the gesturing hand, with the notebook and far edge of the table falling into gentle softness. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Visible film grain. Matte contrast. The composition fills the frame with the table surface but the framing feels grabbed — slightly off-centre, the laptop edge intruding, not tidied up. 16:9 aspect ratio. No legible text on the notebook, no logos, no screens.

---

### 5. `editorial-light-window.jpg`

A lomography-style photograph of warm morning light falling through a large frosted or lightly curtained window onto a plain cream-coloured wall and the corner of a wooden surface — a desk or table edge visible in the lower portion of the frame. A plant leaf intrudes softly from the upper-left corner of the frame, slightly out of focus. The light creates soft, diffused geometric shapes on the wall: elongated rectangles of warm golden light with very gentle shadow edges. A single ceramic cup (white or cream) sits on the wooden surface in the lower-right corner, catching the light on its rim. Beside the cup, a pen and a folded newspaper or notebook — small traces of a person who just left the frame. The colour balance is uncorrected — the window light pushes everything warm amber, the shadowed wall taking on a faintly cool cream-lavender. Shot on Kodak Portra 400 film with a 35mm lens at f/5.6. Fine grain, low contrast, matte finish. The framing includes a slight tilt — not dramatic, just a degree or two off level, as if the camera was set down on a surface. 3:2 aspect ratio. No text, no logos.

---

## Inner Page Images

### 6. `feedback-taking-notes.jpg`

A candid lomography-style photograph shot from across a desk, through the soft blur of a water glass in the foreground which distorts the lower-left corner of the frame. Beyond it, a person sits writing in a notebook with a pen, head slightly bowed in concentration, a pair of headphones set aside on the desk. The expression is thoughtful — post-session reflection. The desk has lived-in clutter: a coffee cup, the headphones, scattered papers. A window behind them creates warm backlight with slight halation blooming around their hair and shoulders. The focus is gentle on their face — sharp on the writing hand and notebook. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Uncorrected warm colour cast, visible grain, matte contrast. A chair arm or shelf edge intrudes at the right margin. The mood is private and unhurried. 3:2 aspect ratio. No text, no logos, no screens.

---

### 7. `practice-phone-booth.jpg`

A candid lomography-style photograph shot from outside looking in through the glass of a phone booth or small meeting pod, the glass edge and its frame creating a dark border on the left side. Inside, a person stands or leans, speaking aloud — mouth slightly open mid-sentence, one hand gesturing subtly. They're alone, practicing. The glass introduces a faint reflection of the office behind the photographer — ghost shapes of a corridor or passing person. The interior of the booth is lit by warm overhead light; the exterior reflection is cooler. Focus sits on the glass surface, leaving the person in gentle softness. Shot on Fuji Pro 400H film with a 35mm lens at f/2.8. Uncorrected mixed lighting gives the image a warm-amber interior against a cooler reflected exterior. Visible grain, low contrast. The mood is intimate voyeurism — catching someone in their most private professional moment. 16:9 aspect ratio. No text, no logos.

---

### 8. `manager-one-to-one.jpg`

A candid lomography-style photograph of two people in a one-to-one meeting, shot through the gap of a partially open office door. The door frame creates a strong dark vertical on the right edge, and the gap reveals the two people seated across a small table — one leaning forward with hands clasped, the other leaning back, listening. The focus lands on the door hinge or frame edge in the foreground, leaving the two figures in soft focus behind — recognisable but not sharp. On the table: two water glasses, a notebook, a pen. The room has warm natural light from a window to the side. Shot on Kodak Portra 160 film with an 85mm lens at f/2. Uncorrected colour — warm amber on the lit side, slightly cool shadow on the door frame. Visible grain. The composition feels like the photographer glanced through the door without stopping. 3:2 aspect ratio. No text, no logos, no screens.

---

### 9. `sales-handshake-moment.jpg`

A candid lomography-style photograph of two people at a table, the moment just after a handshake — hands still close together, beginning to separate. Shot from a low angle with the edge of the table visible at the bottom of the frame and a blurred coffee cup in the near foreground. The focus is on the hands and lower arms, with faces above in soft focus but expressions visible — confident, relieved, warm. Documents or a laptop sit between them on the table, slightly out of focus. Warm sidelight from a window. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. The colour balance is uncorrected — amber window light, slightly cool from overhead fluorescents. Visible grain, matte finish. A coat draped over a nearby chair intrudes at the frame edge. 16:9 aspect ratio. No text, no logos.

---

### 10. `customer-service-headset.jpg`

A candid lomography-style photograph of a person on a headset at their desk, shot through the blurred leaves of a desk plant in the foreground which creates a soft green veil across the bottom-left quadrant. The person is mid-sentence, slightly smiling — not a customer service stock photo, but a real moment of engagement. Their desk has lived-in detail: a mug, sticky notes on the monitor edge, a pen. The monitor is facing away from camera so no screen is visible. Warm natural light from a window competes with cooler monitor glow on their face, creating mixed colour temperature. Focus is slightly soft — landing on the headset microphone rather than the eyes. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Visible grain, uncorrected white balance, matte contrast. A colleague's elbow or a partition edge intrudes at the right margin. 4:5 aspect ratio. No text, no logos.

---

### 11. `team-workshop.jpg`

A candid lomography-style photograph of a small group (3-4 people) around a whiteboard covered in handwritten diagrams and sticky notes, shot from behind one person's shoulder so their back and shoulder fill the left third of the frame. Through the gap, the others are visible mid-discussion — one pointing at the board, another with arms crossed, listening. The whiteboard content is organic and messy: multiple marker colours, crossed-out sections, sticky notes at angles. The focus sits on the shoulder and nearest whiteboard content, with the standing figures in gentle softness. A desk lamp or plant intrudes at the top edge. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Warm overall cast — the whiteboard markers shift toward muted tones, the ambient light pushes soft amber-yellow. Visible grain. The composition is documentary — caught in the middle of real work. 16:9 aspect ratio. No legible text on the whiteboard, no logos, no screens.
