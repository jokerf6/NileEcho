# NileEcho (Next.js)

A full **Next.js + Tailwind CSS** implementation of the NileEcho V1 UI system.

## Pages
- `/` — Landing page
- `/demo` — Chat + Before/After demo
- `/admin/places` — Admin Lite list
- `/admin/places/new` — Create place form
- `/admin/places/[id]` — Edit place form
- `/places` and `/about` — Supporting pages

## Environment
1. Copy the example env file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Add your server-side key:
   ```bash
   OPENAI_API_KEY=your_key_here
   ```

> Keep `OPENAI_API_KEY` server-only. Do not expose it in client-side code.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
