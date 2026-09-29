# Koran Pagi Polymath

A React + Express app that serves long-form daily "Polymath Daily Briefing" articles across 230 topics (23 professions × 10 days per profession).

## Requirements

- Node.js 20+
- npm
- `GEMINI_API_KEY` for live AI generation

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment values:
   ```bash
   cp .env.example .env
   ```
3. Set a valid `GEMINI_API_KEY` in `.env`.

## Run locally

Start the full app (Express API + Vite middleware) on port `3000`:

```bash
npm run dev
```

## Build and run production bundle

```bash
npm run build
npm run start
```

## Useful scripts

- `npm run dev` — run API server with Vite middleware
- `npm run build` — build frontend and bundle `server.ts` to `dist/server.cjs`
- `npm run start` — run bundled server
- `npm run lint` — type-check with TypeScript (`tsc --noEmit`)
- `npx tsx scripts/generate_all_articles.ts` — pre-generate all 230 articles into `data/articles_db.json`

## API routes

- `GET /api/health`
- `GET /api/topics`
- `GET /api/cached-topics`
- `POST /api/generate-briefing` with JSON body:
  - `topicId` (required, 1..230)
  - `forceRefresh` (optional, boolean)

## Data storage

Generated and seeded articles are persisted in:

- `data/articles_db.json`
