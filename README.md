# MAYAMED — Corporate Website

Official corporate website for **MAYAMED** (Guangzhou Maya Medical Equipment Co., Ltd.),
a one-stop hospital project solution supplier of radiology imaging equipment and accessories.

## Tech Stack

- **Next.js 14** (App Router) with static export (`output: 'export'`)
- **React 18**
- Plain CSS (`src/app/globals.css`), responsive layout
- SEO ready: per-page metadata, Open Graph, semantic headings

## Pages

| Route | Description |
|---|---|
| `/` | Homepage (hero, products, advantages, applications, factory, certifications, cases, FAQ, inquiry form, map) |
| `/products` | Product catalogue with technical specifications |
| `/blog` | Buying guides index |
| `/blog/digital-x-ray-machine` | Digital X-ray buying guide |
| `/blog/doppler-ultrasound-scanner` | Doppler ultrasound buying guide |
| `/blog/1-5t-mri-system` | 1.5T MRI buying guide |
| `/quote` | Request-a-quote / inquiry form |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production Build

```bash
npm run build    # static output in ./out
npm start        # preview the production build
```

## Deploy to Vercel

1. Import this repository at vercel.com → **Add New Project**.
2. Framework preset is detected automatically as **Next.js**.
3. Build command `next build`, output is static — no environment variables required.
4. Press **Deploy**.

## Project Structure

```
src/app/          pages (App Router)
src/app/globals.css   all styles
public/script.js  client-side interactions
next.config.mjs   static export config
```
