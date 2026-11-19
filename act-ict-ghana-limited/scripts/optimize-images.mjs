// One-off / repeatable image optimiser.
// Converts every JPG/PNG under public/images to WebP, sized for how it is shown,
// strips EXIF/GPS metadata, and deletes the original.
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('public/images');

// Optional renames (old base name -> new base name), applied on conversion.
export const RENAMES = {
  'about/cisco-router-hack': 'about/network-engineering',
  'projects/perseus-fence': 'projects/perimeter-fence',
  'projects/anglogold-cctv': 'projects/underground-cctv',
  'projects/ahafo-tetra': 'projects/tetra-network',
  'projects/gsr-cctv': 'projects/mine-cctv',
  'logo/newmount-logo': 'logo/newmont-logo',
  'products/schuaenburg-gdi-sentinel': 'products/schauenburg-gdi-sentinel',
  'products/schuaenburg-smartintellisens': 'products/schauenburg-smartintellisens',
  'products/schuaenburg-fatigue-monitoring': 'products/schauenburg-fatigue-monitoring',
  'products/schuaenburg-collision-avoidance': 'products/schauenburg-collision-avoidance',
  'products/schuaenburg-smartlite-caplamp': 'products/schauenburg-smartlite-caplamp',
};

function plan(rel) {
  const base = rel.replace(/\.[^.]+$/, '');
  if (/^hero\//.test(rel) || /banner/.test(rel)) return { width: 1920, quality: 70, small: 960 };
  if (/^(logo|partners)\//.test(rel)) return { width: 480, quality: 88 };
  if (/^products\//.test(rel)) return { width: 480, quality: 78 };
  if (base === 'divisions/act-ict' || base === 'divisions/act-global') return { width: 1400, quality: 72 };
  return { width: 1200, quality: 72 }; // cards, section photos
}

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(jpe?g|png|tiff?)$/i.test(e.name)) out.push(p);
  }
  return out;
}

let before = 0, after = 0;
for (const file of await walk(ROOT)) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const base = rel.replace(/\.[^.]+$/, '');
  const target = RENAMES[base] ?? base;
  const { width, quality, small } = plan(rel);
  const input = await fs.readFile(file);
  before += input.length;
  const write = async (w, suffix = '') => {
    const buf = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality }).toBuffer();
    await fs.writeFile(path.join(ROOT, `${target}${suffix}.webp`), buf);
    return buf.length;
  };
  after += await write(width);
  if (small) after += await write(small, '-960');
  await fs.unlink(file);
}
console.log(`images: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
