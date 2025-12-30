import React from 'react';
import {
   Grid, Gift, Users, MessageSquare, Copy,
   Github, ArrowRight, Star, FileCode, Layout,
   ExternalLink, Play, Palette, PenTool, Monitor
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                Stats Section                               */
/* -------------------------------------------------------------------------- */
export const StatsSection = () => (null);

/* -------------------------------------------------------------------------- */
/*                                Tags Section                                */
/* -------------------------------------------------------------------------- */
const TAGS = [
   'button', 'card', 'loader', 'rounded', 'dark', 'minimal', 'blue', 'white', 'black',
   'animated', 'simple', 'animation', 'form', 'modern', 'switch', 'input', 'gradient',
   'icon', 'hover', 'shadow', 'text', 'gray', 'centered', 'pattern', 'purple',
   'checkbox', 'green', '3d', 'red', 'tooltip', 'glass', 'neumorphism'
];

export const TagsSection = () => (
   <div className="py-12 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      <div className="w-full relative">

         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

         {/* Scrolling Marquee */}
         <div className="marquee-container flex overflow-hidden select-none py-4">
            <div className="marquee-content flex gap-3 min-w-full shrink-0 items-center justify-around px-1.5">
               {/* First Set */}
               {TAGS.map((tag, i) => (
                  <button
                     key={`tag-1-${i}`}
                     className="whitespace-nowrap px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                     {tag}
                  </button>
               ))}
               {/* Duplicate Set for Loop */}
               {TAGS.map((tag, i) => (
                  <button
                     key={`tag-2-${i}`}
                     className="whitespace-nowrap px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                     {tag}
                  </button>
               ))}
            </div>
         </div>

         <div className="text-center mt-8">
            <h2 className="text-3xl font-medium text-white mb-2">Browse by Tags</h2>
         </div>
      </div>
   </div>
);

/* -------------------------------------------------------------------------- */
/*                           Community Grid Section                           */
/* -------------------------------------------------------------------------- */
export const CommunityGridSection = () => (
   <div className="py-24 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Stat Card 1 */}
            <div className="p-8 border border-zinc-800 bg-black/50 rounded-xl flex flex-col justify-between h-[200px]">
               <Grid className="text-zinc-500 mb-auto" size={24} />
               <div>
                  <div className="text-4xl font-medium text-white tracking-tighter">7,000+</div>
                  <div className="text-sm text-zinc-500 font-medium mt-1">Components</div>
               </div>
            </div>

            {/* Stat Card 2 */}
            <div className="p-8 border border-zinc-800 bg-black/50 rounded-xl flex flex-col justify-between h-[200px]">
               <Users className="text-zinc-500 mb-auto" size={24} />
               <div>
                  <div className="text-4xl font-medium text-white tracking-tighter">260k+</div>
                  <div className="text-sm text-zinc-500 font-medium mt-1">Community Members</div>
               </div>
            </div>

            {/* Discord Card - Bento Style */}
            <div className="p-8 border border-zinc-800 bg-black/50 rounded-xl flex flex-col justify-between h-[200px] group cursor-pointer hover:border-zinc-700 transition-colors">
               <div className="flex justify-between items-start mb-auto">
                  <MessageSquare className="text-zinc-500 group-hover:text-indigo-400 transition-colors" size={24} />
                  <ArrowRight className="text-zinc-700 group-hover:text-indigo-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" size={20} />
               </div>
               <div>
                  <div className="text-xl font-medium text-white mb-1">Discord</div>
                  <div className="text-sm text-zinc-500">Join the discussion</div>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Main Feature: Figma */}
            <div className="border border-zinc-800 bg-black/50 rounded-xl overflow-hidden min-h-[400px] flex flex-col">
               <div className="p-8 pb-0">
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-2">Figma Kit</h3>
                  <p className="text-zinc-400">Every component, meticulously recreated in Figma.</p>
               </div>
               <div className="flex-1 mt-8 bg-zinc-900/50 border-t border-r border-zinc-800 rounded-tr-3xl relative overflow-hidden">
                  {/* Abstract UI Mocks */}
                  <div className="absolute top-8 left-8 right-0 bottom-0 bg-black border border-zinc-800 rounded-tl-xl p-4 shadow-2xl">
                     <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
                        <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-2 w-1/3 bg-zinc-800 rounded-full"></div>
                        <div className="h-8 w-2/3 bg-zinc-800 rounded-md"></div>
                        <div className="h-32 w-full bg-zinc-800/50 rounded-md border border-zinc-800/50 border-dashed"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Feature: GitHub */}
            <div className="border border-zinc-800 bg-black/50 rounded-xl overflow-hidden min-h-[400px] flex flex-col">
               <div className="p-8 pb-0">
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-2">Open Source</h3>
                  <p className="text-zinc-400">Powered by the community. MIT Licensed.</p>
               </div>
               <div className="flex-1 mt-8 relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 to-transparent">
                  <Github size={120} className="text-zinc-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <button className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                        <Star size={16} fill="black" /> Star on GitHub
                     </button>
                  </div>
               </div>
            </div>

         </div>

      </div>
   </div>
);