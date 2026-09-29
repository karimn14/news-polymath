# Developer Notes

This document tracks implementation details in `server.ts`, `scripts/`, and `src/`.

## Runtime architecture

- `server.ts` runs a single Express server on port `3000`.
- In development, Vite runs in middleware mode inside the same process.
- In production (`NODE_ENV=production`), static assets are served from `dist/`.

## Environment variables

- `GEMINI_API_KEY` is required for live calls in `POST /api/generate-briefing`.
- No `APP_URL` variable is currently read by the server code.

## Article persistence

- Persistent DB file: `data/articles_db.json`.
- The app ensures topic 1 always exists by seeding `SEED_ARTICLE_TOPIC_1`.
- `GET /api/cached-topics` returns IDs currently persisted in that file.

## Batch generation script

To pre-populate all topics without Gemini API calls:

```bash
npx tsx scripts/generate_all_articles.ts
```

What it does:

- Loads existing `data/articles_db.json` when present.
- Preserves already complete entries.
- Generates missing topics through local generator clusters in `scripts/generators/`.
- Writes the merged result back to `data/articles_db.json`.

## Validation commands used in this repo

- Type check: `npm run lint`
- Build bundles: `npm run build`
