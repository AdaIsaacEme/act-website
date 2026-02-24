import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppState, Project, Solution, Partner, SiteContent } from "../types";

const defaultContent: SiteContent = {
  hero: {
    slides: [
      {
        id: "1",
        title: "Leading Technology Solutions in Ghana",
        subtitle:
          "Empowering businesses with cutting-edge IT, Communications, and Security systems.",
        image: "/images/hero/slide-1.jpg",
        ctaPrimary: "Explore Solutions",
        ctaSecondary: "View Projects",
      },
      {
        id: "2",
        title: "Platinum Partner of Motorola Solutions",
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
    ],
  },
  contact: {
    address: "123 Technology Avenue, Accra, Ghana",
    phone: "+233 30 200 0000",
    email: "info@act-ict.com.gh",
    mapUrl: "https://maps.google.com/maps?q=Accra,Ghana&z=15&output=embed",
  },
  socials: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "UG Medical Centre",
    description:
      "Comprehensive IT and Security installation for the University of Ghana Medical Centre.",
    category: "Infrastructure",
    image: "/images/projects/ug-medical-centre.jpg",
  },
  {
    id: "2",
    title: "Weather Stations Project",
    description:
      "Deployment of advanced weather monitoring stations across key agricultural zones.",
    category: "Engineering",
    image: "/images/projects/weather-stations.jpg",
  },
  {
    id: "3",
    title: "Leaky Feeder Project",
    description: "Underground mining communication system implementation.",
    category: "Communications",
    image: "/images/projects/leaky-feeder.jpg",
  },
  {
    id: "4",
    title: "TETRA Installation",
    description: "Secure TETRA radio network setup for public safety agencies.",
    category: "Communications",
    image: "/images/projects/tetra-installation.jpg",
  },
  {
    id: "5",
    title: "Weather Balloon Installation",
    description: "High-altitude weather data collection systems.",
    category: "Engineering",
    image: "/images/projects/weather-balloon.jpg",
  },
  {
    id: "6",
    title: "Perseus Fence Installation",
    description:
      "High-security perimeter fencing with integrated intrusion detection.",
    category: "Security",
    image: "/images/projects/perseus-fence.jpg",
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
    description: "Fiber optics, structured cabling, and wireless backbones.",
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
    title: "Safety Equipment",
    description: "PPE, fire safety systems, and industrial safety gear.",
    iconName: "LifeBuoy",
  },
  {
    id: "8",
    title: "LED Industrial Lights",
    description: "Energy-efficient high-bay and street lighting solutions.",
    iconName: "Lightbulb",
  },
  {
    id: "9",
    title: "Industrial Tires",
    description: "Heavy-duty tires for mining and construction vehicles.",
    iconName: "Disc",
  }, // Using Disc as tire proxy
  {
    id: "10",
    title: "Radio Communications",
    description: "Two-way radios, TETRA, and DMR systems.",
    iconName: "Radio",
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

  const updateProject = (updatedProject: Project) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    );
  };

  const addProject = (newProject: Project) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        projects,
        solutions,
        partners,
        updateContent,
        updateProject,
        addProject,
        deleteProject,
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
