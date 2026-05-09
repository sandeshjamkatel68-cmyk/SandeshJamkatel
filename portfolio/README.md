# Sandesh Jamkatel — Portfolio

Personal portfolio website built with **Next.js 14** and **Poppins** (single typeface).
No gradients. Solid colors. Editorial typography. Mobile responsive.
Font Awesome is loaded via CDN for the few icons we use.

Live at: **sandeshjamkatel.com**

---

## Quick start

You need [Node.js 18.17+](https://nodejs.org) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

That's it. Edits to any file hot-reload automatically.

---

## Project structure

```
portfolio/
├── app/                      # Next.js App Router pages
│   ├── layout.js             # Root layout — fonts, navbar, footer, SEO
│   ├── page.js               # Home page (hero + about + featured)
│   ├── globals.css           # All styles, organized in sections
│   ├── not-found.js          # 404 page
│   ├── projects/
│   │   └── page.js           # Projects list
│   ├── blog/
│   │   ├── page.js           # Blog list
│   │   └── [slug]/
│   │       └── page.js       # Single post (dynamic route)
│   └── contact/
│       └── page.js           # Contact page
│
├── components/               # Reusable UI pieces
│   ├── Navbar.jsx            # Top nav with mobile hamburger
│   ├── Footer.jsx            # Footer with socials
│   ├── ProjectCard.jsx       # Single project card
│   ├── BlogCard.jsx          # Single blog list row
│   └── PostBody.jsx          # Renders structured post content
│
├── data/                     # Single source of truth — edit these
│   ├── site.js               # Your name, links, bio, socials
│   ├── projects.js           # All your projects
│   └── posts.js              # All your blog posts
│
├── public/
│   └── images/
│       └── profile.jpg       # ← put your photo here
│
├── package.json
├── next.config.js
└── jsconfig.json             # Enables @/ path imports
```

---

## How to update content

### Add a project

Open `data/projects.js`. Copy any existing project object and edit it:

```js
{
  id: "your-unique-slug",
  title: "Project Name",
  year: "2025",
  role: "Solo — design + build",
  description: "Two or three sentences describing what it does and what you built.",
  tags: ["React", "Tailwind", "Vercel"],
  liveUrl: "https://example.com",   // optional, leave "" if none
  repoUrl: "https://github.com/...", // optional
  featured: true,                    // true = also shown on homepage
}
```

Save the file. The new card appears automatically on the Projects page.

### Add a blog post

Open `data/posts.js`. Copy an existing post object **to the top** of the array (newest first). Fill in the fields:

```js
{
  slug: "your-post-url-slug",     // becomes /blog/your-post-url-slug
  title: "Your Post Title",
  date: "2025-12-01",
  excerpt: "Short summary shown on the blog list.",
  readTime: "3 min read",
  content: [
    { type: "p", text: "First paragraph." },
    { type: "h2", text: "A heading" },
    { type: "p", text: "More text." },
    { type: "ul", items: ["Point one", "Point two"] },
    { type: "quote", text: "A pull quote." },
  ],
}
```

Block types: `p`, `h2`, `h3`, `ul`, `quote`, `code`. See comments at the top of `data/posts.js`.

### Replace the photo

Your portrait is already in at `public/images/profile.jpg`. To swap it out, just save a new image with the same filename and the same path. A 4:5 portrait or square works best — the hero crops to 4:5.

### Update your name, email, socials

Open `data/site.js`. Everything site-wide — name, role, bio, email, GitHub/LinkedIn/Facebook URLs — lives there. Change once, updates everywhere.

---

## Design notes

- **Type** — Poppins only, three weights (400/500/600). Loaded from Google Fonts.
- **Color** — Solid only, no gradients. One warm-terracotta accent (`--accent`).
- **Layout** — Editorial. Numbered project list instead of card grid. Definition-list "stack" instead of skill bubbles. Asymmetric sections instead of repeating the same eyebrow → headline → grid pattern.
- **Icons** — Font Awesome via CDN, used only for the mobile nav toggle.
- **Responsive** — Breakpoints at 880px and 640px.
- **Motion** — Subtle hover transitions only. Respects `prefers-reduced-motion`.

To change the accent color, edit `--accent` in `app/globals.css` (top of file).

---

## Deploying to Vercel + sandeshjamkatel.com

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sandeshjamkatel68-cmyk/portfolio.git
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com), sign in with GitHub
2. Click **Add New → Project**
3. Import your `portfolio` repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. You get a free URL like `portfolio-xyz.vercel.app`

### Step 3 — Connect sandeshjamkatel.com

1. Buy the domain from any registrar (Namecheap, GoDaddy, Cloudflare, etc.)
2. In your Vercel project: **Settings → Domains → Add**
3. Type `sandeshjamkatel.com`, click Add
4. Vercel shows you DNS records to add. Two options:
   - **Easy:** Change your registrar's nameservers to Vercel's nameservers
   - **Manual:** Add an `A` record for `@` pointing to `76.76.21.21`, and a `CNAME` for `www` pointing to `cname.vercel-dns.com`
5. Wait 5–60 minutes for DNS to propagate. HTTPS is automatic.

Add `www.sandeshjamkatel.com` too — Vercel will redirect it to the apex domain.

### Step 4 — Future updates

Push to `main` on GitHub. Vercel rebuilds and deploys in about 60 seconds. Done.

---

## Scripts

| Command         | What it does                      |
|-----------------|-----------------------------------|
| `npm run dev`   | Dev server with hot reload        |
| `npm run build` | Production build (test before deploy) |
| `npm run start` | Run the production build locally  |
| `npm run lint`  | Check for code issues             |

---

## Things you can extend later

- **Resume PDF** — drop `resume.pdf` into `/public`, then add a "Download CV" button on the Home page or Contact page using `<a href="/resume.pdf" download>`
- **Project images** — add an `image` field to each project object, then render an `<img>` in `ProjectCard.jsx`
- **Contact form** — wire up a form to a service like [Formspree](https://formspree.io) or a Next.js API route
- **Dark mode** — add a CSS variable swap inside a `[data-theme="dark"]` selector and a toggle in the navbar
- **Analytics** — Vercel Analytics is one toggle in the dashboard

---

Built by Sandesh Jamkatel. If you reuse the structure, a credit link is appreciated but not required.
