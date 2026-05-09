import { siteConfig } from "@/data/site";
import { posts } from "@/data/posts";

const base = `https://${siteConfig.domain}`;

export default function sitemap() {
  const staticRoutes = [
    { url: base, priority: 1.0 },
    { url: `${base}/projects`, priority: 0.8 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.7 },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
