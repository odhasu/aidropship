import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public", "images");

const BASE = "https://learn.paidinfull.vip";

const ASSETS = [
  // Logos
  { url: `${BASE}/assets/logos/logo-header.avif`, dest: "logos/logo-header.avif" },
  { url: `${BASE}/assets/logos/logo-footer.avif`, dest: "logos/logo-footer.avif" },

  // Reps trained
  { url: `${BASE}/assets/reps-trained.webp`, dest: "reps-trained.webp" },

  // YouTube thumbnails for interview cards
  { url: "https://i.ytimg.com/vi/eigS4YGosOs/hqdefault.jpg", dest: "thumbs/int-1.jpg" },
  { url: "https://i.ytimg.com/vi/oijqSykQvk0/hqdefault.jpg", dest: "thumbs/int-2.jpg" },
  { url: "https://i.ytimg.com/vi/vAUx_UkNP2g/hqdefault.jpg", dest: "thumbs/int-3.jpg" },
  { url: "https://i.ytimg.com/vi/j4FBCuKlDBM/hqdefault.jpg", dest: "thumbs/int-4.jpg" },
  { url: "https://i.ytimg.com/vi/mNbYqzOOGuE/hqdefault.jpg", dest: "thumbs/int-5.jpg" },
  { url: "https://i.ytimg.com/vi/inIT0Q1TAto/hqdefault.jpg", dest: "thumbs/int-6.jpg" },
  { url: "https://i.ytimg.com/vi/EqSfdyi9B6U/hqdefault.jpg", dest: "thumbs/int-7.jpg" },
  { url: "https://i.ytimg.com/vi/X3CHqNkPAm0/hqdefault.jpg", dest: "thumbs/int-8.jpg" },

  // Testimonial cards (51-89, skipping 73 and 84 gaps)
  ...Array.from({ length: 39 }, (_, i) => {
    const num = 51 + i;
    if (num === 73 || num === 84) return null;
    return { url: `${BASE}/assets/testimonials/${num}.avif`, dest: `testimonials/${num}.avif` };
  }).filter(Boolean),

  // Named testimonial images
  { url: `${BASE}/assets/testimonials/colby-testimonial-1.avif`, dest: "testimonials/colby-testimonial-1.avif" },
  { url: `${BASE}/assets/testimonials/ct2.avif`, dest: "testimonials/ct2.avif" },
  { url: `${BASE}/assets/testimonials/ct3.avif`, dest: "testimonials/ct3.avif" },
  { url: `${BASE}/assets/testimonials/ct4.avif`, dest: "testimonials/ct4.avif" },
  { url: `${BASE}/assets/testimonials/ct5.avif`, dest: "testimonials/ct5.avif" },
];

async function downloadFile(url, destPath) {
  const fullPath = join(PUBLIC, destPath);
  if (existsSync(fullPath)) {
    return;
  }
  mkdirSync(dirname(fullPath), { recursive: true });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(fullPath, buf);
  } catch (err) {
    // skip — asset may not exist
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets...`);
  const BATCH = 4;
  let done = 0;
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    const batch = ASSETS.slice(i, i + BATCH);
    await Promise.all(batch.map(a => downloadFile(a.url, a.dest)));
    done += batch.length;
  }
  console.log(`Done. Processed ${ASSETS.length} assets.`);
}

main();
