# 🌐 Hosting Guide — Digitamygdala Website

> Best (and free!) ways to host a static HTML/CSS/JS website like Digitamygdala.

Since this website has **no backend, no database, and no build step**, it qualifies as a **static site** — the easiest and cheapest type of website to host. Here are your options, ranked from best to good.

---

## 🏆 Recommended: Top Free Hosting Options

### 1. GitHub Pages ⭐ (Best Overall — Free)

| Detail        | Info                                        |
|---------------|---------------------------------------------|
| **Cost**      | 100% Free                                   |
| **Custom Domain** | ✅ Yes (free, with HTTPS)               |
| **HTTPS**     | ✅ Automatic via Let's Encrypt              |
| **CDN**       | ✅ Global via Fastly                        |
| **Bandwidth** | 100 GB/month (more than enough)             |
| **Deploy**    | Git push                                    |

**How to Deploy:**

1. Create a GitHub repository (e.g., `digitamygdala-website`)
2. Push your code to the `main` branch
3. Go to **Settings → Pages**
4. Set source to **"Deploy from a branch"** → `main` → `/ (root)`
5. Your site is live at `https://yourusername.github.io/digitamygdala-website`
6. To use `www.digitamygdala.com`:
   - Add a `CNAME` file with `www.digitamygdala.com` in the repo root
   - In your domain DNS settings, add a CNAME record pointing to `yourusername.github.io`
   - Enable "Enforce HTTPS" in GitHub Pages settings

**Pros:** Dead simple, reliable, used by millions, great for portfolios and company sites.  
**Cons:** Public repo required for free tier (but your code is just HTML/CSS, nothing sensitive).

---

### 2. Cloudflare Pages ⭐ (Best Performance — Free)

| Detail        | Info                                        |
|---------------|---------------------------------------------|
| **Cost**      | 100% Free (generous free tier)              |
| **Custom Domain** | ✅ Yes (free, with HTTPS)               |
| **HTTPS**     | ✅ Automatic                                |
| **CDN**       | ✅ 300+ edge locations (fastest CDN)        |
| **Bandwidth** | Unlimited                                   |
| **Deploy**    | Git push or drag-and-drop                   |
| **Security**  | ✅ DDoS protection, WAF, bot management     |

**How to Deploy:**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub/GitLab repo
3. No build command needed — just set output directory to `/`
4. Deploy! Gets a free `*.pages.dev` subdomain
5. Add your custom domain in the dashboard

**Pros:** Fastest CDN, built-in security features (DDoS protection, WAF), unlimited bandwidth.  
**Cons:** Slightly more setup than GitHub Pages, but much better performance.

**💡 Recommended combo:** Host on GitHub Pages + use Cloudflare as DNS/CDN for free DDoS protection and caching.

---

### 3. Netlify (Great DX — Free Tier)

| Detail        | Info                                        |
|---------------|---------------------------------------------|
| **Cost**      | Free tier (100 GB bandwidth/month)          |
| **Custom Domain** | ✅ Yes (free, with HTTPS)               |
| **HTTPS**     | ✅ Automatic via Let's Encrypt              |
| **CDN**       | ✅ Global                                   |
| **Deploy**    | Git push or drag-and-drop                   |
| **Forms**     | ✅ Free (up to 100 submissions/month)       |

**How to Deploy:**

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder — that's it!
3. Or connect your GitHub repo for auto-deploy on every push
4. Add your custom domain in Site Settings

**Pros:** Drag-and-drop deploy, form handling, serverless functions.  
**Cons:** 100 GB bandwidth limit (fine for a company site).

---

### 4. Vercel (Free Tier)

| Detail        | Info                                        |
|---------------|---------------------------------------------|
| **Cost**      | Free tier (100 GB bandwidth/month)          |
| **Custom Domain** | ✅ Yes (free, with HTTPS)               |
| **HTTPS**     | ✅ Automatic                                |
| **CDN**       | ✅ Global edge network                      |
| **Deploy**    | Git push                                    |

**How to Deploy:**

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. No build config needed — it detects static HTML
4. Live in 30 seconds

**Pros:** Fast, great developer experience.  
**Cons:** Primarily designed for Next.js (still works great for static sites).

---

## 💰 Paid Options (If You Need More)

### 5. AWS S3 + CloudFront (~$1–3/month)

- Professional-grade hosting with AWS infrastructure
- Requires some AWS knowledge
- Best if you plan to scale significantly

### 6. DigitalOcean App Platform (~$3/month)

- Simple, developer-friendly
- Good performance
- More control than free tiers

---

## 🌐 Domain Name

You'll need to purchase `digitamygdala.com` (if not already owned). Affordable registrars:

| Registrar       | Cost (per year) | Notes                        |
|-----------------|-----------------|------------------------------|
| **Namecheap**   | ~$9–12/year     | Great value, free privacy    |
| **Cloudflare Registrar** | ~$10/year | At-cost pricing, no markup |
| **Google Domains** | ~$12/year    | Clean UI, WHOIS privacy     |
| **Porkbun**     | ~$9/year        | Cheapest, good service       |

---

## 🛡️ Security Recommendations (MVP 2)

Since Digitamygdala handles no user data (static site), security is simpler:

1. **HTTPS** — All recommended hosts provide this for free
2. **Cloudflare Free Tier** — Adds DDoS protection, WAF, and bot management at no cost
3. **Content-Security-Policy** — Add CSP headers to prevent XSS (can be done via `_headers` file on Netlify/Cloudflare)
4. **Subresource Integrity (SRI)** — Add integrity hashes to CDN resources

---

## 📊 Analytics Recommendations (MVP 2)

Privacy-friendly, POPIA-compliant analytics:

| Tool         | Cost    | Cookie-free | GDPR/POPIA Safe |
|--------------|---------|-------------|-----------------|
| **Plausible** | $9/mo  | ✅          | ✅              |
| **Umami**    | Free (self-hosted) | ✅ | ✅            |
| **Fathom Lite** | Free (self-hosted) | ✅ | ✅         |
| **Google Analytics** | Free | ❌ (cookies) | Needs consent banner |
| **Cloudflare Web Analytics** | Free | ✅ | ✅       |

**💡 Recommendation:** Use **Cloudflare Web Analytics** (free, no cookies, privacy-friendly) or self-host **Umami** for free.

---

## 🏁 Quick Start Checklist

- [ ] Choose a hosting provider (GitHub Pages + Cloudflare recommended)
- [ ] Purchase domain name (`digitamygdala.com`)
- [ ] Push code to GitHub repository
- [ ] Configure hosting (enable Pages, set custom domain)
- [ ] Set up DNS records (CNAME to hosting provider)
- [ ] Verify HTTPS is working
- [ ] Add Cloudflare for DDoS protection (free tier)
- [ ] Set up analytics (Cloudflare Web Analytics — free)
- [ ] Test on mobile, tablet, and desktop

---

*Last updated: February 2026*
