# Egemen Makine Website

Premium industrial company website for Egemen Makine, built with Next.js 15,
TypeScript, Tailwind CSS and the App Router.

## Pages

- Home
- Services
- Projects
- About
- Contact
- Admin panel (`/admin`)

## Features

- Responsive premium industrial UI
- Sticky navigation and mobile menu
- Service and project showcase sections
- Contact form, WhatsApp action button and Google Maps embed
- SEO metadata, robots route and sitemap route
- Password-protected admin panel for project management
- Optional GitHub-backed content storage for live updates

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 to view the site.

## Admin Panel

Panel address: http://localhost:3000/admin

1. Copy `.env.example` to `.env.local`
2. Set `ADMIN_PASSWORD` to a strong password
3. Optionally set `ADMIN_SECRET` to a random string
4. Open `/admin`, sign in, and manage projects from the UI

### Live site setup (recommended)

To save project changes from the panel directly to GitHub (and trigger redeploy):

1. Create a GitHub personal access token with `repo` scope
2. Add these variables to your hosting provider (Vercel, etc.):

```env
ADMIN_PASSWORD=your-strong-password
ADMIN_SECRET=random-secret-string
GITHUB_TOKEN=ghp_...
GITHUB_OWNER=egemenbasol
GITHUB_REPO=egemen-makine-web-sitesi
GITHUB_BRANCH=main
```

After each save, the panel commits `content/projects.json` (and uploaded images) to GitHub.
If your host auto-deploys on push, the public site updates within a few minutes.

Without `GITHUB_TOKEN`, changes are saved locally during development only.

## Production

```bash
npm run build
npm run start
```

## Content files

- Projects: `content/projects.json`
- Other site copy: `lib/site-data.ts`
