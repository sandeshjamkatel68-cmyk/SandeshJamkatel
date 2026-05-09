import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const { socials } = siteConfig;

  const links = [
    { label: "Email", href: `mailto:${siteConfig.email}` },
    { label: "GitHub", href: socials.github },
    { label: "LinkedIn", href: socials.linkedin },
    socials.facebook ? { label: "Facebook", href: socials.facebook } : null,
  ].filter(Boolean);

  return (
    <footer className="foot">
      <div className="container foot-inner">
        <p>© {year} Sandesh Jamkatel. Built in Hetauda, Nepal.</p>
        <div className="foot-socials">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
