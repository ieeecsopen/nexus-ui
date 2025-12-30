import React from 'react';
import {
   Grid, Gift, Users, MessageSquare, Copy,
   Github, ArrowRight, Star, FileCode, Layout,
   ExternalLink, Play, Palette, PenTool, Monitor
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                Stats Section                               */
/* -------------------------------------------------------------------------- */
export const StatsSection = () => (
   <div className="py-20 bg-black text-center relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
         <div className="flex flex-col items-center group">
            <div className="mb-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
               <Grid size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">7,082</h3>
            <p className="text-zinc-500 font-medium">Community-made UI elements</p>
         </div>

         <div className="flex flex-col items-center group">
            <div className="mb-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
               <Gift size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">100%</h3>
            <p className="text-zinc-500 font-medium">Free for personal and commercial use</p>
         </div>

         <div className="flex flex-col items-center group">
            <div className="mb-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
               <Users size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">267,783</h3>
            <p className="text-zinc-500 font-medium">Contributors to the community</p>
         </div>
      </div>
   </div>
);

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
            <h2 className="text-3xl font-bold text-white mb-2">Browse by Tags</h2>
         </div>
      </div>
   </div>
);

/* -------------------------------------------------------------------------- */
/*                           Community Grid Section                           */
/* -------------------------------------------------------------------------- */
export const CommunityGridSection = () => (
   <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 space-y-6">

         {/* Top Row: Discord & Figma */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Discord Card */}
            <div className="bg-zinc-900 rounded-3xl p-10 border border-white/5 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-600/20 transition-all"></div>

               <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 text-sm font-medium">664 online</span>
               </div>

               <h3 className="text-3xl font-bold text-white mb-3">Join the Discord community!</h3>
               <p className="text-zinc-400 text-lg mb-8">An open space for UI designers and developers</p>

               <div>
                  <button className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                     <MessageSquare size={20} /> Join Discord
                  </button>
               </div>
            </div>

            {/* Figma Card */}
            <div className="bg-zinc-900 rounded-3xl p-0 border border-white/5 relative overflow-hidden group flex flex-col">
               <div className="flex-1 bg-zinc-800/50 relative flex items-center justify-center p-12 overflow-hidden">
                  {/* Visual Mock of Copy to Figma */}
                  <div className="relative z-10 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                     <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                     </div>
                     <button className="px-8 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Button
                     </button>
                     <div className="absolute -bottom-4 -right-4 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded border border-white/10 flex items-center gap-1 shadow-xl">
                        <Copy size={10} /> Copied!
                     </div>
                  </div>

                  {/* Code Background */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-700 opacity-50 select-none">
                     <div>position: relative;</div>
                     <div>display: flex;</div>
                     <div>justify-content: center;</div>
                     <div>align-items: center;</div>
                  </div>
               </div>

               <div className="p-8 bg-zinc-900 relative z-20">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-lg bg-[#F24E1E]/20 flex items-center justify-center text-[#F24E1E]">
                        <PenTool size={18} />
                     </div>
                     <h3 className="text-2xl font-bold text-white">Use in Figma</h3>
                  </div>
                  <p className="text-zinc-400">Copy and paste to Figma from any element page</p>
               </div>
            </div>

         </div>

         {/* Bottom Row: GitHub & Blog */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* GitHub Card */}
            <div className="bg-zinc-900 rounded-3xl p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

               <div className="relative z-20">
                  <Github size={48} className="text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">
                     Uiverse <span className="text-purple-400">Galaxy</span>
                  </h3>
                  <p className="text-zinc-400 mb-2">The largest Open-Source UI Library, available on GitHub!</p>
                  <a href="#" className="text-zinc-500 hover:text-white underline text-sm">uiverse-io/galaxy</a>
               </div>

               <div className="relative z-20 mt-8">
                  <button className="px-6 py-3 bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-700 transition-colors flex items-center gap-2">
                     <Star size={18} className="fill-current text-yellow-500" /> Star on GitHub
                  </button>
               </div>
            </div>

            {/* Blog Section */}
            <div className="lg:col-span-2 bg-zinc-900 rounded-3xl p-10 border border-white/5 flex flex-col overflow-hidden relative">
               <div className="flex justify-between items-end mb-8 relative z-20">
                  <h3 className="text-3xl font-bold text-white">Latest from Blog</h3>
               </div>

               <div className="grid md:grid-cols-3 gap-4 relative z-20">

                  {/* Blog Card 1 */}
                  <div className="group cursor-pointer">
                     <div className="aspect-[4/3] rounded-xl bg-zinc-800 border border-white/5 mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 relative">
                              {/* Abstract visual */}
                              <div className="absolute bottom-0 left-0 w-8 h-8 bg-purple-500 rounded-lg transform -rotate-12 translate-y-2"></div>
                              <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                           </div>
                        </div>
                     </div>
                     <div className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 mb-2 border border-zinc-700">UI UX</div>
                     <h4 className="text-white font-bold leading-tight group-hover:text-indigo-400 transition-colors">Level Up Your UI Design Skills</h4>
                  </div>

                  {/* Blog Card 2 */}
                  <div className="group cursor-pointer">
                     <div className="aspect-[4/3] rounded-xl bg-zinc-800 border border-white/5 mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Monitor className="text-emerald-500/80" size={48} />
                        </div>
                     </div>
                     <div className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 mb-2 border border-zinc-700">Web Development</div>
                     <h4 className="text-white font-bold leading-tight group-hover:text-indigo-400 transition-colors">When Design Files Become Live Apps</h4>
                  </div>

                  {/* Blog Card 3 */}
                  <div className="group cursor-pointer">
                     <div className="aspect-[4/3] rounded-xl bg-zinc-800 border border-white/5 mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center gap-2">
                           <div className="w-10 h-6 bg-zinc-900 rounded border border-white/10 flex items-center px-1">
                              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                           </div>
                           <div className="w-10 h-6 bg-indigo-600 rounded border border-white/10 flex items-center justify-end px-1 shadow-lg shadow-indigo-500/50">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                           </div>
                        </div>
                     </div>
                     <div className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 mb-2 border border-zinc-700">UI UX</div>
                     <h4 className="text-white font-bold leading-tight group-hover:text-indigo-400 transition-colors">Adaptive UI Themes for 2025</h4>
                  </div>

               </div>
            </div>

         </div>

      </div>
   </div>
);