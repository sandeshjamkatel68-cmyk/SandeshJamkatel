import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostBody";
import { posts, getPostBySlug } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const formatted = new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container">
      <article className="post">
        <Link href="/blog" className="post-back">
          ← Back to blog
        </Link>

        <div className="post-meta">
          {formatted} · {post.readTime}
        </div>

        <h1>{post.title}</h1>

        <PostBody blocks={post.content} />
      </article>
    </div>
  );
}
