# MP Industries — Website PRD

## Original Problem Statement
Build the complete official website for MP Industries — a registered concrete mixer machine parts manufacturer based in Ahmedabad. 4 pages (Home, Products, About, Contact). White-background brand, primary accent #D05030, Barlow Condensed + Inter typography. Tagline: "Built for the machines that build India". Phones: +91 9824155389 (primary/WhatsApp) & +91 9824155380. WhatsApp number: 919824155389. Founded 2004, relaunched 2017. 69 products with WhatsApp inquiry modal flow.

## Tech Stack
- React 19 (CRA via craco) + Tailwind CSS 3
- React Router v6, React Helmet Async, Lucide icons
- No backend — pure static site (FastAPI/Mongo template untouched)

## What's Been Implemented (2026-12-15)
- 4 pages + 404 with React Router + lazy loading + Suspense fallback
- Home: dark animated hero, stats bar with count-up (20+/69+/Pan-India/Global Export), catalog teaser (4 products), interactive SVG world map (India/Africa/Middle East), CTA block
- Products: live search, 14 category chips, 69-product grid (branded SVG placeholders), no-results state w/ WhatsApp fallback
- About: 5 sections (Our Story, What We Make, Who We Serve, Our Reach, Why Trust MP)
- Contact: dual phone CTAs, WhatsApp button, email, address, embedded Google Maps (Ahmedabad)
- Global: sticky navbar with shadow-on-scroll + mobile drawer, dark footer with quick links + WhatsApp CTA, floating green WhatsApp button (pulse + tooltip), back-to-top button, skip-to-main accessibility link, scroll-to-top on route change
- InquiryModal: focus trap, ESC + overlay close, validation, builds wa.me/919824155389 URL with exact pre-filled message and optional custom-part addendum
- SEO: per-page unique title/description/keywords/canonical + OG + Twitter; Organization + LocalBusiness JSON-LD on home; semantic HTML; robots.txt + sitemap.xml + favicon.svg in /public
- Animations: scroll reveal (IntersectionObserver), stats count-up (easeOutCubic), card hover lift, button hover, WhatsApp pulse, modal scale-in, hero chevron bounce; all respect prefers-reduced-motion
- Deploy artifacts: /app/vercel.json + /app/netlify.toml + /app/frontend/public/_redirects
- Comprehensive data-testid coverage on all interactive elements
- Test report: 100% pass on first iteration (`/app/test_reports/iteration_1.json`)

## Files of Note
- `/app/frontend/src/data/products.js` — 69-product catalog with categories
- `/app/frontend/src/data/site.js` — SITE constants + `buildWhatsAppInquiryURL` helper
- `/app/frontend/src/components/InquiryModal.jsx` — fully accessible inquiry modal
- `/app/frontend/src/components/WorldMap.jsx` — interactive SVG map
- `/app/frontend/src/pages/Home.jsx` — hero, stats, teaser, map, CTA, JSON-LD

## User Personas
- Mixer-machine OEMs and parts dealers (India + export)
- Construction contractors needing replacement parts
- International buyers in Africa and the Middle East

## Backlog (P1)
- Replace product placeholders with real product photography
- Replace dark hero placeholder with looping construction-machinery video
- Update Contact page with exact street address + email when provided
- Add Google Search Console + GA4 tracking after domain go-live
- Add product spec sheets / PDF downloads where applicable

## Backlog (P2)
- Add hreflang + language toggle (Hindi/Gujarati) for India SEO
- Add a "Bulk Inquiry" form (multi-product cart → single WhatsApp message)
- Add testimonials / OEM partner logos section on Home

## Next Actions
- Supply real product images (drop into `/public/images/products/` and wire `image` field in `products.js`)
- Provide finalized email + full address for Contact page
- Provide hero video URL when available
