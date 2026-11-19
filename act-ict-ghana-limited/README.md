# ACT-ICT Ghana Limited — website

React 19 + Vite + Tailwind CSS (compiled at build time), deployed on Vercel.
Every page is pre-rendered to real HTML at build time (`scripts/prerender.mjs`),
then React takes over in the browser.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server on http://localhost:3000 |
| `npm run build` | Type-check, build, pre-render every page into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run images` | Convert any new JPG/PNG in `public/images` to resized WebP (strips GPS/camera data) |

## Where things live

- `context/ContentContext.tsx` — hero slides, contact details, projects, solutions/products, partners.
- `pages/Projects.tsx` — the long project write-ups shown in the pop-up.
- `seo.ts` — page titles and descriptions, and the site URL.
- `vercel.json` — security headers, caching, clean URLs.

## Adding images

Drop the original JPG/PNG into the right folder under `public/images/`, run
`npm run images`, then reference the `.webp` file in the code. Never commit
photos straight from a camera or phone: they can contain GPS coordinates.

## Contact form

Messages are sent through FormSubmit (formsubmit.co, free, no account) to
office@act-ict.com. The **first** message ever sent triggers an "Activate form"
email to office@act-ict.com: click the link in it once. If the service is down,
the visitor's email app opens with the message filled in.

## Settings in Vercel (Project → Settings → Environment Variables)

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | The live address, only needed if the address changes (used for canonical links, sitemap, share previews). Defaults to https://act-ict.com. |

## Accessibility

Animations use Framer Motion with `MotionConfig reducedMotion="user"`, and CSS
animations stop under `prefers-reduced-motion`. Text colours use
`var(--accent-text)` so they pass contrast in both themes; buttons use `bg-brand`
(#0077B6). Keep to these when adding new UI.
