/**
 * Blog posts.
 *
 * To add a new post: copy an existing object to the TOP of the array
 * (newest first) and edit the fields.
 *
 * Fields:
 *   slug       — URL-safe id (becomes /blog/your-slug). Lowercase, hyphenated.
 *   title      — post title
 *   date       — ISO date string "YYYY-MM-DD"
 *   excerpt    — short summary shown on the blog list page (1-2 sentences)
 *   readTime   — estimated read time, e.g. "4 min read"
 *   content    — the post body, as an array of blocks.
 *
 * Block types:
 *   { type: "p", text: "..." }                 — paragraph
 *   { type: "h2", text: "..." }                — section heading
 *   { type: "h3", text: "..." }                — sub-heading
 *   { type: "ul", items: ["...", "..."] }      — bullet list
 *   { type: "quote", text: "..." }             — blockquote
 *   { type: "code", text: "..." }              — code block (preformatted)
 */

export const posts = [
  {
    slug: "shipping-shrinkbox-bulk-url-to-zip",
    title: "Shipping the Bulk URL-to-Zip Feature on ShrinkBox",
    date: "2025-09-12",
    excerpt:
      "Why I added bulk URL-to-zip to ShrinkBox, what the user friction actually was, and what I learned shipping a focused fix instead of a big redesign.",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "ShrinkBox started as a simple file-compression tool. People paste files, get smaller versions back. Clean. But after watching how people actually used it, I noticed a pattern that bugged me, and bugged them.",
      },
      {
        type: "h2",
        text: "The friction I kept seeing",
      },
      {
        type: "p",
        text: "Users would compress one image. Save it. Open another tab. Paste another link. Compress that. Save it. Repeat ten times. The product worked, but it was slow in a way that wasn't about code performance. It was about workflow.",
      },
      {
        type: "p",
        text: "The fix wasn't a redesign. It was a single new flow: paste a list of URLs, get back one zip with everything inside.",
      },
      {
        type: "h2",
        text: "What I built",
      },
      {
        type: "ul",
        items: [
          "A textarea that accepts pasted URLs, one per line.",
          "A small fetcher that pulls each image in parallel.",
          "A zip archive built in the browser, downloaded as a single file.",
          "Clear progress feedback so users know nothing is hanging.",
        ],
      },
      {
        type: "h2",
        text: "What I learned",
      },
      {
        type: "p",
        text: "Two things stuck with me. First, the best feature ideas come from watching real people use the product, not from brainstorming. Second, a focused fix beats a big redesign almost every time. Ship the smallest thing that removes the friction. Then watch again.",
      },
      {
        type: "quote",
        text: "Ship the smallest thing that removes the friction. Then watch again.",
      },
      {
        type: "p",
        text: "If you've used ShrinkBox and have ideas for what should come next, I'd love to hear them. The contact page has my email.",
      },
    ],
  },
  {
    slug: "why-i-build-instead-of-tutorial-hopping",
    title: "Why I Build Instead of Tutorial-Hopping",
    date: "2025-06-20",
    excerpt:
      "How I broke out of the tutorial loop and started actually shipping things, and why the cliff between learning and building is the hardest part.",
    readTime: "3 min read",
    content: [
      {
        type: "p",
        text: "For the first year I tried to learn web development, I was stuck in what people call the cliff of confusion. I'd finish a tutorial, feel confident, sit down to build something on my own, and freeze.",
      },
      {
        type: "h2",
        text: "The cliff is real",
      },
      {
        type: "p",
        text: "Tutorials hold your hand. They tell you exactly what to type and what file to put it in. Real projects don't do that. You have to make decisions every five minutes: what folder, what name, what library, what to do when something breaks in a way the tutorial never covered.",
      },
      {
        type: "p",
        text: "That gap between knowing how to follow instructions and knowing how to make decisions is where most learners give up. I almost did.",
      },
      {
        type: "h2",
        text: "What got me past it",
      },
      {
        type: "ul",
        items: [
          "Starting a project I actually wanted to use myself, not just a portfolio piece.",
          "Allowing the code to be ugly at first. Working > clean.",
          "Asking for help when stuck, including asking AI tools to plan and debug, while still owning the code.",
          "Shipping early. A live URL on Vercel, even rough, beats a polished local-only project.",
        ],
      },
      {
        type: "h2",
        text: "What I tell other beginners now",
      },
      {
        type: "p",
        text: "Pick something tiny that you would actually use. Build it. Put it on the internet. The skills that matter: debugging, deciding, deploying. They only show up when there's no tutorial in front of you.",
      },
    ],
  },
];

/** Helper to find a post by slug. Used by the dynamic blog route. */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
