import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Projects I've built and shipped.",
};

export default function ProjectsPage() {
  return (
    <section className="work" style={{ borderTop: "none", paddingTop: "4rem" }}>
      <div className="container">
        <div className="blog-head">
          <span className="label">Projects</span>
          <h1 style={{ marginTop: "1rem" }}>Things I've built and shipped.</h1>
          <p>
            Every project here was taken from a blank repo to a live URL. Some
            solo, some pair-built. Most taught me something I couldn't have
            picked up from a tutorial.
          </p>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <WorkItem key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
