// Build-time renderer used by scripts/prerender.mjs. Not shipped to browsers.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const tree = (url: string) => (
  <React.StrictMode>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </React.StrictMode>
);

export async function render(url: string): Promise<string> {
  // First pass waits for the lazily-loaded page module to resolve...
  const { prelude } = await prerenderToNodeStream(tree(url));
  for await (const _chunk of prelude) {
    /* drain */
  }
  // ...second pass renders it synchronously: plain HTML, no inline <script> tags
  // (those would be blocked by the Content-Security-Policy).
  return renderToString(tree(url));
}

export { PAGES, NOT_FOUND_META, SITE_URL, SITE_NAME, OG_IMAGE } from './seo';
