const routes = [
  {
    name: "desktop-home",
    url: "http://localhost:3000",
    width: 1440,
    height: 1000,
  },
  {
    name: "desktop-walkthrough",
    url: "http://localhost:3000/homes/rath-one-bed-home/walkthrough",
    width: 1440,
    height: 1000,
  },
  {
    name: "mobile-walkthrough",
    url: "http://localhost:3000/homes/rath-one-bed-home/walkthrough",
    width: 390,
    height: 844,
  },
];

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    return null;
  }
}

function hasMeaningfulScreenshot(buffer) {
  const sample = buffer.subarray(0, Math.min(buffer.length, 4096));
  return new Set(sample).size > 24;
}

const playwright = await loadPlaywright();

if (!playwright) {
  console.log(
    "Playwright is not installed; skipping automated canvas screenshots.",
  );
  process.exit(0);
}

const browser = await playwright.chromium.launch();

try {
  for (const route of routes) {
    const page = await browser.newPage({
      viewport: { width: route.width, height: route.height },
      deviceScaleFactor: 1,
    });
    await page.goto(route.url, { waitUntil: "networkidle" });

    if (route.url === "http://localhost:3000") {
      await page
        .locator("[data-home-explorer='true']")
        .scrollIntoViewIfNeeded();
    }

    await page.waitForTimeout(1600);
    const explorer = page.locator("[data-home-explorer='true']").first();
    await explorer.waitFor({ state: "visible", timeout: 10000 });

    const status = await explorer.evaluate((node) => {
      const canvas = node.querySelector("canvas");
      const fallback = node.querySelector("[data-explorer-fallback='true']");
      const rect = node.getBoundingClientRect();
      return {
        hasCanvas: Boolean(canvas),
        hasFallback: Boolean(fallback),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        canvasWidth: canvas?.width ?? 0,
        canvasHeight: canvas?.height ?? 0,
      };
    });

    const screenshot = await explorer.screenshot();

    if (status.width < 300 || status.height < 300) {
      throw new Error(
        `${route.name}: explorer is too small ${JSON.stringify(status)}`,
      );
    }

    if (!status.hasCanvas && !status.hasFallback) {
      throw new Error(`${route.name}: missing both canvas and fallback`);
    }

    if (
      status.hasCanvas &&
      (status.canvasWidth < 300 || status.canvasHeight < 300)
    ) {
      throw new Error(
        `${route.name}: canvas buffer is too small ${JSON.stringify(status)}`,
      );
    }

    if (!hasMeaningfulScreenshot(screenshot)) {
      throw new Error(`${route.name}: screenshot appears blank`);
    }

    console.log(`${route.name}: ok ${JSON.stringify(status)}`);
    await page.close();
  }
} finally {
  await browser.close();
}
