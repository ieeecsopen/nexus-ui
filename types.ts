export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
  example?: string;
}

export interface UsageExample {
  title: string;
  code: string;
  description?: string;
}

export interface ComponentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: 'free' | 'pro';
  imageGradient: string; // CSS gradient class or value
  isNew?: boolean;
  popular?: boolean;
  gridSpan?: string; // CSS class for grid spanning (e.g., "col-span-2")

  // Documentation fields
  installation?: string;
  fullCode?: string;
  componentProps?: ComponentProp[];
  usageExamples?: UsageExample[];

  // Rich Detail Fields
  creator?: {
    name: string;
    avatar: string;
    role: string;
  };
  techStack?: ('React' | 'Next.js' | 'Tailwind' | 'NexusUI' | 'TypeScript')[];
  detailedDescription?: string;
  features?: {
    title: string;
    description: string;
  }[];
  perfectFor?: string[];
  lastUpdated?: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  link: string;
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}