export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: 'blockchain' | 'ai' | 'tech';
  imageUrl: string;
  website?: string;
  github?: string;
  docs?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
  founder: string;
  founderAr: string;
  backedByYc?: boolean;
}
