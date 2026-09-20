# marshallnaquin.com

Personal website for [Marshall Naquin](https://marshallnaquin.com).

Speaker site for booking talks on addiction and recovery. Staging/WIP routes stay reachable by URL but are unlinked from the public masthead and footer.

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

## Booking inbox

`/booking` posts to `/api/booking` and sends mail with Resend.

Set these as Vercel environment variables (Production and Preview):

- `RESEND_API_KEY` — Resend API key
- `BOOKING_FROM_EMAIL` — verified Resend from address, e.g. `Marshall Naquin <booking@marshallnaquin.com>`

Inquiries go to `marshall.naquin@professionalsupportconsulting.com`. Reply-To is the submitter. If `RESEND_API_KEY` is missing, the form fails gracefully and does not pretend the message was sent.

## Deploy

Deploy to [Vercel](https://vercel.com) and point `marshallnaquin.com` at the deployment.
