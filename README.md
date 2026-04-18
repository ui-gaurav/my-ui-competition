# 🏎️ BMW M4 Competition — Interactive 3D Showcase

> A cinematic, interactive 3D landing page for the BMW M4 Competition built in 90 minutes.

🔗 **Live Demo**: https://bmw-m4-flax.vercel.app

![BMW M4 Hero](public/og-preview.png)

---

## ✨ Features

- 🚗 **Real 3D BMW M4 GLB model** — drag to rotate, pinch to zoom
- 🎨 **7 official BMW colors** — live body paint material change
- ⚡ **Cinematic hero** — animated staggered typography on load
- 📊 **Animated specs** — scroll-triggered performance stats
- 🎯 **Interactive color picker** — glassmorphism floating panel
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🚀 **Deployed on Vercel** — production ready

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Next.js 15 | App Router, SSR |
| TypeScript | Full type safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui (Luma) | UI Components |
| Google model-viewer | 3D GLB rendering |
| Vercel | Deployment |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/ui-gaurav/my-ui-competition.git
cd my-ui-competition
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add the 3D model
Download a BMW M4 GLB model from [Sketchfab](https://sketchfab.com) (search "BMW M4 G82", filter by free + downloadable) and place it at:
public/models/bmw_m4.glb

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure
my-ui-competition/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout + fonts
│   └── globals.css       # Global styles + CSS tokens
├── components/
│   └── m4/
│       ├── Hero.tsx          # Hero section + 3D model
│       ├── ModelViewer.tsx   # Google model-viewer wrapper
│       ├── ColorPicker.tsx   # Color swatch panel
│       ├── NavBar.tsx        # Fixed navigation
│       ├── Ticker.tsx        # Infinite marquee strip
│       ├── SpecsGrid.tsx     # Animated specs cards
│       ├── TechStrip.tsx     # Technology section
│       └── ClosingCTA.tsx    # Final CTA section
└── public/
└── models/
└── bmw_m4.glb    # 3D model (not included, see setup)

---

## 🎨 Design Decisions

- **Bebas Neue** for display headings — automotive, bold, cinematic
- **DM Mono** for spec data — technical precision feel
- **Figtree** for body copy — clean and readable
- BMW M tricolor `(#E63329 · #9B4FF5 · #1B72E8)` used as precision accents
- Dark `#080808` background — showroom atmosphere
- Google `model-viewer` chosen over Three.js/R3F for native GLB texture support

---

## 📸 Screenshots

| Hero | Specs | Colors |
|------|-------|--------|
| ![hero](public/screenshots/hero.png) | ![specs](public/screenshots/specs.png) | ![colors](public/screenshots/colors.png) |

---

## 🏁 Built For

90-Minute UI Competition — Antigravity × Claude

---

## 📄 License

MIT © [Gaurav Arya](https://github.com/ui-gaurav)
Then also do these things:
1. Create a .gitignore entry to exclude the GLB:
public/models/*.glb
2. Update package.json description field:
json"description": "BMW M4 Competition interactive 3D showcase — Next.js + model-viewer"
3. Take a screenshot of the live site hero section and save it as public/og-preview.png
4. Commit everything with this message:
feat: complete BMW M4 Competition 3D showcase

- Interactive 3D model with Google model-viewer
- 7 BMW official color swatches with live material change  
- Animated hero, specs grid, ticker, tech strip
- Responsive layout, deployed to Vercel
