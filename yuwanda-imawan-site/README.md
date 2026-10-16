# Yuwanda Imawan — Personal Branding Website

A static, bilingual (Indonesian/English) portfolio starter built with Astro, TypeScript, and Tailwind CSS v4.

## Included
- Indonesian and English home, about, projects, blog, and contact pages.
- Responsive dark navy/green design.
- Placeholder profile identity and project statuses (no invented achievements).
- Basic SEO metadata, canonical/alternate language links, favicon, robots.txt, and 404 page.
- Static-site friendly; no database, login, secrets, or backend required.

## Requirements
- Node.js 22.12.0 or newer
- npm
- Git (optional for local preview, required for Git-based deployment)

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Astro, typically http://localhost:4321.

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Before publishing
1. Replace `https://example.pages.dev` in `astro.config.mjs`, `src/layouts/BaseLayout.astro`, and `public/robots.txt` with the actual public URL once known.
2. Update the contact page with real LinkedIn, GitHub, and professional email links. Do not publish placeholder contact details.
3. Add a professional profile photo if desired.
4. Review project statuses and only claim completed work that has actually been implemented and tested.
5. Review all screenshots and text for confidential company information, internal IPs, credentials, or customer details.

## Deploy to Cloudflare Pages (free static hosting option)
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, open Workers & Pages and create a Pages project connected to the repository.
3. Set production branch to `main`.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. No environment variables are required for this static MVP.
7. After first deployment, replace the example URL in the files listed above with the assigned `*.pages.dev` URL, commit, and redeploy.

## Content and routes
- `/id/`, `/id/about/`, `/id/projects/`, `/id/blog/`, `/id/contact/`
- `/en/`, `/en/about/`, `/en/projects/`, `/en/blog/`, `/en/contact/`

## Roadmap (not included in MVP)
- Real monitoring data/API integration
- AI agent backend
- Database or authentication
- CMS and automated blog workflows

Keep any future monitoring API and AI credentials server-side. Do not expose internal infrastructure to the public website.
