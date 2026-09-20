# 72Offline

Responsive one-page landing site for **72Offline**.

## Local

```sh
npm install
npm run build
npx wrangler dev
```

## Cloudflare

This repository is configured for Cloudflare Workers Static Assets.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Temporary host: Cloudflare `workers.dev`
- Worker name: `offline-72`

No custom domain is configured yet.
