# Reference website audit

**Reference:** https://fathima-anshad-rahman.vercel.app/  
**Observed:** 7 November 2026 (Asia/Kolkata)  
**Method and limits:** Retrieved the public HTML, `config.js`, and referenced CSS/font/media resources over HTTPS. The page's source and configuration are directly inspectable. The computer-use browser bridge failed its URL safety check before it could capture screenshots or interact with the existing Chrome tab, and the web fetch interface could not render this Vercel page. Therefore this report documents verified source behavior and CSS, but it does not claim visually observed screenshots, computed browser layout, actual loaded asset appearance, or empirically exercised interaction outcomes. No content has been invented to fill those gaps.

## Page structure and visible copy

The page is one centered, vertically scrolling invitation. It begins with a full-viewport opening cover that obscures the page; the visitor must tap/click it (or press Enter/Space when focused) to reveal the invitation. Sections appear in this order:

1. **Opening cover:** Arabic basmala, centered `TAP TO OPEN`. Background `assets/cover.jpg`; a muted inline video `assets/intro.mp4` uses that image as poster.
2. **Hero:** Arabic basmala; “BY THE GRACE OF ALLAH,”; “INVITE YOU TO WITNESS AND BLESS THE BEGINNING OF A BEAUTIFUL JOURNEY OF LOVE AND TOGETHERNESS.”; names “Anshad Rahman” / “and” / “Fathima Salam”; dynamic weekday and date; “AL SAJ INTERNATIONAL CONVENTION CENTRE, KAZHAKOOTAM”; “in shaa Allah, we would love to have you with us”; decorative sprig; “Scroll down”. A commented-out monogram is not visible here.
3. **Countdown:** “Counting down”; numeric Days, Hours, Minutes; “Add to calendar”. After the event time, the label becomes “Happily married · together for”.
4. **Date/calendar:** “Date”; “16 December 2026”; “12:00 noon”; a one-month Sunday-first calendar grid with the 16th highlighted. The month is December 2026.
5. **Welcome:** band image; “Welcome”; quote “And He placed between you affection and mercy.”; “Quran 30 : 21”; portrait image; “Today we celebrate the answer to our deepest duas. We request the honour of your presence, in shaa Allah.”; second band image.
6. **Program:** “The program”; “The Celebration”; “Wednesday · 16 December 2026”; “12:00 noon”; “Shafath (Wedding)”; “Al Saj International Convention Centre”; “Kazhakootam, Trivandrum”; “View map →”.
7. **Families:** “Two families”; “With Their Blessings”. Groom card: “THE GROOM”; “Anshad Rahman”; “Son of Late Abdul Rahman & Mrs. Soudha Beevi”; “Naziya Manzil, Kakkodu, Azhikkodu, Trivandrum”. Bride card: “THE BRIDE”; “Fathima Salam”; “Daughter of Mr. Sayede & Mrs. Jaseera Sayede”; “Maampoovil, Mankonam, Madavoor, Pallickal, Trivandrum”.
8. **Gallery:** “Moments”; “A Few Favourites”; four photos.
9. **RSVP:** band image; “Join us”; “Will You Celebrate With Us?”; “We would be honoured to have you join us. Kindly let us know whether you can make it.”; “Reply to our invitation”. Hidden form labels/options: “Your name” / placeholder “Your full name”; “Joyfully yes”; “Sadly no”; “Guests coming” with options 1–5 and 2 selected; submit “Send on WhatsApp”.
10. **Guest book:** “Guest book”; “Wishes & Blessings”; two static cards: “Wishing you both a lifetime of love and laughter.” — “A dear friend”; “May Allah bless your union with barakah and joy.” — “Family”.
11. **Footer:** decorative AF monogram; names “Anshad Rahman and Fathima Salam”; “Wednesday, 16 December 2026”; “With duas,”; “Mizal, Naziya, Nazeem, Ashna”.

Metadata title: “Fathima & Anshad · Shafat Invitation”. Description: “The Shafat of Fathima Salam and Anshad Rahman. Wednesday, 16 December 2026, Al Saj International Convention Centre, Kazhakootam.” Open Graph/Twitter description: “Wednesday, 16 December 2026 · Al Saj International Convention Centre, Kazhakootam, Trivandrum.” Theme color `#f5f1ea`; OG/Twitter image `og.jpg`.

## Layout and visual system (source-defined)

- Body uses a warm gray-beige `#e9e3d8` surround; `.wrap` is max-width **480px**, centered, overflow hidden, minimum height 100%, with background `#f5f1ea`. All content, including the hero, remains in this narrow wrapper at large viewport widths; there are no tablet/desktop multi-column breakpoints. At narrow widths the wrapper fills the viewport. At >480px the exposed outer background is visible on both sides.
- Main tokens: background `#f5f1ea`; card `#efe8dc`; secondary card `#f8f4ed`; ink `#2e2a24`; soft text `#625c52`; gold `#ab8644`; gold text `#86662c`; light gold `#cdb384`; dividers `rgba(171,134,68,.4)`.
- Body: 18px / 1.55, weight 400, Cormorant Garamond, antialiased. Main section label `.gcap`: 12.5px, weight 600, uppercase, 0.22em tracking. General `.cap`: 11px, weight 600, uppercase, 0.26em. H2: 30px / 1.15, weight 500. Hero script names: Pinyon Script, `min(44px,11vw)`, line-height 1.15. Date: 19px, uppercase, 0.18em. Arabic basmala uses Amiri at 22px on cover and 24px in hero. Script accent uses Pinyon Script; Monsieur La Doulaise is imported but not assigned in visible CSS.
- Sections use 54px vertical padding, centered text. Horizontal padding is max(26px, safe area inset). Divider ornament: 44px thin gold lines around a 6px rotated outlined square, 14px vertical margin. General pill: dark gold fill, white uppercase lettering, 12px, 16px x 26px padding, fully rounded. Links: dark gold uppercase 12px.
- Hero: `min-height:min(100svh,853px)`, image background `assets/hero.png` centered/cover, warm `#fbeee2` fallback, 44px side padding and centered vertical flex layout. Hero text fades in and moves up 8px over 1.6s after opening. Names and several hero details are source data, not hardcoded text.
- Countdown values: 34px; 34px gap. Calendar card max-width 300px, 14px radius, subtle border, 18px/16px padding. Day grid has 28px line-height; selected date is a gold heart-shaped clip path.
- Bands: 110px high, cover background, center positioned. Portrait width min(76%, 300px), 3:4 aspect ratio, arched top, 14px lower corners, 1px gold border, 7px inset padding. Gallery max-width 400px, 2 equal columns, 10px gap, each 3:4 aspect ratio and 6px radius.
- Program timeline max-width 380px. Family cards max-width 380px, 14px radius, padded 20px/18px. RSVP max-width 360px. Wishes max-width 380px, each card 12px radius. Footer uses card background `#efe8dc` and 54px top / 48px bottom padding.
- Music button: fixed, 38px circle, translucent background, gold border, shadow `0 4px 12px rgba(46,42,36,.12)`, 6px backdrop blur; anchored 16px from viewport top/right (safe area aware). At viewport widths >=480px it is aligned to the right edge of the centered 480px page.
- Focus-visible outline: 2px `#86662c`, offset 3px. Reduced-motion media query disables all animation and transitions.

## Behavior and controls

- **Cover/opening:** cover is fixed to the viewport (`z-index:50`), centered, with opacity/visibility transition over .9s. Tap/click or keyboard Enter/Space marks it playing, hides `TAP TO OPEN` and basmala, and starts background audio from the beginning. Intro video ending, error, rejected play, or a 12-second timeout fades away the cover, unlocks body scroll, reveals hero text, and makes music control available. With reduced motion it finishes immediately. Cover has button role, keyboard tabindex, and label “Open the invitation”.
- **Scroll/reveal:** native document scroll; no sticky nav or section navigation. After opening, below-the-fold `.rv` sections that start below the viewport are initially translated down 16px with near-zero opacity, then revealed by IntersectionObserver at 12% threshold. Transition is 1s. There is no custom scroll snapping.
- **Countdown:** event is configured at `2026-12-16T12:00:00+05:30`. It computes remaining whole minutes, then days/hours/minutes, updates immediately and every 20 seconds. Past-event state uses absolute elapsed time and switches label to “Happily married · together for”. Date format is `en-GB` (day, full month, year) in the event's own timezone.
- **Calendar:** dynamically creates a Sunday-first month grid with one-letter weekday headings `S M T W T F S`; blanks before the first day; event day is decorated as a heart. There are no month navigation controls. “Add to calendar” opens a Google Calendar event template in a new tab with title `Fathima & Anshad · Shafath`, date/time, a 3-hour duration and venue/address location.
- **Map:** “View map →” is a new-tab link to Google Maps search for Al Saj International Convention Centre Kazhakootam Trivandrum. It is hidden if mapUrl is empty; currently it is populated.
- **Music:** after cover opens, circular music-note control toggles looped `reel.mp3`. Label changes between “Pause music” and “Play music”; playing icon rotates over 4 seconds, paused state draws a slash. Audio pauses when page hides/unloads and resumes on visibility return unless user paused. Audio playback is browser-policy dependent and could not be interactively verified.
- **RSVP:** reply button opens the form and focuses name field. Default attendance is yes; “Joyfully yes” / “Sadly no” toggle aria-pressed state. Guest count is hidden when no is selected. Submit prevents navigation; blank name produces “Please add your name.” However current config has `rsvpWhatsApp: ""`, so any named submission produces “Replies are not open yet. Please check back soon.” No WhatsApp URL is opened with this config. If configured in future, yes/no templates are prepared for `wa.me`, with guest count for yes; browser opens WhatsApp in another tab and UI says “Thank you, [name]. Please press send in WhatsApp to finish.”
- **Guestbook:** two fixed static wishes only; no input or submit control is present in the source.
- **External actions:** calendar link and map link open new tabs (`target=_blank`, `rel=noopener`). The prospective WhatsApp destination also opens a new tab, but is unreachable under current blank config.

## Responsive coverage

Verified CSS behavior only: wrapper caps at 480px; `11vw` names cap at 44px; portrait caps at 300px; all inner content uses max-width constraints and safe-area-aware side padding. On wider screens the invitation stays phone-width and centered, rather than expanding into desktop columns. On smaller screens the wrapper fills available width; hero keeps 44px horizontal inset while `.pad` uses at least 26px. Music button recenters against wrapper at min-width 480px. The viewport meta includes `viewport-fit=cover`; there is no explicit tablet breakpoint. No screenshots or actual tablet/mobile browser rendering could be captured in this audit, so pixel-perfect appearance and any browser-specific overflow remain unverified.

## Unverified / limitations

- Screenshot evidence at desktop, tablet and mobile sizes was not obtainable because the available computer-use bridge refused to bind to Chrome when it could not establish the active URL; after that rejection it directed us to stop computer use. The page HTML fetcher does not render screenshots. This report is explicit about source-inspected versus visually observed facts.
- Interactive elements were inspected by tracing the delivered JavaScript and config, but not clicked. Actual browser media playback, timing, focus behavior, calendar handoff, map handoff, and RSVP validation appearance are not empirically confirmed.
- No asset directory index was publicly exposed through the inspected page. The inventory contains all assets referenced in HTML/config plus social metadata; it cannot claim to be an exhaustive list of unreferenced files.
- Audio/video pixel dimensions, duration, codec profile, actual imagery contents, and font visual appearance were not independently rendered. Byte sizes and declared MIME types are listed in the inventory.
- The font import includes Monsieur La Doulaise but no visible CSS rule uses it. Exact fallback behavior depends on font availability/loading.
