// Run with: node scripts/prepare-artist-images.mjs
// Keep original photos for profiles; serve small portraits in the rotating gallery.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const sources = ["joel", "layno", "sanjuan", "naar", "romix", "antony", "bracho", "oscar", "supremo"];
const output = new URL("../public/artists/", import.meta.url);
await mkdir(output, { recursive: true });
for (const name of sources) {
  const source = new URL(`../src/assets/${name}.jpeg`, import.meta.url);
  const target = new URL(`${name}.webp`, output);
  await sharp(source.pathname).rotate().resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 85 }).toFile(target.pathname);
}
