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
- [x] Commit and publish the completed phase to GitHub.

## Phase 2 — configurable site shell

- [x] Add a typed site configuration contract for metadata, navigation, calls to action,
      social links, and footer groups.
- [x] Build reusable header, mobile navigation, footer, announcement, and section primitives.
- [x] Add accessible navigation states, skip links, focus styles, and reduced-motion behavior.
- [x] Add SEO defaults, social metadata, sitemap, robots, and favicon replacement guidance.
- [x] Document content-only customization and component-level customization separately.

## Phase 3 — visual preset system

- [x] Define semantic design tokens independent of section components.
- [x] Ship the editorial `Harbor` preset.
- [x] Ship the product-led `Horizon` preset.
- [x] Ship the high-contrast `Nightwatch` preset.
- [x] Allow presets to change typography, density, geometry, color, and visual composition.
- [x] Add responsive visual regression coverage for every preset.

## Phase 4 — landing-page block library

- [x] Add multiple hero, logo-cloud, feature, use-case, testimonial, pricing, FAQ, and CTA blocks.
- [x] Keep block content data-driven and composable without a page builder runtime.
- [x] Add tasteful motion primitives with reduced-motion fallbacks.
- [x] Add a local gallery route for comparing block and preset combinations.
- [x] Add six typed page recipes for product, open-source, knowledge, and service sites.

## Phase 5 — content and marketing

- [x] Add optional MDX documentation and blog modules.
- [x] Add changelog, legal-page, and contact-page recipes.
- [x] Add structured data helpers and share-image guidance.
- [x] Keep content modules removable without changing the site shell.

## Phase 6 — optional product modules

- [ ] Publish authentication as an opt-in recipe or package.
- [ ] Publish database and ORM integration as an opt-in recipe or package.
- [ ] Publish email, analytics, storage, and billing integrations as independent recipes.
- [x] Ensure the default starter remains deployable without secrets or external services.

## Phase 7 — one-prompt generation workflow

- [x] Define a stable brief schema for brand, audience, pages, sections, tone, and preset.
- [x] Create a TanSail Codex skill that translates a brief into typed site configuration.
- [x] Add guarded component selection and content-generation steps.
- [x] Make the workflow run checks and report unresolved content or deployment requirements.
- [x] Provide example prompts and generated-site fixtures.

## Phase 8 — community release

- [x] Add contribution, code-of-conduct, security, and release documentation.
- [x] Add issue and pull-request templates.
- [x] Set up CI for checks, browser behavior tests, builds, and dependency review.
- [ ] Standardize Linux screenshot baselines with the planned Apple Container workflow and restore
      pixel comparisons in CI.
- [x] Publish the tagged `v0.1.0` release with migration notes.
- [x] Publish a public TanSail showcase deployment.
- [x] Review all bundled assets, fonts, examples, and dependencies for redistribution rights.

## Phase 9 — design governance and bilingual release

- [x] Add a machine-readable and human-readable `DESIGN.md` contract with CI enforcement.
- [x] Introduce language-aware English and Simplified Chinese routes, dictionaries, SEO, and type.
- [x] Replace abstract homepage decoration with original product interface compositions.
- [x] Keep preset geometry stable while refining Luminous and Signal visual atmospheres.
- [x] Add a clean-room Reference-to-TanSail skill and deterministic brief renderer.
- [x] Add responsive browser coverage for locale, metadata, overflow, and mobile navigation.
- [x] Publish the independent showcase and the tagged `v0.2.0` release.

## Phase 10 — template shell and SEO hardening

- [x] Make announcements opt-in instead of part of the default shell.
- [x] Enforce recommended 40–60 character titles and 140–160 character descriptions.
- [x] Keep desktop navigation adjacent to the brand and reserve the right edge for actions.
- [x] Establish readable minimum sizes for supporting homepage copy.
- [x] Protect footer introduction columns from collapsing into character-by-character wrapping.
- [x] Pass static, unit, browser, screenshot, and production-build validation.

## Phase 11 — structural presets and discoverable recipes

- [x] Add the Ledger preset with distinct density, geometry, typography, and composition tokens.
- [x] Keep preset IDs shared by runtime recipes and generated-site briefs.
- [x] Expose page recipes from the default site navigation.
- [x] Document atmosphere-only and structural preset responsibilities.
- [x] Pass static, unit, browser, screenshot, and production-build validation.

## Phase 12 — bilingual documentation system

- [x] Record a clean-room reference brief from the public ShipAny documentation experience.
- [x] Replace the initial guide demo with thirteen subsystem-focused TanSail chapters in English and Chinese.
- [x] Add explicit typed locale routes, chapter navigation, on-page navigation, search, and previous/next reading paths.
- [x] Integrate localized documentation links, metadata, alternate-language URLs, and sitemap entries into the starter shell.
- [x] Replace the Ledger presentation with a neutral technical-documentation shell, five-group navigation, readable article typography, tables, code copy actions, and responsive TOC behavior.
- [x] Enforce documentation-specific SEO ranges, localized alternates, and sitemap coverage for all twenty-six articles.
- [x] Pass design-contract, static, unit, browser, and production-build validation.

## Phase 13 — reusable ecosystem and evidence modules

- [x] Record a clean-room brief from ecosystem, directory, and testimonial references.
- [x] Add compact technology rails with structured labels and backward-compatible logo strings.
- [x] Add keyboard- and touch-operable scenario catalogs with semantic filters.
- [x] Add grid and masonry testimonial variants with explicit demo or verified evidence states.
- [x] Expand the block Gallery and product-led recipes to cover the new compositions.
- [x] Document safe sample-content replacement and keep third-party assets out of the starter.
- [x] Pass design, static, unit, browser, responsive visual, and production-build validation.
- [x] Synchronize and verify the modules in the deployed official showcase.
