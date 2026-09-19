# Personal site

A minimal React + TypeScript portfolio, built with Vite. Includes a home/about page, experience, a text-only project index, and individual project pages with responsive photos.

## Development

Requires Node.js 22.12+ (or 24+) and pnpm.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Personalize

Edit `src/content.ts` for your name, bio, contact links, experience, and projects. Current content is based on the supplied resume.

Add your resume as `public/resume.pdf` and set `profile.resumeUrl` to `/resume.pdf`. Until then the navigation displays “Resume Soon” without a broken link.

Add images to `public/images/`, then add entries to a project's `images` array:

```ts
{ src: '/images/my-project.webp', alt: 'Describe what the screenshot shows',
  caption: 'Optional caption.', width: 1600, height: 1000 }
```

Use actual image dimensions to reserve space during loading. Images load lazily, retain their aspect ratio, and link to the original. A single photo is full width; multiple photos use two columns, stacking on mobile. Prefer compressed WebP or AVIF files. No image processing service is required.

Add a project with a unique URL-safe `slug` and a `category` of `Engineering` or `Side quest`; the text-only index and detail route are generated from the same content. Optional `sourceUrl` and `liveUrl` create project links. An optional `poster` uses the same image structure and appears before the overview on the detail page. PrivacyCheck includes its senior design poster with a link to the full-size image.

Update the description in `index.html` before publishing. Typography uses DM Sans from Google Fonts with system fallbacks.

## Hosting

`pnpm build` produces `dist/`. Deploy to a static host configured to serve `index.html` for unknown paths, so direct visits to `/experience` or `/projects/privacycheck` work. The included `public/_redirects` provides this fallback for hosts supporting that format (such as Netlify). Other hosts need their equivalent SPA rewrite rule. This repository has not been deployed.
