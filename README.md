# BarrientosPortfolio2026

Professional portfolio site for Gerson Barrientos.

## Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/App.tsx` - page layout and section composition
 - `src/data/portfolio.ts` - single source of truth for all portfolio content (edit this file only)
- `src/components/` - reusable card and heading components
- `src/index.css` - global styles and Tailwind component utilities
- `public/resume.pdf` - resume download target used by the hero button

## Customization Notes

- Update personal details, links, and project URLs in `src/data/portfolio.ts`.
- Replace `public/resume.pdf` with your final resume PDF when ready.
- If you want to change the GitHub placeholder links, update the project and contact entries in `src/data/site.ts`.
- The page sections are anchored, so you can add or remove sections without changing the layout system.

## Deployment

This project is ready for common static hosts:

- Vercel: import the repository and deploy as a Vite app.
- Netlify: set the build command to `npm run build` and the publish directory to `dist`.
 - GitHub Pages: set the site base path in `vite.config.ts` if you deploy to a project page subpath, then run `npm run build` and publish the `dist` folder.

## Editing content (one-file workflow)

All editable content for the site lives in `src/data/portfolio.ts`. Edit that file to:

- Change the header name and subtitle (`profile` object).
- Update `navigation` links and labels.
- Edit `aboutCopy` for the About section.
- Add/remove skill groups in `skillGroups`.
- Add/remove experience items in `experiences`.
- Add/remove projects in `projects`. To add a project, copy an existing project object and give it a unique `name`.
- Update the endurance / beyond engineering copy in `beyondEngineering`.
- Update contact links and email in `contact`.

Images and screenshots should be placed in `src/assets/`. The portfolio data file contains example `image` fields showing where to reference screenshots.

## Run & Deploy (quick commands)

Install and run locally:
```bash
npm install --legacy-peer-deps --cache .npm-cache
npm run dev
```

Build, preview, and deploy to GitHub Pages:
```bash
npm run build
npm run preview -- --port 4173   # optional: preview production build locally
npm run deploy                    # publishes to gh-pages using gh-pages package
```

Or push to `main` to trigger the included GitHub Actions workflow which builds and deploys automatically.


## Notes

- The hero resume button points to `resume.pdf` through Vite's base URL, so it will resolve cleanly in local development and static deployments.
- The design uses a dark, recruiter-friendly layout with fast scanning in mind.
