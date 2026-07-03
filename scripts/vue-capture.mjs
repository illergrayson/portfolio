// Refresh the VUE case-study mobile screenshots from the live site.
// One-time setup (Playwright is intentionally not a saved dependency):
//   npm i -D playwright && npx playwright install chromium
// Then: node scripts/vue-capture.mjs
import { chromium, devices } from "playwright";

const iphone = devices["iPhone 14"]; // 390-wide mobile viewport @ 3x retina
const browser = await chromium.launch();
const context = await browser.newContext({ ...iphone });
const page = await context.newPage();
const OUT = "/Users/graysoniller/GitHub/portfolio/public";

async function dismissCookie() {
  for (const label of ["Accept", "Decline"]) {
    const btn = page.getByRole("button", { name: label }).first();
    if (await btn.count().catch(() => 0)) { try { await btn.click({ timeout: 1500 }); return; } catch {} }
  }
}
const settle = async () => { await page.waitForTimeout(1600); };

// 1. LANDING HERO — "Every new drop. One feed."
await page.goto("https://vueniverse.com/", { waitUntil: "networkidle" });
await dismissCookie();
await settle();
await page.evaluate(() => window.scrollTo(0, 0));
await settle();
await page.screenshot({ path: `${OUT}/vue-mobile-landing.png` });

// 2 + 3. FEED (/drops) — top, then scrolled to product sections
await page.goto("https://vueniverse.com/drops", { waitUntil: "networkidle" });
await dismissCookie();
await settle();
await page.evaluate(() => window.scrollTo(0, 0));
await settle();
await page.screenshot({ path: `${OUT}/vue-mobile-feed.png` });

// scroll to show product-card grid across a couple of brand sections
await page.evaluate(() => window.scrollTo(0, 520));
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/vue-mobile-feed-cards.png` });

// scroll to the "More brands dropping this week" scale list
const scaleY = await page.evaluate(() => {
  const nodes = Array.from(document.querySelectorAll("*"));
  const h = nodes.find((n) => /More brands dropping this week/i.test((n.textContent || "").slice(0, 60)) && n.children.length < 3);
  if (h) return h.getBoundingClientRect().top + window.scrollY - 70;
  return 2400;
});
await page.evaluate((y) => window.scrollTo(0, y), scaleY);
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/vue-mobile-feed-scale.png` });

// 4. BRANDS drop calendar
await page.goto("https://vueniverse.com/brands", { waitUntil: "networkidle" });
await dismissCookie();
await settle();
await page.evaluate(() => window.scrollTo(0, 0));
await settle();
await page.screenshot({ path: `${OUT}/vue-mobile-brands.png` });

await browser.close();
console.log("captured");
