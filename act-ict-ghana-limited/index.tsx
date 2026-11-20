import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

// A tab left open across a new deploy may ask for page files that no longer exist.
// Reload once to pick up the new version instead of showing a broken page.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  const KEY = 'act-reloaded-after-deploy';
  try {
    if (sessionStorage.getItem(KEY)) return; // already tried once; don't loop
    sessionStorage.setItem(KEY, '1');
  } catch {
    /* storage blocked */
  }
  window.location.reload();
});
// Once the page has loaded fine, allow a future deploy to trigger the reload again.
window.setTimeout(() => {
  try {
    sessionStorage.removeItem('act-reloaded-after-deploy');
  } catch {
    /* storage blocked */
  }
}, 10000);

// Old links used hash URLs (/#/mining). Move them to the real path.
let redirectedFromHash = false;
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
  redirectedFromHash = true;
}

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pages are pre-rendered at build time; hydrate them so the HTML stays on screen while JS loads.
if (rootElement.firstElementChild && !redirectedFromHash) {
  hydrateRoot(rootElement, app);
} else {
  rootElement.innerHTML = '';
  createRoot(rootElement).render(app);
}
