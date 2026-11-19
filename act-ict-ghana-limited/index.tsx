import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

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
