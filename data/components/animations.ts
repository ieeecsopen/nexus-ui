import { ComponentItem } from '../../types';

export const animationComponents: ComponentItem[] = [
  {
    id: '1',
    title: 'Animated Gradients',
    description: 'Smooth, flowing background gradients using WebGL. Perfect for landing pages.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-blue-600 via-indigo-500 to-cyan-500',
    popular: true,
    gridSpan: 'lg:col-span-2 lg:row-span-2',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedGradient = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <motion.div
        className="absolute -inset-[50%] opacity-50 blur-[100px]"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #4f46e5)',
        }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />
    </div>
  );
};`,
    componentProps: [
      {
        name: 'colors',
        type: 'string[]',
        default: 'Theme Defaults',
        description: 'Array of hex codes for the gradient.',
        example: "colors={['#ff0000', '#00ff00']}"
      },
      {
        name: 'speed',
        type: 'number',
        default: '20',
        description: 'Duration of one full rotation in seconds.',
        example: 'speed={15}'
      },
    ],
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<AnimatedGradient />`
      }
    ]
  },
  {
    id: '2',
    title: 'Typewriter Effect',
    description: 'Simulate typing text with customizable cursors.',
    category: 'animation',
    price: 'pro',
    imageGradient: 'from-zinc-800 to-zinc-900',
    installation: 'npm install @nexus/ui',
    fullCode: `import { Typewriter } from '@nexus/ui';

export default function Hero() {
  return (
    <h1 className="text-4xl font-bold">
      We build <Typewriter words={['websites', 'apps', 'experiences']} />
    </h1>
  );
}`,
    componentProps: [
      { name: 'words', type: 'string[]', default: '[]', description: 'Array of strings to cycle through.', example: "words={['Hello', 'World']}" },
      { name: 'delay', type: 'number', default: '3000', description: 'Delay between words in ms.', example: 'delay={2000}' },
    ]
  },
  {
    id: '4',
    title: 'Text Glow Hover',
    description: 'The Text Glow Hover component brings life to your text with an interactive multi-layered blurred text shadow animation that follows your cursor.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-cyan-500 to-blue-600',
    popular: true,
    installation: 'npm install @nexus/ui framer-motion',
    creator: {
      name: 'June',
      role: 'UI & Pattern Designer',
      avatar: 'https://ui-avatars.com/api/?name=June&background=0D8ABC&color=fff' // Placeholder
    },
    techStack: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
    lastUpdated: 'December 2024',
    detailedDescription: `The Text Glow Hover component allows you to create engaging text headers with interactive multi-layered blurred text shadow animations. 
    
    By stacking multiple layers of shadow, scaling, and offset that track the mouse position, existing text becomes a mesmerizing visual element. Perfect for landing pages, hero sections, and high-impact headlines.`,
    features: [
      {
        title: 'Immersive Interactive Motion',
        description: 'Cursor-tracking animation that creates a 3D depth effect. As you move around the text, shadows respond in real-time.'
      },
      {
        title: 'Advanced Visual Customization',
        description: 'Fine-tune blur amounts, colors, opacity, and layer counts. Controls allow you to match your brand aesthetic perfectly.'
      },
      {
        title: 'Performance Optimized',
        description: 'Uses CSS transforms and Framer Motion for smooth 60fps animations without layout thrashing.'
      }
    ],
    perfectFor: [
      'Hero headers with impact',
      'Feature section titles',
      'Creative portfolios',
      'Dark mode designs'
    ],
    fullCode: `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const TextGlowHover = ({ text = "Glow" }: { text?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-default inline-block"
    >
      <motion.span
        className="absolute inset-0 z-0 text-blue-500 blur-2xl opacity-50"
        animate={{ x: position.x * 1.5, y: position.y * 1.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 z-10 text-cyan-400 blur-md opacity-80"
        animate={{ x: position.x * 1.2, y: position.y * 1.2 }}
      >
        {text}
      </motion.span>
      <span className="relative z-20 text-white font-bold text-6xl md:text-9xl tracking-tighter mix-blend-overlay">
        {text}
      </span>
    </motion.div>
  );
};`,
    componentProps: []
  },
  {
    id: '8',
    title: '3D Card Tilt',
    description: 'Physics-based tilt effect on hover.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-indigo-500 to-blue-600',
    popular: true,
    installation: 'npm install @nexus/ui',
    fullCode: `import { motion, useMotionValue, useTransform } from "framer-motion";

export const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        className="w-full h-full bg-zinc-900 rounded-xl"
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      />
    </div>
  );
};`,
    componentProps: []
  },
  {
    id: '9',
    title: 'Text Reveal',
    description: 'Reveal text characters as you scroll down the page.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-emerald-400 to-teal-600',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion, useScroll, useTransform } from 'framer-motion';

export const TextReveal = ({ text }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.p style={{ opacity }} className="text-4xl font-bold">
      {text}
    </motion.p>
  );
};`,
    componentProps: [
      { name: 'text', type: 'string', default: '', description: 'Text to reveal.', example: 'text="Scroll to reveal"' }
    ]
  },
  {
    id: '10',
    title: 'Sparkles',
    description: 'Add magical sparkle effects to any text or component.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-yellow-400 to-amber-600',
    installation: 'npm install @nexus/ui',
    fullCode: `const Sparkles = () => {
  // Implementation of random SVG star generation
  return (
    <span className="relative">
      <span className="absolute inset-0 z-10 block">
        {/* Sparkle SVGs mapped here */}
      </span>
      <span className="relative z-20">Magical Text</span>
    </span>
  );
}`,
    componentProps: []
  },
  {
    id: '11',
    title: 'Confetti Explosion',
    description: 'Trigger a confetti explosion on button click.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-red-500 via-yellow-500 to-green-500',
    installation: 'npm install canvas-confetti',
    fullCode: `import confetti from 'canvas-confetti';

export const CelebrationBtn = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return <button onClick={handleClick}>Celebrate!</button>;
};`,
    componentProps: []
  },
  {
    id: '12',
    title: 'Parallax Scroll',
    description: 'Smooth parallax scrolling effect for images and text.',
    category: 'animation',
    price: 'pro',
    imageGradient: 'from-indigo-400 to-blue-500',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxImage = ({ src }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return <motion.img style={{ y }} src={src} />;
};`,
    componentProps: []
  }
];