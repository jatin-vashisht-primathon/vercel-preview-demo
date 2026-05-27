import { test, expect } from "@playwright/test";

// Regression CAR41-328 (UI) — the home FAQ must match care41.net: a full-width
// section with a single-open, animated accordion. Drives the live preview in a
// real browser, which is the surface the bug actually manifested on.
const PREVIEW_URL = process.env.PREVIEW_URL ?? "http://localhost:3000";

test.describe("CAR41-328 — home FAQ matches care41", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PREVIEW_URL);
  });

  test("FAQ section spans full width (not capped at 768px)", async ({ page }) => {
    const accordion = page.locator("[id^=faq-button-]").first();
    await accordion.scrollIntoViewIfNeeded();
    const section = page.locator("section").filter({ has: page.locator("[id^=faq-button-]") }).first();
    const box = await section.boundingBox();
    expect(box?.width ?? 0).toBeGreaterThan(900);
  });

  test("opens the first question by default", async ({ page }) => {
    const first = page.locator("[id^=faq-button-]").first();
    await expect(first).toHaveAttribute("aria-expanded", "true");
  });

  test("keeps a single panel open and lets the open one collapse", async ({ page }) => {
    const first = page.locator("[id^=faq-button-]").first();
    const second = page.locator("[id^=faq-button-]").nth(1);
    await second.click();
    await expect(first).toHaveAttribute("aria-expanded", "false");
    await expect(second).toHaveAttribute("aria-expanded", "true");
    await second.click();
    await expect(second).toHaveAttribute("aria-expanded", "false");
  });

  test("rotates the chevron on the expanded question", async ({ page }) => {
    const chevron = page.locator("[id^=faq-button-]").first().locator("svg");
    await expect(chevron).toHaveClass(/rotate-180/);
  });
});
