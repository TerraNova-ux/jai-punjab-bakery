# Jai Punjab Bakery — Website Concept by TerraNova

A premium, fully responsive single-page landing website for **Jai Punjab Bakery, Mansa, Punjab, India**, built as a personalised demo concept by TerraNova.

> **Important:** This is an independent website concept, not an officially approved or owner-verified website. All photography is illustrative stock imagery — not actual photos of the bakery. Business details (address, phone, hours, social links) are intentionally left blank until verified, and the site gracefully hides any field that is empty.

---

## Tech stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** for styling
- **Lucide React** for icons
- No additional UI dependencies

---

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run typecheck
npm run lint
```

The dev server runs automatically in Bolt — no need to start it manually.

---

## Editing business information

All business details live in **`src/data/bakeryConfig.ts`**. Update the values there and they appear across the site:

- Bakery name, tagline, location
- Announcement bar message
- Address, phone, WhatsApp, email
- Opening hours (per day group)
- Social links (Instagram, Facebook, YouTube)
- Google Maps directions link

**Any field left as an empty string is automatically hidden** on the page, so you can publish with partial details and fill them in as they're confirmed.

## Editing products

All product data lives in **`src/data/products.ts`**. Three export groups:

1. **`products`** — the full catalogue. Each product has a name, description, category, image URL and an optional `price` (hidden when unset). Set `featured: true` to surface a product in the "Favourites" section.
2. **`celebrationCakes`** — the showcase cards in the Celebration Cakes section.
3. **`galleryImages`** — the gallery grid images, each with a `span` of `wide`, `tall` or `normal` to control the masonry layout.

To add a product, copy an existing object in the array and change the fields. Images are referenced by URL — swap in local files from `public/images/` if preferred.

---

## Sections

| Section | Anchor | Description |
|---------|--------|-------------|
| Announcement bar | — | Editable message strip |
| Navigation | — | Sticky desktop nav + mobile hamburger menu |
| Hero | `#home` | Headline, intro, two CTAs, image composition |
| Featured products | `#featured` | Six highlighted products |
| Product catalogue | `#products` | Category filters + search + responsive grid |
| Celebration cakes | `#cakes` | Showcase with enquiry CTA |
| Why visit | — | Three value highlights |
| Gallery | `#gallery` | Masonry grid with keyboard-accessible lightbox |
| About | `#about` | Editorial section with bakery image |
| Contact | `#contact` | Details + enquiry callout + directions link |
| Footer | — | Links, contact, dynamic copyright year, TerraNova attribution |

---

## Responsive design

The site is built mobile-first and tested at these viewport widths:

**320px, 360px, 375px, 390px, 430px, 768px, 1024px, 1440px**

Key responsive features:
- Fluid typography with `clamp()` for headings and spacing
- CSS Grid + Flexbox layouts that reflow at each breakpoint
- No horizontal overflow — content-driven heights, no overflow hacks
- Touch-friendly button sizes (min 44px tap targets)
- Search input fills available width on mobile
- Category filters wrap naturally
- Gallery adapts from 2 columns (mobile) to 4 (desktop)
- Safe-area insets respected

### Dev viewport switcher

In Bolt's development preview, a small floating switcher (bottom centre) lets you preview the real page at **Desktop**, **Tablet** (768px), and **Mobile** (390px) widths. This control is **development-only** and is stripped from the production build.

---

## Accessibility

- Semantic HTML throughout (`<section>`, `<nav>`, `<article>`, `<figure>`)
- Visible focus states on all interactive elements
- Keyboard-navigable gallery lightbox (Esc to close, arrow keys to navigate)
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` respected — animations disabled for users who request it
- Descriptive alt text on all images

---

## Images

All photography is sourced from **Pexels** (license-free stock) and referenced by URL. They are illustrative and **do not depict the actual Jai Punjab Bakery**. To replace with real photos:

1. Save images to `public/images/` with descriptive filenames
2. Update the `image` fields in `src/data/products.ts` to `/images/your-file.jpg`

---

## Customization summary

| What to change | Where |
|----------------|-------|
| Business name, address, phone, hours, socials | `src/data/bakeryConfig.ts` |
| Announcement message | `src/data/bakeryConfig.ts` |
| Products, prices, categories | `src/data/products.ts` |
| Celebration cakes | `src/data/products.ts` |
| Gallery images | `src/data/products.ts` |
| Colors, fonts, spacing | `tailwind.config.js` |
| SEO title & meta tags | `index.html` |

---

## Concept disclaimer

This website is an independent concept created by **TerraNova** for demonstration purposes. It is not an official or owner-approved website for Jai Punjab Bakery. All content should be verified and replaced with accurate information before any public use.
