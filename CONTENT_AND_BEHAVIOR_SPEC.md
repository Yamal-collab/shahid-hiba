# Content and behavior specification

**Reference:** https://fathima-anshad-rahman.vercel.app/  
**Verification date:** 7 November 2026 (Asia/Kolkata)  
**Verification basis:** Re-read `REFERENCE_AUDIT.md`, `ASSET_MAPPING.md`, `ASSET_INVENTORY.md`, checked all downloaded image files and dimensions, probed video/audio metadata, and fetched the live public `config.js` again. The live configuration values below matched the earlier collected configuration. Site JavaScript was source-inspected; the remote page was not rendered or interacted with in a browser during verification. Details are marked **Source-verified** when directly supported by HTML/CSS/JS/config, **Locally inspected** when established from downloaded assets, and **Unverified** where actual browser rendering or interaction would be required.

## 1. Exact section order and content

The source contains the fixed opening-cover overlay first, followed by the main page sections. Labels and static copy below preserve source spelling, capitalization, punctuation, and data-driven rendered text.

### 1. Opening cover — Source-verified; background/video Locally inspected

- Arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`
- `TAP TO OPEN`
- Background/poster: `public/assets/cover.jpg`; moving intro: `public/assets/intro.mp4`.

### 2. Hero — Source-verified

- Arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`
- `BY THE GRACE OF ALLAH,`
- `INVITE YOU TO WITNESS AND BLESS THE BEGINNING OF A BEAUTIFUL JOURNEY OF LOVE AND TOGETHERNESS.`
- `Anshad Rahman`
- `and`
- `Fathima Salam`
- `Wednesday`
- `16 December 2026`
- `AL SAJ INTERNATIONAL CONVENTION CENTRE, KAZHAKOOTAM`
- `in shaa Allah, we would love to have you with us`
- Decorative sprig, then `Scroll down`.
- Hero background: `public/assets/hero.png`.

### 3. Countdown — Source-verified

- Initial label: `Counting down`
- Three values with labels `Days`, `Hours`, `Minutes`
- Link: `Add to calendar`
- After the event time: `Happily married · together for`

### 4. Date and calendar — Source-verified

- `Date`
- `16 December 2026`
- `12:00 noon`
- Calendar month `December`, year `2026`; weekday headings in Sunday-first order: `S M T W T F S`. The 16th is highlighted with a heart-shaped gold marker. Calendar has no month controls.

### 5. Welcome — Source-verified; images Locally inspected

- Decorative band: `public/assets/band-1.jpg`
- `Welcome`
- `“And He placed between you affection and mercy.”`
- `Quran 30 : 21`
- Portrait: `public/assets/img7.jpeg`
- `Today we celebrate the answer to our deepest duas. We request the honour of your presence, in shaa Allah.`
- Following decorative band: `public/assets/band-2.jpg`

### 6. Program — Source-verified

- `The program`
- `The Celebration`
- `Wednesday · 16 December 2026`
- `12:00 noon`
- `Shafath (Wedding)`
- `Al Saj International Convention Centre`
- `Kazhakootam, Trivandrum`
- `View map →`

### 7. Families — Source-verified

- `Two families`
- `With Their Blessings`
- Groom card:
  - `THE GROOM`
  - `Anshad Rahman`
  - `Son of Late Abdul Rahman & Mrs. Soudha Beevi`
  - `Naziya Manzil, Kakkodu, Azhikkodu, Trivandrum`
- Bride card:
  - `THE BRIDE`
  - `Fathima Salam`
  - `Daughter of Mr. Sayede & Mrs. Jaseera Sayede`
  - `Maampoovil, Mankonam, Madavoor, Pallickal, Trivandrum`

### 8. Gallery — Source-verified; images Locally inspected

- `Moments`
- `A Few Favourites`
- Images, in order: `public/assets/img1.jpeg`, `img2.jpeg`, `img3.jpeg`, `img4.jpeg`.

### 9. RSVP — Source-verified

- Pre-form copy:
  - `Join us`
  - `Will You Celebrate With Us?`
  - `We would be honoured to have you join us. Kindly let us know whether you can make it.`
  - Button: `Reply to our invitation`
- Form fields and initial state:
  - Label `Your name`; placeholder `Your full name`; `autocomplete="name"`.
  - Attendance choice group label `Attending`.
  - `Joyfully yes` initially selected (`aria-pressed="true"`).
  - `Sadly no` initially unselected (`aria-pressed="false"`).
  - `Guests coming`: options `1`, `2`, `3`, `4`, `5`; `2` selected by default.
  - Submit button: `Send on WhatsApp`.
- Status text from the submit handler:
  - Empty name: `Please add your name.`
  - Name supplied while current WhatsApp config is empty: `Replies are not open yet. Please check back soon.`
  - If a WhatsApp number is later configured and the new tab opens: `Thank you, [name]. Please press send in WhatsApp to finish.`
- RSVP separator reuses `public/assets/band-1.jpg`.

### 10. Guest book — Source-verified

- `Guest book`
- `Wishes & Blessings`
- `Wishing you both a lifetime of love and laughter.` — `A dear friend`
- `May Allah bless your union with barakah and joy.` — `Family`
- Both entries are fixed HTML content. There is no guestbook form, input, or submit action.

### 11. Footer — Source-verified

- Monogram: `AF` (bride initial first, groom initial second).
- `Anshad Rahman`
- `and`
- `Fathima Salam`
- `Wednesday, 16 December 2026`
- `With duas,`
- `Mizal, Naziya, Nazeem, Ashna`

## 2. Event data and metadata

| Field | Verified value | Source / note |
|---|---|---|
| Bride | `Fathima` | `config.js` |
| Groom | `Anshad` | `config.js` |
| Bride full name | `Fathima Salam` | `config.js` |
| Groom full name | `Anshad Rahman` | `config.js` |
| Monogram | `AF` | `config.js`, bride initial then groom initial |
| Event identifier | `Shafath` | `config.js`; appears in program and generated calendar title |
| Date/time | `2026-12-16T12:00:00+05:30` | `config.js`; UTC+05:30, noon local |
| Display time | `12:00 noon` | `config.js`, shown as written |
| Venue | `Al Saj International Convention Centre` | `config.js` |
| Hero venue short text | `Al Saj International Convention Centre, Kazhakootam` | `config.js`; CSS text-transform makes this uppercase in hero |
| Address | `Kazhakootam, Trivandrum` | `config.js` |
| Groom parents | `Son of Late Abdul Rahman & Mrs. Soudha Beevi` | `config.js` |
| Groom home | `Naziya Manzil, Kakkodu, Azhikkodu, Trivandrum` | `config.js` |
| Bride parents | `Daughter of Mr. Sayede & Mrs. Jaseera Sayede` | `config.js` |
| Bride home | `Maampoovil, Mankonam, Madavoor, Pallickal, Trivandrum` | `config.js` |
| Footer attribution | `Mizal, Naziya, Nazeem, Ashna` | `config.js` |
| WhatsApp RSVP number | Empty string `""` | `config.js`; replies are closed in current config |

Metadata from HTML: title `Fathima & Anshad · Shafat Invitation`; description `The Shafat of Fathima Salam and Anshad Rahman. Wednesday, 16 December 2026, Al Saj International Convention Centre, Kazhakootam.`; Open Graph/Twitter description `Wednesday, 16 December 2026 · Al Saj International Convention Centre, Kazhakootam, Trivandrum.`; `og.jpg` is their preview image; theme color `#f5f1ea`.

## 3. Asset-to-section mapping

All these files exist in `public/assets`; images were visually checked locally and retain the pixel dimensions shown. The webpage uses CSS `cover`/`object-fit` at display time where stated; source files themselves remain original.

| Section/use | Local file | Original dimensions / metadata | Details |
|---|---|---|---|
| Cover backdrop and video poster | `public/assets/cover.jpg` | JPEG 960×1704 | Warm ivory abstract folded/petal texture; center/cover. |
| Cover intro | `public/assets/intro.mp4` | H.264, 720×1280, 30 fps, 5.0667 s | First frame visually matches the pale abstract folded texture. Muted inline video. |
| Hero background | `public/assets/hero.png` | PNG 720×1280 | Pale ivory abstract folded/petal texture; center/cover. |
| First separator band and RSVP separator | `public/assets/band-1.jpg` | JPEG 960×268 | Reused at both positions. |
| Portrait | `public/assets/img7.jpeg` | JPEG 735×980 | Couple's hands reaching/touching against soft light background; arched CSS frame. |
| Separator before program | `public/assets/band-2.jpg` | JPEG 960×268 | Decorative pale folded/petal texture. |
| Gallery 1 | `public/assets/img1.jpeg` | JPEG 1086×1448 | Couple seated by water at sunset. |
| Gallery 2 | `public/assets/img2.jpeg` | JPEG 736×1104 | Arms/hands raised against sky; object-fit cover frame. |
| Gallery 3 | `public/assets/img3.jpeg` | JPEG 735×1103 | Couple holding hands at shoreline. |
| Gallery 4 | `public/assets/img4.jpeg` | JPEG 1023×1537 | Couple holding hands at sunset; object-fit cover frame. |
| Social preview (not an in-page section) | `public/assets/og.jpg` | JPEG 1000×562 | Invitation graphic with couple names/date. |
| Background music | `public/assets/reel.mp3` | 18:00.126; AAC, 44.1 kHz, stereo; MP4-family container | Source URL ends `.mp3`, server MIME was `audio/mpeg`, but local probe reports AAC in QuickTime/MP4-family container. Browser playback compatibility is unverified. |

### Fonts

Google Fonts stylesheet in source requests the following families and variants. Local files are in `public/assets/fonts/`.

| Font | Weight/style | Local file | Reference role |
|---|---|---|---|
| Cormorant Garamond | 400 normal | `cormorant-garamond-400.ttf` | Main body. |
| Cormorant Garamond | 500 normal | `cormorant-garamond-500.ttf` | Headings/date/emphasis. |
| Cormorant Garamond | 600 normal | `cormorant-garamond-600.ttf` | Labels/buttons. |
| Cormorant Garamond | 400 italic | `cormorant-garamond-400-italic.ttf` | Italic quote/wish styling. |
| Pinyon Script | 400 normal | `pinyon-script-400.ttf` | Names and script accent. |
| Amiri | 400 normal | `amiri-400.ttf` | Arabic basmala. |
| Monsieur La Doulaise | 400 normal | `monsieur-la-doulaise-400.ttf` | Imported in reference but not assigned by visible CSS. |

Visual code assets: hero sprig is inline SVG (`viewBox="0 0 34 52"`); music note is inline SVG (`viewBox="0 0 24 24"`, shown 18×18); divider is CSS/HTML; calendar heart is CSS `clip-path`; monogram uses text and Pinyon Script. No standalone external SVG/icon file was referenced.

## 4. Typography and color

Source CSS values (font size / line height / weight / relevant letter spacing):

| Element | Specification |
|---|---|
| Body | Cormorant Garamond, 18px / 1.55, 400; antialiased. Fallbacks: `Iowan Old Style`, Georgia, serif. |
| `.cap` | 11px / 1.9, 600, uppercase, `letter-spacing:.26em`, soft color. |
| `.gcap` | 12.5px / 1.5, 600, uppercase, `letter-spacing:.22em`, gold text. |
| h2 | Cormorant Garamond, 30px / 1.15, 500. |
| Cover Arabic | Amiri, 22px / 1.4, 400. |
| Hero Arabic | Amiri, 24px / 1.4, 400. |
| Names | Pinyon Script, 400, `min(44px,11vw)` / 1.15; no wrap. |
| Hero date | Cormorant Garamond, 19px / 1.25, 500, uppercase, `.18em`. |
| Hero script line | Pinyon Script, 19px / 1.4, 400. |
| Countdown numerals | Cormorant Garamond, 34px / 1, 500, tabular numerals. |
| Form controls | Cormorant Garamond, 17px. |
| Button/link labels | Cormorant Garamond, 12px, 600, uppercase; pill `.22em` tracking, links `.18em`. |

Color tokens: `--bg:#f5f1ea`; `--card:#efe8dc`; `--card2:#f8f4ed`; `--ink:#2e2a24`; `--soft:#625c52`; `--gold:#ab8644`; `--gold-text:#86662c`; `--gold2:#cdb384`; `--line:rgba(171,134,68,.4)`. Body/page surround is `#e9e3d8`; hero fallback is `#fbeee2`. Cover background also `#e9e3d8`. General CTA is white text over `#86662c`. Music control background `rgba(245,241,234,.85)`, gold border, shadow `0 4px 12px rgba(46,42,36,.12)`, 6px backdrop blur. Focus-visible outline is 2px `#86662c`, 3px offset. Calendar selected-day shape uses `#ab8644`.

## 5. Layout and responsive requirements

Source-defined requirements; actual multi-device screenshots were not available:

- Main page wrapper is centered, `max-width:480px`, `min-height:100%`, `overflow:hidden`; warm ivory background. It stays phone-width on desktop/tablet instead of growing into wide columns. Body outside it is `#e9e3d8`.
- Body margin 0; global `box-sizing:border-box`; `html, body` height 100%.
- Safe-area-aware page horizontal padding: `max(26px, env(safe-area-inset-left/right,0px))`. Hero uses 44px left/right padding. Hero minimum height `min(100svh,853px)` with centered vertical flex content and safe-area-aware top inset.
- Sections `.sec`: 54px block padding, centered; some source sections override top padding to 10px or 20px. Horizontal padding uses `.pad`.
- Bands 110px height, background-size cover, center. Portrait max-width 300px, width 76%, 3:4 ratio; 7px inset, thin border, top arch/lower rounded corners. Gallery max-width 400px, two equal columns, 10px gap, each image 3:4 ratio, 6px radius.
- Calendar card max-width 300px. Program/family/wishes max-width 380px; RSVP 360px. Family card radius 14px; wish radius 12px.
- No explicit tablet breakpoint or desktop reflow. Names scale with `11vw` up to 44px. Music toggle shifts to the right side of the centered wrapper when viewport width >=480px. `viewport-fit=cover` and safe-area insets are used.
- Reduced-motion preference disables all CSS animations and transitions. Real rendering, wrapping, browser font substitution and overflow at specific viewport dimensions remain unverified.

## 6. Interactive behavior

### Opening cover, video, and scroll

- Cover is a fixed full-viewport overlay at z-index 50; cover visual content is centered in max-width 480px column. It has role `button`, tabindex 0, accessible label `Open the invitation`.
- On click/tap, or keyboard Enter/Space: mark cover as playing, fade out prompt and Arabic text, start looped background audio from time 0 with volume 1, and play muted inline intro video.
- Video `ended`, `error`, a rejected video play promise, or 12-second timeout calls finish. If reduced motion is preferred, finish occurs immediately. Finish adds cover `gone` (opacity transition .9s and delayed visibility), clears `document.body.style.overflow='hidden'`, adds hero `show`, reveals the music button and starts scroll reveal setup after 600ms.
- Before opening, body scroll is locked. After finish, body overflow is restored to its default. Scroll is normal document scrolling; no sticky navigation, section menu or scroll snapping exists.
- `.rv` below-fold sections are staged with opacity near zero and translateY(16px), then IntersectionObserver removes the pre-state when 12% intersects; transition lasts 1s. Sections already at/above viewport when reveal initializes are not staged.

### Countdown and calendar

- Target instant: `2026-12-16T12:00:00+05:30` (Wednesday, 16 December 2026 at 12:00 noon in UTC+05:30). Values compute whole remaining minutes, then days/hours/minutes; updates on load and every 20,000 ms. Past event uses absolute elapsed minutes and label `Happily married · together for`.
- Time/date formatting is built using `en-GB` and UTC after adjusting to event timezone. Calendar is December 2026, Sunday-first, with one-letter days, blanks before month start, and event day heart highlight. No interactive month controls.
- If `dateTime` is absent, countdown section and calendar box are hidden.
- `Add to calendar` opens Google Calendar's event template in a new tab. Event title is `Fathima & Anshad · Shafath`; starts at the configured instant; ends three hours later; location value is `Al Saj International Convention Centre, Kazhakootam, Trivandrum`. The code creates a UTC compact date parameter from ISO timestamps.

### Map

- Exact destination URL: `https://www.google.com/maps/search/?api=1&query=Al+Saj+International+Convention+Centre+Kazhakootam+Trivandrum`
- Link text `View map →`; opens a new tab with `rel="noopener"`. It is hidden if `mapUrl` is falsey; current config supplies the URL.

### Music

- Toggle appears only after opening. Accessible name is `Toggle music` initially, then `Pause music` while playing or `Play music` while paused. `reel.mp3` is looped. Playing note rotates continuously over four seconds; paused state draws a slash and stops rotation.
- Click pauses/plays audio; a failed play keeps the current UI state. Audio pauses on `pagehide`, `beforeunload`, and when document is hidden; on visibility return it attempts to resume if invitation is done and user has not paused it.
- Browser decode/autoplay behavior is **Unverified**. There is a file mismatch: response MIME is `audio/mpeg` and URL suffix `.mp3`, but FFprobe finds AAC audio inside an MP4-family container. Do not silently transcode/rename if preserving the exact reference asset; test in target browsers before deciding implementation handling.

### RSVP / WhatsApp

- Clicking `Reply to our invitation` reveals the form, hides that opener button and focuses name input. Form begins with attendance yes, guest count 2. Selecting yes/no updates the pressed state; selecting no hides guest count.
- Submit is client-side (`preventDefault`). Whitespace is trimmed from name. Blank name displays `Please add your name.`; no external tab opens. With a nonempty name and current config `rsvpWhatsApp:""`, displays `Replies are not open yet. Please check back soon.` and does not open WhatsApp.
- Source-defined future configured path: if `rsvpWhatsApp` is nonempty, build WhatsApp `wa.me/<digits>?text=<encoded message>` and open a new tab. Yes message exact template: `Assalamu alaikum, this is [name]. In shaa Allah we will attend Fathima & Anshad's Shafath. Guests: [count].` No message exact template: `Assalamu alaikum, this is [name]. Sadly I won't be able to attend Fathima & Anshad's Shafath. Wishing you both every blessing.` Success status: `Thank you, [name]. Please press send in WhatsApp to finish.` These branches cannot be reached using the currently published config.
- The page includes no backend RSVP submission or persistence in inspected source.

### Guestbook

- Static two-card wishes only; no controls, form, comments, or state changes.

## 7. External links

| Control | Destination/action | Current state |
|---|---|---|
| Add to calendar | `https://calendar.google.com/calendar/render` with `action=TEMPLATE` and generated title/date/location parameters | Opens new tab (`target="_blank"`, `rel="noopener"`). |
| View map → | Google Maps search URL shown above | Opens new tab (`target="_blank"`, `rel="noopener"`). |
| RSVP send | `https://wa.me/<rsvpWhatsApp>?text=...` | Not reached: current number is empty; form shows replies-closed message. |
| Cover/video/audio | Local/public media resource playback | No navigation target. |

## 8. Uncertainties, conflicts, and limitations

1. **Event spelling conflict:** Metadata title/description spell the event `Shafat`; `config.js` uses `Shafath`, and visible program/calendar output uses `Shafath`. Preserve each source context exactly unless the site owner resolves the inconsistency.
2. **Audio file mismatch:** `reel.mp3` is served with `audio/mpeg`, but local FFprobe reports AAC in an MP4-family container, duration 18:00.126, stereo 44.1 kHz. Actual playback on browsers has not been verified.
3. **Visual browser evidence:** Images were inspected from local copies, but the remote webpage itself could not be rendered via the available browser bridge; no exact screenshot-based viewport comparison was obtained. Responsive details above are CSS/source-derived, not screenshot measurements.
4. **Interaction evidence:** No actual click-through of the reference cover, toggle, calendar/map links, or RSVP form was possible. Behaviors are traced from delivered JavaScript/config and should be treated as source-verified rather than empirically exercised.
5. **Downloads:** Every page-referenced image, intro video, music file, and font listed in `ASSET_MAPPING.md` was retrieved. No missing referenced asset remains. Directory listing is unavailable, so unreferenced server files cannot be inventoried.
6. **Font loading:** Source imports Monsieur La Doulaise but no visible selector uses it. Actual face rendering/fallback is browser dependent. Local copies were downloaded from the exact Google Fonts file URLs; actual browser use of local copies has not been tested.
7. **Dynamic time display:** Countdown changes with clock time; exact displayed number depends on the instant a visitor opens the page. Calendar dates and event target are fixed in config.
