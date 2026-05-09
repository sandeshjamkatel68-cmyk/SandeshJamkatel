import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <span className="label" style={{ marginBottom: "1rem", display: "inline-flex" }}>
          404
        </span>
        <h1>Page not found.</h1>
        <p>That page doesn't exist or has moved.</p>
        <Link href="/" className="btn btn-primary">← Back home</Link>
      </div>
    </section>
  );
}
