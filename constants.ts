import { ALL_COMPONENTS } from './data/components/index';

export const COMPONENT_ITEMS = ALL_COMPONENTS;

export type ViewType = 'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about' | 'docs' | 'roadmap' | 'community' | 'help' | 'privacy' | 'terms' | 'license';

export const NAV_LINKS: { label: string; href: string; active?: boolean; view: ViewType }[] = [
  { label: 'Components', href: '#components', active: true, view: 'components' },
  { label: 'Templates', href: '#templates', view: 'templates' },
  { label: 'Docs', href: '#docs', view: 'docs' },
  { label: 'Pricing', href: '#pricing', view: 'pricing' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Components', view: 'components' as ViewType },
    { label: 'Templates', view: 'templates' as ViewType },
    { label: 'Pricing', view: 'pricing' as ViewType },
    { label: 'Roadmap', view: 'roadmap' as ViewType },
  ],
  resources: [
    { label: 'Documentation', view: 'docs' as ViewType },
    { label: 'Community', view: 'community' as ViewType },
    { label: 'Help Center', view: 'help' as ViewType },
    { label: 'Showcase', view: 'showcase' as ViewType },
  ],
  legal: [
    { label: 'Privacy Policy', view: 'privacy' as ViewType },
    { label: 'Terms of Service', view: 'terms' as ViewType },
    { label: 'License', view: 'license' as ViewType },
  ],
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/nexus-kit/nexus-kit',
  twitter: 'https://twitter.com/nexusui',
  discord: 'https://discord.gg/nexusui',
};