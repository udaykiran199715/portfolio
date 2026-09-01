# Portfolio

Personal portfolio site, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

`npm run dev` is a plain Vite server — it renders the site but does **not** serve
`functions/api/contact.ts`, so the contact form's POST will 404. Use `npm run dev:full` instead
whenever you need the contact form working locally (it runs Wrangler + Vite together at
http://localhost:8788).

## Contact form

The form posts to `functions/api/contact.ts`, a Cloudflare Pages Function that sends mail via
[Resend](https://resend.com). It only runs under Wrangler or on actual Cloudflare Pages — never
under plain `vite dev`. For local testing, copy `.dev.vars.example` to `.dev.vars`, fill in
`RESEND_API_KEY` and `CONTACT_TO_EMAIL`, then run:

```bash
npm run dev:full
```

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, create a Pages project connected to the repo.
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Under the project's Settings → Environment variables, add `RESEND_API_KEY` and
   `CONTACT_TO_EMAIL` for both Production and Preview.
4. Every push to `main` auto-deploys.
