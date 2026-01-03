import React from 'react';
import {
   Grid, Gift, Users, MessageSquare, Copy,
   Github, ArrowRight, Star, FileCode, Layout,
   ExternalLink, Play, Palette, PenTool, Monitor, ArrowUpRight
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

/* -------------------------------------------------------------------------- */
/*                                Stats Section                               */
/* -------------------------------------------------------------------------- */
export const StatsSection = () => (
   <div className="border-b border-white/5 bg-black relative z-20">
      <FadeInStagger className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
         {[
            { label: 'Weekly Downloads', value: '12k+' },
            { label: 'Components', value: '500+' },
            { label: 'Contributors', value: '120+' },
            { label: 'Stars', value: '14.5k' }
         ].map((stat, i) => (
            <FadeInItem key={i} className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
               <span className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
               <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</span>
            </FadeInItem>
         ))}
      </FadeInStagger>
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
   <div className="py-24 bg-black border-b border-white/5 relative overflow-hidden">

      <div className="w-full relative">

         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

         <div className="max-w-[1800px] mx-auto px-6 mb-12 flex items-end justify-between">
            <FadeIn>
               <h2 className="text-4xl font-light text-white tracking-tight">Trending Keywords</h2>
            </FadeIn>
            <FadeIn delay={0.2} className="text-zinc-500 text-sm hidden md:block">
               Explore popular categories
            </FadeIn>
         </div>

         {/* Scrolling Marquee - Row 1 */}
         <FadeIn delay={0.3} duration={0.8} yOffset={30}>
            <div className="marquee-container flex overflow-hidden select-none py-2 mask-linear opacity-50 hover:opacity-100 transition-opacity duration-500">
               <div className="marquee-content animate-scroll-left flex gap-2 min-w-full shrink-0 items-center justify-around px-2">
                  {[...TAGS, ...TAGS].map((tag, i) => (
                     <span
                        key={`tag-1-${i}`}
                        className="whitespace-nowrap px-6 py-3 border border-white/10 text-white text-lg font-light uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </FadeIn>

      </div>
   </div>
);

/* -------------------------------------------------------------------------- */
/*                           Community Grid Section                           */
/* -------------------------------------------------------------------------- */
export const CommunityGridSection = () => (
   <div className="py-32 bg-black border-b border-white/5 relative overflow-hidden">

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left: Text Content */}
            <div className="lg:col-span-4 sticky top-32 self-start">
               <FadeIn>
                  <h2 className="text-6xl md:text-8xl font-medium text-white mb-8 tracking-tighter leading-[0.9]">
                     Community <br />
                     <span className="text-zinc-600">Driven.</span>
                  </h2>
               </FadeIn>
               <FadeIn delay={0.2}>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                     Join a growing collective of designers and developers building the future of web interfaces together.
                  </p>
               </FadeIn>
               <FadeInStagger delay={0.4} className="flex flex-col gap-4">
                  <FadeInItem>
                     <button className="w-full h-14 px-8 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 text-zinc-300 transition-all flex items-center justify-between group backdrop-blur-md bg-zinc-900/30">
                        <span className="text-lg">Join Discord</span>
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                  </FadeInItem>
                  <FadeInItem>
                     <button className="w-full h-14 px-8 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 text-zinc-300 transition-all flex items-center justify-between group backdrop-blur-md bg-zinc-900/30">
                        <span className="text-lg">Follow Twitter</span>
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                  </FadeInItem>
               </FadeInStagger>
            </div>

            {/* Right: Bento Grid */}
            <div className="lg:col-span-8">
               <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">

                  {/* Figma Kit - Tall */}
                  <FadeInItem className="md:row-span-2 h-full">
                     <div className="h-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
                        <div className="relative z-10">
                           <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 rounded-2xl border border-white/10 text-white">
                              <PenTool size={24} />
                           </div>
                           <h3 className="text-3xl font-light text-white mb-2">Figma Kit</h3>
                           <p className="text-zinc-500 max-w-xs">Pixel perfect components ready for your design system.</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-zinc-800 rounded-tl-3xl border-t border-l border-white/10 opacity-30 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500 grayscale group-hover:grayscale-0">
                           {/* Abstract mock */}
                           <div className="p-6 grid gap-4 opacity-50">
                              <div className="h-4 w-1/2 bg-zinc-600 rounded-full" />
                              <div className="h-32 bg-zinc-700/50 rounded-xl" />
                           </div>
                        </div>
                     </div>
                  </FadeInItem>

                  {/* GitHub - Square */}
                  <FadeInItem className="h-full">
                     <div className="h-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 flex flex-col justify-between group hover:border-white/20 transition-all">
                        <div className="flex justify-between items-start">
                           <Github size={40} className="text-zinc-500 group-hover:text-white transition-colors" />
                           <span className="px-3 py-1 border border-white/10 text-xs uppercase tracking-widest text-zinc-500 rounded-full">Open Source</span>
                        </div>
                        <div>
                           <div className="text-4xl font-light text-white mb-1">14.5k</div>
                           <div className="text-zinc-500">GitHub Stars</div>
                        </div>
                     </div>
                  </FadeInItem>

                  {/* Contributors - Square */}
                  <FadeInItem className="h-full">
                     <div className="h-full rounded-3xl bg-white text-black p-10 flex flex-col justify-between group hover:bg-zinc-200 transition-all border border-transparent">
                        <div className="flex justify-between items-start">
                           <Users size={40} />
                           <ArrowUpRight />
                        </div>
                        <div>
                           <div className="text-4xl font-light mb-1">120+</div>
                           <div className="text-zinc-600">Contributors</div>
                        </div>
                     </div>
                  </FadeInItem>

               </FadeInStagger>
            </div>

         </div>

      </div>
   </div>
);