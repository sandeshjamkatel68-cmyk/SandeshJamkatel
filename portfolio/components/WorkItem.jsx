/**
 * WorkItem — single row in the numbered project list.
 * Replaces the old card grid. More editorial, less template-ish.
 */
export default function WorkItem({ project, index }) {
  const { title, year, role, description, tags, liveUrl, repoUrl } = project;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="work-item">
      <div className="work-num">{num}</div>

      <div className="work-body">
        <h3>{title}</h3>
        <div className="role">{role}</div>
        <p>{description}</p>
        {tags?.length > 0 && (
          <div className="work-tags">
            {tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        )}
      </div>

      <div className="work-meta">
        <span className="year">{year}</span>
        <div className="work-links">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Visit site →
            </a>
          ) : (
            <span className="dim">No live URL</span>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Source →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
