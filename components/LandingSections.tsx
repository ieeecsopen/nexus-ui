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
   <div className="py-20 bg-black border-b border-white/5 relative overflow-hidden">
      <div className="w-full relative">

         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

         <div className="text-center mb-10">
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-widest">Explore</span>
            <h2 className="text-3xl font-medium text-white mt-2">Filter by Tags</h2>
         </div>

         {/* Scrolling Marquee - Row 1 */}
         <div className="marquee-container flex overflow-hidden select-none py-2 mask-linear">
            <div className="marquee-content animate-scroll-left flex gap-4 min-w-full shrink-0 items-center justify-around px-2">
               {[...TAGS, ...TAGS].map((tag, i) => (
                  <button
                     key={`tag-1-${i}`}
                     className="whitespace-nowrap px-5 py-2.5 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-white/5 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                     #{tag}
                  </button>
               ))}
            </div>
         </div>

         {/* Scrolling Marquee - Row 2 (Reverse) */}
         <div className="marquee-container flex overflow-hidden select-none py-2 mt-4">
            <div className="marquee-content animate-scroll-right flex gap-4 min-w-full shrink-0 items-center justify-around px-2">
               {[...TAGS.reverse(), ...TAGS].map((tag, i) => (
                  <button
                     key={`tag-2-${i}`}
                     className="whitespace-nowrap px-5 py-2.5 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-white/5 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                     #{tag}
                  </button>
               ))}
            </div>
         </div>
      </div>
   </div>
);

/* -------------------------------------------------------------------------- */
/*                           Community Grid Section                           */
/* -------------------------------------------------------------------------- */
export const CommunityGridSection = () => (
   <div className="py-16 md:py-32 bg-black border-b border-white/[0.08] relative">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-indigo-900/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

         <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Community Driven</h2>
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
               Join a growing community of developers building the future of web interfaces.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Stat Card 1 */}
            <div className="p-8 border border-white/5 bg-zinc-900/20 backdrop-blur-md rounded-2xl flex flex-col justify-between h-[220px] hover:border-white/10 transition-all group">
               <div className="bg-zinc-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-auto border border-white/5 group-hover:scale-110 transition-transform">
                  <Grid className="text-indigo-400" size={24} />
               </div>
               <div>
                  <div className="text-4xl font-semibold text-white tracking-tight mb-2">7k+</div>
                  <div className="text-sm text-zinc-400 font-medium">Components Created</div>
               </div>
            </div>

            {/* Stat Card 2 */}
            <div className="p-8 border border-white/5 bg-zinc-900/20 backdrop-blur-md rounded-2xl flex flex-col justify-between h-[220px] hover:border-white/10 transition-all group">
               <div className="bg-zinc-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-auto border border-white/5 group-hover:scale-110 transition-transform">
                  <Users className="text-purple-400" size={24} />
               </div>
               <div>
                  <div className="text-4xl font-semibold text-white tracking-tight mb-2">260k+</div>
                  <div className="text-sm text-zinc-400 font-medium">Community Members</div>
               </div>
            </div>

            {/* Discord Card */}
            <div className="p-8 border border-white/5 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl flex flex-col justify-between h-[220px] group cursor-pointer hover:border-indigo-500/30 transition-all relative overflow-hidden">
               <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-auto relative z-10">
                  <MessageSquare className="text-white group-hover:text-indigo-300 transition-colors" size={24} />
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                     <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" size={16} />
                  </div>
               </div>
               <div className="relative z-10">
                  <div className="text-2xl font-semibold text-white mb-1">Discord</div>
                  <div className="text-sm text-indigo-300/80">Join the discussion &rarr;</div>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Main Feature: Figma */}
            <div className="group border border-white/5 bg-zinc-900/20 backdrop-blur-md rounded-2xl overflow-hidden min-h-[400px] flex flex-col hover:border-white/10 transition-all relative">
               <div className="p-10 pb-0 relative z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Figma Kit</h3>
                  <p className="text-zinc-400 text-base">Every component, meticulously recreated in Figma for your design team.</p>
               </div>
               <div className="flex-1 mt-10 ml-10 bg-[#1e1e1e] border-t border-l border-zinc-700 rounded-tl-3xl shadow-2xl relative overflow-hidden group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                  {/* Abstract UI Mocks - Figma Style */}
                  <div className="absolute top-6 left-6 right-0 bottom-0">
                     <div className="flex gap-4 mb-6">
                        <div className="w-24 h-8 bg-zinc-800 rounded-md"></div>
                        <div className="w-8 h-8 bg-indigo-500 rounded-md"></div>
                        <div className="w-8 h-8 bg-zinc-800 rounded-md"></div>
                     </div>
                     <div className="w-full h-full bg-zinc-900 border border-zinc-700 rounded-tl-xl p-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="h-24 bg-zinc-800 rounded-lg"></div>
                           <div className="h-24 bg-zinc-800 rounded-lg"></div>
                           <div className="h-24 bg-zinc-800 rounded-lg"></div>
                           <div className="h-24 bg-zinc-800 rounded-lg"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Feature: GitHub */}
            <div className="group border border-white/5 bg-zinc-900/20 backdrop-blur-md rounded-2xl overflow-hidden min-h-[400px] flex flex-col hover:border-white/10 transition-all">
               <div className="p-10 pb-0">
                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Open Source</h3>
                  <p className="text-zinc-400 text-base">Powered by the community. MIT Licensed. Free forever.</p>
               </div>
               <div className="flex-1 mt-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
                  <Github size={180} className="text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500 group-hover:scale-110 transform" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 pt-20">
                     <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-white/10">
                        <Star size={18} fill="black" /> Star on GitHub
                     </button>
                  </div>
               </div>
            </div>

         </div>

      </div>
   </div>
);