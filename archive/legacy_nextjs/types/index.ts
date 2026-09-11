export type PortfolioMode = 'software' | 'gamedev';

export interface ProjectArchitecture {
  components: string[];
  dataFlow: string;
  databaseSchema?: string;
  optimization: string;
}

export interface SoftwareProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI / Machine Learning' | 'Systems & Backend' | 'Full Stack Web' | 'Cloud & Distributed';
  tags: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  architecture: ProjectArchitecture;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
}

export interface GameDevProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  engine: 'Unreal Engine 5' | 'Custom C++ Engine' | 'VR / Spatial Computing';
  techStack: string[];
  features: string[];
  blueprintVsCppRatio: string;
  renderingTech: string[];
  performanceMetrics: { fps: string; resolution: string; drawCalls: string };
  videoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; category: string; icon?: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'experience' | 'achievement';
  description: string[];
  skills: string[];
  badge?: string;
}

export interface TerminalCommandResponse {
  output: string | string[];
  type?: 'text' | 'success' | 'error' | 'table' | 'system';
}
