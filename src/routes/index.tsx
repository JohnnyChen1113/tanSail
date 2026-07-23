import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, CloudIcon, Layers3Icon } from "lucide-react";

import { Section } from "#/components/site/section";
import { SiteLink } from "#/components/site/site-link";
import { SiteShell } from "#/components/site/site-shell";
import { buttonVariants } from "#/components/ui/button";
import { homeContent } from "#/config/home";
import { siteConfig } from "#/config/site";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const featureIcons = {
  layers: Layers3Icon,
  cloud: CloudIcon,
  check: CheckIcon,
};

function HomePage() {
  return (
    <SiteShell config={siteConfig}>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="eyebrow">
          <span /> {homeContent.hero.eyebrow}
        </div>
        <h1 id="hero-title">{homeContent.hero.title}</h1>
        <p className="hero-copy">{homeContent.hero.description}</p>
        <div className="hero-actions">
          <SiteLink className={buttonVariants({ size: "lg" })} link={siteConfig.actions.primary}>
            {siteConfig.actions.primary.label}
            <ArrowRightIcon aria-hidden="true" />
          </SiteLink>
          {siteConfig.actions.secondary ? (
            <SiteLink className="secondary-action" link={siteConfig.actions.secondary}>
              {siteConfig.actions.secondary.label}
              <ArrowDownIcon aria-hidden="true" />
            </SiteLink>
          ) : null}
          <code>{homeContent.hero.command}</code>
        </div>
        <div className="horizon" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <Section
        id="foundation"
        eyebrow={homeContent.foundation.eyebrow}
        title={homeContent.foundation.title}
        description={homeContent.foundation.description}
      >
        <div className="foundation-grid">
          {homeContent.foundation.items.map((item, index) => {
            const Icon = featureIcons[item.icon];

            return (
              <article key={item.title} className="foundation-card">
                <div className="card-meta">
                  <Icon aria-hidden="true" size={20} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        id="principles"
        className="principles-section"
        eyebrow={homeContent.principles.eyebrow}
        title={homeContent.principles.title}
        description={homeContent.principles.description}
      >
        <div className="principles-grid" aria-label="TanSail separation of concerns">
          <p>
            <span>01</span> Typed content
          </p>
          <p>
            <span>02</span> Semantic structure
          </p>
          <p>
            <span>03</span> Swappable appearance
          </p>
        </div>
      </Section>
    </SiteShell>
  );
}
