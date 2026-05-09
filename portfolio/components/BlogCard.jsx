import Link from "next/link";

export default function BlogCard({ post }) {
  const { slug, title, date, excerpt, readTime } = post;

  const formatted = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="blog-row" style={{ display: "grid" }}>
      <div className="blog-date">{formatted}</div>
      <div>
        <h3>{title}</h3>
        <p className="excerpt">{excerpt}</p>
      </div>
      <div className="blog-read">{readTime}</div>
    </Link>
  );
}
