import { ComponentItem } from '../../types';

export const inputComponents: ComponentItem[] = [
  {
    id: '3',
    title: 'Glassy Button',
    description: 'Modern glassmorphism buttons with depth effects.',
    category: 'input',
    price: 'free',
    imageGradient: 'from-gray-200 to-gray-400',
    isNew: true,
    installation: 'npm install @nexus/ui',
    fullCode: `export const GlassButton = ({ children, ...props }) => (
  <button 
    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
               rounded-xl text-white font-medium hover:bg-white/20 
               transition-all shadow-lg active:scale-95"
    {...props}
  >
    {children}
  </button>
);`,
    componentProps: [
      { 
        name: 'variant', 
        type: "'solid' | 'glass' | 'outline'", 
        default: "'glass'", 
        description: 'Visual style of the button.',
        example: 'variant="solid"' 
      },
      { 
        name: 'glow', 
        type: 'boolean', 
        default: 'false', 
        description: 'Adds a subtle glow effect behind the button.',
        example: 'glow={true}' 
      },
    ]
  },
  {
    id: '13',
    title: 'Magnetic Button',
    description: 'Button that magnetically attracts to the cursor.',
    category: 'input',
    price: 'pro',
    imageGradient: 'from-blue-500 to-cyan-500',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
};`,
    componentProps: []
  },
  {
    id: '14',
    title: 'Moving Border',
    description: 'A button or card with a moving gradient border.',
    category: 'input',
    price: 'free',
    imageGradient: 'from-indigo-600 to-blue-600',
    installation: 'npm install @nexus/ui',
    fullCode: `export const MovingBorderBtn = ({ children }) => (
  <div className="relative p-[1px] overflow-hidden rounded-full group">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 animate-spin-slow opacity-75" />
    <button className="relative px-8 py-4 bg-black rounded-full text-white">
      {children}
    </button>
  </div>
);`,
    componentProps: []
  },
  {
    id: '15',
    title: 'Spotlight Card',
    description: 'Card with a radial gradient spotlight that follows the mouse.',
    category: 'input',
    price: 'free',
    imageGradient: 'from-zinc-700 to-zinc-600',
    installation: 'npm install @nexus/ui',
    fullCode: `export const SpotlightCard = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative rounded-xl border border-white/10 bg-zinc-900 p-8 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, rgba(255,255,255,0.1), transparent 40%)\`
        }}
      />
      Content
    </div>
  );
};`,
    componentProps: []
  },
  {
    id: '16',
    title: 'Rating Stars',
    description: 'Interactive star rating component with hover animations.',
    category: 'input',
    price: 'free',
    imageGradient: 'from-yellow-300 to-yellow-500',
    installation: 'npm install @nexus/ui',
    fullCode: `// Usage of Lucide icons for stars
import { Star } from 'lucide-react';
// Logic for hover/click state management...`,
    componentProps: [
      { name: 'max', type: 'number', default: '5', description: 'Maximum number of stars.', example: 'max={10}' },
      { name: 'value', type: 'number', default: '0', description: 'Current rating value.', example: 'value={3}' }
    ]
  }
];