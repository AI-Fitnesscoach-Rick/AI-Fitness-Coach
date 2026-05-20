# AI Fitness Coach MVP Landingpage

Simpele production-ready MVP landingpage voor TikTok advertenties.

## Inbegrepen

- Next.js App Router
- React
- Tailwind CSS
- Responsive premium dark design
- Werkend waitlist formulier via Formspree
- Vercel Analytics met custom conversion event `waitlist_conversion`
- UTM tracking voor TikTok advertenties

## Wat je kunt meten

- Bezoekers: Vercel Analytics
- E-mails: Formspree Submissions
- Conversies: Vercel Analytics event `waitlist_conversion`
- Conversiepercentage: aantal e-mails / aantal bezoekers x 100

## Formspree instellen

1. Ga naar https://formspree.io
2. Maak een gratis account.
3. Maak een nieuw formulier.
4. Kopieer de endpoint URL, bijvoorbeeld `https://formspree.io/f/abcdwxyz`.

## Vercel env vars

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/jouw-form-id
NEXT_PUBLIC_SITE_URL=https://jouw-live-url.vercel.app
```

## TikTok advertentie URL

```text
https://jouw-live-url.vercel.app/?utm_source=tiktok&utm_medium=paid_social&utm_campaign=early_access_launch&utm_content=video_1
```

## Lokaal testen

```bash
npm install
npm run typecheck
npm run build
npm run dev
```
