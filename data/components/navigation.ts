import { ComponentItem } from '../../types';

export const navigationComponents: ComponentItem[] = [
  {
    id: '6',
    title: 'Command Palette',
    description: 'Accessible command menu for power users.',
    category: 'navigation',
    price: 'pro',
    imageGradient: 'from-slate-800 to-slate-900',
    installation: 'npm install @nexus/ui cmk',
    fullCode: `import { Command } from '@nexus/ui';

export const Palette = () => (
  <Command.Dialog open={open} onOpenChange={setOpen}>
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
      <Command.Item>Profile</Command.Item>
      <Command.Item>Settings</Command.Item>
    </Command.List>
  </Command.Dialog>
);`,
    componentProps: []
  },
  {
    id: '20',
    title: 'Animated Tabs',
    description: 'Tabs with a sliding background indicator using layout animations.',
    category: 'navigation',
    price: 'free',
    imageGradient: 'from-teal-800 to-emerald-900',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ['Home', 'Product', 'Pricing'];

export const AnimatedTabs = () => {
  const [active, setActive] = useState(tabs[0]);
  
  return (
    <div className="flex space-x-1 rounded-full bg-zinc-900/50 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative px-3 py-1.5 text-sm font-medium text-white outline-none"
        >
          {active === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white mix-blend-difference rounded-full"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">{tab}</span>
        </button>
      ))}
    </div>
  );
};`,
    componentProps: []
  },
  {
    id: '21',
    title: 'Floating Dock',
    description: 'MacOS style floating dock navigation.',
    category: 'navigation',
    price: 'pro',
    imageGradient: 'from-blue-900 to-slate-900',
    installation: 'npm install @nexus/ui',
    fullCode: `// Implementation involves mapping icons and applying scale transforms based on mouse X distance
export const Dock = () => {
  return (
     <div className="flex items-end gap-4 h-16 bg-white/10 backdrop-blur-md px-4 rounded-2xl border border-white/5">
        {/* Icons */}
     </div>
  )
}`,
    componentProps: []
  }
];