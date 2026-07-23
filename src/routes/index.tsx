import { createFileRoute } from "@tanstack/react-router";
import { ArrowRightIcon, CheckIcon, CloudIcon, GitForkIcon, Layers3Icon } from "lucide-react";

import { ThemeToggle } from "#/components/theme-toggle";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const foundations = [
  {
    icon: Layers3Icon,
    title: "Focused foundation",
    description:
      "React 19, TanStack Start, Router, Tailwind CSS, and shadcn/ui—nothing else required.",
  },
  {
    icon: CloudIcon,
    title: "Cloudflare ready",
    description: "Develop, preview, and deploy to Workers through one documented toolchain.",
  },
  {
    icon: CheckIcon,
    title: "Quality built in",
    description:
      "Formatting, linting, type checks, tests, and production builds share one workflow.",
  },
];

function Mark() {
  return (
    <span aria-hidden="true" className="brand-mark">
      <span />
      <span />
    </span>
  );
}

function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TanSail home">
          <Mark />
          <span>TanSail</span>
        </a>
        <nav className="header-actions" aria-label="Primary navigation">
          <a className="text-link" href="#foundation">
            Foundation
          </a>
          <a
            className="icon-link"
            href="https://github.com/JohnnyChen1113/tanSail"
            aria-label="TanSail on GitHub"
          >
            <GitForkIcon size={18} />
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow">
          <span /> Independent and open source
        </div>
        <h1>
          Set a better course
          <br />
          for your next website.
        </h1>
        <p className="hero-copy">
          A lean TanStack Start foundation for people who care equally about sound engineering and a
          polished first impression.
        </p>
        <div className="hero-actions">
          <Button
            size="lg"
            render={
              <a
                href="https://github.com/JohnnyChen1113/tanSail"
                aria-label="View TanSail on GitHub"
              />
            }
            nativeButton={false}
          >
            View on GitHub <ArrowRightIcon />
          </Button>
          <code>pnpm install &amp;&amp; pnpm dev</code>
        </div>
        <div className="horizon" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section id="foundation" className="foundation" aria-labelledby="foundation-title">
        <div className="section-heading">
          <p>Phase one</p>
          <h2 id="foundation-title">A small core with room to grow.</h2>
        </div>
        <div className="foundation-grid">
          {foundations.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="foundation-card">
              <div className="card-meta">
                <Icon size={20} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <Mark />
          <span>TanSail</span>
        </a>
        <p>Design-first TanStack Start, released under MIT.</p>
      </footer>
    </main>
  );
}
