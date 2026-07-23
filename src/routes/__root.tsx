import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { ThemeProvider } from "#/components/theme-provider";
import { siteConfig } from "#/config/site";
import { createHeadLinks, createMetaTags } from "#/lib/seo";

import appCss from "#/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: createMetaTags(siteConfig),
    links: [...createHeadLinks(siteConfig), { rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { readonly children: React.ReactNode }) {
  return (
    // suppress since we're updating the "dark" class in ThemeProvider
    <html lang={siteConfig.metadata.locale} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}
