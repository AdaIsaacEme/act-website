export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll map string names to Lucide icons
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string; // Placeholder URL
  tier: string;
}

export interface SiteContent {
  hero: {
    slides: {
      id: string;
      title: string;
      subtitle: string;
      image: string;
      ctaPrimary: string;
      ctaSecondary: string;
    }[];
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
  };
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export interface AppState {
  projects: Project[];
  solutions: Solution[];
  partners: Partner[];
  content: SiteContent;
  updateContent: (section: keyof SiteContent, data: any) => void;
  updateProject: (project: Project) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}
