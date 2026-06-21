# marshallnaquin.com

Personal website for [Marshall Naquin](https://marshallnaquin.com).

Simple Next.js site — no database, no auth, no SEO stack. A place on the web under my own domain. Features are still TBD; likely candidates include file downloads and maybe a blog.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project docs

See `docs/STARTER.md` for project overview, scope, and conventions.

## Downloads

Drop files in `public/downloads/` and link to them from a page. Example URL: `/downloads/my-file.pdf`

## Deploy

Deploy to [Vercel](https://vercel.com) and point `marshallnaquin.com` at the deployment.
