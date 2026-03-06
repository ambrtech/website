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
- **Never add a border, vignette, or polaroid-style frame.** The image must bleed fully to all four edges. No dark corners, no light edges, no decorative treatment of any kind at the frame boundary. End every prompt with: "The image bleeds to all four edges — no border, no vignette, no frame."
- **Never default to pub, café, or bookshop environments** when an office setting is intended. The model interprets "warm wooden breakout area" as a pub. Always specify: "modern," "contemporary," "glass-fronted," "Scandinavian-influenced," or similar — even if the environment is also informal.
- **Never make every subject white.** Enterprise workplaces are diverse. Every prompt must specify the person's approximate ethnicity, age, and gender. Actively vary these across prompts — South Asian, Black, East Asian, Middle Eastern, mixed heritage, white (various ages), and combinations. If you don't specify, the model defaults to white.
- **Never describe a scruffy or run-down environment as "lived-in."** Lived-in means character — a coffee ring, a coat over a chair, scattered papers. It does not mean peeling paint, tired noticeboards, or 1990s government-office aesthetics. The physical environment must feel modern and well-maintained.

### Prompt structure template

```
A candid lomography-style photograph [shot through / from behind / over the shoulder of] [foreground element]. [Scene description — who, where, what they're doing]. [Environmental detail — objects, clutter, lived-in quality]. [Lighting — window light, mixed sources, uncorrected]. Shot on [film stock] with a [focal length] lens at [wide aperture]. [Colour description — uncorrected white balance, warm cast, specific tone shifts]. Visible film grain. [Contrast — low, matte]. [Composition description — accidental framing, slight tilt, intrusions at edges]. [Mood — one sentence]. [Aspect ratio]. No text, no logos[, no screens].
```

### Aspect ratios by use

- **16:9** — hero images, editorial landscape breaks
- **3:2** — statement/split content images, general use
- **4:5** — portrait orientation, testimonial headshots

---

## Image Library

### 1. `hero-quiet-reflection.jpg`

A candid lomography-style photograph shot through the leaves of an indoor plant in the foreground, partially obstructing the left edge of the frame with soft green bokeh. Beyond the plant, a woman sits at a desk near a large window, headphones resting on the desk beside her, one hand on her chin in quiet reflection. The focus is slightly soft on her face — not blurry, but the kind of gentle miss that happens when shooting wide open on film. The window floods the scene with warm amber light that blooms slightly in the upper-right corner, a natural halation from the backlight. The desk has lived-in detail: a glass of water, a pen, a notebook at an angle. A desk lamp arm intrudes into the right edge of the frame, uncropped. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. The white balance is uncorrected — warm amber cast from the window mixes with slightly cooler overhead light, giving skin tones a golden-green complexity. Visible film grain. Contrast is low and matte. The composition feels accidental, like the photographer was standing in the doorway and took one frame before she looked up. 16:9 aspect ratio. No text, no logos, no screens visible.

---

### 2. `statement-team-conversation.jpg`

A candid lomography-style photograph shot from behind a glass partition or open doorframe, the edge of the door visible as a dark vertical stripe on the far left of the frame. Through the glass, two colleagues sit at a small round table in a cafe or breakout area, mid-conversation. One is gesturing, the other holds a coffee cup. The glass introduces a faint reflection — a ghost of an overhead light, a subtle double-exposure feel. The focus sits on the glass surface, leaving the two people in gentle soft focus behind it. The colour cast is warm and uncorrected: amber from the window behind them, the wooden table glowing honey, their clothing slightly desaturated by the mixed light. The table has a notebook, a pen, a phone face-down — small signs of real life. A chair back or bag strap is visible at the bottom edge of the frame, unintentionally in shot. Shot on Kodak Portra 160 film with a 50mm lens at f/2.4. Low contrast, matte finish, fine grain. The mood is eavesdropping on a genuine moment — the photographer is an observer, not a director. 3:2 aspect ratio. No text, no logos.

---

### 3. `testimonial-woman-smiling.jpg`

A candid lomography-style close-up portrait of a woman mid-laugh, shot through the edge of a glass meeting room wall so a faint vertical reflection bisects the right third of the frame. She is looking slightly off-camera to the left as if responding to someone just out of frame. Her expression is open and unguarded — crinkled eyes, a natural smile that hasn't been asked for. She is in a simple dark top, minimal jewellery. The background is a soft blur of warm neutral tones — an out-of-focus office rendered as abstract shapes of cream and pale wood. The focus is slightly forward of her eyes, landing on the tip of her nose — the kind of near-miss that makes film portraits feel alive. A blurred shoulder or arm belonging to the person she's talking to intrudes at the bottom-left edge. Shot on Fuji Pro 400H film with a 105mm lens at f/1.8. Uncorrected white balance — warm amber from a window behind her mixes with cooler fluorescent overhead, giving the highlights a golden bloom and the shadows a faintly cool undertone. Visible film grain. The composition is tight but imperfect: her face fills the centre-right with breathing room on the left where her gaze directs, but the framing feels slightly hurried. 4:5 aspect ratio. No text, no logos.

---

### 4. `editorial-hands-detail.jpg`

A candid lomography-inspired close-up photograph shot at a slight angle through the gap between a laptop screen and a coffee cup, both of which create soft, dark, out-of-focus shapes framing the top and left edges. The subject is a person's hands on a wooden table surface during a conversation — one hand mid-gesture with fingers slightly spread, the other resting on an open notebook with faintly visible handwritten notes. A pen sits beside the notebook, a phone face-down nearby. The hands are lit by warm sidelight from a nearby window, but the colour balance is uncorrected — the window light pushes warm amber while the notebook pages pick up a faintly cool reflection from a screen somewhere off-frame. The table surface shows character: coffee ring marks, wood grain, a crumb. The focus lands on the gesturing hand, with the notebook and far edge of the table falling into gentle softness. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Visible film grain. Matte contrast. The composition fills the frame with the table surface but the framing feels grabbed — slightly off-centre, the laptop edge intruding, not tidied up. 16:9 aspect ratio. No legible text on the notebook, no logos, no screens.

---

### 5. `editorial-light-window.jpg`

A lomography-style photograph of warm morning light falling through a large frosted or lightly curtained window onto a plain cream-coloured wall and the corner of a wooden surface — a desk or table edge visible in the lower portion of the frame. A plant leaf intrudes softly from the upper-left corner of the frame, slightly out of focus. The light creates soft, diffused geometric shapes on the wall: elongated rectangles of warm golden light with very gentle shadow edges. A single ceramic cup (white or cream) sits on the wooden surface in the lower-right corner, catching the light on its rim. Beside the cup, a pen and a folded newspaper or notebook — small traces of a person who just left the frame. The colour balance is uncorrected — the window light pushes everything warm amber, the shadowed wall taking on a faintly cool cream-lavender. Shot on Kodak Portra 400 film with a 35mm lens at f/5.6. Fine grain, low contrast, matte finish. The framing includes a slight tilt — not dramatic, just a degree or two off level, as if the camera was set down on a surface. 3:2 aspect ratio. No text, no logos.

---

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

---

### 12. `man-portrait-candid.jpg`

A candid lomography-style close-up portrait of a man mid-sentence, caught in a moment of making a point rather than performing for the camera. He is looking just past the lens — addressing someone off to the right — so his eyes are engaged but not meeting the viewer's. An expression of quiet confidence, not a posed smile. He wears a collared shirt, open at the neck. Shot through the faint edge of a glass partition, its vertical line creating a barely-there ghosting across the left quarter of the frame. The background dissolves into warm shapes — out-of-focus wood tones and cream walls. Focus lands slightly forward of the eyes, on his cheekbone — the kind of near-miss that makes film portraits feel alive. A shoulder or arm of the person he's speaking to intrudes at the lower-right edge. Shot on Kodak Portra 400 film with a 105mm lens at f/2. Uncorrected white balance — warm amber from a window behind him, faintly cooler overhead light creating gentle contrast on his near and far cheek. Visible film grain. Low contrast, matte finish. The framing has a slight tilt, as if the camera was raised quickly to catch the moment. 4:5 aspect ratio. No text, no logos.

---

### 13. `post-practice-exhale.jpg`

A candid lomography-style photograph shot from slightly to the side and behind, over the subject's shoulder. A person sits at a desk with headphones being lifted from their ears with one hand — caught mid-removal, the headphone cable dangling. Their eyes are briefly closed, chin slightly lowered, as if exhaling after effort. It's the universal gesture of finishing something. The desk in front of them has a notebook, a pen, a water glass with condensation. Warm late-afternoon light comes through a window to their left, spilling across the desk surface and catching the condensation ring on the glass. The photographer's position — behind and beside — gives it a documentarian intimacy. A jacket thrown over the back of the chair intrudes at the left edge, partially in frame. Focus sits on the headphone being lifted, with the face slightly soft above. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Uncorrected warm colour cast with amber highlights and subtly cool shadows. Visible film grain. Low contrast, matte. Slightly off-level framing. 3:2 aspect ratio. No text, no logos, no screens.

---

### 14. `listening-close-portrait.jpg`

A candid lomography-style portrait of a person in the act of listening — genuinely, carefully. Their gaze is directed slightly down and to the side, not unfocused but intent, the way people look when they're actually processing what they're hearing rather than waiting to respond. A small nod frozen in motion. One hand rests near their chin, not posed — the involuntary gesture of concentration. Shot from a three-quarter angle, with the soft blurred presence of the person speaking visible as an abstract warm shape at the left edge of the frame. The background: a warm blur of an office or meeting room, unidentifiable. The focus lands on the listening person's near ear and jaw, with the eyes fractionally softer. Shot on Kodak Portra 160 film with an 85mm lens at f/1.8. Warm amber light from a window out of frame to the right; slightly cooler indirect light on the shadow side. Uncorrected white balance. Visible film grain. Low contrast. The framing is slightly tight — the top of the head clips the frame edge, giving it a grabbed quality. 4:5 aspect ratio. No text, no logos.

---

### 15. `desk-morning-still.jpg`

A lomography-style still-life photograph of a desk surface in the early morning — no person in frame, but their presence everywhere. A ceramic mug with steam barely visible. A notebook open to a blank or lightly marked page. A pen uncapped, resting diagonally across the notebook. Headphones coiled beside the mug. A folded cardigan draped over the back of the chair, just visible at the frame edge. The scene is lit entirely by soft morning window light — warm amber raking across the desk surface at a low angle, catching the lip of the mug and the spiral binding of the notebook. The background is soft focus: a blurred window, perhaps a plant. Shot through the legs of the chair in the foreground, creating a dark frame of wood at the bottom of the image. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Uncorrected warm white balance — everything amber and golden, shadows cool but subtle. Visible film grain. Low contrast, matte. The framing is slightly tilted, as if the photographer crouched quickly and didn't level the shot. 3:2 aspect ratio. No text, no logos, no screens.

---

### 16. `facilitator-observing.jpg`

A candid lomography-style photograph of a person standing slightly apart from a small group activity, arms loosely folded, watching. They are the observer in the room — a facilitator, a manager, an L&D professional mid-session. Shot from across the room through the gap between two seated participants in the foreground, their heads and shoulders creating a soft dark frame on either side of the image. The standing figure is in the middle-distance, caught in a moment of quiet attention — not directing, just watching. The group activity is visible but incidental: hands around a table, papers, the edge of a whiteboard. Warm overhead light. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Focus sits on one of the foreground participants' shoulders, leaving the standing figure in gentle softness — present but not sharp. Uncorrected warm colour cast, visible grain, matte contrast. The framing has the feel of documentary photography — the photographer in the corner of the room, invisible. 16:9 aspect ratio. No text, no logos, no screens.

---

### 17. `corridor-between.jpg`

A candid lomography-style photograph of a person walking away down an office corridor — shot from behind at a slight distance, so the figure is mid-frame and in motion, slightly blurred from the movement. They carry a notebook under one arm. The corridor has the texture of a real workplace: a notice board partially visible on the wall, a trolley or plant near one side, the ceiling lights creating a gentle recession. Light comes from the end of the corridor — a window or glass door — creating a warm bloom at the far end that silhouettes the figure slightly. The foreground has a door frame or wall corner creating a dark vertical edge on the right. Shot on Kodak Portra 400 film with a 35mm lens at f/2.8. The motion blur on the figure is subtle — not extreme, just the natural result of a 1/60s shutter in mixed light. Uncorrected warm-amber cast; the end-of-corridor light pushes toward blown highlights. Visible grain, low contrast. The framing is slightly off-centre, the subject not in the middle. 16:9 aspect ratio. No text, no logos.

---

### 18. `small-group-debrief.jpg`

A candid lomography-style photograph of three people in a small-group debrief — seated informally, two on one side of a low table, one across. One person is talking with some energy; the others are listening, one leaning forward, elbows on knees. The body language is engaged but relaxed — not formal. On the table: coffee cups, a notebook, a phone face-down. The setting feels like a breakout space or informal meeting area — soft seating, warm tones, a window behind. Shot from outside the group looking in through the gap left by an empty chair in the foreground, the chair back creating a dark curve at the bottom-left of the frame. The focus lands on the chair back, leaving the three figures in soft focus but readable. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Warm ambient light, uncorrected white balance — golden on the lit side, slightly cool in shadow. Visible grain, matte contrast. Slightly tilted framing. 3:2 aspect ratio. No text, no logos, no screens.

---

### 19. `presentation-room-side.jpg`

A candid lomography-style photograph of someone mid-presentation to a small room, captured from the side — the photographer standing near the back wall at a perpendicular angle to the presenter. The presenter is visible in profile, hand raised in a gesture, mid-point. The audience occupies the left portion of the frame — the backs of three or four heads, slightly out of focus, creating an implicit frame and giving scale to the room. A screen is behind the presenter but faces away from camera — only its glow is visible on the presenter's face and the nearest audience member's ear. The room has the warmth of a smaller meeting room: a projector cable on the floor, coats over chairs, a half-drunk glass of water on the table. Shot on Kodak Gold 200 film with a 35mm lens at f/3.5. Mixed light — the projector glow adds a cooler note against the warm room lighting, creating a complex mixed colour cast. Uncorrected. Visible grain. Low contrast. The framing is grabbed — the photographer's position is compromised by the room, leading to partial obstruction from an audience member's shoulder at the right edge. 16:9 aspect ratio. No text, no logos, no legible screen content.

---

### 20. `window-reflection-portrait.jpg`

A candid lomography-style portrait of a person standing near a large office window, looking out — not at the camera. Shot from inside the room, the window frame creating a strong vertical on one side. The person's face is partially lit by the window light on the near side, the far side in warm shadow. Their expression is composed and still — thinking, not posing. Their reflection is faintly visible in the glass, slightly displaced from their face, creating a subtle doubling. The city or exterior beyond the window is completely blown out — just white light. The focus sits on the window glass surface, leaving the person in gentle soft focus — present but private. A plant near the window intrudes from below at the frame edge. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Uncorrected white balance — the window light is cold white-blue against the warm amber interior light hitting the person from behind. Skin tones are complex: cool on the lit side, amber on the shadow side. Visible grain. Low contrast, matte. The framing clips their head slightly at the top. 4:5 aspect ratio. No text, no logos.

---

### 21. `learner-at-laptop-side.jpg`

A candid lomography-style photograph shot from slightly behind and to the side, through the gap between two chairs in the foreground, their wooden backs creating an out-of-focus frame at the edges. A person sits at a café or informal breakout table with a laptop open in front of them, head slightly tilted, listening or concentrating — absorbed in something, not working. One hand rests on the table, the other holds the edge of the laptop lid. A takeaway coffee cup sits near them, a bag on the chair beside them. Warm ambient light from a large window to the left, spilling across the table in a soft rectangle. The laptop faces away from camera so no screen is visible. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Uncorrected warm colour cast — amber from the window, slightly greenish-cool overhead. Visible film grain. Low contrast, matte. The framing is slightly low, slightly tilted, as if the photographer sat down at a nearby table and raised the camera. 3:2 aspect ratio. No text, no logos, no screens.

---

### 22. `hallway-two-women.jpg`

A candid lomography-style photograph of two women mid-conversation in an office corridor, caught between one laughing and the other making a point with an animated expression. Shot from a distance down the hallway, with a door frame creating a dark vertical border on one side and the corridor wall receding behind them. They are not posed — one has her arms slightly raised in emphasis, the other is tilting slightly back in laughter. Their coats or bags are somewhere — one has hers slung over a shoulder. The corridor has texture: a notice board on the wall, ceiling tiles, a fire door partially visible. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm overhead fluorescent light mixed with daylight from a window at the far end — uncorrected colour balance, cool-green in the corridor, warm amber where the daylight reaches. Visible grain, low contrast. The composition feels stolen — the photographer caught them from a distance before they noticed. 3:2 aspect ratio. No text, no logos.

---

### 23. `coffee-pause-hands.jpg`

A candid lomography-inspired close-up shot of a pair of hands wrapped around a ceramic coffee cup at a café or office table. The hands are relaxed, not performative — a pause mid-conversation. A second pair of hands is partially visible at the edge of the frame, blurred, belonging to whoever is across the table. The table surface has the signs of a real conversation: a pen, a small notebook with something written on one page, a phone face-down, a coffee ring from an earlier cup. Sidelight from a window rakes warmly across the table and the cup's rim. The focus lands on the cup and the near hand, with the table edge and far hands falling soft. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Uncorrected white balance — warm amber from the window, cool in the shadows under the table. Visible grain, matte finish. The frame is filled with the table surface, slightly tilted, the photographer's own elbow almost intruding at the bottom. 3:2 aspect ratio. No text, no logos, no legible writing.

---

### 24. `staircase-ascending.jpg`

A candid lomography-style photograph shot from below a staircase, looking up through the geometric gaps of the banisters or open steps. A person ascends the stairs mid-step — one foot raised, their hand trailing the handrail. They are in motion but not blurred — the shutter caught them between steps. Shot through the diagonal of the stair structure which creates a strong angular frame across the lower portion of the image. The person is slightly above centre, visible between the stair rails. Natural light floods from above — a skylight or window at the top of the stairwell — creating a warm bloom at the frame's upper edge and leaving the structural elements in partial shadow. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Uncorrected white balance — the top-light pushes warm amber on the ascending figure, cool concrete shadow on the stair structure. Visible grain. Low contrast. The framing is grabbed — the photographer is crouching, the composition is aggressive and angled. 16:9 aspect ratio. No text, no logos.

---

### 25. `woman-presenting-side.jpg`

A candid lomography-style photograph of a woman presenting to a small group, shot from a side angle so she is in profile against the room. Her hand is raised mid-gesture, mouth slightly open — she's mid-point. The group she's presenting to occupies the near-left of the frame as soft-focus shapes: the back of a head, a shoulder, a hand on a notebook. Behind her, a flipchart or whiteboard is partially visible but out of focus. The room has the warmth of a smaller meeting space — wooden table, natural light from a side window. Focus sits on her gesturing hand, face slightly softer above. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm mixed light — window to her right, slightly cooler overhead on the audience side. Uncorrected white balance. Visible grain, matte contrast. A chair back and someone's jacket intrude at the right frame edge. The framing is accidental — the photographer is seated in the group, camera barely raised. 16:9 aspect ratio. No text, no logos, no legible content on the board.

---

### 26. `reading-alone-absorbed.jpg`

A candid lomography-style photograph of a person alone at a desk, reading a single printed sheet of paper — holding it in both hands, slightly raised, head slightly tilted as they read. Their expression is focused and private. A pen sits on the desk beside them, uncapped. The desk has evidence of work in progress: a notebook open to a page with writing, a coffee cup, a highlighter. Warm window light comes from behind and to the side, creating backlight that edges their hair and the paper they're holding. The focus lands on the paper in their hands, with the face slightly softer above it. Shot through the soft blur of a nearby plant or partition at the frame edge. Shot on Kodak Portra 400 film with an 85mm lens at f/2. Uncorrected warm colour cast, visible grain, low contrast. A bag strap or coat intrudes at the frame's lower-left corner. 4:5 aspect ratio. No legible text on the paper, no logos.

---

### 27. `office-kitchen-informal.jpg`

A candid lomography-style photograph of two people in an office kitchen or break area, caught in an informal conversation — one is leaning against the counter with a mug, the other standing nearby, both mid-laugh or mid-story. Not a posed scene: one of them is in the middle of putting the kettle on, the other is just passing through and got drawn into a conversation. The kitchen has real texture: a noticeboard with papers pinned to it, a fruit bowl, mugs on a drying rack, someone's lunch in a paper bag. Warm overhead light competes with cool daylight from a small window. Shot from the doorway with the door frame creating a dark vertical at the right edge of the frame. Shot on Kodak Portra 160 film with a 35mm lens at f/2.8. Uncorrected mixed colour — warm overhead, cool daylight. Visible grain. Low contrast, matte. The framing is slightly wide for the scene, leaving space in the frame that the photographer didn't crop. 3:2 aspect ratio. No text, no logos.

---

### 28. `headphones-on-anticipation.jpg`

A candid lomography-style close portrait of a person in the act of putting headphones on — both hands raised to their ears, the headphones mid-placement, eyes already closing slightly in quiet anticipation. The expression is inward — not dramatic, just the small private moment of transitioning into focused listening. Shot slightly from the side, with a blurred desk surface and water glass in the lower foreground partially obstructing the bottom of the frame. The background is a warm blur of office or room tones. Focus sits on the headphones and hands, the face slightly softer. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. Warm amber light from a window to the side; slightly cooler overhead. Uncorrected white balance. Visible grain. Low contrast, matte finish. The top of the head clips the frame edge slightly. 4:5 aspect ratio. No text, no logos, no screens.

---

### 29. `notebook-detail-morning.jpg`

A lomography-style close-up still-life of an open notebook on a desk, shot at a low angle from the side so the pages fill the frame at a slight diagonal. One page has handwriting on it — not legible, just the visual texture of notes and underlines. A pen rests on the open page. The desk beside the notebook has a ceramic mug casting a long shadow across the surface, and a phone face-down at the edge of the frame. Morning window light rakes across the notebook from the left, catching the texture of the paper and the indentations of writing on the page below. The background is entirely soft focus — a blurred window, perhaps a plant. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Uncorrected warm white balance — the window light pushes amber-golden across the notebook pages; the shadows under the mug and pen are subtly cool. Visible film grain, matte contrast. The framing is slightly tilted, filling the frame with the desk surface. 3:2 aspect ratio. No legible text, no logos, no screens.

---

### 30. `woman-earpiece-warmth.jpg`

A candid lomography-style photograph of a woman wearing a small wireless earpiece, mid-sentence — mouth slightly open, one hand raised in a gentle gesture as if making a point. She is smiling faintly, the expression warm and engaged rather than performative. Shot through a glass partition, so the glass edge creates a faint vertical reflection across one corner of the frame. The background behind her is warm neutral soft focus — office shapes in cream and pale wood. A colleague's shoulder is blurred at the frame edge. The focus is slightly forward of her eyes, landing on her cheekbone. Shot on Kodak Portra 400 film with a 105mm lens at f/1.8. Warm amber window light from behind her; slightly cooler overhead. Uncorrected white balance, golden skin tones. Visible grain. Low contrast, matte. Tight framing, slightly off-centre, her gaze directed just past the camera. 4:5 aspect ratio. No text, no logos.

---

### 31. `training-room-before.jpg`

A lomography-style photograph of a training or meeting room before anyone has arrived — chairs arranged around a table, a notebook and pen laid at each place, a water glass. The room is lit by morning light streaming through large windows, creating long warm rectangles of light on the table surface and the wall opposite. The scene has a sense of quiet readiness. A coat has already been draped over one chair — someone was here and left. A whiteboard on the far wall is blank. Shot from the doorway, the door frame creating a dark border at the near edge. Focus sits somewhere on the table rather than the far wall, creating depth. Shot on Fuji Pro 400H film with a 35mm lens at f/5.6. Uncorrected warm white balance — everything golden from the morning window light, the shadows a faintly cool cream-grey. Visible grain, low contrast, matte finish. The framing has a slight tilt, the table not perfectly horizontal in frame. 16:9 aspect ratio. No text, no logos, no legible writing.

---

### 32. `man-phone-walking.jpg`

A candid lomography-style photograph of a man walking through an open-plan office on a phone call — mid-stride, one hand holding the phone to his ear, the other moving in an unconscious gesture. His expression is concentrated but not tense — a working call, not a difficult one. Shot from a distance through a glass partition that bisects the frame, creating a faint reflection of the office behind the photographer. Beyond the glass, his figure is in gentle soft focus — the movement and gesture readable, the details soft. The office around him is alive: a colleague visible at a desk in the background, a bag on a chair, the end of a standing desk. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Uncorrected warm colour — the open-plan overhead light pushing cool-fluorescent, the window behind him warm amber. Visible grain, low contrast. The composition is off-centre, the photographer shooting through an available gap. 16:9 aspect ratio. No text, no logos.

---

### 33. `over-shoulder-beyond.jpg`

A candid lomography-style photograph where the foreground is dominated by the back and shoulder of one person — taking up the left third and bottom of the frame, out of focus, a warm dark shape. Beyond their shoulder, two colleagues are visible at a table in conversation — one leaning forward, the other gesturing. The foreground figure creates a frame-within-a-frame, the viewer looking over their shoulder into the scene. The background conversation is in gentle soft focus but readable: expressions, body language, the table with glasses and papers. Warm ambient light from a window beyond the two people fills the scene with amber. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Uncorrected colour — warm on the lit side, cool in shadow. Visible grain, matte contrast. The framing is slightly tilted, the foreground shoulder not parallel to any edge. 3:2 aspect ratio. No text, no logos, no screens.

---

### 34. `leaning-back-laugh.jpg`

A candid lomography-style portrait of a woman leaning back in her chair mid-laugh — genuine, unguarded, the kind of laugh that tips you backward. Her head is thrown back slightly, eyes nearly closed, one hand on the table in front of her. Shot from across the table, slightly low, with the near table edge visible at the bottom of the frame and a half-drunk glass of water in the near foreground, slightly blurred. The expression is the opposite of composed — it's the real thing. She is in a meeting context: there's a notebook on the table, a pen, a colleague's arm just visible at the frame edge. Warm natural light from a window to the side. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Uncorrected warm white balance, golden skin tones, slightly cool shadow under the table. Visible grain, low contrast, matte finish. The framing is slightly rushed — slightly too much table in the bottom, her head near the top edge. 4:5 aspect ratio. No text, no logos.

---

### 35. `outdoor-bench-pair.jpg`

A candid lomography-style photograph of two people seated on a bench in an outdoor urban setting — the grounds of an office building, a city square, or a pavement café — mid-conversation. One is turned slightly toward the other, the other looking down at their phone or a notebook on their lap as they talk. The background has the texture of city or campus: a tree, a building facade, a passing figure blurred in the distance. Shot from slightly to the side and behind, with a plant pot or low wall creating a dark shape at the left frame edge. The light is soft overcast or gentle afternoon — not harsh, a diffused warm-grey. Shot on Kodak Portra 400 film with a 85mm lens at f/2.8. Uncorrected colour balance — the outdoor light is cooler than the interiors, but still warm: pale cream-grey sky, amber brick building in the background. Visible grain, matte contrast. Slightly tilted framing. The mood is a conversation that could be about anything — personal or work, impossible to tell. 3:2 aspect ratio. No text, no logos.

---

### 36. `staircase-seated-thinking.jpg`

A candid lomography-style photograph of a person sitting alone on an office staircase — on a mid-landing or a step, slightly to the side to let people pass, but nobody is passing right now. They have a notebook open on their knee and a pen in hand, but they're not writing — they're looking slightly upward, thinking. It's the posture of someone working something out in their head. A coat is on their lap or beside them. The stairwell is lit by a window on the landing above, casting warm light down the stairs, the lower treads in cooler shadow. Shot from below and to the side, through the banister rails which create geometric dark lines across the foreground. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Uncorrected warm-amber from the above window, cool shadow below. Visible grain, matte contrast. The framing is irregular — the banister lines create an asymmetric composition, the figure not centred. 3:2 aspect ratio. No text, no logos.

---

### 37. `meeting-end-scatter.jpg`

A candid lomography-style photograph of the end of a meeting — people are beginning to push back chairs, one is already standing gathering papers, two others are still seated in an impromptu sidebar conversation. The table has the signs of a real session: someone's notebook with writing, a water glass with a fingerprint, a phone that has been face-down for the duration, pens scattered. One person's jacket is over the back of the chair. Shot from outside the glass meeting room wall, the glass creating a faint reflection and slight soft-focus on the figures within. Shot on Kodak Portra 160 film with a 35mm lens at f/2.8. Warm overhead light in the meeting room against the slightly cooler corridor light where the photographer stands — the glass creates a colour temperature shift. Uncorrected white balance, visible grain, low contrast. The framing takes in most of the table but cuts off one chair, slightly tilted. 16:9 aspect ratio. No text, no logos, no legible writing.

---

### 38. `man-reviewing-close.jpg`

A candid lomography-style close portrait of a man looking down at a printed document in his hand — reading carefully, eyebrows very slightly furrowed in concentration, not concern. He holds the page at mid-height, looking down at it from a slight distance. His expression is the expression of a person who is paying attention. Shot from a three-quarter angle, slightly low, with the document partially visible at the bottom of the frame but not legible. The background is entirely warm soft focus. A chair back or desk edge intrudes at one corner. The focus lands on the document edge and his near hand, with his face fractionally softer above. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm amber sidelight from a window; slightly cooler overhead. Uncorrected white balance. Visible grain, low contrast, matte. The framing clips the top of his head slightly. 4:5 aspect ratio. No legible text on the document, no logos.

---

### 39. `atrium-two-figures.jpg`

A candid lomography-style photograph of two people in a large open atrium or corporate lobby space, small in the frame — the architecture dwarfs them slightly. They face each other in conversation, both standing, one with a notepad, the other with hands in pockets. The space around them has visual texture: a reception desk blurred in the background, a plant, the geometry of a high ceiling with natural light filtering down. They are positioned slightly off-centre, the vast ceiling and floor around them giving the image breathing room and a sense of scale. Shot from across the atrium through the blurred vertical of a column or architectural feature at the frame edge. Shot on Kodak Portra 400 film with a 50mm lens at f/4. Uncorrected warm colour — the atrium light is complex: daylight from above, interior warm lighting from around the space. The floor is pale stone or polished concrete, picking up warm and cool reflections. Visible grain, low contrast. Slightly tilted. 16:9 aspect ratio. No text, no logos.

---

### 40. `woman-solo-cafe-window.jpg`

A candid lomography-style photograph of a woman sitting alone at a small table by a window in a café or building café area — but not lonely. She is looking out the window with a quiet, contained expression — not waiting, not sad, just present. A coffee cup sits in front of her. Her phone is face-down on the table. There is a notebook open but she is not looking at it. The window beyond her is streaked with soft light — morning or afternoon, the outside world a warm abstract blur of shapes and movement. Shot from across the café through the chairs and table legs of an empty table in the foreground, which create a low dark frame. Shot on Kodak Gold 200 film with a 85mm lens at f/2. Uncorrected warm white balance — window light on her face is slightly cool, the room behind her warm amber. Skin tones complex: blue-cool on the lit side, golden on the shadow. Visible grain, low contrast, matte. The frame includes the window frame as a strong vertical. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 41. `portrait-south-asian-woman-listening.jpg`

A candid lomography-style close portrait of a South Asian woman in her early 40s, mid-listening — head tilted very slightly, eyes steady and attentive, the quiet focus of someone genuinely tracking what they're hearing. She is not performing attention; she is simply paying it. Shot through the faint edge of a glass partition in the foreground, its vertical line bisecting the near corner of the frame. The background is soft warm blur — pale walls and wood tones of a contemporary meeting room. Her clothing is smart casual, dark tones. The focus lands on her near cheekbone, eyes fractionally softer. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. Uncorrected white balance — warm window light from the right, slightly cooler overhead. Visible film grain. Low contrast, matte. The framing is slightly tight, clipping the top of her head. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 42. `portrait-black-man-mid-sentence.jpg`

A candid lomography-style close portrait of a Black man in his early 30s, caught mid-sentence — mouth slightly open, one hand raised in a small natural gesture, eyes animated and direct. He is making a point to someone just out of frame to the right. His expression is confident and warm, not tense. He wears a collarless shirt or casual knitwear. Shot over a blurred shoulder in the foreground — the soft dark shape of a colleague's back occupying the lower-left of the frame. The background is entirely out of focus: the warm tones of a contemporary open-plan office. The focus sits on his gesturing hand, face slightly softer. Shot on Kodak Portra 400 film with a 105mm lens at f/2. Warm amber window light, slightly cooler overhead fluorescent. Uncorrected white balance. Visible grain, low contrast, matte. The framing has a slight tilt. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 43. `portrait-east-asian-woman-senior.jpg`

A candid lomography-style close portrait of an East Asian woman in her early 50s — a senior professional, the kind of person who runs a room without raising her voice. She is in a moment of quiet thought between sentences, eyes steady, expression composed and warm. She has short hair, understated jewellery, a well-cut jacket in a muted tone. Shot from a three-quarter angle through the vertical of a door frame that intrudes at the left edge, creating a dark architectural border. The background is the soft blur of a glass-fronted boardroom. Focus lands on her near eye, the far side of her face slightly softer. Shot on Kodak Portra 160 film with a 105mm lens at f/1.8. Cool window light on the lit side, warm interior amber in the shadows — uncorrected white balance, complex skin tones. Visible grain, matte. Framing clips her shoulder at the bottom. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 44. `portrait-white-woman-fifties-warmth.jpg`

A candid lomography-style portrait of a white woman in her mid-50s, silver-streaked hair, captured mid-laugh at something just out of frame — not a polished smile but a real one, the kind that closes the eyes slightly at the corners. She is in a contemporary office breakout space, seated at a small table, a coffee cup in front of her. Shot through the out-of-focus edge of a plant or room divider at the left frame edge. The background is warm blur. The focus sits on her near cheek, the eyes fractionally soft. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm amber window light behind her creating gentle halation around her hair. Uncorrected white balance. Visible grain, low contrast, matte. The framing is slightly off-centre. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 45. `portrait-south-asian-man-explaining.jpg`

A candid lomography-style close portrait of a South Asian man in his mid-30s, leaning forward slightly, mid-explanation — both hands visible at the bottom of the frame, fingers spread in an open gesture. His expression is engaged and earnest; he is explaining something he cares about. He wears a casual smart shirt, open collar. Shot from across a table, the table edge visible at the bottom of the frame, a water glass in the near corner slightly blurred. The background is a warm blur of a modern meeting room — pale walls, wood, daylight from a large window. Focus sits on his hands, face slightly softer above. Shot on Kodak Gold 200 film with a 50mm lens at f/2.4. Warm mixed light. Uncorrected white balance. Visible grain, matte. Slightly tilted. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 46. `portrait-black-woman-genuine-laugh.jpg`

A candid lomography-style close portrait of a Black woman in her early 40s, mid-laugh — head tilted back slightly, eyes nearly closed, one hand briefly touching the table in front of her. It is the unselfconscious laugh of someone who has forgotten they're in a work setting. She is in a contemporary office meeting room, in smart-casual clothing. Shot from across the table, the foreground blurred by the soft dark shape of the far table edge. A blurred water glass and a colleague's arm are visible at the frame edges. The background is warm and soft. Focus sits on her face, slightly soft from the missed focus of a wide aperture. Shot on Fuji Pro 400H film with a 85mm lens at f/1.8. Warm window light, uncorrected colour, golden skin tones. Visible grain, low contrast, matte. Framing is tight, her head filling most of the frame. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 47. `portrait-east-asian-man-focused.jpg`

A candid lomography-style close portrait of an East Asian man in his mid-40s, looking down and then up — caught in the transition, eyes lifting, expression concentrated and alert. He holds a pen in one hand. Shot through the gap between two chairs or the edge of a partition, the near foreground slightly obscuring the bottom-left corner. The background is a warm blur of a modern open-plan office. Focus lands on the pen and his near hand, face fractionally softer. Shot on Kodak Portra 400 film with a 85mm lens at f/2. Warm sidelight from a window, cooler overhead. Uncorrected white balance. Visible grain, low contrast, matte. The framing is slightly low, the top of the frame slightly generous. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 48. `portrait-mixed-woman-open.jpg`

A candid lomography-style close portrait of a mixed-heritage woman in her early 30s, looking just off-camera — her expression is open and direct, not guarded, the natural face of someone in the middle of a conversation they're enjoying. She wears a simple top, minimal jewellery. Shot from a slight angle through the edge of a glass meeting room wall, a faint vertical reflection running through the upper corner of the frame. The background is warm blurred office tones. The focus lands on her near eye, fractionally forward. Shot on Kodak Portra 160 film with a 105mm lens at f/1.8. Warm amber window light, cooler overhead. Uncorrected white balance, golden skin tones. Visible grain, matte. The framing clips her shoulder at one edge. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 49. `portrait-white-man-bearded-intent.jpg`

A candid lomography-style close portrait of a white man in his early 50s with a short grey-flecked beard — caught in a moment of genuine listening, leaning forward slightly, elbows on the table, one hand loosely clasped. His expression is intent and kind, not authoritative. He wears a plain dark crew-neck jumper. Shot from across the table, a blurred coffee cup in the near foreground partially obscuring the lower edge of the frame. The background is the soft warm blur of a contemporary meeting space — pale walls, natural wood, warm light. Focus sits on his hands, face slightly softer. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm window light, uncorrected. Visible grain, low contrast, matte. Slightly off-centre framing. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 50. `portrait-middle-eastern-woman-warm.jpg`

A candid lomography-style close portrait of a Middle Eastern woman in her late 30s, mid-sentence with a warm expression — she is making a point she believes in, but the manner is gentle, not forceful. Her eyes are direct. She wears a blazer or structured top in a muted earthy tone. Shot through the soft blurred edge of a plant in the foreground, a leaf partially obscuring the lower-left corner. The background is the warm abstract blur of a glass-fronted modern office. The focus lands on her near eye. Shot on Kodak Gold 200 film with a 85mm lens at f/1.8. Uncorrected warm white balance, amber window light. Visible grain, low contrast, matte. The framing is slightly tilted. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 51. `portrait-black-man-senior.jpg`

A candid lomography-style close portrait of a Black man in his early 50s, grey at the temples — the quiet authority of someone very senior, caught in a reflective moment between conversations. He is not performing gravitas; he is simply thinking. He wears a well-cut dark jacket, no tie. Shot from a slight angle through a door frame edge that creates a dark vertical at the left margin. The background is the soft warm blur of a corporate meeting room. Focus lands on his near eye. Shot on Kodak Portra 400 film with a 105mm lens at f/1.8. Complex light — cool window on the lit side, warm interior amber in the shadows. Uncorrected white balance. Visible grain, matte. The framing is slightly tight at the top. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 52. `portrait-south-asian-woman-post-session.jpg`

A candid lomography-style close portrait of a South Asian woman in her mid-20s — headphones resting around her neck, the look of someone just finishing something. Her expression is quietly satisfied, eyes slightly unfocused, the private moment after completing a session. She sits at a contemporary desk. Shot through the out-of-focus edge of a nearby plant, green bokeh partially covering the lower-left of the frame. The background is warm blur of a modern open-plan workspace. Focus sits on the headphones at her collarbone, face slightly soft above. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm afternoon window light, uncorrected. Visible grain, low contrast, matte. Slightly tilted framing. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 53. `portrait-white-woman-thirties-animated.jpg`

A candid lomography-style close portrait of a white woman in her mid-30s, visibly animated — mid-point, one hand raised, head slightly tilted, eyes bright. She is enjoying this conversation. She wears a simple shirt, hair down. Shot through the blurred back-of-chair in the foreground, the curved chair top creating a soft dark arc at the bottom of the frame. The background is a warm blur of a contemporary meeting room. Focus sits on her raised hand, face slightly softer. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Warm sidelight from a window. Uncorrected white balance. Visible grain, low contrast. Framing is slightly tilted. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 54. `portrait-middle-eastern-man-listening.jpg`

A candid lomography-style portrait of a Middle Eastern man in his mid-40s, listening with his full body — leaning slightly forward, chin resting on one hand, gaze steady and attentive. His expression is calm and receptive. He wears a smart-casual shirt. Shot from a slight angle over the blurred shoulder of the person he's listening to, which occupies the lower-right corner of the frame. The background is the soft warm blur of a contemporary glass-fronted office. Focus sits on his face — slightly forward of the eyes, on the nose-bridge. Shot on Kodak Gold 200 film with an 85mm lens at f/2. Warm mixed window light. Uncorrected white balance. Visible grain, low contrast, matte. Slightly off-level framing. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 55. `portrait-black-woman-earpiece.jpg`

A candid lomography-style portrait of a Black woman in her early 30s wearing a small wireless earpiece — mid-conversation, one hand raised in a natural gesture, expression engaged and professional. She is not at a desk but standing or perched against something. Shot through the edge of a glass partition that creates a faint vertical ghosting across one corner. The background is warm blur of a modern open-plan office, colleagues visible as abstract warm shapes behind her. Focus sits on the earpiece and her near cheek, eyes fractionally softer. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. Warm amber window light, slightly cooler overhead. Uncorrected white balance. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 56. `portrait-south-asian-man-senior.jpg`

A candid lomography-style close portrait of a South Asian man in his early 50s — senior, composed, warm. He is between conversations, a slight smile on his face as if something just said amused him quietly. He wears a smart blazer over a plain shirt. Shot through the blurred vertical of a door frame or partition edge at the left margin. The background is a pale blur of a well-lit contemporary boardroom. Focus lands on his near eye. Shot on Kodak Portra 400 film with a 105mm lens at f/2. Warm amber window light creating soft halation on his near shoulder. Cool overhead light in the shadows. Uncorrected white balance. Visible grain, low contrast, matte. Framing is slightly generous at the bottom, tight at the top. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 57. `portrait-white-woman-blonde-professional.jpg`

A candid lomography-style portrait of a white woman in her mid-40s with blonde hair, caught looking past the camera — addressing someone to the right, expression focused and engaged. She is in a contemporary meeting room context. Shot through the out-of-focus edge of a water glass in the foreground, the glass creating a slight colour distortion at the lower frame edge. The background is a warm soft blur. The focus lands on her near eye. Shot on Fuji Pro 400H film with a 105mm lens at f/1.8. Warm window light, slightly cool overhead. Uncorrected white balance. Visible grain, low contrast, matte. Slightly tilted framing. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 58. `portrait-east-asian-woman-junior.jpg`

A candid lomography-style portrait of an East Asian woman in her mid-20s — early in her career, concentrated, notebook open on the table in front of her, pen in hand. Her expression is attentive and earnest, the look of someone actively learning. Shot from slightly above and to the side, through the blurred shape of a chair back in the foreground. The background is a modern meeting room, warm and pale. Focus sits on the pen in her hand, face slightly softer. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Warm sidelight from a window. Uncorrected white balance. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 59. `portrait-black-man-twenties.jpg`

A candid lomography-style portrait of a Black man in his mid-20s — early career, concentrated, listening carefully with a notebook in front of him. His expression is engaged and alert, slightly nervous in a good way — the focus of someone trying to absorb everything. He wears a casual smart shirt. Shot through the blurred edge of a plant at the frame edge. The background is a warm blur of a contemporary open-plan office. Focus sits on his face, slightly forward of the eyes. Shot on Kodak Gold 200 film with a 85mm lens at f/2. Warm window light, uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 60. `portrait-white-man-forties-direct.jpg`

A candid lomography-style portrait of a white man in his early 40s, close-cropped hair, looking almost directly at the lens but not quite — his gaze is fractionally past it, as if the camera is just to the side of the person he's speaking to. His expression is warm and direct, neither guarded nor performing. He wears a plain dark shirt. Shot through the faint ghosting of a glass partition at the left frame edge. The background is a warm blur of an open-plan contemporary office. Focus lands on his near eye. Shot on Fuji Pro 400H film with a 105mm lens at f/2. Warm window light from the left, slightly cool overhead. Uncorrected white balance. Visible grain, low contrast, matte. The framing clips the top of his head. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 61. `meeting-black-woman-south-asian-man.jpg`

A candid lomography-style photograph of a Black woman in her 40s and a South Asian man in his 30s in a modern meeting room, seated across a small table — she is leaning forward making a point, he is listening intently with a pen in his hand. Shot from outside the glass meeting room wall, the glass edge creating a faint vertical at the left side of the frame and a ghost reflection of the office corridor behind the photographer. The room is contemporary: pale walls, natural wood table, a window behind them creating warm backlight. Focus sits on the glass surface, both figures in gentle soft focus but expressions readable. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm amber backlight, slightly cooler glass corridor light. Uncorrected white balance. Visible grain, low contrast, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 62. `meeting-east-asian-woman-white-man.jpg`

A candid lomography-style photograph of an East Asian woman in her 40s and a white man in his 50s at a small round table in a modern office breakout space — notebooks in front of them, a water glass between them, both mid-discussion. She is animated, one hand tracing something on the table. He is listening, leaning back slightly. Shot from the doorway of the room, the door frame creating a dark vertical at the right edge. The breakout space is modern: low chairs, pale walls, natural light from a large window. Focus sits on the table between them, both figures slightly soft. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm window light. Uncorrected white balance. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 63. `meeting-south-asian-woman-black-man-glass.jpg`

A candid lomography-style photograph shot from a corridor looking through a glass partition into a modern meeting pod. Inside, a South Asian woman in her 30s and a Black man in his 40s are seated across from each other at a narrow table — one is gesturing, the other watching with a slight smile. The glass partition creates a faint reflection of the corridor: ghost shapes of a plant and a ceiling light. Focus sits on the glass surface, the two people in gentle soft focus behind. Shot on Kodak Portra 160 film with a 35mm lens at f/2.8. Warm overhead interior light inside the pod; slightly cooler corridor light outside. Uncorrected colour. Visible grain, low contrast, matte. The framing is slightly off-centre. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 64. `mentoring-white-woman-south-asian-woman.jpg`

A candid lomography-style photograph of a white woman in her early 50s and a South Asian woman in her late 20s in a 1:1 mentoring moment — the older woman is leaning forward, making a point with quiet emphasis; the younger one is listening with a notebook, pen in hand, expression earnest. They sit at a desk in a contemporary office. Shot from the side through the gap of a partially open office door, the door edge creating a dark stripe at the right side. A filing cabinet or shelving unit intrudes at the left edge. Focus lands on the door edge, the two figures recognisably soft behind. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm window light from beyond, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 65. `window-two-men-standing.jpg`

A candid lomography-style photograph of two men standing side by side at a large office window, both looking out — one is a Black man in his 40s, the other a South Asian man in his 30s. They are mid-conversation, one with hands in pockets, the other gesturing at something outside. Shot from across the room, the blurred edge of a desk or chair intruding at the lower-left corner of the frame. The exterior beyond the window is blown out to pale white. Their faces are in three-quarter profile. Focus sits on the near man's shoulder and the window frame, faces slightly softer. Shot on Kodak Portra 400 film with a 85mm lens at f/2.8. Complex light: cool exterior backlight, warm interior office light. Uncorrected white balance. Visible grain, low contrast, matte. Slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 66. `outdoor-bench-black-man-white-woman.jpg`

A candid lomography-style photograph of a Black man in his early 30s and a white woman in her 40s seated on a bench outside a modern office building — a working conversation, both leaning slightly toward each other. He has a notebook on his knee; she is speaking, one hand moving. The urban setting is visible behind them: a glass building facade, a tree, a passing figure blurred in the distance. Shot from across the path, through the vertical of a signpost or railing creating a dark line at the frame edge. Focus sits on the railing, both figures slightly soft. Shot on Kodak Gold 200 film with a 85mm lens at f/2.8. Overcast outdoor light — soft and diffused, slightly cool, with warm building reflections on the pavement. Uncorrected white balance. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 67. `coffee-middle-eastern-woman-east-asian-man.jpg`

A candid lomography-style photograph of a Middle Eastern woman in her late 30s and an East Asian man in his 40s at a small round table in a modern office café or breakout space — coffee cups in front of them, a notebook open between them. Both are mid-conversation, animated but relaxed. Shot from the far side of the room through the gap between two other chairs in the foreground, their backs creating a soft dark frame at the edges. The space is modern: concrete floor, large windows, warm pendant lighting. Focus sits on the foreground chair backs, the two subjects in gentle soft focus. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm mixed light — natural from windows, warm pendant from above. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 68. `hallway-south-asian-man-white-woman.jpg`

A candid lomography-style photograph of a South Asian man in his mid-30s and a white woman in her early 30s caught mid-conversation in a corridor between meetings — she is laughing, he is making a point with a contained smile. They both carry notebooks. The corridor of a modern office building: glass walls along one side, pale wall on the other, ceiling lights receding. Shot from a distance down the corridor, the near wall creating a strong horizontal line at one edge. Focus sits on the corridor floor in the foreground, both figures in gentle soft focus in the middle-distance. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Cool-white fluorescent corridor light mixing with warm daylight from the glass wall. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 69. `one-to-one-black-woman-manages-white-man.jpg`

A candid lomography-style photograph of a Black woman in her late 40s and a white man in his early 30s in a 1:1 meeting — she is in the senior role, leaning back slightly with calm authority; he is leaning forward with a notebook. The dynamic reads as manager-report, the energy warm and substantive. Shot through the gap of a partially open office door, the door edge creating a dark stripe at the left. A plant is partially visible at the right edge. The room has warm natural light, contemporary furnishings. Focus lands on the door frame, both figures soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm window light, uncorrected. Visible grain, low contrast, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 70. `debrief-east-asian-south-asian-women.jpg`

A candid lomography-style photograph of an East Asian woman in her 40s and a South Asian woman in her 30s seated in a modern office breakout pod — both leaning forward slightly, elbows on knees, in the posture of a close debrief conversation. Coffee cups on a low table between them, a phone face-down. One is talking, the other nodding. Shot from outside the pod through its glass panel, the panel edge creating a border at one side. Focus sits on the glass, both women in soft focus inside. Shot on Kodak Portra 160 film with a 50mm lens at f/2. Warm ambient pod light, slightly cooler exterior. Uncorrected white balance. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 71. `corridor-two-women-laughing.jpg`

A candid lomography-style photograph of two women — a Black woman in her 30s and a white woman in her 40s — caught mid-laugh in a modern office corridor, both carrying notebooks or bags, one frozen mid-step. The laughter is genuine and unposed. Shot from a distance, the corridor's glass wall on one side creating reflections, the opposite wall receding. A fire door at the far end is partially open. Focus sits on the corridor floor in the foreground, the two women in soft focus in the middle-distance. Shot on Kodak Gold 200 film with a 35mm lens at f/2.8. Fluorescent corridor light mixed with daylight from the glass wall — slightly green-cool overhead, warm where the daylight reaches. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 72. `senior-junior-south-asian-man-black-man.jpg`

A candid lomography-style photograph of a South Asian man in his early 50s and a Black man in his mid-20s in a 1:1 — the senior leaning forward over a small table making a considered point, the junior listening carefully with a pen in his hand. The atmosphere is warm and mentoring. Shot through the gap of a partially open office door, the door frame at the right edge creating a dark vertical. A framed piece of art or shelf is partially visible at the left edge. The room is modern: light walls, natural wood, daylight from a window. Focus lands on the door frame, both figures soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Uncorrected warm light. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 73. `hotel-lobby-middle-eastern-east-asian.jpg`

A candid lomography-style photograph of a Middle Eastern woman in her 40s and an East Asian man in his 50s standing mid-conversation in the lobby of a modern hotel or premium office building — marble or polished stone floors, contemporary furniture, warm interior lighting. They are slightly small in the frame, the architecture dwarfing them gently. One holds a padfolio; the other has one hand in a jacket pocket. Shot from across the lobby through a blurred column or display in the foreground. Focus sits on the foreground element, both figures in soft focus behind. Shot on Kodak Portra 400 film with a 50mm lens at f/3.5. Warm interior hotel lighting mixed with cooler daylight from tall windows. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 74. `presenting-together-east-man-white-woman.jpg`

A candid lomography-style photograph of an East Asian man in his 40s and a white woman in her 30s presenting together at a flipchart or writing surface — one is holding the marker, gesturing at something they've written; the other is standing just behind, pointing at a different part. Shot from among the audience, over the blurred heads and shoulders of seated listeners in the foreground. Focus sits on the nearest audience member's shoulder, the two presenters slightly soft in the background. The room is a modern meeting room with warm lighting. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Warm overhead, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible writing on the flipchart. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 75. `quiet-debrief-black-white-pair.jpg`

A candid lomography-style photograph of a Black woman in her 40s and a white man in his 30s in a quiet post-meeting debrief — both leaning back in chairs slightly, the energy wound-down, relaxed and honest. One has a coffee cup; the other is turning a pen in their fingers. The meeting room table between them has the signs of a session: a notebook, scattered papers, a water glass. Shot from outside the glass room wall, focus on the glass, both figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm window light, uncorrected. Visible grain, low contrast, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 76. `desk-duo-south-asian-colleagues.jpg`

A candid lomography-style photograph of two South Asian colleagues — a woman in her 30s and a man in his 40s — at a shared desk in a modern open-plan office. One is explaining something by pointing at something on the desk surface; the other is leaning in, looking. They are not looking at a screen — perhaps a printed report or a notebook. Shot from the far end of the desk row through the blurred shapes of other desk items — a monitor, a plant — in the foreground. Focus sits on the foreground items, the two figures in gentle soft focus. Shot on Kodak Portra 160 film with a 50mm lens at f/2.8. Warm overhead open-plan light, cool daylight from nearby windows. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content visible, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 77. `outdoor-terrace-middle-eastern-black-women.jpg`

A candid lomography-style photograph of two women — a Middle Eastern woman in her late 30s and a Black woman in her 40s — on an outdoor office terrace or rooftop space, seated informally on a bench or low wall, coffee cups in hand, mid-conversation. The urban skyline or greenery is visible behind them, slightly out of focus. One is laughing, the other is making a point. Shot from the side, through a railing or planter in the foreground that creates a horizontal dark line across the lower edge of the frame. Focus on the railing, both women soft behind. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Soft outdoor daylight — overcast, diffused. Uncorrected white balance — slightly cool outdoors, warm cups. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 78. `round-table-white-man-east-asian-woman.jpg`

A candid lomography-style photograph of a white man in his mid-40s and an East Asian woman in her late 30s at a small round table in a contemporary meeting space — coffee cups, a notebook, a pen. He is listening; she is speaking with a quiet intensity. Shot from beyond the table through a blurred plant or room divider at the left frame edge. Focus sits on the plant, both figures soft behind it. Shot on Fuji Pro 400H film with a 85mm lens at f/2. Warm window light behind them. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 79. `walking-talking-south-man-white-man.jpg`

A candid lomography-style photograph of a South Asian man in his late 30s and a white man in his early 30s walking side by side through a modern glass-walled corridor — both mid-sentence, one gesturing, one listening as he walks. Both carry notebooks. Shot from ahead of them and to the side, slightly low, so the corridor geometry creates receding lines in the background. A coat hanging on a nearby hook intrudes at the frame edge. Focus sits on the floor ahead of them, both men slightly soft in motion. Shot on Kodak Portra 400 film with a 35mm lens at f/3.5. Cool-white corridor light mixed with warm window daylight from the glass wall. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 80. `meeting-end-black-east-asian-pair.jpg`

A candid lomography-style photograph of a Black man in his 40s and an East Asian woman in her 30s at the end of a meeting — chairs being pushed back slightly, papers being gathered, both still in quiet conversation as the formal part winds down. The table has the residue of the meeting: a notebook, a pen, a water glass. Shot from the glass meeting room wall outside, the glass creating a subtle reflection. Focus on the glass, both figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 81. `group-diverse-training-room.jpg`

A candid lomography-style photograph of four people in a modern training room — a Black woman in her 40s, a South Asian man in his 30s, a white woman in her 50s, and an East Asian man in his 20s. All are seated around a table, notebooks in front of them, in mid-discussion — one is speaking, the others listening or scribbling. The training room is contemporary: clean white walls, a large window, warm overhead light. Shot from behind one participant's shoulder, their back filling the left third of the frame; the three others visible beyond. Focus sits on the foreground shoulder, the group in gentle soft focus. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Warm, uncorrected light. Visible grain, matte. 16:9 aspect ratio. No legible writing, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 82. `workshop-three-women-diverse.jpg`

A candid lomography-style photograph of three women at a whiteboard — a Black woman in her 30s writing on it, a South Asian woman in her 40s pointing at something already written, and a white woman in her 30s watching with her arms loosely folded. The whiteboard has organic marks on it: curves, lines, sticky notes at angles — not legible. Shot from behind one of them, her shoulder partially obscuring the left portion of the frame. Focus sits on the shoulder and the whiteboard surface, the other two figures slightly soft. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Warm overhead light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible text on whiteboard, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 83. `boardroom-outside-glass-diverse.jpg`

A candid lomography-style photograph shot from a corridor looking through a floor-to-ceiling glass wall into a modern boardroom where a meeting is in progress — six or seven people of mixed genders and ethnicities seated around a large table. The glass creates a faint reflection of the corridor. Shot from the side, the glass edge at the left. Focus sits on the glass surface, the meeting inside in soft focus but clearly active — papers, glasses of water, someone mid-gesture. Shot on Kodak Portra 160 film with a 35mm lens at f/2.8. Warm interior boardroom light against the cooler corridor light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 84. `standup-diverse-open-plan.jpg`

A candid lomography-style photograph of four colleagues in a brief informal stand-up in a modern open-plan office — a diverse group: a Middle Eastern woman in her 30s, a Black man in his 20s, a white woman in her 40s, an East Asian man in his 30s. They stand in a loose circle, one speaking with a slight gesture, the others listening. Shot from a distance through the blurred vertical of a structural column at the near frame edge. The open-plan office extends behind them: desks, plants, warm light. Focus sits on the column, the group in soft focus. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Warm open-plan light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 85. `rooftop-group-informal.jpg`

A candid lomography-style photograph of a small group of four people on a rooftop terrace or outdoor amenity space attached to a modern office building — a Black man in his 40s, a South Asian woman in her 30s, a white man in his 50s, and an East Asian woman in her 30s. They stand with coffee cups in hand in an informal cluster, mid-conversation. The city skyline or urban roofscape is visible behind them, slightly out of focus. Shot from across the terrace through a planter in the foreground. Focus sits on the planter, the group soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Soft overcast outdoor light with warm building reflections. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 86. `presenter-south-asian-woman-group.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s presenting to a group of six seated colleagues in a contemporary meeting room — she is mid-point, one hand raised, confident and clear. The audience is diverse: various genders and ethnicities. Shot from among the audience, over the blurred backs of heads and shoulders in the foreground. Focus sits on the nearest audience shoulder, the presenter slightly soft in the background. The room is well-lit and modern. Shot on Kodak Portra 400 film with a 35mm lens at f/3.5. Warm overhead room light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 87. `circle-debrief-standing-diverse.jpg`

A candid lomography-style photograph of four people in a standing debrief circle — a Black woman in her 40s, a white man in his 30s, a South Asian man in his 40s, and an East Asian woman in her 20s — in a modern office breakout space. One is talking, the others attentive. The body language is engaged and relaxed. Shot from outside the circle looking in through the gap left by the absent fourth position — the viewer is the missing person. Focus sits on the floor in the foreground, the four figures visible and recognisable in soft focus around the circle. Shot on Fuji Pro 400H film with a 35mm lens at f/4. Warm ambient light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 88. `open-plan-life-background.jpg`

A candid lomography-style wide photograph of a modern open-plan office in full working flow — not focused on any single person, but on the life of the space. Various people at desks: a South Asian woman standing reviewing something, a Black man at a sit-stand desk, a white woman walking between desks, a pair of East Asian colleagues talking at the end of a desk run. Shot from the far end of the office through a blurred plant in the foreground. Focus is on the plant, the office behind in layered soft focus. Shot on Kodak Portra 400 film with a 35mm lens at f/4. Warm overhead open-plan light, daylight from large windows down one side. Uncorrected — slightly warm overall, cooler near the windows. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 89. `conference-room-after-diverse.jpg`

A candid lomography-style photograph of a large hotel or corporate conference room at the end of a session — people milling around, some in conversation, some gathering belongings, the energy of a productive day ending. A diverse mix of attendees: various ages, ethnicities, professional dress. The room is contemporary: rows of tables, water carafes, a screen at the far end (facing away from camera). Shot from the rear through the blurred backs of people still seated or rising in the foreground. Focus on the foreground figures, the room in layered soft focus behind. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Warm conference room light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 90. `staircase-group-ascending.jpg`

A candid lomography-style photograph of three or four people ascending a modern glass-and-steel staircase mid-conversation — a Black woman in her 30s, a white man in his 40s, and a South Asian man in his 30s. They are in motion, one hand on the rail, talking as they climb. Shot from below, looking up through the geometric gaps of the banister rails. Focus sits on the banister rail in the foreground, the figures visible beyond in soft focus. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Natural light from above, warmer light below — complex mixed white balance. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 91. `sticky-notes-workshop-three.jpg`

A candid lomography-style photograph of three people at a table covered in coloured sticky notes — a Middle Eastern woman in her 40s, an East Asian man in her 30s, and a Black woman in her 30s. One is placing a note, another is reading something, the third is watching with a marker in hand. The table surface is the subject: sticky notes in clusters, arrows drawn between them, printed sheets. Shot from the side through the blurred edge of an empty chair in the foreground. Focus sits on the chair, the group slightly soft behind. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Warm overhead workshop light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible text on notes, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 92. `lobby-waiting-group.jpg`

A candid lomography-style photograph of a small cluster of professionals in a modern corporate lobby — a South Asian woman in her 30s, a white man in her 50s, and a Black man in his 40s — standing together informally before a meeting begins. One is checking a watch, another is mid-sentence, the third is half-listening. The lobby is well-designed: marble or polished stone, large plants, warm ambient lighting. Shot from across the space through a blurred lobby plant in the foreground. Focus sits on the plant, the group in soft focus. Shot on Fuji Pro 400H film with a 35mm lens at f/4. Warm hotel-lobby light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 93. `audience-pov-presentation.jpg`

A candid lomography-style photograph from audience point-of-view — we are seated among the audience watching a presentation. The frame is filled with the backs and sides of audience heads and shoulders: a Black woman to the left, an East Asian man ahead, a South Asian woman to the right. Beyond them at the front, a presenter is a small figure, mid-gesture, warm and slightly out of focus. The room is contemporary. Shot on Kodak Gold 200 film with a 35mm lens at f/2.8. Warm room lighting. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible content, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 94. `whiteboard-three-diverse.jpg`

A candid lomography-style photograph of three people at a whiteboard in a contemporary meeting room — a white woman in her 40s holding the marker, a South Asian man in his 30s pointing at one section, a Black man in his 40s watching with arms loosely folded. Shot from behind the person pointing, their shoulder and arm filling the left side of the frame. The whiteboard has abstract marks, curves and lines — not legible. Focus sits on the shoulder, the other two and the whiteboard in soft focus. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm overhead light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 95. `end-of-day-open-plan.jpg`

A candid lomography-style photograph of an open-plan office at the end of the working day — some desks empty, some still occupied. A South Asian woman is putting her coat on; a Black man is still at his desk, leaning back and talking on the phone; a white woman is standing chatting with a colleague. The office has the feel of 6pm: things wound down but not entirely finished. Shot from the far end of the office through a blurred structural column. Focus on the column, the office in layered soft focus. Shot on Kodak Portra 160 film with a 35mm lens at f/4. The overhead lights are on; outside the windows is dusk — warm interior against a fading blue-grey exterior. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 96. `detail-headphones-desk.jpg`

A lomography-style still-life close-up of a pair of over-ear headphones resting on a wooden desk beside an open notebook and a pen. A ceramic mug sits nearby. The headphones are the subject — the personal object that anchors the whole image as a moment of practice. No person in frame, but the implication of someone who just stepped away. Warm morning window light raking across the desk surface, catching the curve of the headphone cushion. Shot through the soft blur of a water glass in the foreground. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Amber and warm tones throughout, slightly cool in the shadows. Visible grain, low contrast, matte. Slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 97. `empty-meeting-room-end-of-day.jpg`

A lomography-style photograph of a contemporary meeting room at the end of the day — chairs slightly pushed back, notebooks and pens left on the table, a water glass half-empty, a coat forgotten over one chair. The room is lit only by the remaining daylight from a large window, the overhead lights off. The light falls in a soft rectangle across the table surface. Shot from the doorway, the door frame creating a dark border at the left edge. Focus sits on the door frame, the room in soft focus. Shot on Fuji Pro 400H film with a 35mm lens at f/5.6. Warm-amber late-afternoon window light, shadows cool. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 98. `detail-notebook-pen-coffee.jpg`

A lomography-style close-up of a notebook open on a desk — one page filled with handwriting (not legible, just the texture of notes), the other blank. A pen rests uncapped across the open pages. Beside it, a ceramic mug. A phone, face-down, at the edge of the frame. Warm morning sidelight from a nearby window raking across the notebook surface, catching the texture of the paper and the indentations of writing. The background is entirely out of focus — a warm blur of window and plant. Shot on Kodak Portra 400 film with a 50mm lens at f/3.5. Amber-warm throughout. Visible grain, matte. Slightly tilted. 3:2 aspect ratio. No legible writing, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 99. `morning-desk-before.jpg`

A lomography-style still-life photograph of a modern desk before the workday begins — a laptop closed, a notebook, an uncapped pen, a ceramic mug with steam faintly visible, a small plant. The chair is empty. Warm morning light from a window falls across the desk at a low angle. A coat is draped over the back of the chair, just visible at the frame edge. Shot at desk level, through the soft blur of the mug handle in the near foreground. Shot on Kodak Gold 200 film with a 35mm lens at f/4. Everything amber and golden from the morning light, shadows cool. Visible grain, low contrast, matte. Slightly tilted framing. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 100. `corridor-shadow-geometry.jpg`

A lomography-style abstract photograph of a modern office corridor — no person in the frame. The interest is entirely in the geometry of light and shadow: the window at the far end casting a long rectangle of warm light on the pale floor, the ceiling lights creating a rhythm of smaller pools, the walls receding in perspective. A coat hook on the wall has a coat on it. A trolley or plant sits at the edge of the corridor. The mood is a building between moments — the corridor itself as a space of transition. Shot on Fuji Pro 400H film with a 35mm lens at f/8. Warm window light at the far end against cooler overhead fluorescent. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 101. `detail-jacket-chair.jpg`

A lomography-style close-up still-life of a jacket draped over the back of a meeting room chair — someone's personal belonging, left mid-meeting or at the end of a session. The jacket is the subject: a good-quality but not ostentatious piece, in a warm earth tone or dark navy. Beside the chair on the table, a half-drunk glass of water and a pen. Warm window light from the side catches the fabric texture. Shot on Kodak Portra 160 film with a 50mm lens at f/3.5. Warm amber throughout. Visible grain, matte. Slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 102. `staircase-light-geometric.jpg`

A lomography-style photograph of a modern glass-and-steel staircase — no people, just the architecture. The geometric forms of the steps, the transparent handrail panels, the undersides of the treads, all creating a layered pattern. Daylight from above filters through the glass, creating soft pools of warm light on the landing. The lower section is in cooler shadow. Shot from below at a slight angle, the banister rail creating a diagonal across the frame. Shot on Kodak Gold 200 film with a 35mm lens at f/8. Warm-cool split — warm at the top, cool below. Visible grain, matte. Slightly tilted. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 103. `plant-desk-warmth.jpg`

A lomography-style close-up of a small indoor plant on a desk or shelf — a monstera leaf, a trailing pothos, or a simple succulent — with the warm amber light of a nearby window falling through its leaves. The desk beyond the plant is out of focus: the soft blur of a notebook, a mug, the edge of a keyboard. The plant is the foreground element that gives depth and warmth. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm amber and green. Visible grain, matte. Slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 104. `window-dusk-interior.jpg`

A lomography-style photograph of a modern office window at dusk — the interior is warm and lit, the exterior fading to a deep blue-grey. A desk or table surface is visible in the lower portion of the frame, catching the warm interior light. The window frame creates strong verticals. A plant leaf intrudes at one corner. No person in frame. Shot on Kodak Portra 400 film with a 35mm lens at f/5.6. The contrast between warm interior amber and cool exterior blue is the mood. Uncorrected. Visible grain, low contrast, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 105. `action-south-asian-woman-walking.jpg`

A candid lomography-style photograph of a South Asian woman in her early 40s walking confidently through a modern open-plan office — mid-stride, notebook tucked under her arm, a small smile as if she just remembered something. Shot from a distance, slightly to the side, the glass partitions of the office creating reflections and geometry behind her. A blurred colleague at a nearby desk occupies the foreground edge. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm ambient office light, uncorrected. Visible grain, matte. The figure is in motion — slightly soft. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 106. `action-black-man-staircase.jpg`

A candid lomography-style photograph of a Black man in his late 30s descending a modern glass-and-steel staircase — mid-step, one hand on the rail, looking slightly ahead, notebook under his arm. Shot from below and to the side, the banister rails creating geometric lines in the frame. The daylight from above creates warm backlight. Focus sits on the handrail, the figure slightly soft. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Warm top-light, cooler at the base of the stairwell. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 107. `action-east-asian-woman-arriving.jpg`

A candid lomography-style photograph of an East Asian woman in her 30s arriving at a glass-fronted modern building — caught mid-step through the entrance, bag over shoulder, the glass doors behind her creating a reflection. Shot from inside looking out, the building's interior framing her against the outside light. She is in motion, slightly soft from movement. The exterior light creates mild backlight. Shot on Kodak Portra 400 film with a 35mm lens at f/2.8. Warm interior light against cooler exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 108. `action-middle-eastern-man-presenting.jpg`

A candid lomography-style photograph of a Middle Eastern man in his 40s presenting to a small group — shot from the side so we see him in profile, hand raised, speaking with quiet authority. Behind him, a writing surface is visible but the content is not legible. The audience is visible in soft focus to the left of the frame. Shot on Kodak Gold 200 film with a 35mm lens at f/3.5. Warm room lighting. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 109. `action-white-woman-senior-lobby.jpg`

A candid lomography-style photograph of a white woman in her mid-50s walking through a corporate lobby with the purposeful ease of someone very senior — not rushing, but moving. She wears a well-cut coat or jacket. A bag over one shoulder. Shot from the side as she crosses the space, the lobby architecture visible behind her: reception desk, large plants, pale stone floor. Focus is slightly soft from the movement. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm lobby light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 110. `action-pair-glass-corridor.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s and a Black man in his 30s walking side by side along a glass-walled corridor in a modern office building — mid-conversation, one gesturing, one listening as they walk. Shot from ahead and to the side, the corridor receding behind them. A coat on a hook intrudes at the frame edge. Motion slight blur on both figures. Shot on Kodak Portra 160 film with a 35mm lens at f/3.5. Cool corridor fluorescent mixed with warm window daylight from the glass wall. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 111. `legal-document-review.jpg`

A candid lomography-style photograph of a Middle Eastern woman in her 40s and a white man in his 50s reviewing documents at a large polished conference table in a formal but contemporary legal or professional services setting — dark wood panelling or neutral walls, a credenza, good-quality chairs. Both are leaning over printed materials, one pointing at a specific section. No screens visible. Shot from outside the room through a glass panel. Focus on the glass, both figures soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm premium interior lighting. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 112. `legal-corridor-professional.jpg`

A candid lomography-style photograph of a South Asian man in his 40s walking down the corridor of a traditional professional services building — panelled walls, warm carpet, formal but not cold. He carries a document folder and walks with a measured pace. Shot from behind at a distance, the corridor receding. A door partially open at the side creates an architectural frame. Focus sits on the carpet in the foreground, the figure slightly soft in the middle-distance. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm wood-toned corridor light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 113. `retail-floor-coaching.jpg`

A candid lomography-style photograph of a Black woman in her 30s and a younger East Asian woman in her 20s in a conversation on the floor of a modern retail environment — not during a customer interaction but during a quiet period. One is coaching the other, leaning in slightly, warm and direct. The retail environment around them is contemporary and well-designed: clean shelving, good lighting, a sense of quality. Shot from a distance through the blurred edge of a display unit in the foreground. Focus on the display, both women soft behind. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm retail light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 114. `hospitality-hotel-warmth.jpg`

A candid lomography-style photograph of a South Asian woman in her 30s in a hotel lobby or front-of-house setting — mid-conversation with a colleague, warm and professional. The lobby is luxurious in an understated way: marble, warm lighting, fresh flowers. The exchange feels like a training or briefing moment. Shot from the side through a lobby plant in the foreground. Focus on the plant, the two figures soft behind. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm hotel light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 115. `tech-office-casual-diverse.jpg`

A candid lomography-style photograph of a small technology company office — casual in style, open-plan, exposed ceilings, industrial elements — with a diverse group of three or four colleagues at a standing table in a quick debrief: a Black man in his 30s, an East Asian woman in her 20s, a white man in his 40s. Casual dress — jeans, trainers. The energy is informal but focused. Shot from behind a structural column. Focus on the column, the group soft. Shot on Kodak Portra 400 film with a 35mm lens at f/3.5. Warm industrial pendant lights mixed with cool natural daylight. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 116. `tech-standing-desk.jpg`

A candid lomography-style photograph of a South Asian man in his late 30s at a standing desk in a contemporary tech company office — leaning on the desk edge slightly, looking down at printed notes, pen in hand. Around him: plants, cables tidied but visible, a water bottle, a pair of headphones hanging on a monitor arm (monitor facing away from camera). Shot from a distance through the soft blur of another desk's monitor in the foreground. Focus on the foreground monitor edge, the man soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Mixed office light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 117. `consulting-client-meeting.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s and two clients — a white man in his 50s and a Black woman in her 40s — seated at a premium glass-topped meeting table. The consultant is mid-point, one hand on the table, the two clients listening. The room is glass-fronted with a city view beyond, the exterior blown out to pale light. Shot from the glass wall outside, focus on the glass, the three figures in soft focus. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm premium interior light, cool exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 118. `professional-services-lobby.jpg`

A candid lomography-style photograph of a premium professional services firm lobby — pale stone floors, a reception desk in the background, well-designed furniture, fresh flowers or a large plant. A person waits — a Middle Eastern man in his 40s, seated, one leg crossed, looking at printed materials in his hand. Not at his phone. The atmosphere is calm and formal. Shot from the entrance, the lobby reception visible in soft focus beyond the waiting figure. Shot on Fuji Pro 400H film with a 35mm lens at f/5.6. Warm premium interior light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 119. `onboarding-session-diverse.jpg`

A candid lomography-style photograph of a small onboarding session — three new starters seated around a small table, a South Asian woman in her late 20s, a Black man in his mid-20s, and a white woman in her early 30s — all with notebooks in front of them, all engaged. One is writing, one is asking a question, one is listening. The setting is a contemporary meeting room or training space. Shot from behind one participant's shoulder. Focus on the shoulder, the group soft behind. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Warm contemporary office light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 120. `onboarding-manager-welcome.jpg`

A candid lomography-style photograph of a white man in his 40s welcoming a South Asian woman in her late 20s as she arrives — both standing, one gesturing toward the office space as he introduces it, the other taking it all in. The scene is warm and relaxed — this is a welcoming moment, not a formal handshake. Shot from the side, slightly at a distance, through the blurred vertical of a partition edge. Focus on the partition, the two figures soft. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm open-plan office light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 121. `mentor-mentee-age-gap.jpg`

A candid lomography-style photograph of a Black man in his mid-50s and an East Asian woman in her mid-20s in a 1:1 mentoring moment — a clear generational span between them, both at a small table, coffee cups present. He is leaning forward with quiet authority and warmth, sharing something important; she is listening with a notebook open. The atmosphere is one of genuine transfer — of experience to potential. Shot from outside the room through a glass partition. Focus on the glass, both figures soft inside. Shot on Kodak Portra 160 film with an 85mm lens at f/2. Warm window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 122. `practice-solo-man-standing.jpg`

A candid lomography-style photograph of a Middle Eastern man in his 40s standing alone in a modern meeting pod or private office, speaking aloud — mouth slightly open mid-sentence, one hand making a contained gesture. He is practicing a conversation alone. Shot from outside through the glass of the pod, the glass creating a faint reflection of the corridor. Focus on the glass, the man slightly soft inside. Shot on Fuji Pro 400H film with a 35mm lens at f/2.8. Warm interior pod light against cooler corridor exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 123. `practice-headphones-black-woman.jpg`

A candid lomography-style photograph of a Black woman in her early 30s seated at a desk with headphones on — eyes closed, head very slightly bowed, in the full absorption of listening to something. It is the posture of someone inside a conversation, not observing one. The desk has a notebook, a pen, a glass of water. Shot through the soft blur of a plant in the foreground. The background is a warm blur of a modern private office or focus room. Shot on Kodak Portra 400 film with an 85mm lens at f/2. Warm sidelight from a window. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 124. `reflection-south-asian-man-notes.jpg`

A candid lomography-style photograph of a South Asian man in his 30s seated alone at a desk post-session — headphones around his neck, writing in a notebook. His expression is focused and private, somewhere between concentration and processing. The desk has lived-in character: the notebook, a pen, a mug, a water glass. Warm late-afternoon window light from behind. Shot from across the desk through the blurred edge of a plant or monitor. Focus on the foreground element, the man soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm amber, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 125. `customer-service-woman-focus.jpg`

A candid lomography-style photograph of a white woman in her 30s at a customer service or contact centre desk — headset on, mid-conversation, expression engaged and calm. She is not smiling for a camera; she is simply in it. The desk has character: a pen, a notepad, a mug. The monitor faces away from camera. Shot through the soft blur of a desk plant in the foreground. Shot on Kodak Portra 160 film with an 85mm lens at f/2. Mixed warm-cool light — window and overhead. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 126. `customer-service-east-asian-man.jpg`

A candid lomography-style photograph of an East Asian man in his 30s at a contact centre or support desk — headset on, leaning forward slightly, expression attentive. Mid-call. His desk has the normal signs of real work: a notepad, sticky note on the partition edge, a pen. Shot from behind a partition edge in the foreground, which creates a dark vertical at the left of the frame. Shot on Kodak Gold 200 film with an 85mm lens at f/2. Warm mixed office light. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 127. `leadership-moment-black-woman.jpg`

A candid lomography-style photograph of a Black woman in her late 40s at the head of a modern meeting room table — not presenting, but presiding over a discussion with quiet ease. She is listening with her arms loosely folded, a slight nod. Two or three other people are visible in soft focus across the table. Shot from the corner of the room, the room's glass wall creating a reflection at the frame edge. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm meeting room light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 128. `leadership-thinking-east-asian-woman.jpg`

A candid lomography-style photograph of an East Asian woman in her early 50s standing at a large window in a corner office or meeting room, looking out, thinking — the posture of someone making a considered decision. Shot from inside the room, the window frame creating a strong vertical. Her reflection is faintly visible in the glass. She wears a well-cut jacket. Shot on Kodak Portra 400 film with an 85mm lens at f/2. Complex light: cool window light on her lit side, warm interior amber behind her. Uncorrected. Visible grain, matte. The framing clips her head slightly at the top. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 129. `sales-negotiation-pair.jpg`

A candid lomography-style photograph of a South Asian man in his 40s and a white woman in her 30s at opposite sides of a table in what reads as a commercial or negotiation context — documents on the table between them, both leaning slightly forward. The atmosphere is focused and calm, not adversarial. Shot from the side through the blurred edge of the table leg or a chair in the foreground. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible documents, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 130. `sales-confidence-walk.jpg`

A candid lomography-style photograph of a Black woman in her 30s walking through a modern corporate lobby or corridor with the composed confidence of someone going into a meeting they are prepared for. She carries a padfolio or notebook, posture upright, pace unhurried. Shot from the side, slightly ahead of her, the lobby architecture around her. Focus is slightly soft from her motion. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm lobby light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 131. `ld-review-analytics.jpg`

A candid lomography-style photograph of a Middle Eastern woman in her 40s and a South Asian man in his 30s looking together at a printed report on a desk — one is pointing at a section with a pen, the other is listening with crossed arms and a thoughtful expression. This is an L&D review: someone looking at training outcomes data. The desk has character: a coffee, a highlighter, a second document. No screens visible. Shot from across the desk through a blurred plant. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 132. `ld-group-needs-conversation.jpg`

A candid lomography-style photograph of a small planning conversation — a Black woman in her 40s (L&D lead energy) and two other colleagues, a South Asian woman in her 30s and a white man in his 40s, around a table with papers. The feel is collaborative and pre-work: agreeing something before it happens. One is writing, one is explaining, one is thinking. Shot from outside the room through the glass wall. Focus on the glass, the three soft inside. Shot on Kodak Portra 160 film with a 50mm lens at f/2.8. Warm contemporary meeting room light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 133. `hr-one-to-one-warmth.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s and a younger Black man in his mid-20s in a warm 1:1 HR conversation — she is leaning forward with a compassionate expression, he is listening with a slightly relieved look. The atmosphere is supportive, not formal. A box of tissues is on the table nearby — but nobody is crying; it's just there. Two cups of tea or coffee. Shot from outside the room through a glass panel. Focus on the glass, both soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 134. `difficult-conversation-pair.jpg`

A candid lomography-style photograph of two people in what reads as a difficult but constructive conversation — a white man in his 40s and a Black woman in her 30s. Neither is angry; both are serious, measured. One has their hands on the table, the other is leaning back slightly, listening carefully. The atmosphere is tense but professional. Shot from the glass meeting room wall, focus on the glass, both soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Slightly cooler, less warm light than usual — appropriate to the mood. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 135. `blog-thinking-alone-window.jpg`

A candid lomography-style photograph of a South Asian woman in her 30s alone at a window in a modern office, looking out — not wistfully, but thinking. She has a coffee cup in both hands. Her expression is the focused calm of someone working something through. Shot from inside the room through the soft blur of a plant at the left edge. The window exterior is blown out. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Cool window backlight, warm amber interior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 136. `blog-reading-absorbed.jpg`

A candid lomography-style photograph of an East Asian man in his 40s in a contemporary office or library-style breakout space, reading a printed document or book — held in both hands, head slightly tilted, completely absorbed. He sits in a comfortable chair by a window. Shot from the side through the blurred vertical of a bookcase or shelving unit at the frame edge. The background is warm blur. Focus on the foreground shelf, the man soft behind. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm window light, uncorrected. Visible grain, matte. 4:5 aspect ratio. No legible text on the document, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 137. `blog-notebook-writing.jpg`

A candid lomography-style photograph of a Black woman in her 30s writing in a notebook at a desk — pen moving, left hand flat on the page, concentration in her expression. She is recording something important. The desk has a coffee cup, a second pen, a phone face-down. Shot from slightly above and to the side through the blurred edge of a plant. The background is a warm blur of a contemporary workspace. Focus sits on the pen and page, her face slightly soft above. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm sidelight from a window. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible writing, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 138. `blog-conversation-two-people.jpg`

A candid lomography-style photograph of two people in conversation in a contemporary setting — a Middle Eastern man in his 40s and a white woman in her 30s — at a small café table or office breakout table, coffee cups in front of them, one speaking, one listening with genuine attention. The scene is warm and engaged. Shot from the side through the blurred edge of a chair back. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm ambient light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 139. `diversity-group-lunch.jpg`

A candid lomography-style photograph of a mixed group of five or six colleagues at a long table during an informal working lunch — papers and laptops pushed aside to make room for food. A genuinely diverse group: Black, South Asian, East Asian, white, various ages and genders. The atmosphere is warm and social — laughter at one end, quieter conversation at the other. Shot from the end of the table through a blurred chair in the foreground. Focus on the foreground chair, the group soft behind. Shot on Kodak Portra 160 film with a 35mm lens at f/4. Warm overhead light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 141. `portrait-black-woman-director.jpg`

A candid lomography-style close portrait of a Black woman in her late 40s — the energy of a senior director, someone who has run many rooms. Caught in a moment of quiet authority between sentences: lips barely parted, eyes steady, expression composed and warm but not performing warmth. She wears a well-cut jacket in a muted earthy tone, minimal jewellery. Shot through the faint edge of a glass partition that creates a barely-there vertical ghosting across the left quarter of the frame. The background is the warm soft blur of a premium corporate interior — pale stone or cream walls, nothing identifiable. Focus lands on her near eye. Shot on Kodak Portra 400 film with a 105mm lens at f/1.8. Warm window light from the right, slightly cooler overhead, uncorrected white balance. Visible film grain, low contrast, matte. The framing clips the top of her head by a small amount. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 142. `portrait-south-asian-man-director.jpg`

A candid lomography-style close portrait of a South Asian man in his early 50s — senior, measured, the kind of professional who chooses his words carefully. He is mid-thought, eyes slightly lowered then lifting, as if he has just decided what he wants to say. He wears a dark well-cut suit jacket, no tie. Shot from a three-quarter angle through the blurred vertical of a door frame at the left edge — a dark stripe of wood or metal. The background is the warm blur of a Big Four consulting or law firm interior: pale walls, natural light, the hint of a city window. Focus sits on his near cheekbone, eyes fractionally softer. Shot on Fuji Pro 400H film with a 105mm lens at f/2. Complex light: cool window light on his lit side, warm interior amber in the shadows. Visible film grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 143. `portrait-east-asian-woman-post-conversation.jpg`

A candid lomography-style close portrait of an East Asian woman in her early 40s in the quiet moment just after a significant conversation — not sad, not relieved, just present. Her expression is the composed stillness of someone who has just said something important. She wears a simple dark top. Shot from slightly to the side, a blurred shoulder or desk edge partially visible at the lower-left frame corner. The background is entirely warm soft focus — the abstract shapes of a premium corporate interior. Focus lands on her near eye, slightly forward. Shot on Kodak Portra 160 film with a 105mm lens at f/1.8. Warm amber light from a window behind her, creating gentle halation around her hair. Slightly cooler overhead. Uncorrected white balance. Visible grain, matte. The framing is slightly tight, head near the top edge. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 144. `portrait-white-woman-ld-leader.jpg`

A candid lomography-style close portrait of a white woman in her late 40s with an open, thoughtful expression — the demeanour of someone who leads learning and development: curious, warm, unhurried. She is listening to someone just out of frame, head slightly tilted, a quiet smile forming. She wears a soft blouse or knitwear. Shot through the blurred edge of a plant in the foreground, green bokeh partially softening the lower-left of the frame. The background is warm blur — a modern meeting room or training space. Focus lands on her near eye. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. Warm amber window light. Uncorrected white balance. Visible grain, low contrast, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 145. `portrait-middle-eastern-man-consulting.jpg`

A candid lomography-style close portrait of a Middle Eastern man in his mid-40s with the composed professional energy of a senior management consultant — precise, warm, confident in his analysis. He is mid-explanation, eyes engaged and direct, one hand making a small contained gesture at the edge of the frame. He wears a well-fitted dark jacket. Shot through the faint ghosting of a glass partition, its vertical line running through the near corner. The background is the warm soft blur of a premium glass-fronted office. Focus sits on his gesturing hand, face fractionally softer. Shot on Kodak Portra 400 film with a 105mm lens at f/2. Warm window light, slightly cooler overhead. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 146. `portrait-black-woman-sales.jpg`

A candid lomography-style close portrait of a Black woman in her early 30s with the warm, direct energy of someone who is very good at commercial conversations — confident without being pushy, persuasive through clarity and warmth. She is looking just past the lens, mid-point, expression alive. She wears a smart blazer. Shot through the blurred shape of a coffee cup or glass in the near foreground. The background is the warm soft blur of a premium meeting room or hotel meeting space. Focus sits on her near eye. Shot on Fuji Pro 400H film with a 105mm lens at f/1.8. Warm amber window light, uncorrected. Visible grain, low contrast, matte. Slightly tight framing. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 147. `portrait-south-asian-woman-ld.jpg`

A candid lomography-style close portrait of a South Asian woman in her early 40s with the warm, organised energy of a senior L&D professional — someone who thinks carefully about how people grow. She is mid-conversation, expression engaged and considered, one hand visible at the lower frame edge with a pen. She wears a professional but warm-toned blazer or blouse. Shot from a three-quarter angle through the blurred edge of a plant at the frame corner. Background is warm blur of a modern training or meeting space. Focus on her near eye. Shot on Kodak Portra 160 film with a 105mm lens at f/2. Warm sidelight. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 148. `portrait-east-asian-man-executive.jpg`

A candid lomography-style close portrait of an East Asian man in his early 50s — the stillness and quiet of someone very senior. He is not performing authority; he is simply in it. Expression composed, eyes slightly lowered in thought, then lifting. He wears a dark well-cut jacket, no tie. Shot through the blurred vertical of a door frame at the frame edge. Background is the warm blur of an executive floor corporate interior — high-quality finishes, cool daylight. Focus on his near eye. Shot on Fuji Pro 400H film with a 105mm lens at f/1.8. Cool window light on his lit side, warm interior amber in the shadows. Uncorrected. Visible grain, matte. Framing clips the top of his head slightly. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 149. `portrait-white-man-consultant-junior.jpg`

A candid lomography-style close portrait of a white man in his early 30s with the earnest, sharp energy of a junior consultant who is trying to make an impression through quality of thinking rather than confidence of manner. He is listening very carefully — brow very slightly furrowed, eyes focused, expression attentive. He wears a smart shirt. Shot through the blurred shape of a chair back at the lower frame edge. Background is warm blur of a consulting firm office. Focus on his face, slightly forward of the eyes. Shot on Kodak Gold 200 film with an 85mm lens at f/1.8. Warm mixed light. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 150. `portrait-black-man-manager.jpg`

A candid lomography-style close portrait of a Black man in his mid-40s with the warm authority of a good manager — someone people trust, who makes time for people. He is listening with his full attention, chin resting lightly on one hand, expression steady and kind. He wears a smart-casual shirt or lightweight jacket. Shot through the blurred near edge of a table or glass in the foreground. Background is the warm blur of a premium contemporary meeting room. Focus on his face — slightly forward of the eyes. Shot on Fuji Pro 400H film with a 105mm lens at f/2. Warm window light, uncorrected. Visible grain, low contrast, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 151. `portrait-south-asian-woman-junior.jpg`

A candid lomography-style close portrait of a South Asian woman in her mid-20s — the focused energy of someone earlier in their career, absorbing everything. She is mid-note-taking, pen in hand at the bottom of the frame, looking up at whoever is speaking with genuine attention. Her expression is concentrated and earnest. She wears a simple smart top. Shot through the blurred edge of a desk plant. Background is warm blur of a modern corporate office. Focus on the pen and her near hand, face slightly softer. Shot on Kodak Portra 400 film with an 85mm lens at f/2. Warm window light, uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 152. `portrait-white-woman-headphones-moment.jpg`

A candid lomography-style close portrait of a white woman in her late 30s lifting headphones from her ears — both hands raised, the headphones mid-removal, eyes briefly closing in the small private exhale of finishing something. The expression is inward and unguarded. She wears a simple top. Shot from the side, slightly behind, a blurred desk surface in the lower foreground. Background is warm blur of a private office or focus room. Focus on the headphones being lifted, face slightly softer. Shot on Fuji Pro 400H film with an 85mm lens at f/2. Warm afternoon window light, uncorrected. Visible grain, low contrast, matte. Slightly tilted framing. 4:5 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 153. `portrait-middle-eastern-woman-legal.jpg`

A candid lomography-style close portrait of a Middle Eastern woman in her late 40s with the composed precision of a senior legal professional — someone who reads situations very carefully before speaking. She is in a moment of quiet consideration: lips together, eyes steady, head very slightly tilted. She wears a formal but not severe dark jacket. Shot through the faint edge of a glass panel or window reflection. Background is the warm dark-and-light blur of a law firm interior — dark wood, pale light. Focus on her near eye. Shot on Kodak Portra 400 film with a 105mm lens at f/1.8. Warm interior pendant light mixed with cool grey window light. Uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 154. `portrait-east-asian-woman-service.jpg`

A candid lomography-style close portrait of an East Asian woman in her early 30s wearing a small wireless earpiece — mid-call, expression warm and attentive, one hand making a small natural gesture. She is not performing professionalism; she is simply in the conversation. She wears a smart-casual top. Shot through the blurred edge of a partition at the left frame. Background is warm blur of a modern contact centre or office. Focus on the earpiece and her near cheek, eyes slightly softer. Shot on Fuji Pro 400H film with an 85mm lens at f/1.8. Warm mixed light, uncorrected. Visible grain, matte. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 155. `portrait-black-man-senior-advisor.jpg`

A candid lomography-style close portrait of a Black man in his late 50s, silver at the temples — the calm presence of someone very experienced. He is listening with the quality of attention that only comes from decades of practice: still, generous, complete. His expression is warm and steady. He wears a well-cut dark jacket. Shot through the blurred vertical of a door frame. Background is warm blur of a premium corporate interior. Focus on his near eye. Shot on Kodak Portra 160 film with a 105mm lens at f/1.8. Warm amber light from a window, slightly cooler overhead. Uncorrected. Visible grain, matte. The framing is slightly tilted. 4:5 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 156. `lawfirm-partners-conference.jpg`

A candid lomography-style photograph of two people in the conference room of a prestigious law firm — a dark-wood panelled room with a long polished table, leather chairs, and original artwork on the walls. A Middle Eastern woman in her 50s and a white man in his 50s are seated across from each other, reviewing printed documents. The room is lit by warm pendant lights and the grey diffused light of a large city-facing window. Shot from outside the room through a glass panel in the door, the door's frame creating a dark border at the left edge. Focus on the door frame, both figures soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm interior against cool grey window light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text on documents, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 157. `bigfour-glass-client-meeting.jpg`

A candid lomography-style photograph of three people in the glass-walled meeting room of a Big Four consulting firm — floor-to-ceiling windows behind them revealing a city skyline. A South Asian woman in her 40s presents at the head of the table; two clients — a Black man in his 50s and a white woman in her 40s — listen on the other side. The table is long and sleek, the interior finishes expensive and understated. Shot from the glass corridor outside, the glass creating a faint reflection of the hallway. Focus on the glass, the three figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm interior premium lighting against the cool grey city view beyond. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 158. `consulting-boardroom-cityview.jpg`

A candid lomography-style photograph of a management consulting firm's boardroom — a round glass table, contemporary art on the wall, pale stone floors, floor-to-ceiling windows with a city view. An East Asian man in his 40s and a white woman in her 50s are mid-discussion, both leaning slightly forward. The city beyond the window is slightly out of focus, towers and glass visible. Shot from just inside the doorway, the door frame creating a strong vertical at the right edge. Focus on the door frame, the room in soft focus. Shot on Kodak Portra 160 film with a 35mm lens at f/3.5. Warm premium interior lighting against the cool city exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 159. `professional-services-lobby-conversation.jpg`

A candid lomography-style photograph of two people in the marble-floored lobby of a premium professional services firm — double-height ceiling, concealed warm lighting, a reception desk in the background, a large architectural plant. A South Asian man in his 40s and a Black woman in her 50s stand in quiet conversation, both holding padfolios. The space around them signals quality without ostentation. Shot from across the lobby through a blurred architectural column. Focus on the column, both figures soft. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Warm amber lobby light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 160. `accounting-firm-document-review.jpg`

A candid lomography-style photograph of two professionals in a meeting room of a large accounting or audit firm — a focused review session, printed reports spread on the table. A white woman in her 40s and a South Asian man in his 30s are studying a document together, one pointing at a section with a pen. The room is corporate but contemporary: pale walls, a long table, good overhead lighting. No screens visible. Shot from outside the glass meeting room wall. Focus on the glass, both figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm overhead light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 161. `lawfirm-corridor-two-lawyers.jpg`

A candid lomography-style photograph of two lawyers walking along the corridor of a traditional law firm building — panelled walls, warm carpet, the quiet seriousness of a well-run institution. A Black man in his 40s and a Middle Eastern woman in her 30s walk side by side, mid-conversation, both carrying document folders. The corridor has depth: doors at intervals, a painting on the wall, ceiling lights receding. Shot from behind at a distance, slightly to the side. Focus on the carpet in the foreground, both figures in soft focus mid-distance. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Warm wood-toned corridor light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 162. `premium-pitch-moment.jpg`

A candid lomography-style photograph of a pitch moment in a premium client meeting room — a glass table, an East Asian woman in her 40s presenting from the head, two clients (a white man in his 50s and a South Asian woman in her 40s) listening attentively across the table. The room has quality finishes: a city view through glass, contemporary furniture, a large architectural plant. The atmosphere is focused and professional. Shot from the glass wall outside, focus on the glass, the three figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm interior against the cool city view. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 163. `city-office-window-conversation.jpg`

A candid lomography-style photograph of two people standing at the floor-to-ceiling window of a premium city office, looking out at the skyline — a Black woman in her 40s and a South Asian man in her 50s. They are mid-conversation, both with their hands behind their backs or loosely clasped, the city spread out below them. The window view is slightly overexposed — the city towers in pale, diffused light. Shot from across the room through the blurred shapes of chairs and a table in the foreground. Focus on the foreground furniture, both figures backlit and slightly soft. Shot on Kodak Portra 160 film with a 50mm lens at f/3.5. Warm interior against the cool city exterior, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 164. `formal-room-constructive-discussion.jpg`

A candid lomography-style photograph of a formal meeting room — possibly a law firm or professional services firm — where a difficult but constructive conversation is happening. A white man in his 50s and a Middle Eastern woman in her 40s are across the table: neither tense nor performing ease. Both are measured and serious. Documents are on the table, neither looking at them right now. Shot from the glass door panel, focus on the glass, both figures soft inside. The room has dark wood and warm pendant light. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm interior premium light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 165. `hotel-conference-prepresentation.jpg`

A candid lomography-style photograph of a well-appointed hotel conference room before a presentation begins — a South Asian woman in her 40s standing at one end of the room, reviewing notes on a printed sheet, focused and composed. The room is laid out for delegates: upholstered chairs, a long table, warm ambient lighting, water glasses at each place. One delegate — a Black man in his 50s — is already seated, reading the programme. Shot from the door of the room, the door edge creating a dark frame at the left. Focus on the door edge, the room in layered soft focus. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Warm hotel conference room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 166. `executive-pair-breakout.jpg`

A candid lomography-style photograph of two very senior professionals in a premium breakout space — the kind attached to an executive floor. An East Asian woman in her early 50s and a white man in his late 50s sit in well-designed chairs at a low table, coffee cups in front of them, in the relaxed but substantive conversation of people who have known each other for years. The space has quality: a large window, an architectural plant, pale stone or polished wood floors. Shot from a distance through the blurred shape of a plant or partition. Focus on the foreground, both figures soft. Shot on Kodak Portra 400 film with a 85mm lens at f/2.4. Warm executive-floor light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 167. `marble-lobby-professional-services.jpg`

A candid lomography-style photograph of the marble-floored lobby of a premium professional services or law firm — the solidity and quiet authority of a well-established institution. A Middle Eastern man in his 40s waits in a leather chair, one leg crossed, reviewing printed materials. He is not on his phone. The lobby behind him has depth: a reception desk, a fresh orchid arrangement, the geometry of a double-height ceiling. Shot from the entrance, the lobby framed by the entrance door surround. Focus on the near marble floor, the figure soft in the middle-distance. Shot on Kodak Gold 200 film with a 35mm lens at f/5.6. Warm interior lobby lighting — amber and honeyed — against the cooler daylight from the entrance. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 168. `glass-tower-pair-at-window.jpg`

A candid lomography-style photograph of two figures — small in the frame — standing at the floor-to-ceiling glass of a premium glass tower office, looking out at the city below. The scale of the space dwarf them: a vast floor, a high ceiling, the city beyond the glass. A Black man in his 40s and a South Asian woman in her 30s. Shot from across the open floor plan, through the blurred shapes of desks and chairs. Focus on the foreground furniture, the two figures backlit and soft against the blown-out window. Shot on Fuji Pro 400H film with a 50mm lens at f/4. Interior warm against the pale city exterior. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 169. `consulting-three-person-room.jpg`

A candid lomography-style photograph of a three-person meeting in a management consulting firm's meeting room — a round glass table, city view through glass, a white woman in her 50s, a South Asian man in his 40s, and a Black woman in her 30s. The senior partner is mid-point, hand slightly raised; the others are listening, one with a notebook. The room is contemporary and well-resourced. Shot from outside the glass wall, focus on the glass, the three figures soft inside. Shot on Kodak Portra 160 film with a 50mm lens at f/2.8. Warm interior against cool city exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 170. `legal-document-table.jpg`

A candid lomography-style photograph of a premium law firm conference room — a long dark-wood table with printed legal documents spread across it. An East Asian man in his 40s and a Middle Eastern woman in his 50s are at one end, reviewing the documents together. The room has the gravity of the legal profession: dark wood, leather, good art, warm pendant light. Shot from outside through the glass door panel. Focus on the door panel, both figures soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm pendant light against the cool grey of the window. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text on documents, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 171. `formal-handshake-lawfirm.jpg`

A candid lomography-style photograph of a handshake in the context of a formal professional services or law firm meeting — not a post-deal moment but the greeting handshake at the beginning. A South Asian man in his 50s and a white woman in her 40s, in a dark-wood conference room. The handshake is in the centre of the frame; faces are visible but slightly soft above. Both are in formal dress. Shot from the side at a low angle, the table edge creating a dark horizontal at the bottom of the frame. Focus on the joined hands. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm interior pendant light. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 172. `corporate-reception-waiting.jpg`

A candid lomography-style photograph of the reception area of a premium corporate or professional services building — a Black woman in her 30s is seated in a well-designed reception chair, padfolio on her knee, composed and ready. She is waiting for a meeting. The reception behind her has quality: a reception desk with a discreet receptionist, an architectural plant, a piece of original art on the wall. Shot from slightly to the side, a large reception plant partially obscuring the left frame edge. Focus on the plant, the seated figure soft behind. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Warm lobby amber light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 173. `premium-presenting-two-listeners.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s presenting to two senior colleagues in a premium meeting room — one a Black man in his 50s, the other a white woman in her 40s. She is at the head of the table, one hand on the surface making a point; the two are listening with the attentive posture of people who are genuinely evaluating what they hear. The room is executive quality: pale stone, a city view, a long table. Shot from outside the glass wall, focus on the glass, the three soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm interior light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 174. `executive-floor-walkaround.jpg`

A candid lomography-style photograph of a senior Black woman in her late 40s walking through an executive floor open-plan space — fewer people, quieter, higher quality finishes than the floors below. She moves with easy authority, a colleague falling into step beside her. The space is premium: pale stone floors, Scandinavian-influenced furniture, floor-to-ceiling windows. Shot from a distance through a blurred structural column. Focus on the column, the two figures soft. Shot on Kodak Portra 400 film with a 50mm lens at f/3.5. Warm office light. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 175. `after-meeting-premium-corridor.jpg`

A candid lomography-style photograph of two people in the corridor of a premium corporate building after a significant meeting — a South Asian man in his 40s and a Middle Eastern woman in her 30s, both walking but talking as they go, the de-brief happening in motion. The corridor has quality: pale stone floors, architectural lighting, a large window at the far end. Shot from behind and to the side, both figures slightly in motion. Focus on the corridor floor in the foreground, both figures soft in the middle-distance. Shot on Fuji Pro 400H film with a 50mm lens at f/3.5. Warm interior against the pale window light ahead. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 176. `sales-pitch-preparation.jpg`

A candid lomography-style photograph of a Black woman in her 30s alone in a premium meeting room before a pitch — standing at the table, reviewing a printed deck in her hands, expression focused and composed. She is not nervous; she is ready. The room is well-appointed: a glass table, a city view through the windows, a jug of water. Her jacket is draped over the back of a chair. Shot from the glass wall outside, focus on the glass, the figure soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm interior against the cool city exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 177. `sales-confidence-arriving.jpg`

A candid lomography-style photograph of a South Asian man in his early 40s walking through the glass lobby of a premium corporate building — composed, padfolio under his arm, the particular posture of someone who has prepared well and knows it. He is arriving for an important meeting. The lobby is quality: marble floors, a high ceiling, warm lighting. Shot from inside looking toward the entrance, the glass doors partially creating a backlit frame. Focus sits on the glass lobby doors, the figure slightly soft approaching. Shot on Kodak Portra 400 film with a 35mm lens at f/2.8. Warm interior against the pale exterior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 178. `sales-client-listening.jpg`

A candid lomography-style photograph of an East Asian woman in her 40s listening to a client across a premium meeting table — listening with the calibrated attention of a very good salesperson, reading the room as she hears. She is leaning slightly forward, hands quietly clasped on the table, expression warm and open. Two soft-focus client shapes are visible across the table. Shot through the blurred near edge of the table. Shot on Fuji Pro 400H film with a 85mm lens at f/2. Warm premium meeting room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 179. `sales-debrief-corridor.jpg`

A candid lomography-style photograph of two people in a private corridor debrief after a sales meeting — a Middle Eastern man in his 40s and a Black woman in her 30s, both standing, one speaking quietly with a contained expression (it went well), the other nodding. The corridor of a premium office building. Shot from a distance through a blurred partition edge. Focus on the partition, both figures soft. Shot on Kodak Gold 200 film with a 50mm lens at f/2.8. Warm interior corridor light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 180. `sales-head-of-table.jpg`

A candid lomography-style photograph of a white woman in her 40s presenting at the head of a premium boardroom table to four or five seated clients of varied ethnicities — she is mid-point, hand on the table, expression engaged and warm. The room is a premium client meeting room: glass, city view, quality finishes. Shot from behind one of the seated clients, their head and shoulder soft in the foreground. Focus on the nearest client shoulder, the presenter slightly soft behind. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm interior light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 181. `sales-commercial-table.jpg`

A candid lomography-style photograph of a South Asian man in his 30s and a Black woman in her 40s across a premium meeting table — a commercial negotiation context, both professional and warm. Neither is hard-selling; both are finding the right arrangement. Documents sit between them on the table. Shot from the side through the blurred table leg or chair in the foreground. Shot on Kodak Portra 160 film with a 50mm lens at f/2.4. Warm premium room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 182. `sales-pair-postpitch.jpg`

A candid lomography-style photograph of two people in a quiet moment just after a pitch — a Black man in his 30s and a Middle Eastern woman in his 40s walking together through a premium lobby or corridor. The pitch is done. The energy is quiet relief — not celebration, just the exhale of something completed. One has a padfolio under their arm. Shot from the side, slightly behind, both figures slightly in motion. Focus on the corridor floor, both soft. Shot on Fuji Pro 400H film with a 50mm lens at f/3.5. Warm lobby light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 183. `management-senior-listening-team.jpg`

A candid lomography-style photograph of a senior East Asian woman in her 50s at the head of a modern glass meeting room table, listening as one of her team makes a point. Her body language is open and genuinely attentive — no performing of interest, just real interest. Two other team members are visible in soft focus. Shot from the glass corridor outside. Focus on the glass, the room soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm meeting room light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 184. `management-one-to-one-premium.jpg`

A candid lomography-style photograph of a 1:1 performance conversation in the premium meeting room of a well-resourced company — a Black man in his 40s (manager) and a South Asian woman in her late 20s (direct report). He is leaning forward, making a point with care; she has her notebook, listening openly. The room is contemporary and well-lit, a window behind. Shot through the partially open glass door. Focus on the door frame, both figures soft inside. Shot on Fuji Pro 400H film with a 85mm lens at f/2. Warm light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 185. `management-coaching-moment.jpg`

A candid lomography-style photograph of a coaching conversation in a contemporary office — a Middle Eastern woman in her 40s (coach/manager) leaning forward toward a younger white man in his late 20s, both at a small table. She is making a point with quiet emphasis; he is listening with visible engagement. The energy is developmental, not evaluative. Shot from outside the glass room wall. Focus on the glass. Shot on Kodak Portra 160 film with a 50mm lens at f/2.4. Warm contemporary office light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 186. `abstract-light-through-glass.jpg`

A lomography-style abstract photograph of morning light filtering through the frosted privacy glass of a premium meeting room — diffused rectangles of warm golden light falling on a pale wall and the corner of a polished table. No people. The image is entirely about the quality of light through glass: soft, warm, private. A blurred plant leaf intrudes at the upper edge. The table reflects the light faintly. Shot on Fuji Pro 400H film with a 50mm lens at f/5.6. Warm amber from the morning light, cool cream in the shadows. Visible grain, low contrast, matte. Slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 187. `abstract-empty-boardroom-trust.jpg`

A lomography-style photograph of an empty premium boardroom shortly before a significant meeting — chairs pulled in, water glasses placed at each seat, pens laid on notebooks, the room ready and still. The overhead lighting creates warm rectangles on the long polished table. A coat has already been placed over one chair — someone is here, somewhere. Shot from the doorway, the door frame creating a dark vertical border at the left edge. Focus on the door frame, the room in receding soft focus. Shot on Kodak Portra 400 film with a 35mm lens at f/5.6. Warm pendant lighting, slightly cool daylight from a window at the far end. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 188. `abstract-document-hands.jpg`

A candid lomography-style close-up of a person's hands holding a document — held with both hands, slightly raised, as if being read very carefully. The hands themselves are the subject: the care in them, the grip, the quality of attention they imply. The document is not legible — just the visual texture of a formal printed page. A desk or table surface is visible below, slightly blurred. The person's face is above the frame, not visible. Shot on Fuji Pro 400H film with a 50mm lens at f/3.5. Warm sidelight from a window. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 189. `abstract-stone-glass-exterior.jpg`

A lomography-style photograph of the exterior facade of a premium corporate or civic building — stone, steel, and glass. No people. Shot from below at a slight angle, the building's geometric lines creating a powerful composition — the solidity of stone at the base, the transparency of glass above. Morning or afternoon light falls across the stone face, creating warm and cool zones. The sky is pale and high. Shot on Kodak Portra 400 film with a 35mm lens at f/8. Warm stone, pale blue-grey sky, cool shadow. Uncorrected. Visible grain, low contrast, matte. Slightly tilted framing. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 190. `abstract-careful-deliberation.jpg`

A candid lomography-style photograph of two people in very careful, quiet deliberation — a South Asian woman in her 40s and a white man in her 50s at a table with printed papers between them. Neither is speaking right now; both are thinking, looking at the documents, the energy of a moment where something important is being considered. Shot from outside the glass room wall. Focus on the glass, both figures soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm premium room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 191. `abstract-pen-signing.jpg`

A lomography-style close-up of a hand holding a pen, completing a signature at the bottom of a formal-looking document — the pen just lifting from the page. The hand belongs to someone whose sleeve suggests a formal suit jacket. The document surface is not legible — just the visual texture of an important formal page. The desk surface shows quality: pale leather or dark wood. Shot from above and to the side. Focus on the pen and hand. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Warm sidelight from a window, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 192. `company-team-genuine.jpg`

A candid lomography-style photograph of a small team of four people in a genuine working moment — not posed, not a team photo. They are gathered around a table in a modern, well-lit office, mid-problem-solving: a Black woman in her 30s, a South Asian man in his 30s, a white woman in her 40s, and an East Asian man in his 20s. One is writing on a notepad, one is gesturing, two are watching. The energy is warm and collaborative. Shot from behind one person's shoulder. Focus on the shoulder, the three others soft. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Warm contemporary office light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 193. `company-two-people-care.jpg`

A candid lomography-style photograph that communicates two people who genuinely care about what they are doing — a Middle Eastern woman in her 40s and a Black man in his 30s at a desk, both looking at printed materials, one pointing at something with a pen. The energy is not corporate performance; it's real attention and real investment. The environment is a good contemporary office. Shot through a plant in the foreground. Focus on the plant, both figures soft. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm window light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 194. `ethics-human-hands-open.jpg`

A lomography-style close-up of a person's hands held open and upward on a table — not supplicating, but the natural, open gesture of someone offering something or explaining with honesty. The hands belong to a South Asian woman (visible from wrists down only). The table surface below them is warm wood. The background is entirely out of focus — warm amber blur. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm sidelight from a window. Uncorrected. Visible grain, matte. The framing is close and slightly tilted. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 195. `ethics-careful-thought.jpg`

A candid lomography-style photograph of a person in a moment of careful, considered thought — a Black woman in her 40s alone at a desk, chin resting on one hand, looking at something not in frame, expression meticulous and unhurried. This is not anxiety; it is the quality of someone thinking something through properly before deciding. Shot through a plant at the frame edge. Background is warm blur of a contemporary office. Focus on the foreground plant, the figure soft behind. Shot on Kodak Portra 400 film with a 85mm lens at f/2. Warm sidelight, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 196. `abstract-corridor-light-end.jpg`

A lomography-style photograph of a corridor in a premium office building — no people — the interest entirely in the geometry of light. The corridor recedes into the frame, wall lights creating a rhythm, and at the far end a large window or glass door provides a source of bright, warm, blown-out light — the light at the end of the tunnel. A plant near the window creates a dark organic shape against the light. Shot from the near end of the corridor, slightly off-centre. Focus on the floor ahead, the far light slightly bloomed. Shot on Kodak Gold 200 film with a 35mm lens at f/5.6. Warm window glow at the far end, cooler corridor light at the near end. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 197. `abstract-premium-room-before.jpg`

A lomography-style photograph of a premium corporate meeting room set up for something important — water glasses placed, notebooks laid out, the room ready and waiting. No people. The overhead lighting is warm and even; outside the window, a city view or grey sky. The room's quality finishes are visible: stone, pale wood, a sculptural plant. Shot from the doorway, the door frame framing the scene. Focus on the door frame. Shot on Fuji Pro 400H film with a 35mm lens at f/5.6. Warm interior against cool exterior. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 198. `data-ld-printed-report.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s and a Black man in his 30s reviewing a printed report or data summary at a contemporary desk — bar charts, tables, numbers. She is pointing at one section with a pen; he is studying it carefully. No screen visible. The report is not legible — just the visual impression of data on paper. Shot through the blurred edge of a plant in the foreground. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm office window light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 199. `languages-diverse-faces.jpg`

A candid lomography-style photograph of four people at a table who visibly come from different backgrounds — a genuinely global mix: an East Asian woman, a Black man, a South Asian woman, and a Middle Eastern man, all in their 30s-40s. They are mid-conversation, animated and connected, the energy of people who are finding common ground. Shot from outside the room through a glass wall. Focus on the glass, the four soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm contemporary meeting room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 200. `customisation-detail-attention.jpg`

A lomography-style photograph of a person bent close over a document or printed sheet on a desk, studying it with intense, careful attention — the body language of someone reading something very specifically, not generally. A pen in hand, hovering. The document is not legible. Shot from the side, slightly above, through the blurred edge of a desk plant in the foreground. Shot on Kodak Portra 160 film with a 50mm lens at f/2.8. Warm sidelight, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 201. `security-deliberation-two.jpg`

A candid lomography-style photograph of two people in a serious, careful deliberation — a white woman in her 50s and a South Asian man in his 40s — looking at printed documents together across a premium table. Their expressions are focused and meticulous. The atmosphere is one of due diligence. Shot from outside the glass room wall. Focus on the glass, both figures soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. The premium room is slightly cooler-lit than usual — grey window light, warm interior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 202. `lawfirm-junior-barrister-corridor.jpg`

A candid lomography-style photograph of a young South Asian man in his late 20s — the energy of a junior lawyer or barrister — walking along the corridor of a formal legal building, carrying a bundle of papers or a document folder. The corridor has character: wood panelling, portrait photographs on the wall, good carpet. He is walking with purpose. Shot from behind at a distance. Focus on the carpet in the foreground, the figure soft in the middle-distance. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm panelled corridor light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 203. `accounting-focused-review.jpg`

A candid lomography-style photograph of an East Asian man in his 40s working through a detailed document review alone at a desk — the concentrated posture of someone who cannot afford to miss anything. Printed sheets in front of him, a pen, a highlighter. Expression meticulous and absorbed. Shot through the blurred edge of a desk partition or monitor (monitor facing away) in the foreground. Shot on Kodak Gold 200 film with a 85mm lens at f/2. Warm office window light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 204. `accounting-pair-figures.jpg`

A candid lomography-style photograph of a Black woman in her 40s and a white man in his 30s comparing two printed sheets side by side on a meeting room table — one pointing at something on the left sheet, the other looking at the right sheet. The atmosphere is careful and collaborative. Shot from the side through the blurred edge of a chair back. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm contemporary meeting room light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 205. `consulting-morning-pitch-prep.jpg`

A candid lomography-style photograph of a small consulting team in the early morning before a client pitch — two people at a table in a contemporary meeting room, printed materials spread in front of them, coffee cups, the energy of last-minute preparation. A Middle Eastern man in his 30s and an East Asian woman in her 40s. One is reviewing a deck; the other is making notes. Shot from outside the glass room wall. Focus on the glass, both figures soft inside. Shot on Kodak Portra 400 film with a 35mm lens at f/2.8. Early morning light — soft, slightly cool from outside, warm interior. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible content, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 206. `retail-brand-manager-premium.jpg`

A candid lomography-style photograph of a Black woman in her 40s — a brand or retail manager — in a modern, premium retail or brand environment (not a scruffy high street shop, but a well-designed commercial space). She is in conversation with a younger South Asian woman in her 20s. The coaching energy is warm and purposeful. Shot through the blurred edge of a display fixture in the foreground. Shot on Fuji Pro 400H film with a 50mm lens at f/2.8. Warm premium retail lighting, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 207. `hospitality-gm-conversation.jpg`

A candid lomography-style photograph in the back-of-house or management office of a premium hotel — a white woman in her 50s (hotel GM) in conversation with an East Asian man in his 30s (training or operations manager). The setting is private but well-appointed: a small office with a window, a framed print, a desk with papers. Not a scruffy back-office but the quiet professional space of a well-run hotel. Shot through the open door, the door frame at the left edge. Focus on the door frame, both figures soft inside. Shot on Kodak Portra 160 film with a 50mm lens at f/2.4. Warm interior light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 208. `tech-product-team-casual.jpg`

A candid lomography-style photograph of a small product or tech team in an informal session in a contemporary technology company office — exposed ceilings, glass walls, casual-smart dress. A diverse group: a South Asian woman in her 30s, a Black man in his 20s, a white man in his 30s. They sit around a table with laptops closed and notebooks open, in the middle of a conversation about something that matters. Shot from behind a structural pillar. Focus on the pillar, the group soft. Shot on Kodak Gold 200 film with a 35mm lens at f/3.5. Mixed industrial pendant and natural light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 209. `financial-services-formal-adjacent.jpg`

A candid lomography-style photograph of two professionals in conversation in a premium financial services building — the corridor or breakout space adjacent to a formal trading floor or office environment. A white man in his 40s and a Black woman in his 30s. Both in formal business dress, mid-debrief. The environment is sleek and serious: pale stone, glass, concealed lighting. Shot from a distance through a blurred structural element. Shot on Fuji Pro 400H film with a 50mm lens at f/3.5. Premium interior light, uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 210. `travel-transit-reviewing.jpg`

A candid lomography-style photograph of a South Asian woman in her 40s in transit — seated, airport or train context — reviewing printed notes or a report in her hands. The travelling professional: focused, using the time well, not on her phone. The setting has the visual texture of a good transit space: warm ambient light, the blur of other travellers in the background. Shot from the side through a seat back in the foreground. Focus on the seat, the figure soft behind. Shot on Kodak Portra 400 film with a 85mm lens at f/2.4. Warm transit space lighting, uncorrected. Visible grain, matte. 3:2 aspect ratio. No legible text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 211. `group-bigfour-boardroom.jpg`

A candid lomography-style photograph of six or seven people in the glass-walled boardroom of a Big Four firm — floor-to-ceiling windows with a city skyline behind the table. A diverse group of mixed genders and ethnicities, mid-meeting, one person standing and presenting at the head. The room communicates prestige without ostentation. Shot from the glass corridor outside. Focus on the glass, the room soft inside. Shot on Kodak Portra 160 film with a 35mm lens at f/3.5. Warm interior premium light against the cool city. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 212. `group-lawfirm-team-debrief.jpg`

A candid lomography-style photograph of a legal team debrief in a dark-wood conference room — four people around one end of a long table, the formal room relaxed slightly now the meeting is over. A Black woman in her 50s, a South Asian man in his 30s, a white woman in her 40s, and a Middle Eastern man in his 30s. Documents are on the table. One is speaking; the others are listening and making notes. Shot from outside the room through the glass door panel. Focus on the door panel, the room soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2.4. Warm pendant law firm light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 213. `group-consulting-glass-city.jpg`

A candid lomography-style photograph of four consultants at a glass meeting table in a city-view meeting room — preparing or debriefing, printed materials on the table, the city skyline behind them through floor-to-ceiling glass. A diverse group: South Asian woman in her 40s, East Asian man in his 30s, Black woman in her 30s, white man in his 50s. One is at the head, the others around the table. Shot from the glass wall outside. Focus on the glass. Shot on Kodak Portra 400 film with a 35mm lens at f/3.5. Warm interior against the pale city. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 214. `group-hotel-delegates.jpg`

A candid lomography-style photograph of eight or ten delegates in the conference suite of a premium business hotel — the end of a session, people rising, some still in conversation. A genuinely diverse group of professionals. The room has the quality of a premium hotel conference space: warm carpeted floors, upholstered chairs, good ambient lighting. Shot from the rear of the room through the blurred backs of delegates still seated. Focus on the nearest delegate's shoulder, the room in layered soft focus beyond. Shot on Fuji Pro 400H film with a 35mm lens at f/4. Warm hotel conference light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no legible screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 215. `group-mixed-seniority-premium.jpg`

A candid lomography-style photograph of a mixed-seniority team in a premium open-plan corporate space — some seated, some standing, an informal post-meeting cluster. A Black woman in her 50s (senior), a South Asian man in his 30s, an East Asian woman in her 20s, a white man in his 40s. The energy is genuine and warm — not a staged team photo but a real moment. The office is well-resourced: pale stone, floor-to-ceiling windows, Scandinavian-influenced furniture. Shot from a distance through a blurred column. Focus on the column, the group soft behind. Shot on Kodak Gold 200 film with a 50mm lens at f/3.5. Warm premium office light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 216. `group-executive-round-table.jpg`

A candid lomography-style photograph of a senior leadership team at a round table in a premium executive meeting space — five or six people, diverse in gender and ethnicity, in a substantive working discussion. The round table equalises the space — no obvious head. Coffee cups and printed notes are present. The room is executive quality: quiet, high-ceilinged, well-lit. Shot from outside the glass wall. Focus on the glass, the room soft inside. Shot on Kodak Portra 400 film with a 50mm lens at f/2.8. Warm executive room light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 217. `group-professional-services-walkaround.jpg`

A candid lomography-style photograph of a professional services team walking together through a well-appointed corporate floor — a small group of four, diverse in ethnicity and gender, moving together in the easy way of people who work well together. Two are mid-conversation; the others walk alongside. Shot from behind and to the side, the group in motion. Focus on the floor ahead of them, the group slightly soft. Shot on Fuji Pro 400H film with a 35mm lens at f/3.5. Premium open-plan corporate light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 218. `group-cross-functional-premium.jpg`

A candid lomography-style photograph of a cross-functional group of five people in a well-resourced corporate meeting space — different disciplines, different backgrounds, genuinely mixed. They sit around a table with printed materials, in mid-discussion. A South Asian woman is speaking; a Black man and a white woman are listening; an East Asian man is writing. The room is contemporary and premium. Shot from outside the glass wall. Focus on the glass. Shot on Kodak Portra 160 film with a 35mm lens at f/3.5. Warm corporate room light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 219. `group-understated-win.jpg`

A candid lomography-style photograph of four people in the quiet moment after something has gone well — an understated, professional acknowledgment of a good outcome. A Black woman in her 40s, a South Asian man in his 30s, a white man in her 50s, and an East Asian woman in her 30s in a premium meeting room, papers on the table, the meeting that produced the result now behind them. The expressions are warm but contained — this is the enterprise version of celebration. Shot from outside the glass wall. Focus on the glass. Shot on Kodak Portra 400 film with a 50mm lens at f/2.4. Warm premium room light, uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 220. `group-atrium-enterprise.jpg`

A candid lomography-style photograph of six or seven professionals in the atrium of a premium enterprise building — the kind of atrium that a Deloitte or a major law firm inhabits. High glass ceiling, pale stone floors, multiple levels visible. A diverse group of people in small clusters of conversation. The space communicates the scale and quality of a well-established institution. Shot from across the atrium through a blurred column. Focus on the column, the people small and soft in the architectural space beyond. Shot on Kodak Gold 200 film with a 35mm lens at f/5.6. Complex light: daylight from the glass ceiling, warm interior ambient. Uncorrected. Visible grain, matte. 16:9 aspect ratio. No text, no logos. The image bleeds to all four edges — no border, no vignette, no frame.

---

### 140. `after-session-relief.jpg`

A candid lomography-style photograph of a Black man in his early 30s alone in a small modern meeting room or focus room — he has just finished something. He leans back in his chair, headphones around his neck, one hand resting on the table, expression somewhere between tired and satisfied. A notebook in front of him with a pen. A glass of water. The room behind him has the quiet of a space just used. Shot from the glass partition outside, focus on the glass, the man soft inside. Shot on Fuji Pro 400H film with a 50mm lens at f/2. Warm interior light, slightly cooler from the glass side. Uncorrected. Visible grain, matte. 3:2 aspect ratio. No text, no logos, no screens. The image bleeds to all four edges — no border, no vignette, no frame.
