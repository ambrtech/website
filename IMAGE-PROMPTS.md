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

A candid lomography-style photograph of a woman sitting alone at a small table by a window in a café or building café area — but not lonely. She is looking out the window with a quiet, contained expression — not waiting, not sad, just present. A coffee cup sits in front of her. Her phone is face-down on the table. There is a notebook open but she is not looking at it. The window beyond her is streaked with soft light — morning or afternoon, the outside world a warm abstract blur of shapes and movement. Shot from across the café through the chairs and table legs of an empty table in the foreground, which create a low dark frame. Shot on Kodak Gold 200 film with a 85mm lens at f/2. Uncorrected warm white balance — window light on her face is slightly cool, the room behind her warm amber. Skin tones complex: blue-cool on the lit side, golden on the shadow. Visible grain, low contrast, matte. The frame includes the window frame as a strong vertical. 3:2 aspect ratio. No text, no logos.
