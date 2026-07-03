const baseUrl = process.env.SMOKE_BASE_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/collection",
  "/homes/rath-one-bed-home",
  "/homes/rath-one-bed-home/walkthrough",
  "/request-a-quote",
  "/book",
  "/reserve",
  "/contact",
  "/how-it-works",
  "/land-and-site-guide",
  "/journal",
  "/journal/how-modular-homes-work-in-ireland",
  "/about",
  "/privacy",
  "/terms",
  "/refundable-deposit-terms",
  "/sitemap.xml",
  "/robots.txt",
];

let failures = 0;

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`, {
    method: "GET",
    redirect: "manual",
  });

  if (response.status < 200 || response.status >= 400) {
    failures += 1;
    console.error(`${route}: ${response.status}`);
  } else {
    console.log(`${route}: ${response.status}`);
  }
}

if (failures > 0) {
  process.exit(1);
}
