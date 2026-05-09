import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Sandesh Jamkatel.",
};

export default function ContactPage() {
  const { socials, email } = siteConfig;

  const items = [
    { key: "email", value: email, href: `mailto:${email}` },
    {
      key: "github",
      value: "sandeshjamkatel68-cmyk",
      href: socials.github,
    },
    {
      key: "linkedin",
      value: "Sandesh Jamkatel",
      href: socials.linkedin,
    },
    socials.facebook && {
      key: "facebook",
      value: "Sandesh Jamkatel",
      href: socials.facebook,
    },
  ].filter(Boolean);

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-text">
            <span className="label">Contact</span>
            <h1 style={{ marginTop: "1rem" }}>Let's talk.</h1>
            <p>
              I'm open to front-end internship opportunities and small
              freelance work. Also happy to hear from anyone learning the
              same stack: pair-programming, code reviews, or just a hello.
            </p>
            <p className="small">
              Based in {siteConfig.location}. I usually reply within a day,
              sometimes faster.
            </p>
          </div>

          <div className="contact-list">
            {items.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="contact-item"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="ckey">{item.key}</span>
                <span className="cval">{item.value}</span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
