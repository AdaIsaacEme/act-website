import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppState, Project, Solution, Partner, SiteContent } from "../types";

const defaultContent: SiteContent = {
  hero: {
    slides: [
      {
        id: "",
        title: "",
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
        title: "Trusted by The Mines, Oil Gas and other industries",
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
    phone2: "+233-501-533-712",
    email: "office@act-ict.com",
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
      "Supplied and installed automated weather stations across Ghana. The project enhanced real-time weather monitoring and data collection.",
    category: "Engineering",
    image: "/images/projects/weather-stations.jpg",
  },
  {
    id: "3",
    title: "Leaky Feeder Project",
    description:
      "Designed and deployed a Leaky Feeder communication system for mining operations. The solution provides reliable voice and data communication throughout underground tunnels, ensuring continuous connectivity between personnel, vehicles, and control rooms.",
    category: "Communications",
    image: "/images/projects/leaky-feeder.jpg",
  },
  {
    id: "5",
    title: " RT Tactical Aerostat System",
    description:
      "A tactical aerostat system enabling continuous day-and-night operations for up to 72 hours at heights of up to 1,000 feet, installed at the Mines.",
    category: "Security",
    image: "/images/projects/weather-balloon.jpg",
  },
  {
    id: "6",
    title: "Security Fence Installation",
    description:
      "Installation of perimeter intrusion detection fence at the Mines.",
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
    id: "9",
    title: "Underground CCTV",
    description:
      "Design, installation and maintenance of IP CCTV systems across underground mining operations.",
    category: "Security",
    image: "/images/projects/anglogold-cctv.jpg",
  },
  {
    id: "11",
    title: "TETRA Radio Network",
    description:
      "Full TETRA digital radio network deployment for mission-critical communications at mining operations.",
    category: "Communications",
    image: "/images/projects/ahafo-tetra.jpg",
  },
  {
    id: "12",
    title: "CCTV",
    description: "Multi-site CCTV deployment across mining facilities.",
    category: "Security",
    image: "/images/projects/gsr-cctv.jpg",
  },
];

const defaultSolutions: Solution[] = [
  // COMMUNICATIONS CATEGORY
  {
    id: "1",
    title: "IT & Communications",
    description:
      "Enterprise networking, communications, and connectivity solutions.",
    iconName: "Network",
    category: "Communications",
    productGroups: [
      {
        id: "pg-1-1",
        title: "RADIOS",
        products: [
          {
            id: "prod-1-1-1",
            title: "MOTOROLA R7",
            specs: [
              { text: "Digital Portable Two-Way Radio" },
              { text: "IP 68" },
              { text: "Intrinsically Safe" },
              { text: "Battery: Li-Ion 2850 mAH" },
            ],
            image: "/images/products/motorola-r7.png",
          },
          {
            id: "prod-1-1-2",
            title: "MOTOROLA R5",
            specs: [
              { text: "Digital Portable Two-Way Radio" },
              { text: "IP67" },
              { text: "Intrinsically safe" },
            ],
            image: "/images/products/motorola-r5.png",
          },
          {
            id: "prod-1-1-3",
            title: "MOTOROLA R2",
            specs: [{ text: "Digital Two-Way Radio" }, { text: "IP55" }],
            image: "/images/products/motorola-r2.png",
          },
          {
            id: "prod-1-1-4",
            title: "PTT OVER CELLULAR (POC)",
            specs: [
              {
                text: "ActiTalk push-to-talk over cellular with nationwide coverage",
              },
              { text: "GPS tracking" },
              { text: "Dispatch and recording capabilities" },
            ],
            image: "/images/products/poc-radio.jpg",
          },
        ],
      },
      {
        id: "pg-1-2",
        title: "MOXA",
        products: [
          {
            id: "prod-1-2-1",
            title: "Secure Routers",
            specs: [
              { text: "IEC 62443-4-2 cybersecurity standard" },
              { text: "Intrusion prevention system" },
              { text: "Intrusion detection system" },
            ],
            image: "/images/products/moxa-secure-routers.png",
          },
        ],
      },
      {
        id: "pg-1-3",
        title: "CISCO",
        products: [
          {
            id: "prod-1-3-1",
            title: "Switches for every network",
            specs: [
              { text: "Cisco C9350 Series Smart Switches" },
              { text: "Cisco Catalyst 9300 Series Switches" },
              { text: "Cisco Catalyst 9400 Series Switches" },
              { text: "Cisco Catalyst 9200 Series Switches" },
            ],
            image: "/images/products/cisco-switches.png",
          },
          {
            id: "prod-1-3-2",
            title: "Transceiver GLC-LH-SMD",
            specs: [{ text: "1000BASE-LX/LH SFP" }],
            image: "/images/products/cisco-transceiver.png",
          },
        ],
      },
      {
        id: "pg-1-4",
        title: "LEAKY FEEDER",
        products: [
          {
            id: "prod-1-4-1",
            title: "Leaky Feeder Systems",
            specs: [
              { text: "Underground mine connectivity" },
              { text: "Radiating cable systems" },
              { text: "Automatic Gain Control (AGC)" },
              { text: "Local and Remote Diagnostics" },
              { text: "Interference Reduction" },
            ],
            image: "/images/products/leaky-feeder.jpg",
          },
        ],
      },
    ],
  },

  // SAFETY CATEGORY
  {
    id: "2",
    title: "Safety Solutions",
    description: "Comprehensive safety and worker protection solutions.",
    iconName: "ShieldCheck",
    category: "Safety",
    productGroups: [
      {
        id: "pg-2-1",
        title: "SCHUAENBURG SYSTEMS",
        products: [
          {
            id: "prod-2-1-1",
            title: "GDI Sentinel",
            specs: [
              { text: "Multi-gas precision" },
              { text: "Uninterrupted Power" },
              { text: "Rugged Durability" },
              { text: "MHSC & DMRE Compliant" },
            ],
            image: "/images/products/schuaenburg-gdi-sentinel.png",
          },
          {
            id: "prod-2-1-2",
            title: "SmartIntellisens Fixed Multi Gas Detector",
            specs: [
              { text: "SO2, H2S, EX, O2, CO2, CH4, CO, NO, NO2, NH3" },
              { text: "Other gases can be requested" },
              { text: "Environmental Sensors" },
            ],
            image: "/images/products/schuaenburg-smartintellisens.png",
          },
          {
            id: "prod-2-1-3",
            title: "Fatigue monitoring solutions",
            specs: [
              { text: "Worker fatigue detection" },
              { text: "Safety compliance" },
            ],
            image: "/images/products/schuaenburg-fatigue-monitoring.png",
          },
          {
            id: "prod-2-1-4",
            title: "Underground Mining Collision Avoidance Solutions",
            specs: [
              { text: "Vehicle checklist Capability" },
              { text: "Onboard gas detection interlocking" },
              { text: "Personnel 2-way page communication" },
              { text: "Productivity monitoring and optimization application" },
            ],
            image: "/images/products/schuaenburg-collision-avoidance.png",
          },
          {
            id: "prod-2-1-5",
            title: "SmartLite Basic LFP Caplamp",
            specs: [
              { text: "Intelligent lighting" },
              { text: "Long battery life" },
            ],
            image: "/images/products/schuaenburg-smartlite-caplamp.png",
          },
          {
            id: "prod-2-1-6",
            title: "Self Rescuer",
            specs: [
              { text: "Protection time - up to 40 minutes" },
              { text: "Weight – Approx 2.25-2.3kg" },
              { text: "Shelf life up to years" },
            ],
            image: "/images/products/self-rescuer.jpg",
          },
        ],
      },
    ],
  },

  // SECURITY CATEGORY
  {
    id: "3",
    title: "Security Solutions",
    description: "CCTV, Access Control, and Perimeter Intrusion Detection.",
    iconName: "Eye",
    category: "Security",
    productGroups: [
      {
        id: "pg-3-1",
        title: "CCTV",
        products: [
          {
            id: "prod-3-1-1",
            title: "Avigilon",
            specs: [
              {
                text: "Premium AI-powered security cameras featuring advanced video analytics and high-definition clarity.",
              },
              {
                text: "Engineered for enterprise-level surveillance with smart detection to pinpoint critical events instantly.",
              },
            ],
            image: "/images/products/avigilon.jpg",
          },
          {
            id: "prod-3-1-2",
            title: "Axis Communications",
            specs: [
              {
                text: "Top-tier network cameras delivering elite cybersecurity protections and exceptional image quality.",
              },
              {
                text: "The industry standard for durable, high-end IP video surveillance in demanding environments.",
              },
            ],
            image: "/images/products/axis.jpg",
          },
          {
            id: "prod-3-1-3",
            title: "Hikvision",
            specs: [
              {
                text: "Highly reliable and cost-effective cameras offering crystal-clear video and excellent night vision.",
              },
              {
                text: "The world-leading choice for versatile, user-friendly security across homes and commercial properties.",
              },
            ],
            image: "/images/products/hikvision.jpg",
          },
          {
            id: "prod-3-1-4",
            title: "Dahua",
            specs: [
              {
                text: "Innovative surveillance systems combining high-resolution imaging with smart automation features.",
              },
              {
                text: "Budget-friendly, high-performance cameras built for dependable indoor and outdoor monitoring.",
              },
            ],
            image: "/images/products/dahua.jpg",
          },
          {
            id: "prod-3-1-5",
            title: "Holowits",
            specs: [
              {
                text: "Next-generation IP surveillance systems powered by cutting-edge AIoT technology and intelligent deep-learning analytics.",
              },
              {
                text: "Designed for smart city and commercial security, featuring advanced object tracking and ultra-low light color vision.",
              },
            ],
            image: "/images/products/holowits.jpg",
          },
        ],
      },
      {
        id: "pg-3-2",
        title: "GMAfcon",
        products: [
          {
            id: "prod-3-2-1",
            title: "Intrusion Detection System (IDS)",
            specs: [
              {
                text: "An advanced, high-precision perimeter security solution designed for both indoor and outdoor threats.",
              },
            ],
            image: "/images/products/gmafcon.jpg",
          },
        ],
      },
      {
        id: "pg-3-3",
        title: "RT Aerostat System",
        products: [
          {
            id: "prod-3-3-1",
            title: "RT Aerostat System",
            specs: [
              { text: "Rapid deployment capability" },
              { text: "Cost-effective surveillance solution" },
              {
                text: "Designed for extended surveillance and reconnaissance missions",
              },
              { text: "Provides day and night situational awareness" },
              { text: "Operates at altitudes up to 1,000 ft" },
              { text: "Requires only a minimal crew" },
            ],
            image: "/images/products/rt-trailer.jpg",
          },
        ],
      },
    ],
  },

  // ELECTRICALS CATEGORY
  {
    id: "4",
    title: "Electrical Solutions",
    description: "Industrial power solutions, lighting, and backup systems.",
    iconName: "Zap",
    category: "Electricals",
    productGroups: [
      {
        id: "pg-4-1",
        title: "BEKA - Industrial LED Lighting Solutions",
        products: [
          {
            id: "prod-4-1-1",
            title: "LEDNOVA",
            specs: [
              {
                text: "Marine grade high-pressure die-cast aluminium (EN 1706 AC-44300)",
              },
              { text: "IP 66" },
              { text: "Up to 100,000h - L90B10" },
              { text: "Standard: 90-305V – 50Hz" },
              { text: "230V +3%/-10% - 50Hz" },
              { text: "Large Area & Floodlighting" },
            ],
            image: "/images/products/lednova.jpg",
          },
          {
            id: "prod-4-1-2",
            title: "LED SOLAR LIGHTING",
            specs: [
              { text: "Off-grid areas & security lighting" },
              { text: "Normal Flux (lm) 10928" },
              { text: "Neutral White 740 & Warm White 730" },
              { text: "IP 66" },
              { text: "60,000h - L90B10 - 50,000h - L80B10" },
              { text: "12V DC" },
            ],
            image: "/images/products/beka-solar.jpg",
          },
          {
            id: "prod-4-1-3",
            title: "OMNIBLAST",
            specs: [
              {
                text: "Marine grade high-pressure die-cast aluminium (EN 1706 AC-44300)",
              },
              { text: "Mining, Car Parks, Large Area & Floodlighting" },
              { text: "Flux (lm) - 230413198-264V – 50Hz" },
              { text: "100,000h - Up to L95B10" },
            ],
            image: "/images/products/omniblast.jpg",
          },
        ],
      },
      {
        id: "pg-4-2",
        title: "ACT ICT Solar Trailer",
        products: [
          {
            id: "prod-4-2-1",
            title: "ACT ICT Solar Trailer",
            specs: [
              { text: "4 x 380-Watt Solar panels" },
              { text: "8 x 200 Ah Gel Batteries" },
              { text: "9-meter manual mast" },
              { text: "Single Axle Trailer (Aus/US standard)" },
              { text: "Used for Network, Radio, CCTV and lighting" },
            ],
            image: "/images/products/solar-trailer.jpg",
          },
        ],
      },
    ],
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
    name: "Schauenburg",
    logoUrl: "/images/partners/schauenburg.png",
    tier: "Partner",
  },
  {
    id: "3",
    name: "Avigilon",
    logoUrl: "/images/partners/avigilon.png",
    tier: "Technology Partner",
  },
  {
    id: "4",
    name: "BEKA Schréder",
    logoUrl: "/images/partners/beka-schreder.png",
    tier: "Authorized Partner",
  },
  {
    id: "5",
    name: "Moxa",
    logoUrl: "/images/partners/moxa.png",
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
    name: "CISCO",
    logoUrl: "/images/partners/cisco.png",
    tier: "Select Partner",
  },
  {
    id: "8",
    name: "GM Afcon Intrusion Detection",
    logoUrl: "/images/partners/gm-afcon.png",
    tier: "Authorized Partner",
  },
  {
    id: "9",
    name: "RT",
    logoUrl: "/images/partners/rt.png",
    tier: "Partner",
  },
  {
    id: "10",
    name: "Huawei",
    logoUrl: "/images/partners/huawei.png",
    tier: "Technology Partner",
  },
  {
    id: "11",
    name: "Watergen",
    logoUrl: "/images/partners/watergen.png",
    tier: "Partner",
  },
  {
    id: "12",
    name: "Thuraya",
    logoUrl: "/images/partners/thuraya.png",
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
