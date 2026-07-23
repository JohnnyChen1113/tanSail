import { z } from "zod";

const routeLinkSchema = z.object({
  kind: z.literal("route"),
  label: z.string().min(1),
  to: z.literal("/"),
});

const anchorLinkSchema = z.object({
  kind: z.literal("anchor"),
  label: z.string().min(1),
  href: z.string().regex(/^#[a-z][a-z0-9-]*$/i),
});

const externalLinkSchema = z.object({
  kind: z.literal("external"),
  label: z.string().min(1),
  href: z.url(),
  newTab: z.boolean().default(true),
});

const siteLinkSchema = z.discriminatedUnion("kind", [
  routeLinkSchema,
  anchorLinkSchema,
  externalLinkSchema,
]);

const metadataSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1).max(160),
  siteUrl: z.url().refine((url) => !url.endsWith("/"), "Use an origin without a trailing slash"),
  locale: z.string().min(2),
  themeColor: z.object({
    light: z.string().min(1),
    dark: z.string().min(1),
  }),
});

const sitemapEntrySchema = z.object({
  path: z.string().regex(/^\//),
  changeFrequency: z.enum(["daily", "weekly", "monthly", "yearly"]),
  priority: z.number().min(0).max(1),
});

export const siteConfigSchema = z.object({
  metadata: metadataSchema,
  announcement: z
    .object({
      text: z.string().min(1),
      action: siteLinkSchema.optional(),
    })
    .optional(),
  navigation: z.array(siteLinkSchema),
  actions: z.object({
    primary: siteLinkSchema,
    secondary: siteLinkSchema.optional(),
  }),
  socialLinks: z.array(siteLinkSchema),
  footer: z.object({
    tagline: z.string().min(1),
    copyright: z.string().min(1),
    groups: z.array(
      z.object({
        label: z.string().min(1),
        links: z.array(siteLinkSchema),
      }),
    ),
    legalLinks: z.array(siteLinkSchema),
  }),
  seo: z.object({
    sitemap: z.array(sitemapEntrySchema).min(1),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type SiteLinkConfig = z.infer<typeof siteLinkSchema>;

export function defineSiteConfig(config: SiteConfig) {
  return siteConfigSchema.parse(config);
}

export const siteConfig = defineSiteConfig({
  metadata: {
    name: "TanSail",
    title: "TanSail — Set a better course",
    description: "A design-first TanStack Start starter for Cloudflare Workers.",
    siteUrl: "https://example.com",
    locale: "en",
    themeColor: {
      light: "#f7f4ec",
      dark: "#151a24",
    },
  },
  announcement: {
    text: "Phase two adds a typed, configurable site shell.",
    action: {
      kind: "external",
      label: "Follow the roadmap",
      href: "https://github.com/JohnnyChen1113/tanSail/blob/main/DEVELOPMENT_PLAN.md",
      newTab: true,
    },
  },
  navigation: [
    { kind: "anchor", label: "Foundation", href: "#foundation" },
    { kind: "anchor", label: "Principles", href: "#principles" },
  ],
  actions: {
    primary: {
      kind: "external",
      label: "View on GitHub",
      href: "https://github.com/JohnnyChen1113/tanSail",
      newTab: true,
    },
    secondary: {
      kind: "anchor",
      label: "Explore the foundation",
      href: "#foundation",
    },
  },
  socialLinks: [
    {
      kind: "external",
      label: "GitHub",
      href: "https://github.com/JohnnyChen1113/tanSail",
      newTab: true,
    },
  ],
  footer: {
    tagline: "Design-first TanStack Start, released under MIT.",
    copyright: "© 2026 TanSail contributors",
    groups: [
      {
        label: "Product",
        links: [
          { kind: "anchor", label: "Foundation", href: "#foundation" },
          { kind: "anchor", label: "Principles", href: "#principles" },
        ],
      },
      {
        label: "Project",
        links: [
          {
            kind: "external",
            label: "Repository",
            href: "https://github.com/JohnnyChen1113/tanSail",
            newTab: true,
          },
          {
            kind: "external",
            label: "Roadmap",
            href: "https://github.com/JohnnyChen1113/tanSail/blob/main/DEVELOPMENT_PLAN.md",
            newTab: true,
          },
        ],
      },
    ],
    legalLinks: [
      {
        kind: "external",
        label: "MIT License",
        href: "https://github.com/JohnnyChen1113/tanSail/blob/main/LICENSE",
        newTab: true,
      },
    ],
  },
  seo: {
    sitemap: [{ path: "/", changeFrequency: "monthly", priority: 1 }],
  },
});
