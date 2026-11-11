# Public asset inventory

Reference origin: `https://fathima-anshad-rahman.vercel.app/`  
All listed resources returned HTTP 200 during inspection. Image dimensions were read from downloaded public image files. Sizes are the fetched body sizes.

## Images and artwork

| Local reference | Public URL | Use | Format / dimensions | Bytes |
|---|---|---|---:|---:|
| `assets/cover.jpg` | https://fathima-anshad-rahman.vercel.app/assets/cover.jpg | Cover/video poster; cover uses center/cover | JPEG, 960×1704 | 184,797 |
| `assets/hero.png` | https://fathima-anshad-rahman.vercel.app/assets/hero.png | Hero background, center/cover | PNG, 720×1280 | 443,857 |
| `assets/band-1.jpg` | https://fathima-anshad-rahman.vercel.app/assets/band-1.jpg | First and third decorative horizontal bands | JPEG, 960×268 | 21,098 |
| `assets/band-2.jpg` | https://fathima-anshad-rahman.vercel.app/assets/band-2.jpg | Second decorative band | JPEG, 960×268 | 21,114 |
| `assets/img7.jpeg` | https://fathima-anshad-rahman.vercel.app/assets/img7.jpeg | Portrait/arch photo | JPEG, 735×980 | 27,758 |
| `assets/img1.jpeg` | https://fathima-anshad-rahman.vercel.app/assets/img1.jpeg | Gallery image 1 | JPEG, 1086×1448 | 127,207 |
| `assets/img2.jpeg` | https://fathima-anshad-rahman.vercel.app/assets/img2.jpeg | Gallery image 2 | JPEG, 736×1104 | 34,240 |
| `assets/img3.jpeg` | https://fathima-anshad-rahman.vercel.app/assets/img3.jpeg | Gallery image 3 | JPEG, 735×1103 | 75,627 |
| `assets/img4.jpeg` | https://fathima-anshad-rahman.vercel.app/assets/img4.jpeg | Gallery image 4 | JPEG, 1023×1537 | 143,280 |
| `og.jpg` | https://fathima-anshad-rahman.vercel.app/og.jpg | Open Graph and Twitter share preview | JPEG, 1000×562 | 193,418 |

The `<img>` elements receive descriptive alt text `Fathima & Anshad`; if an image path is empty, source inserts a styled “Photo” placeholder. Portrait and gallery `<img>` elements are lazy-loaded. Actual photo contents were not visually inspected.

## Video and audio

| Local reference | Public URL | Use | MIME | Bytes |
|---|---|---|---|---:|
| `assets/intro.mp4` | https://fathima-anshad-rahman.vercel.app/assets/intro.mp4 | Muted, inline opening-cover video; poster is `cover.jpg`; preload auto | `video/mp4` | 465,733 |
| `reel.mp3` | https://fathima-anshad-rahman.vercel.app/reel.mp3 | Looping background music, starts after cover click; preload auto | `audio/mpeg` | 10,345,362 |

Video resolution/duration and audio duration were not established.

## Fonts

Stylesheet: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Monsieur+La+Doulaise&family=Pinyon+Script&family=Amiri&display=swap

| Family / variant | Declared use | Google Fonts file URL |
|---|---|---|
| Cormorant Garamond 400 normal | Main body | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf |
| Cormorant Garamond 500 normal | Headings/date/body accents | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_s06GnM.ttf |
| Cormorant Garamond 600 normal | Labels/buttons | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_iE9GnM.ttf |
| Cormorant Garamond 400 italic | Quote/wish accents | https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf |
| Pinyon Script 400 | Names and script line | https://fonts.gstatic.com/s/pinyonscript/v24/6xKpdSJbL9-e9LuoeQiDRQR8aOI.ttf |
| Amiri 400 | Arabic basmala | https://fonts.gstatic.com/s/amiri/v30/J7aRnpd8CGxBHqUp.ttf |
| Monsieur La Doulaise 400 | Imported, no visible CSS selector assignment found | https://fonts.gstatic.com/s/monsieurladoulaise/v20/_Xmz-GY4rjmCbQfc-aPRaa4pqV340p7EZl5e.ttf |

## Vector/icon details

- No external icon package or favicon URL was identified in the delivered HTML.
- Hero sprig is inline SVG path art (34×52 viewBox, currentColor stroke).
- Music control is inline SVG music-note icon (24×24 viewBox, displayed 18×18); paused slash is CSS-generated.
- Countdown calendar selected-day heart is a CSS clip-path path, not a separate image.
- Divider diamonds and footer monogram are CSS/text, not image files.

## Data/config resource

- `config.js` — https://fathima-anshad-rahman.vercel.app/config.js — public event data, names, date/time, venue/address, family details, photo paths, and RSVP routing value. Current `rsvpWhatsApp` is empty. Response body was inspected; size not recorded.
