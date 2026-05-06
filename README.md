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
- `src/data/site.ts` - all portfolio copy, links, skills, experience, and project data
- `src/components/` - reusable card and heading components
- `src/index.css` - global styles and Tailwind component utilities
- `public/resume.pdf` - resume download target used by the hero button

## Customization Notes

- Update personal details, links, and project URLs in `src/data/site.ts`.
- Replace `public/resume.pdf` with your final resume PDF when ready.
- If you want to change the GitHub placeholder links, update the project and contact entries in `src/data/site.ts`.
- The page sections are anchored, so you can add or remove sections without changing the layout system.

## Deployment

This project is ready for common static hosts:

- Vercel: import the repository and deploy as a Vite app.
- Netlify: set the build command to `npm run build` and the publish directory to `dist`.
- GitHub Pages: set the site base path in `vite.config.ts` if you deploy to a project page subpath, then run `npm run build` and publish the `dist` folder.

## Notes

- The hero resume button points to `resume.pdf` through Vite's base URL, so it will resolve cleanly in local development and static deployments.
- The design uses a dark, recruiter-friendly layout with fast scanning in mind.
