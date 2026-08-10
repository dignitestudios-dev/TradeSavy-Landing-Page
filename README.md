# Trade Savvy — Landing Page

A Next.js (App Router, plain JavaScript) + Tailwind CSS recreation of the
Trade Savvy rental-app landing page.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.js       Root layout, global metadata
  page.js          Assembles all sections
  globals.css      Tailwind + font import
components/
  Navbar.jsx
  Hero.jsx
  HowItWorks.jsx
  KeyFeatures.jsx
  EarnMoney.jsx
  GetStarted.jsx
  AppInAction.jsx
  Footer.jsx
public/
  images/          <- drop your own image assets here (see below)
```

## Adding your own images

No screens, phone mockups, or photos are drawn/faked in this build — every
visual spot just renders a plain `<img>` pointing at a file in
`public/images/`. Add files with these exact names and each section will
pick them up automatically:

| File                              | Used in                          | Notes                                   |
| ---------------------------------- | --------------------------------- | ---------------------------------------- |
| `public/images/logo.png`           | Navbar, Footer                    | Small, roughly square/wide logo mark     |
| `public/images/hero-visual.png`    | Hero section                      | Right-hand hero image/collage            |
| `public/images/features-visual.png`| Key Features section              | Center image between the feature lists   |
| `public/images/earn-visual.png`    | Earn Money section                | Left-hand image                          |
| `public/images/get-started-visual.png` | Get Started section          | Right-hand image                         |
| `public/images/action-1.png` … `action-6.png` | See the App in Action  | One image per gallery card, in order     |

Until you add a file, the browser will show a broken-image icon in that
spot — that's expected and just means the placeholder is waiting for your
asset.

## Notes

- Written in plain JavaScript (`.js` / `.jsx`), no TypeScript.
- Icons (search, checkmarks, social, app-store glyphs, etc.) come from
  `lucide-react` — everything else that looks like a screenshot or mockup
  is left to your own images.
- Colors, type, and spacing are defined in `tailwind.config.js` under the
  `navy`, `ink`, `panel`, `cream`, `gold`, `skyblue`, and `muted` keys.
