import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog",
  description: "Notes on building, shipping, and learning to code.",
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-head">
          <span className="label">Writing</span>
          <h1 style={{ marginTop: "1rem" }}>Notes on building.</h1>
          <p>
            Short, honest writing about shipping projects, the bits of code
            I've learned the hard way, and the gap between knowing how to
            follow tutorials and knowing how to make decisions.
          </p>
        </div>

        {sorted.length === 0 ? (
          <p>Nothing here yet. First post coming soon.</p>
        ) : (
          <div className="blog-list">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
