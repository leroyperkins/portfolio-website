export interface ProjectDetails {
  id: string;
  title: string;
  role: string;
  impact: string;
  metrics: string;
  tech: string[];
  links: { live?: string; github?: string | 'private' };
  image?: string;
  description?: string;
  additionalMetrics?: string[];
  photos?: { url: string; alt?: string }[];
}