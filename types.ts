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
  category: 'animation' | 'layout' | 'input' | 'feedback' | 'navigation';
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