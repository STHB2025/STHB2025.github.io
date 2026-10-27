export type ProjectStatus = 'Active' | 'Active Project' | 'Developing Concept';

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  role: string;
  period?: string;
  location?: string;
  summary: string;
  challenge?: string;
  approach?: string;
  deliverables: string[];
  capabilities: string[];
  evidence: { label: string; href?: string; kind: 'live' | 'resource' | 'verify' }[];
  liveUrl?: string;
  nextOpportunity?: string;
  visual: 'hub' | 'tips' | 'dazzle' | 'wall' | 'arno' | 'trade' | 'tech';
  verify?: string[];
};
