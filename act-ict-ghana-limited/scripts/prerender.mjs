// Turns the single-page app into real HTML pages at build time, so search engines,
// WhatsApp/LinkedIn link previews and slow phones see the content before JavaScript runs.
// Runs after `vite build` (client) and `vite build --ssr` (server renderer).
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = path.resolve('dist');
const SERVER = path.resolve('dist-server/entry-server.js');
const { render, PAGES, NOT_FOUND_META, SITE_URL, OG_IMAGE } = await import(pathToFileURL(SERVER).href);

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
const DEFAULT_URL = 'https://act-website-six.vercel.app';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(meta, appHtml, { noindex = false } = {}) {
  const url = SITE_URL + (meta.path === '/' ? '/' : meta.path);
  let html = template.split(DEFAULT_URL).join(SITE_URL);
  html = html
    .replace(/<title>.*?<\/title>/s, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${SITE_URL}${OG_IMAGE}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace('<!--app-html-->', appHtml);
  if (noindex) {
    html = html
      .replace(/(<meta name="robots" content=")[^"]*"/, '$1noindex"')
      .replace(/\s*<link rel="canonical"[^>]*>/, '');
  }
  if (meta.path !== '/') html = html.replace(/\s*<link rel="preload" as="image"[^>]*>/, ''); // hero image is Home-only
  return html;
}

for (const meta of PAGES) {
  const appHtml = await render(meta.path);
  const out = meta.path === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${meta.path.slice(1)}.html`);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, page(meta, appHtml));
  console.log(`prerendered ${meta.path}`);
}

// 404 page — Vercel serves dist/404.html with a real 404 status for unknown URLs.
await fs.writeFile(
  path.join(DIST, '404.html'),
  page(NOT_FOUND_META, await render('/this-page-does-not-exist'), { noindex: true }),
);
console.log('prerendered 404');

const today = new Date().toISOString().slice(0, 10);
await fs.writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    PAGES.map((p) => `  <url><loc>${SITE_URL}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`,
);
await fs.writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log('wrote sitemap.xml and robots.txt');
