/**
 * ProjectCard — renders a single project from data/projects.js.
 *
 * Pure presentational component. All data comes via props.
 * Used on both the homepage (featured) and the projects page (all).
 */
export default function ProjectCard({ project }) {
  const { title, year, role, description, tags, liveUrl, repoUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <span className="project-meta">{year}</span>
      </div>

      <div className="role">{role}</div>

      <p>{description}</p>

      {tags?.length > 0 && (
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="project-links">
        {liveUrl ? (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Live site
          </a>
        ) : (
          <span className="muted">
            <i className="fa-solid fa-circle-minus"></i>
            No public URL
          </span>
        )}

        {repoUrl ? (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
