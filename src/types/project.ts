export type ProjectStatus = 'Active' | 'Developing Concept' | 'Prototype' | 'Demonstration Template' | 'Concept' | 'In Development' | 'Demonstration' | 'Pilot' | 'Live Product';

export type Project = {
  slug: string;
  title: string;
  portfolioCategory: 'website-development' | 'business-ventures' | 'business-development' | 'technology-community-impact' | 'prototypes-experiments';
  category: string;
  projectType?: string;
  status?: ProjectStatus;
  featured: boolean;
  role?: string;
  period?: string;
  location?: string;
  summary: string;
  challenge?: string;
  approach?: string;
  websiteFeatures?: string[];
  visualNote?: string;
  deliverables: string[];
  capabilities: string[];
  evidence: { label: string; href: string; kind: 'live' | 'resource' }[];
  liveUrl?: string;
  nextOpportunity?: string;
  brandLogo?: { src: string; alt: string };
  visual: 'hub' | 'tips' | 'dazzle' | 'wall' | 'arno' | 'trade' | 'tech' | 'payguard';
};
