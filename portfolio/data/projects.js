/**
 * Projects data.
 *
 * To add a new project: copy an existing object and edit the fields.
 * The Projects page renders this list automatically — no other changes needed.
 *
 * Fields:
 *   id         — unique slug (used as React key)
 *   title      — project name
 *   year       — year or year range
 *   role       — your role on the project
 *   description — 2-3 sentences about what it does and what you built
 *   tags       — array of tech tags
 *   liveUrl    — public URL (optional, leave "" if none)
 *   repoUrl    — GitHub repo URL (optional, leave "" if none)
 *   featured   — true to show on homepage Featured section
 */

export const projects = [
  {
    id: "shrinkbox",
    title: "ShrinkBox",
    year: "2024 – Present",
    role: "Solo, design, build, ship",
    description:
      "A public file-compression web tool I designed, built, and deployed end-to-end on Vercel. Recently added a bulk URL-to-zip feature that lets users paste image links and download everything as a single archive, replacing slow one-by-one saves with a focused fix for real user friction.",
    tags: ["React", "JavaScript", "Vercel", "UI/UX"],
    liveUrl: "https://shrink-box.com",
    repoUrl: "",
    featured: true,
  },
  {
    id: "smartpantry",
    title: "SmartPantry",
    year: "2025",
    role: "Pair project, UI + logic",
    description:
      "A kitchen inventory and recipe-suggestion web app built collaboratively with another developer. Practised Git branching, pull-request reviews, and dividing UI versus logic responsibilities cleanly between contributors.",
    tags: ["React", "JavaScript", "Git workflow"],
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    id: "walkers-school-clone",
    title: "Walkers School Website Clone",
    year: "2024",
    role: "Solo, front-end build",
    description:
      "Recreated a real-world school website from scratch to practise pixel-accurate layout, responsive design, and clean HTML/CSS structure. Focused on matching the original look while keeping the markup semantic and maintainable.",
    tags: ["HTML5", "CSS3", "Responsive design"],
    liveUrl: "https://walkers-school.vercel.app/",
    repoUrl: "",
    featured: false,
  },
  {
    id: "personal-portfolio-v1",
    title: "Personal Portfolio (v1)",
    year: "2024",
    role: "Solo, design to deployment",
    description:
      "Designed and built my first production-grade personal site from a blank repo to a live deployment on Vercel. Implemented multi-page layout, contact form, blog section, plus SEO and accessibility basics. Owned every step.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://sandeshjamkatel.com",
    repoUrl: "",
    featured: false,
  },
];
