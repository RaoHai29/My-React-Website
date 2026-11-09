# Rao Abdul Hai — Portfolio (Next.js)

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Configuration

| Env var | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical / Open Graph / sitemap base URL | `https://raoabdulhaireact.web.app` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` | Contact form | existing EmailJS values |

## Editing content

- Personal info, CV links, socials, services, skills: `lib/site.ts`
- Projects (incl. the featured Grace Stole & Hijab card): `lib/projects.ts`
- CV PDFs: `public/assets/cv/`
- Images: `assets/images/` (imported statically → automatic width/height + blur placeholders)

To use a real screenshot for Grace Stole & Hijab, save it as `assets/images/grace-stole-hijab.webp`,
import it in `lib/projects.ts` and set `image` on `featuredProject`.

## Structure

```
app/          layout.tsx (metadata/SEO), page.tsx, globals.css, opengraph-image.tsx, sitemap.ts, robots.ts, icon.png
components/
  layout/     Navbar, Footer, AmbientBackground
  sections/   Hero, Services, Projects, Contact
  ui/         CvDownloadButtons, FeaturedProjectCard, ProjectCard, ContactForm, Motion, SectionHeading, BrandIcons
  seo/        JsonLd (Person + WebSite + ItemList)
lib/          site.ts, projects.ts
assets/       images (WebP)
public/       assets/cv/*.pdf
tailwind.config.ts   design tokens + glass utilities (loaded via @config in globals.css)
```

## Deployment

Static export (`output: "export"`) to `out/`, hosted on the default Firebase Hosting site
`raoabdulhaireact.web.app` (project `raoabdulhaireact`, see `.firebaserc` / `firebase.json` in this folder).

```bash
npm run build                      # writes out/
npx firebase-tools deploy --only hosting
```

Images are served as pre-compressed WebP (`images.unoptimized`), since static hosting has no image optimizer.
