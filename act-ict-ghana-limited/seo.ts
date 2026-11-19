// Single source of truth for per-page titles, descriptions and the site URL.
// Used by the <Seo> component in the browser and by scripts/prerender.mjs at build time.

// The live address. Can be overridden with VITE_SITE_URL in Vercel.
export const SITE_URL: string =
  ((import.meta as any).env?.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://act-ict.com';

export const SITE_NAME = 'ACT-ICT Ghana Limited';
export const OG_IMAGE = '/og-image.jpg';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'ACT-ICT Ghana | Radio, CCTV, Networks & Mining Technology',
    description:
      'Technology systems integrator in Accra since 2011. Motorola Solutions Platinum Partner for radio communications, CCTV, ICT networks, security and mine safety across Ghana and Africa.',
  },
  {
    path: '/about',
    title: 'About Us | ACT-ICT Ghana',
    description:
      'ACT-ICT Ghana Limited has designed, deployed and supported communications, security and ICT systems for mining, oil & gas, government and healthcare clients since 2011.',
  },
  {
    path: '/solutions',
    title: 'Solutions: Radios, CCTV, Gas Detection & LED Lighting | ACT-ICT Ghana',
    description:
      'Motorola two-way radios, Cisco and Moxa networking, leaky feeder, Schauenburg safety systems, Avigilon and Axis CCTV, perimeter intrusion detection and BEKA LED lighting.',
  },
  {
    path: '/projects',
    title: 'Projects | ACT-ICT Ghana',
    description:
      'Selected projects: UG Medical Centre ICT, a 350-bed military hospital in Zambia, TETRA radio networks, leaky feeder, underground CCTV, aerostat surveillance and weather stations.',
  },
  {
    path: '/act-ict',
    title: 'ACT-ICT Division: Radio, Video Surveillance & Networks | ACT-ICT Ghana',
    description:
      'Mission-critical TETRA and DMR radio, IP CCTV with video analytics, network infrastructure and personnel tracking for mining, defence and industry in Ghana.',
  },
  {
    path: '/act-global',
    title: 'ACT Global Division: Safety, LED Lighting & Aerostats | ACT-ICT Ghana',
    description:
      'Schauenburg mine safety systems, BEKA Schréder industrial LED lighting, RT aerostat surveillance and solar lighting trailers for remote sites.',
  },
  {
    path: '/mining',
    title: 'Mining Communications & Safety Solutions | ACT-ICT Ghana',
    description:
      'Surface and underground mining technology: digital radio, leaky feeder, fibre networks, CCTV, collision avoidance, personnel tracking, gas detection and cap lamps.',
  },
  {
    path: '/contact',
    title: 'Contact Us | ACT-ICT Ghana',
    description:
      'Contact ACT-ICT Ghana Limited, F28/8 Fifth Circular Rd., Cantonments, Accra. Call +233 302 764 657 or +233 577 700 555, or email office@act-ict.com.',
  },
];

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page not found | ACT-ICT Ghana',
  description: 'The page you are looking for does not exist.',
};

export const metaFor = (path: string): PageMeta =>
  PAGES.find((p) => p.path === path) ?? NOT_FOUND_META;
