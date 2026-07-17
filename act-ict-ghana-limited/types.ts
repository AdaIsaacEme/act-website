export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface ProductSpec {
  text: string;
}

export interface Product {
  id: string;
  title: string;
  specs: ProductSpec[];
  image?: string;
}

export interface ProductGroup {
  id: string;
  title: string;
  products: Product[];
}

export interface Solution {
  id: string;
  title: string;
  description?: string;
  iconName: string; // We'll map string names to Lucide icons
  category?: string; // Added for filtering
  productGroups?: ProductGroup[]; // NEW: nested hierarchical structure
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
    phone2: string;
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
}
