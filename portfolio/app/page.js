import Link from "next/link";
import Image from "next/image";
import WorkItem from "@/components/WorkItem";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const year = new Date().getFullYear();

  return (
    <>
      {/* HERO — left text, right photo, baseline-aligned at bottom */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="label">Front-end developer</span>
              <h1 style={{ marginTop: "1rem" }}>
                Sandesh Jamkatel<span className="stop">.</span>
                <br />
                I build small things
                <br />
                and ship them.
              </h1>

              <p className="hero-lead">
                I'm a BCA student at Tribhuvan University, learning to build
                for the web by actually shipping projects. Based in Hetauda,
                Nepal, currently looking for a front-end internship.
              </p>

              <div className="hero-cta">
                <Link href="/projects" className="btn btn-primary">
                  See projects
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get in touch
                </Link>
              </div>

              <div className="hero-facts">
                <div>
                  <strong>Hetauda, Nepal</strong>
                  Available worldwide
                </div>
                <div>
                  <strong>BCA, year 4</strong>
                  Tribhuvan University
                </div>
                <div>
                  <strong>Open to work</strong>
                  Internships preferred
                </div>
              </div>
            </div>

            <div className="hero-photo">
              <Image
                src="/images/profile.jpg"
                alt="Sandesh Jamkatel"
                fill
                priority
                sizes="(max-width: 880px) 320px, 440px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — two columns, definition-list style stack on the right */}
      <section className="about">
        <div className="container">
          <div className="about-head">
            <span className="label">About</span>
            <span className="year">{year}</span>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I taught myself front-end development outside of coursework:
                HTML, CSS, JavaScript, React, and Next.js, by building things
                I'd actually use. ShrinkBox started as a small file-compression
                tool. I shipped it. People used it. I noticed they were saving
                images one by one, so I added a bulk URL-to-zip flow.
              </p>
              <p>
                I prefer fixing real friction over chasing perfect code.
                Working &gt; clean. Live URL &gt; local repo. Pair work taught
                me Git branching and code review; solo work taught me how to
                make decisions when no one is around to ask.
              </p>
              <p>
                Right now I'm looking for a front-end internship where I can
                contribute real code from week one and learn from people who
                have shipped more than I have.
              </p>
            </div>

            <div className="stack">
              <div className="stack-row">
                <span className="stack-key">languages</span>
                <span className="stack-val">HTML, CSS, JavaScript, Java, SQL</span>
              </div>
              <div className="stack-row">
                <span className="stack-key">frameworks</span>
                <span className="stack-val">React, Next.js, Bootstrap</span>
              </div>
              <div className="stack-row">
                <span className="stack-key">data &amp; cms</span>
                <span className="stack-val">MySQL, WordPress</span>
              </div>
              <div className="stack-row">
                <span className="stack-key">tools</span>
                <span className="stack-val">Git, GitHub, Vercel, VS Code, Figma</span>
              </div>
              <div className="stack-row">
                <span className="stack-key">studying</span>
                <span className="stack-val">BCA, Tribhuvan University · 2022–present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — numbered list, not a card grid */}
      <section className="work">
        <div className="container">
          <div className="work-head">
            <span className="label">Selected work</span>
            <Link href="/projects">All projects →</Link>
          </div>

          <div className="work-list">
            {featured.map((p, i) => (
              <WorkItem key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
