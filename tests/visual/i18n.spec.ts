import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
  await page.addInitScript(() => {
    localStorage.setItem("theme", "light");
    localStorage.setItem("tansail-preset", "harbor");
  });
});

test("localized homepages expose language-safe navigation and SEO", async ({ page }) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });

  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Design the direction. Ship the whole site.",
    }),
  ).toBeVisible();
  await expect(page.locator('link[rel="alternate"]')).toHaveCount(3);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/en\/$/);
  expect((await page.title()).length).toBeGreaterThanOrEqual(40);
  expect((await page.title()).length).toBeLessThanOrEqual(60);
  const englishDescription =
    (await page.locator('meta[name="description"]').getAttribute("content")) ?? "";
  expect(englishDescription.length).toBeGreaterThanOrEqual(140);
  expect(englishDescription.length).toBeLessThanOrEqual(160);

  await page.goto("/zh", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await expect(
    page.getByRole("heading", { level: 1, name: "先把方向设计好，再把整个网站交付。" }),
  ).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/zh\/$/);
  expect((await page.title()).length).toBeGreaterThanOrEqual(40);
  expect((await page.title()).length).toBeLessThanOrEqual(60);
  const chineseDescription =
    (await page.locator('meta[name="description"]').getAttribute("content")) ?? "";
  expect(chineseDescription.length).toBeGreaterThanOrEqual(140);
  expect(chineseDescription.length).toBeLessThanOrEqual(160);
});

test("the default shell keeps navigation, supporting type, and footer copy readable", async ({
  page,
}) => {
  await page.goto("/zh", { waitUntil: "domcontentloaded" });

  await expect(page.locator(".announcement")).toHaveCount(0);

  for (const selector of [
    ".site-navigation-link",
    ".luminous-eyebrow",
    ".install-command",
    ".luminous-hero-note",
  ]) {
    const fontSize = await page
      .locator(selector)
      .first()
      .evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(13);
  }

  if ((page.viewportSize()?.width ?? 0) >= 1024) {
    const brand = await page.locator(".site-header .brand").boundingBox();
    const navigation = await page.locator(".desktop-navigation").boundingBox();
    const actions = await page.locator(".desktop-header-actions").boundingBox();
    const tagline = await page.locator(".footer-intro p").boundingBox();

    expect(brand).not.toBeNull();
    expect(navigation).not.toBeNull();
    expect(actions).not.toBeNull();
    expect(tagline).not.toBeNull();
    if (brand && navigation && actions && tagline) {
      expect(navigation.x).toBeGreaterThanOrEqual(brand.x + brand.width);
      expect(navigation.x - (brand.x + brand.width)).toBeLessThanOrEqual(40);
      expect(actions.x).toBeGreaterThanOrEqual(navigation.x + navigation.width);
      expect(tagline.width).toBeGreaterThan(250);
      expect(tagline.height).toBeLessThan(80);
    }
  }
});

test("hero remains centered, focused, and inside the viewport", async ({ page }) => {
  await page.goto("/zh", { waitUntil: "domcontentloaded" });

  const hero = await page.locator(".luminous-hero").boundingBox();
  const copy = await page.locator(".luminous-hero-copy").boundingBox();

  expect(hero).not.toBeNull();
  expect(copy).not.toBeNull();
  await expect(page.locator(".product-preview")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );

  if (!hero || !copy) return;
  expect(Math.abs(copy.x + copy.width / 2 - (hero.x + hero.width / 2))).toBeLessThan(2);
});

test("footer copy remains readable at an extra-narrow width", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/zh", { waitUntil: "domcontentloaded" });

  const tagline = await page.locator(".footer-intro p").boundingBox();
  expect(tagline).not.toBeNull();
  expect(tagline?.width ?? 0).toBeGreaterThan(200);
  expect(tagline?.height ?? Number.POSITIVE_INFINITY).toBeLessThan(90);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
});

test("mobile navigation remains operable", async ({ page }) => {
  test.skip((page.viewportSize()?.width ?? 0) >= 768, "Mobile-only interaction");

  await page.goto("/en", { waitUntil: "domcontentloaded" });
  const button = page.getByRole("button", { name: "Open navigation" });
  const navigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect
    .poll(
      async () => {
        if (await navigation.isVisible()) return true;
        await button.click();
        return navigation.isVisible();
      },
      { timeout: 15_000 },
    )
    .toBe(true);
  await navigation.getByRole("link", { name: "System" }).click();
  await expect(page).toHaveURL(/#system$/);
});

test("captures localized visual evidence", async ({ page }, testInfo) => {
  await page.goto("/zh", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: testInfo.outputPath("zh-homepage.png"), fullPage: true });
});
