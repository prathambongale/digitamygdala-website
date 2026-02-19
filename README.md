# 🧠 Digitamygdala — Company Website

> **Technology Advisory & Fractional CTO Services** for South African insurance and financial services companies.

---

## 📋 Project Overview

Digitamygdala is the primary professional website for a technology advisory solopreneurship run by **Prathamesh Bongale**. The company helps South African insurance and financial services companies build scalable, compliant technology systems — providing strategic guidance without the cost of a full-time CTO.

### Target Audience

- Pre-Series A startups in insurance/FinTech
- Non-technical founders needing technology leadership
- Companies with technical debt or POPIA compliance gaps
- Insurance brokers, underwriters, and medical aid administrators

---

## 🏗️ Tech Stack

| Layer       | Technology                   | Notes                                   |
|-------------|------------------------------|-----------------------------------------|
| **Structure** | HTML5                       | Semantic, accessible markup             |
| **Styling**   | Vanilla CSS                 | Custom design system with CSS variables |
| **Logic**     | Vanilla JavaScript (ES6+)   | No frameworks — lightweight & fast      |
| **Fonts**     | Google Fonts (Inter, Space Grotesk) | Free & open source            |
| **Icons**     | Font Awesome 6 (Free)       | CDN-hosted                              |
| **Images**    | Unsplash (Free)             | Placeholder — replace with real photos  |

### Why Vanilla HTML/CSS/JS?

- **Zero build step** — open `index.html` in any browser
- **Maximum performance** — no framework bloat
- **Easy to host** — works on any static hosting (see [HOSTING.md](./HOSTING.md))
- **Easy to maintain** — simple file structure, well-commented code

---

## 📁 Project Structure

```
digitamygdala/
├── index.html          # Main (and only) HTML page — single-page website
├── css/
│   └── style.css       # Complete design system & responsive styles
├── js/
│   └── main.js         # Navigation, animations, scroll effects
├── assets/
│   ├── DIGITAMYGDALA_Services.pdf   # Services document (source of truth)
│   └── landing_page_idea.png        # Canva design reference
├── README.md           # This file
└── HOSTING.md          # Free hosting options guide
```

---

## 🎨 Design Details

### Colour Palette

| Colour         | Hex       | Usage                              |
|----------------|-----------|------------------------------------|
| Deep Navy      | `#0a0e17` | Primary background                 |
| Surface Dark   | `#1a2236` | Cards, elevated surfaces           |
| Gold           | `#c9a84c` | Accents, CTAs, brand highlight     |
| Gold Light     | `#e4c76b` | Hover states, gradients            |
| Text Primary   | `#e8e6e1` | Body text                          |
| Text Muted     | `#9ca3af` | Secondary text                     |

### Typography

- **Headings:** Space Grotesk (tech-forward, geometric)
- **Body:** Inter (highly readable, professional)

### Sections

1. **Landing / Hero** — Brand statement + CTA buttons
2. **Services** — Three service offerings from the PDF (with pricing)
3. **Contact** — Email, WhatsApp, Calendly booking
4. **About** — Meet Prathamesh + LinkedIn & personal website links
5. **Footer** — Follow us on LinkedIn

### Responsive Breakpoints

- **Desktop:** > 992px (full grid layouts)
- **Tablet:** 577–992px (stacked, centred)
- **Mobile:** ≤ 576px (single column, compact)

---

## 🚀 How to Run Locally

Simply open `index.html` in any modern web browser:

```bash
# Option 1 — Direct file open
start index.html

# Option 2 — Local dev server (if you have Python)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## ✅ TODO — Before Going Live

### Must Do

- [ ] Replace placeholder hero image with actual Digitamygdala photo
- [ ] Replace About section photo with actual photo of Prathamesh
- [ ] Add real WhatsApp number in `index.html` (search for `XXXXXXXXXXX`)
- [ ] Add real Calendly booking link in `index.html` (search for `#` in booking CTA)
- [ ] Add real LinkedIn company page URL in footer
- [ ] Replace favicon with brand logo

### MVP 2 — Analytics & Security

- [ ] Add privacy-friendly analytics (Plausible, Umami, or Google Analytics)
- [ ] Add Content-Security-Policy headers
- [ ] Add HTTPS enforcement (handled by hosting provider)
- [ ] Add rate limiting (if using Cloudflare)
- [ ] Cookie consent banner (if required by POPIA)

### Nice to Have

- [ ] Add a blog/insights section
- [ ] Add client testimonials
- [ ] Add case studies
- [ ] Add dark/light theme toggle
- [ ] Add multi-language support (EN/AF)

---

## 📄 License

Private — © 2026 Digitamygdala. All rights reserved.
