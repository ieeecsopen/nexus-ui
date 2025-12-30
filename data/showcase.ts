
export interface ShowcaseItem {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: '1',
    title: 'Vercel Analytics',
    author: 'Vercel Team',
    description: 'A privacy-first analytics dashboard offering real-time insights for frontend frameworks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    link: '#',
    tags: ['Dashboard', 'Charts', 'Dark Mode']
  },
  {
    id: '2',
    title: 'Linear Mobile',
    author: 'Linear',
    description: 'The mobile companion app for the issue tracking tool, focusing on speed and fluidity.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop',
    link: '#',
    tags: ['Mobile', 'App', 'Gestures']
  },
  {
    id: '3',
    title: 'Raycast Store',
    author: 'Raycast',
    description: 'Extensions marketplace for the productivity tool, featuring a clean grid layout.',
    image: 'https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?q=80&w=2661&auto=format&fit=crop',
    link: '#',
    tags: ['Marketplace', 'Grid', 'Command']
  },
  {
    id: '4',
    title: 'Cron Calendar',
    author: 'Notion',
    description: 'Next-generation calendar app for professionals and teams.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop',
    link: '#',
    tags: ['Productivity', 'Calendar', 'Drag & Drop']
  },
  {
    id: '5',
    title: 'Railway Dashboard',
    author: 'Railway',
    description: 'Infrastructure as code platform with a visual graph view of deployments.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop',
    link: '#',
    tags: ['DevTools', 'Graph', 'Real-time']
  },
  {
    id: '6',
    title: 'Diagrams.net',
    author: 'JGraph',
    description: 'Security-first diagramming for teams, rebuilt with modern components.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2564&auto=format&fit=crop',
    link: '#',
    tags: ['Canvas', 'Tools', 'Collaboration']
  }
];
