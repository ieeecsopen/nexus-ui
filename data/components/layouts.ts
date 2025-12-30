import { ComponentItem } from '../../types';

export const layoutComponents: ComponentItem[] = [
  {
    id: '5',
    title: 'Bento Grid',
    description: 'Responsive, masonry-style grid layouts for dashboards.',
    category: 'layout',
    price: 'free',
    imageGradient: 'from-orange-500 to-red-600',
    gridSpan: 'lg:col-span-2',
    installation: 'npm install @nexus/ui',
    fullCode: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
  <div className="md:col-span-2 row-span-2 bg-zinc-900 rounded-3xl p-6">Main</div>
  <div className="bg-zinc-900 rounded-3xl p-6">Side</div>
  <div className="bg-zinc-900 rounded-3xl p-6">Side</div>
</div>`,
    componentProps: []
  },
  {
    id: '7',
    title: 'Infinite Scroll',
    description: 'Seamless content loading with intersection observer.',
    category: 'layout',
    price: 'free',
    imageGradient: 'from-green-500 to-emerald-700',
    installation: 'npm install @nexus/ui',
    fullCode: `// Implementation details...`,
    componentProps: []
  },
  {
    id: '17',
    title: 'Accordion',
    description: 'Smoothly expandable content sections.',
    category: 'layout',
    price: 'free',
    imageGradient: 'from-blue-800 to-indigo-900',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion, AnimatePresence } from 'framer-motion';

export const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-white/10">
    <button onClick={onClick} className="w-full py-4 text-left font-medium text-white flex justify-between">
      {title}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-4 text-zinc-400">{content}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);`,
    componentProps: []
  },
  {
    id: '18',
    title: 'Sticky Scroll',
    description: 'A sticky sidebar that highlights content as you scroll.',
    category: 'layout',
    price: 'pro',
    imageGradient: 'from-blue-600 to-indigo-800',
    installation: 'npm install @nexus/ui',
    fullCode: `export const StickyScroll = () => {
  return (
    <div className="flex gap-20">
      <div className="w-1/2 sticky top-10 h-fit">
         {/* Sticky Content updates based on scroll */}
         <h1>Title 1</h1>
      </div>
      <div className="w-1/2 space-y-40">
         {/* Long scrolling content */}
         <Section>...</Section>
         <Section>...</Section>
      </div>
    </div>
  );
}`,
    componentProps: []
  },
  {
    id: '19',
    title: 'Modal Dialog',
    description: 'Accessible modal with backdrop blur and scale animations.',
    category: 'layout',
    price: 'free',
    imageGradient: 'from-zinc-800 to-zinc-950',
    installation: 'npm install @nexus/ui radix-ui',
    fullCode: `import { motion } from 'framer-motion';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-zinc-900 p-6 rounded-2xl w-full max-w-md border border-white/10"
      >
        {children}
      </motion.div>
    </div>
  );
};`,
    componentProps: []
  }
];