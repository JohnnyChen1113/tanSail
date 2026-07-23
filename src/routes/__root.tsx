import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { ThemeProvider } from "#/components/theme-provider";

import appCss from "#/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanSail — Set a better course",
      },
      {
        name: "description",
        content: "A design-first TanStack Start starter for Cloudflare Workers.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { readonly children: React.ReactNode }) {
  return (
    // suppress since we're updating the "dark" class in ThemeProvider
    <html lang="en" suppressHydrationWarning>
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
