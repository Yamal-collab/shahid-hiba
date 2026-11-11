# Asset mapping

Assets were downloaded from the live reference on 7 November 2026 and saved without image re-encoding, resizing, or cropping. Image dimensions and byte counts match the inventory captured from the public URLs. The page source itself does not expose separate icon image files: two small illustrations are inline SVG, and the calendar heart/divider ornaments are CSS.

## Website sections

| Section / use | Local file | Original URL | Notes |
|---|---|---|---|
| Opening cover background | [`public/assets/cover.jpg`](public/assets/cover.jpg) | https://fathima-anshad-rahman.vercel.app/assets/cover.jpg | 960×1704 JPEG; centered and cover-sized. |
| Opening video | [`public/assets/intro.mp4`](public/assets/intro.mp4) | https://fathima-anshad-rahman.vercel.app/assets/intro.mp4 | Muted, inline opening sequence; `cover.jpg` is its poster. |
| Background music | [`public/assets/reel.mp3`](public/assets/reel.mp3) | https://fathima-anshad-rahman.vercel.app/reel.mp3 | Looped after opening the invitation. |
| Background music compatibility fallback | [`public/assets/reel-compat.mp3`](public/assets/reel-compat.mp3) | Derived locally from the preserved `reel.mp3` | 96 kbps MP3 fallback for browser support; original is unchanged and remains the first source. |
| Hero background | [`public/assets/hero.png`](public/assets/hero.png) | https://fathima-anshad-rahman.vercel.app/assets/hero.png | 720×1280 PNG; centered and cover-sized. |
| Welcome section decorative band (first) | [`public/assets/band-1.jpg`](public/assets/band-1.jpg) | https://fathima-anshad-rahman.vercel.app/assets/band-1.jpg | 960×268 JPEG; 110px CSS band, cover background. |
| Welcome section portrait | [`public/assets/img7.jpeg`](public/assets/img7.jpeg) | https://fathima-anshad-rahman.vercel.app/assets/img7.jpeg | 735×980 JPEG; displayed in arched 3:4 frame. |
| Program section separator (second) | [`public/assets/band-2.jpg`](public/assets/band-2.jpg) | https://fathima-anshad-rahman.vercel.app/assets/band-2.jpg | 960×268 JPEG; 110px CSS band, cover background. |
| Gallery image 1 | [`public/assets/img1.jpeg`](public/assets/img1.jpeg) | https://fathima-anshad-rahman.vercel.app/assets/img1.jpeg | 1086×1448 JPEG; 3:4 display frame. |
| Gallery image 2 | [`public/assets/img2.jpeg`](public/assets/img2.jpeg) | https://fathima-anshad-rahman.vercel.app/assets/img2.jpeg | 736×1104 JPEG; cropped by `object-fit:cover` at display time. Original file is unchanged. |
| Gallery image 3 | [`public/assets/img3.jpeg`](public/assets/img3.jpeg) | https://fathima-anshad-rahman.vercel.app/assets/img3.jpeg | 735×1103 JPEG; 3:4 display frame. |
| Gallery image 4 | [`public/assets/img4.jpeg`](public/assets/img4.jpeg) | https://fathima-anshad-rahman.vercel.app/assets/img4.jpeg | 1023×1537 JPEG; cropped by `object-fit:cover` at display time. Original file is unchanged. |
| RSVP separator (third band) | [`public/assets/band-1.jpg`](public/assets/band-1.jpg) | https://fathima-anshad-rahman.vercel.app/assets/band-1.jpg | Reuses first decorative band. |
| Link preview/social metadata | [`public/assets/og.jpg`](public/assets/og.jpg) | https://fathima-anshad-rahman.vercel.app/og.jpg | 1000×562 JPEG; Open Graph and Twitter share card, not an in-page section image. |

Photo source order and placement come from `config.js`: portrait `assets/img7.jpeg`; gallery `[assets/img1.jpeg, assets/img2.jpeg, assets/img3.jpeg, assets/img4.jpeg]`. The original page uses `object-fit:cover` for portrait/gallery presentation; this affects the rendered frame only. No original media files were altered.

## Fonts

The reference imports this Google Fonts stylesheet: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Monsieur+La+Doulaise&family=Pinyon+Script&family=Amiri&display=swap

| Family | Weight / style | Local copy | Original font URL | Use in reference |
|---|---|---|---|---|
| Cormorant Garamond | 400 normal | [`public/assets/fonts/cormorant-garamond-400.ttf`](public/assets/fonts/cormorant-garamond-400.ttf) | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf | Main text/body. |
| Cormorant Garamond | 500 normal | [`public/assets/fonts/cormorant-garamond-500.ttf`](public/assets/fonts/cormorant-garamond-500.ttf) | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_s06GnM.ttf | Headings, date and emphasized body text. |
| Cormorant Garamond | 600 normal | [`public/assets/fonts/cormorant-garamond-600.ttf`](public/assets/fonts/cormorant-garamond-600.ttf) | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_iE9GnM.ttf | Labels and buttons. |
| Cormorant Garamond | 400 italic | [`public/assets/fonts/cormorant-garamond-400-italic.ttf`](public/assets/fonts/cormorant-garamond-400-italic.ttf) | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf | Italic quote/wish styling. |
| Pinyon Script | 400 normal | [`public/assets/fonts/pinyon-script-400.ttf`](public/assets/fonts/pinyon-script-400.ttf) | https://fonts.gstatic.com/s/pinyonscript/v24/6xKpdSJbL9-e9LuoeQiDRQR8aOI.ttf | Names and script accent line. |
| Amiri | 400 normal | [`public/assets/fonts/amiri-400.ttf`](public/assets/fonts/amiri-400.ttf) | https://fonts.gstatic.com/s/amiri/v30/J7aRnpd8CGxBHqUp.ttf | Arabic basmala. |
| Monsieur La Doulaise | 400 normal | [`public/assets/fonts/monsieur-la-doulaise-400.ttf`](public/assets/fonts/monsieur-la-doulaise-400.ttf) | https://fonts.gstatic.com/s/monsieurladoulaise/v20/_Xmz-GY4rjmCbQfc-aPRaa4pqV340p7EZl5e.ttf | Imported by reference; no visible CSS assignment found. |

## Inline SVG and CSS visual assets

- **Hero sprig:** inline SVG in the hero, `viewBox="0 0 34 52"`, no standalone URL/file. It is a gold/green current-color outline motif.
- **Music icon:** inline 24×24 SVG music note, displayed at 18×18 in the fixed toggle.
- **Divider:** HTML line elements and a 6px rotated outlined square, styled by `.dia` CSS.
- **Calendar day marker:** CSS `clip-path:path(...)` heart behind the event date; no SVG/image file.
- **Monogram:** text initials AF in Pinyon Script spans; no image file.
- No separate favicon, external icon font, or publicly linked standalone SVG was referenced by the inspected HTML.

## Retrieval status

All listed image, audio, video, and font URLs were accessible and downloaded. No referenced asset failed retrieval. The site does not publish an inspected directory listing, so this covers resources referenced by the page/config and social metadata rather than any unreferenced server files. Media file dimensions/durations for `intro.mp4` and `reel.mp3` were not needed for retrieval and were not established; their original downloaded files are retained.

### Compatibility derivative added during implementation

The downloaded `reel.mp3` is actually HE-AAC in an MP4-family container, despite its `.mp3` suffix and the reference's `audio/mpeg` response MIME. `public/assets/reel-compat.mp3` is an additional 96 kbps MP3 fallback generated with FFmpeg; `public/assets/reel.mp3` was not overwritten or modified. The app tries the original as an MP4/HE-AAC source first, followed by the MP3 fallback. This avoids asking browsers to decode an AAC profile/container they may not support while preserving the original asset. See [MDN's AAC compatibility notes](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs).
