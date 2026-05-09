/**
 * PostBody — renders an array of content blocks from data/posts.js.
 *
 * Supported block types: p, h2, h3, ul, quote, code.
 * Add a new block type? Add a case here and document it in data/posts.js.
 */
export default function PostBody({ blocks }) {
  return (
    <div className="post-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return <blockquote key={i}>{block.text}</blockquote>;
          case "code":
            return (
              <pre key={i}>
                <code>{block.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
