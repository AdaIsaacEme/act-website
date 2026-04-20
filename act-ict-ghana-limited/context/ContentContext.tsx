import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppState, Project, Solution, Partner, SiteContent } from "../types";

const defaultContent: SiteContent = {
  hero: {
    slides: [
      {
        id: "1",
        title: "The Leading IT Solutions Provider in Ghana",
        subtitle:
          "Empowering businesses with cutting-edge IT, Communications, and Security systems.",
        image: "/images/hero/slide-1.jpg",
        ctaPrimary: "Explore Solutions",
        ctaSecondary: "View Projects",
      },
      {
        id: "2",
        title: "Platinum Partner for Motorola Solutions",
        subtitle:
          "Delivering reliable mission-critical communication infrastructure.",
        image: "/images/hero/slide-2.jpg",
        ctaPrimary: "Our Partners",
        ctaSecondary: "Contact Us",
      },
      {
        id: "3",
        title: "Video Surveillance",
        subtitle:
          "Explore our range of security monitoring solutions tailored for both small and large industries .",
        image: "/images/hero/slide-3.jpg",
        ctaPrimary: "View Expertise",
        ctaSecondary: "View Projects",
      },
      {
        id: "4",
        title: "Trusted by Mining, Military & Government",
        subtitle:
          "From underground mine connectivity to aerostat surveillance — we deploy where it matters most.",
        image: "/images/hero/slide-4.jpg",
        ctaPrimary: "Our Capabilities",
        ctaSecondary: "View Projects",
      },
    ],
  },
  contact: {
    address: "F28/8 Fifth Circular Rd., Cantonments, Accra, Ghana",
    phone: "+233-577-700-555",
    email: "office@act-ict.com.gh",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31767.631074774617!2d-0.17039359999999998!3d5.5738368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xfdf9abd2e1c0b97%3A0x6d8f600786f98aae!2sACT%20ICT%20Ghana%20Ltd%2C%2028%2C%208%20Fifth%20Circular%20Rd%2C%20Accra!3m2!1d5.572328!2d-0.16627319999999998!4m5!1s0xfdf9abd2e1c0b97%3A0x6d8f600786f98aae!2sACT%20ICT%20Ghana%20Ltd%2C%2028%2C%208%20Fifth%20Circular%20Rd%2C%20Accra!3m2!1d5.572328!2d-0.16627319999999998!5e0!3m2!1sen!2sgh!4v1769185781477!5m2!1sen!2sgh",
  },
  socials: {
    linkedin:
      "https://www.linkedin.com/company/act-innovative-engineering-ltd/?originalSubdomain=gh",
    facebook: "https://web.facebook.com/actictgh/?_rdc=1&_rdr#",
    twitter: "https://x.com/act_ghana",
    instagram: "https://www.instagram.com/act.ict/",
  },
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "UG Medical Centre",
    description:
      "UG Medical Centre — Design, supply, and installation of a 65,000 sqm hospital facility, including IT network (Cisco), IP telephony (Avaya), and data center infrastructure.",
    category: "Infrastructure",
    image: "/images/projects/ug-medical-centre.jpg",
  },
  {
    id: "2",
    title: "Weather Stations Project",
    description:
      "Supplied and installed 20 weather stations for the Ministry of Food and Agriculture ( MOFA) in 20 areas in Ghana.",
    category: "Engineering",
    image: "/images/projects/weather-stations.jpg",
  },
  {
    id: "3",
    title: "Leaky Feeder Project",
    description: "Underground communication installed for AngloGold Ashanti.",
    category: "Communications",
    image: "/images/projects/leaky-feeder.jpg",
  },
  {
    id: "4",
    title: "TETRA Installation",
    description: " TETRA radio network setup for Ahafo North.",
    category: "Communications",
    image: "/images/projects/tetra-installation.jpg",
  },
  {
    id: "5",
    title: " RT Tactical Aerostat System",
    description:
      "A tactical aerostat system enabling continuous day-and-night operations for up to 72 hours at heights of up to 1,000 feet, installed at Newmont Ahafo South.",
    category: "Security",
    image: "/images/projects/weather-balloon.jpg",
  },
  {
    id: "6",
    title: "Security Fence Installation",
    description:
      "Installation of perimeter intrusion detection fence at Perseus Mining.",
    category: "Security",
    image: "/images/projects/perseus-fence.jpg",
  },
  {
    id: "7",
    title: "Zambia Maina Soko Military Hospital",
    description:
      "350-bed military hospital in Zambia: CISCO passive & active data network, 500+ extension AVAYA IP telephone system, Schneider Electric data center.",
    category: "Infrastructure",
    image: "/images/projects/zambia-military-hospital.jpg",
  },
  {
    id: "8",
    title: "Newmont Ahafo — SkyStar Aerostat",
    description:
      "Deployment of RT SkyStar™ 180 tactical aerostat system enabling continuous 72-hour day & night surveillance at 1,000 feet altitude.",
    category: "Security",
    image: "/images/projects/newmont-aerostat.jpg",
  },
  {
    id: "9",
    title: "AngloGold Ashanti — Underground CCTV",
    description:
      "Design, installation and maintenance of IP CCTV systems across AngloGold Ashanti underground mining operations.",
    category: "Security",
    image: "/images/projects/anglogold-cctv.jpg",
  },
  {
    id: "10",
    title: "MOFA — 20 Weather Stations",
    description:
      "Supply and installation of 20 automated weather monitoring stations across Ghana for the Ministry of Food and Agriculture.",
    category: "Engineering",
    image: "/images/projects/mofa-weather-stations.jpg",
  },
  {
    id: "11",
    title: "Ahafo North — TETRA Radio Network",
    description:
      "Full TETRA digital radio network deployment for mission-critical communications at Ahafo North mining operations.",
    category: "Communications",
    image: "/images/projects/ahafo-tetra.jpg",
  },
  {
    id: "12",
    title: "GSR Prestea & Wassa — CCTV",
    description:
      "Multi-site CCTV deployment across Golden Star Resources Prestea and Wassa mining facilities.",
    category: "Security",
    image: "/images/projects/gsr-cctv.jpg",
  },
];

const defaultSolutions: Solution[] = [
  {
    id: "1",
    title: "IT & Communications",
    description:
      "Enterprise networking, data centers, and unified communications.",
    iconName: "Network",
  },
  {
    id: "2",
    title: "Security Solutions",
    description: "CCTV, Access Control, and Perimeter Intrusion Detection.",
    iconName: "ShieldCheck",
  },
  {
    id: "3",
    title: "Engineering Services",
    description:
      "Civil works, tower construction, and specialized engineering.",
    iconName: "HardHat",
  },
  {
    id: "4",
    title: "Electricals",
    description: "Industrial power solutions, lighting, and backup systems.",
    iconName: "Zap",
  },
  {
    id: "5",
    title: "Network Infrastructure",
    description:
      "Fiber optics, MOXA industrial network switches, Cisco networking solutions, Fiber optic infrastructure, APC power solutions, Dell and HPE servers and storage, Centralized data center solutions",
    iconName: "Server",
  },
  {
    id: "6",
    title: "Video Surveillance",
    description: "AI-powered video analytics and monitoring centers.",
    iconName: "Video",
  },

  {
    id: "7",
    title: "LED Industrial Lights",
    description: "Energy-efficient high-bay and street lighting solutions.",
    iconName: "Lightbulb",
  },
  {
    id: "8",
    title: "Industrial Tires",
    description: "Heavy-duty tires for mining and construction vehicles.",
    iconName: "Disc",
  }, // Using Disc as tire proxy
  {
    id: "9",
    title: "Radio Communications",
    description: "Two-way radios, TETRA, and DMR systems.",
    iconName: "Radio",
    category: "Communications",
  },
  {
    id: "10",
    title: "TETRA Radio Networks",
    description:
      "Mission-critical digital trunked radio systems for mining, public safety, and industrial operations. Deployed and supported across Ghana.",
    iconName: "Radio",
    category: "Communications",
  },
  {
    id: "11",
    title: "Leaky Feeder Systems",
    description:
      "Underground mine connectivity using radiating cable systems for voice, data, and tracking in tunnels and shafts.",
    iconName: "Cable",
    category: "Communications",
  },
  {
    id: "12",
    title: "PTT over Cellular (PoC)",
    description:
      "ActiTalk push-to-talk over cellular with nationwide coverage, GPS tracking, dispatch and recording capabilities.",
    iconName: "Smartphone",
    category: "Communications",
  },
  {
    id: "13",
    title: "Aerostat Surveillance",
    description:
      "RT SkyStar™ tactical aerostat systems enabling continuous day & night ISR at 1,000–1,500 ft. Deployed at Newmont Ahafo South.",
    iconName: "Eye",
    category: "Security",
  },
  {
    id: "14",
    title: "Perimeter Intrusion Detection",
    description:
      "Smart fence sensors, radar integration, and drone surveillance for critical asset protection.",
    iconName: "ShieldAlert",
    category: "Security",
  },
  {
    id: "15",
    title: "Fire Detection Systems",
    description:
      "Simplex fire detection and alarm systems, designed and installed for hospital and industrial facilities.",
    iconName: "Flame",
    category: "Security",
  },
  {
    id: "16",
    title: "Data Center Infrastructure",
    description:
      "APC & Schneider Electric-based data center design, supply and installation for enterprise and hospital environments.",
    iconName: "Database",
    category: "Infrastructure",
  },
  {
    id: "17",
    title: "Fiber Optic Networks",
    description:
      "ADSS, mine-shaft, buried & underground fiber supply, installation, and splicing. Distributors for Fujikura, VIAVI OTDR, AFL.",
    iconName: "Zap",
    category: "Infrastructure",
  },
  {
    id: "18",
    title: "Solar Lighting & Trailers",
    description:
      "BEKA Schréder solar-powered lighting trailers for rapid deployment — Wi-Fi, radio, CCTV, and lighting from a single unit.",
    iconName: "Sun",
    category: "Electrical",
  },
  {
    id: "19",
    title: "SCADA & Process Automation",
    description:
      "Industrial automation and remote monitoring solutions for mining and oil & gas process control.",
    iconName: "Settings",
    category: "Engineering",
  },
  {
    id: "20",
    title: "Drone Services",
    description:
      "Drones for security, mapping, 3D scanning, and measurements. Integrated with CCTV command centers.",
    iconName: "Navigation",
    category: "Security",
  },
];

const defaultPartners: Partner[] = [
  {
    id: "1",
    name: "Motorola Solutions",
    logoUrl: "/images/partners/motorola-solutions.png",
    tier: "Platinum Partner",
  },
  {
    id: "2",
    name: "CISCO",
    logoUrl: "/images/partners/cisco.png",
    tier: "Select Partner",
  },
  {
    id: "3",
    name: "BEKA Schréder",
    logoUrl: "/images/partners/beka-schreder.png",
    tier: "Authorized Partner",
  },
  {
    id: "4",
    name: "GM Afcon",
    logoUrl: "/images/partners/gm-afcon.png",
    tier: "Authorized Partner",
  },
  {
    id: "5",
    name: "Avigilon",
    logoUrl: "/images/partners/avigilon.png",
    tier: "Technology Partner",
  },
  {
    id: "6",
    name: "Axis",
    logoUrl: "/images/partners/axis.png",
    tier: "Technology Partner",
  },
  {
    id: "7",
    name: "Continental",
    logoUrl: "/images/partners/continental.png",
    tier: "Partner",
  },
  {
    id: "8",
    name: "Huawei",
    logoUrl: "/images/partners/huawei.png",
    tier: "Technology Partner",
  },
  {
    id: "9",
    name: "Moxa",
    logoUrl: "/images/partners/moxa.png",
    tier: "Technology Partner",
  },
  {
    id: "10",
    name: "RT",
    logoUrl: "/images/partners/rt.png",
    tier: "Partner",
  },
  {
    id: "11",
    name: "Schauenburg",
    logoUrl: "/images/partners/schauenburg.png",
    tier: "Partner",
  },
  {
    id: "12",
    name: "Thuraya",
    logoUrl: "/images/partners/thuraya.png",
    tier: "Partner",
  },
  {
    id: "13",
    name: "Watergen",
    logoUrl: "/images/partners/watergen.png",
    tier: "Partner",
  },
];

const ContentContext = createContext<AppState | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [solutions, setSolutions] = useState<Solution[]>(defaultSolutions);
  const [partners, setPartners] = useState<Partner[]>(defaultPartners);

  const updateContent = (section: keyof SiteContent, data: any) => {
    setContent((prev) => ({ ...prev, [section]: data }));
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        projects,
        solutions,
        partners,
        updateContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
