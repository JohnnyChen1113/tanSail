# TanSail development plan

TanSail is an independent, open-source, design-first starter for shipping polished
TanStack Start websites. It is not affiliated with TanStack, ShipAny, or the reference
projects that informed the product research.

## Phase 0 — project foundation

- [x] Create the public `JohnnyChen1113/tanSail` GitHub repository.
- [x] Start from the public TanStarter baseline with preserved attribution in Git history.
- [x] Establish the TanSail name, scope, clean-room rule, and MIT license.
- [x] Document the roadmap as a maintained checklist.
- [x] Keep application-specific content from the Ten Gods project out of this repository.

## Phase 1 — minimal reliable starter

- [x] Remove bundled authentication, database, and demo application code.
- [x] Keep a focused React 19 + TanStack Start + Router + Tailwind CSS + shadcn/ui core.
- [x] Provide a neutral responsive starter page with light, dark, and system themes.
- [x] Preserve useful error and not-found boundaries.
- [x] Add Cloudflare Workers development, preview, build, and deploy configuration.
- [x] Add a smoke test and unified format, lint, type-check, test, and build commands.
- [x] Document local setup, customization boundaries, and Cloudflare deployment.
- [x] Verify install, check, test, and production build from a clean dependency graph.
- [ ] Commit and publish the completed phase to GitHub.

## Phase 2 — configurable site shell

- [ ] Add a typed site configuration contract for metadata, navigation, calls to action,
      social links, and footer groups.
- [ ] Build reusable header, mobile navigation, footer, announcement, and section primitives.
- [ ] Add accessible navigation states, skip links, focus styles, and reduced-motion behavior.
- [ ] Add SEO defaults, social metadata, sitemap, robots, and favicon replacement guidance.
- [ ] Document content-only customization and component-level customization separately.

## Phase 3 — visual preset system

- [ ] Define semantic design tokens independent of section components.
- [ ] Ship the editorial `Harbor` preset.
- [ ] Ship the product-led `Horizon` preset.
- [ ] Ship the high-contrast `Nightwatch` preset.
- [ ] Allow presets to change typography, density, geometry, color, and visual composition.
- [ ] Add responsive visual regression coverage for every preset.

## Phase 4 — landing-page block library

- [ ] Add multiple hero, logo-cloud, feature, use-case, testimonial, pricing, FAQ, and CTA blocks.
- [ ] Keep block content data-driven and composable without a page builder runtime.
- [ ] Add tasteful motion primitives with reduced-motion fallbacks.
- [ ] Add a local gallery route for comparing block and preset combinations.

## Phase 5 — content and marketing

- [ ] Add optional MDX documentation and blog modules.
- [ ] Add changelog, legal-page, and contact-page recipes.
- [ ] Add structured data helpers and share-image guidance.
- [ ] Keep content modules removable without changing the site shell.

## Phase 6 — optional product modules

- [ ] Publish authentication as an opt-in recipe or package.
- [ ] Publish database and ORM integration as an opt-in recipe or package.
- [ ] Publish email, analytics, storage, and billing integrations as independent recipes.
- [ ] Ensure the default starter remains deployable without secrets or external services.

## Phase 7 — one-prompt generation workflow

- [ ] Define a stable brief schema for brand, audience, pages, sections, tone, and preset.
- [ ] Create a TanSail Codex skill that translates a brief into typed site configuration.
- [ ] Add guarded component selection and content-generation steps.
- [ ] Make the workflow run checks and report unresolved content or deployment requirements.
- [ ] Provide example prompts and generated-site fixtures.

## Phase 8 — community release

- [ ] Add contribution, code-of-conduct, security, and release documentation.
- [ ] Add issue and pull-request templates.
- [ ] Set up CI for checks, tests, builds, and dependency review.
- [ ] Publish tagged releases with migration notes and a public showcase.
- [ ] Review all bundled assets, fonts, examples, and dependencies for redistribution rights.
