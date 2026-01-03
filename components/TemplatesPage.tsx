
import React, { useState } from 'react';
import { TEMPLATE_ITEMS } from '../data/templates';
import { TemplateItem } from '../types';
import { ArrowUpRight, Plus, Minus, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialMarquee from './TestimonialMarquee';

interface Props {
  onSelectTemplate: (item: TemplateItem) => void;
  onViewDemo: (item: TemplateItem) => void;
}

const CATEGORIES = ['All', 'Business', 'SaaS', 'Portfolio', 'Landing Page'];

// Mock Data for Testimonials
const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Designer at Apex',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    text: "The templates are absolutely stunning. Saved me weeks of work and the code quality is top-notch."
  },
  {
    name: 'Mark Davis',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    text: "Incredible attention to detail. The animations are smooth and the responsive design is perfect."
  },
  {
    name: 'Elise Bouvet',
    role: 'Freelancer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    text: "I've used three templates so far and my clients love them. Highly recommended for any dev."
  },
  {
    name: 'John Smith',
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    text: "Clean code, great documentation, and beautiful design. What more could you ask for?"
  }
];

// Mock Data for FAQs
const GENERAL_FAQS = [
  { q: "What is included in the template?", a: "Each template includes the complete source code, Figma design files, and comprehensive documentation to help you get started." },
  { q: "Can I use the template for multiple projects?", a: "Yes, once purchased, you can use the template for unlimited personal and commercial projects." },
  { q: "Do you offer support?", a: "We provide dedicated support via email and our community discord server for any technical issues." },
  { q: "Are the templates SEO friendly?", a: "Absolutely. We follow best practices for SEO, accessibility, and performance optimization." },
  { q: "Can I refund my purchase?", a: "Due to the digital nature of the products, refunds are processed on a case-by-case basis within 14 days." }
];

const LEGAL_FAQS = [
  { q: "Can I use these for client work?", a: "Yes, the commercial license allows you to build and sell websites to your clients using our templates." },
  { q: "Is there a recurring fee?", a: "No, it's a one-time payment. You get lifetime access to the template and future updates." },
  { q: "Do I need to attribute Nexus Kit?", a: "No attribution is required, though it is appreciated!" },
  { q: "What about taxes?", a: "VAT and other taxes are calculated at checkout based on your location." },
  { q: "Can I resell the templates?", a: "No, you cannot resell or redistribute the templates as standalone products." }
];

const TemplatesPage: React.FC<Props> = ({ onSelectTemplate, onViewDemo }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredTemplates = activeCategory === 'All'
    ? TEMPLATE_ITEMS
    : TEMPLATE_ITEMS.filter(item => item.tags.includes(activeCategory));

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">

        {/* HERO SECTION */}
        <div className="text-center mb-20 pt-10">
          {/* Social Proof Pill */}
          <div className="inline-flex items-center gap-3 px-2 py-1.5 pr-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-300 mb-8 backdrop-blur-sm hover:border-zinc-700 transition-colors cursor-default">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-6 h-6 rounded-full border-2 border-zinc-900" />
              ))}
            </div>
            <span className="font-medium">5000+ peoples used our templates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Modern and Optimized Framer <br />
            <span className="text-white">Website Templates</span>
          </h1>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['SEO Centric Design', 'Responsive in all screens', 'Easy to Edit', 'Figma File & Icons'].map((feature) => (
              <div key={feature} className="px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800/60 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 transition-colors cursor-default">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TEMPLATE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-32">
          {filteredTemplates.map((item, index) => {
            // Mocking badges based on index
            let badgeText = null;
            let badgeColor = '';
            if (index === 0) { badgeText = 'New'; badgeColor = 'bg-green-500/20 text-green-400 border-green-500/20'; }
            if (index === 1) { badgeText = 'Best'; badgeColor = 'bg-blue-500/20 text-blue-400 border-blue-500/20'; }

            return (
              <div
                key={item.id}
                className="group cursor-pointer flex flex-col gap-4"
                onClick={() => onSelectTemplate(item)}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full rounded-[32px] overflow-hidden relative bg-zinc-900/50 border border-white/5 outline outline-1 outline-transparent group-hover:outline-white/10 transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectTemplate(item); }}
                      className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-transform hover:scale-105"
                    >
                      View Details
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onViewDemo(item); }}
                      className="p-2.5 rounded-full bg-black/50 text-white border border-white/20 hover:bg-black/70 transition-transform hover:scale-105 backdrop-blur-md"
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                {/* Meta Info - Below Image */}
                <div className="mt-5 px-1">
                  <div className="flex justify-between items-start mb-1.5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[22px] font-medium text-white tracking-tight">{item.title}</h3>
                      {badgeText && (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${badgeColor}`}>
                          {badgeText}
                        </span>
                      )}
                    </div>
                    <span className="text-base font-medium text-white bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-base font-medium">
                    {item.tags[0]} Landing Page
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TESTIMONIALS */}
        <div className="mb-32">
          <TestimonialMarquee />
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* General FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              General FAQ's
            </h3>
            <div className="space-y-4">
              {GENERAL_FAQS.map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 pb-4">
                  <button
                    onClick={() => toggleFaq(faq.q)}
                    className="w-full flex justify-between items-center text-left py-2 hover:text-indigo-400 transition-colors group"
                  >
                    <span className={`text-lg font-medium ${openFaq === faq.q ? 'text-indigo-400' : 'text-zinc-300'}`}>
                      {faq.q}
                    </span>
                    {openFaq === faq.q ? <Minus size={18} className="text-indigo-400" /> : <Plus size={18} className="text-zinc-600 group-hover:text-indigo-400" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.q && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 pt-2 pb-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Legal FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-amber-500/90 flex items-center gap-3">
              Legal & Payment FAQ's
            </h3>
            <div className="space-y-4">
              {LEGAL_FAQS.map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 pb-4">
                  <button
                    onClick={() => toggleFaq(faq.q)}
                    className="w-full flex justify-between items-center text-left py-2 hover:text-amber-500 transition-colors group"
                  >
                    <span className={`text-lg font-medium ${openFaq === faq.q ? 'text-amber-500' : 'text-zinc-300'}`}>
                      {faq.q}
                    </span>
                    {openFaq === faq.q ? <Minus size={18} className="text-amber-500" /> : <Plus size={18} className="text-zinc-600 group-hover:text-amber-500" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.q && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 pt-2 pb-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mb-32 text-center">
          <div className="inline-block mb-6">
            <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-16 max-w-3xl mx-auto">
            We are a Small but Mighty Team of Design and Framer Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              { title: "Top Notch", desc: "Our templates are crafted with pixel-perfect precision and attention to detail." },
              { title: "Best Value", desc: "We provide adequate value for your money with lifetime updates and support." },
              { title: "Support", desc: "We are here to help you with any issues or questions you may have along the way." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20" />
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left">
              <span className="text-amber-500 font-medium tracking-wide text-sm mb-2 block">New App</span>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Build Your Website from Scratch</h2>
              <p className="text-zinc-400 max-w-lg">
                Professional, fast, and responsive. Get started with our premium templates today.
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-transform active:scale-95 flex items-center gap-2">
              Get Started <ArrowUpRight size={18} />
            </button>
          </div>
          {/* Decorative Image/Pattern */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-30 pointer-events-none bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mask-image-linear-gradient-to-l" />
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;