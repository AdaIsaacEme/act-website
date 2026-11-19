import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaFor, SITE_URL, OG_IMAGE } from '../seo';

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/** Keeps the page title, description, canonical URL and share tags in step with the route. */
const Seo: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = metaFor(pathname);
    const url = SITE_URL + (meta.path === '/' ? '/' : meta.path);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', SITE_URL + OG_IMAGE);
    setMeta('meta[name="robots"]', 'content', meta.path === '/404' ? 'noindex' : 'index, follow');
  }, [pathname]);
  return null;
};

export default Seo;
