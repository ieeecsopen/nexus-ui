import React from 'react';
import { CreditCard, Bell, Activity, Shield, Zap, ToggleRight } from 'lucide-react';

export const FloatingCard1: React.FC = () => (
  <div className="absolute top-10 -right-12 lg:right-0 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 p-4 rounded-xl shadow-2xl w-64 transform rotate-6 animate-float z-10 hidden sm:block">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center">
          <Zap size={20} className="text-white" />
        </div>
        <div>
          <div className="h-2 w-20 bg-zinc-700 rounded mb-1.5"></div>
          <div className="h-2 w-12 bg-zinc-800 rounded"></div>
        </div>
      </div>
      <div className="text-emerald-500 font-mono text-xs">+24%</div>
    </div>
    <div className="h-16 w-full bg-zinc-800/50 rounded-lg flex items-end p-2 gap-1">
      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-zinc-600 rounded-sm hover:bg-indigo-500 transition-colors"></div>
      ))}
    </div>
  </div>
);

export const FloatingCard2: React.FC = () => (
  <div className="absolute bottom-20 -right-4 lg:right-32 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl w-56 transform -rotate-3 animate-float-delayed z-0 hidden md:block">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
        <Shield size={16} />
      </div>
      <span className="text-sm font-medium text-zinc-300">Security Scan</span>
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>Progress</span>
        <span>84%</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full w-[84%] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">0 Issues</div>
        <div className="px-2 py-1 rounded bg-green-900/20 border border-green-900/30 text-[10px] text-green-400">Secure</div>
      </div>
    </div>
  </div>
);

export const FloatingCard3: React.FC = () => (
  <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-20 lg:-right-32 bg-black/60 backdrop-blur-xl border border-zinc-800 p-5 rounded-3xl shadow-2xl w-72 animate-pulse-slow z-20 pointer-events-none opacity-50 md:opacity-100">
    <div className="flex items-center justify-between mb-6">
      <span className="text-white font-semibold">Payment Method</span>
      <CreditCard size={18} className="text-zinc-400" />
    </div>
    <div className="space-y-4">
      <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <div className="flex-1">
            <div className="text-sm text-white">Mastercard **** 4242</div>
            <div className="text-xs text-zinc-500">Expires 12/25</div>
        </div>
        <div className="text-indigo-400">
            <ToggleRight size={24} />
        </div>
      </div>
      <button className="w-full py-2 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors">
        Add New Card
      </button>
    </div>
  </div>
);