import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { ChevronLeft, Copy, Check, Terminal, Box, Code, Sparkles, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentPreview } from './Previews';

interface Props {
  item: ComponentItem;
  onBack: () => void;
}

type TabType = 'preview' | 'code' | 'installation' | 'usage' | 'props';

const ComponentDetail: React.FC<Props> = ({ item, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('preview');
  const [isCopied, setIsCopied] = useState(false);
  const [copiedExampleIndex, setCopiedExampleIndex] = useState<number | null>(null);

  const handleCopyCode = () => {
    if (item.fullCode) {
      navigator.clipboard.writeText(item.fullCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleCopyExample = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedExampleIndex(index);
    setTimeout(() => setCopiedExampleIndex(null), 2000);
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(item.installation || 'npm install @nexus/ui');
  };

  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: 'preview', label: 'Preview', icon: Box },
    { id: 'code', label: 'Code', icon: Code },
    { id: 'installation', label: 'Installation', icon: Terminal },
    { id: 'usage', label: 'Usage', icon: Sparkles },
    { id: 'props', label: 'Props', icon: Sliders },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-32 min-h-screen"
    >
      {/* Navigation Back */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
      >
        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 bg-zinc-900">
           <ChevronLeft size={16} />
        </div>
        <span className="text-sm font-medium">Back to components</span>
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-walsheim">{item.title}</h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">{item.description}</p>
        </div>
        <div className="flex gap-3">
          {item.isNew && (
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              New Arrival
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
            item.price === 'pro' 
              ? 'bg-white text-black border-white' 
              : 'bg-zinc-800 text-zinc-400 border-zinc-700'
          }`}>
            {item.price === 'pro' ? 'Pro Component' : 'Free Component'}
          </span>
        </div>
      </div>

      {/* Page Sub-Navigation Tabs */}
      <div className="sticky top-6 z-30 bg-black/80 backdrop-blur-xl border-b border-white/10 mb-8 -mx-6 px-6 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:static md:border-b md:border-white/10">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-white' 
                  : 'border-transparent text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* PREVIEW TAB */}
            {activeTab === 'preview' && (
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                 <ComponentPreview item={item} />
              </div>
            )}

            {/* CODE TAB */}
            {activeTab === 'code' && (
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl">
                 <div className="flex justify-between items-center px-6 py-4 bg-zinc-900/50 border-b border-white/5">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <button 
                      onClick={handleCopyCode}
                      className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10"
                    >
                      {isCopied ? <><Check size={14} className="text-emerald-500" /> Copied</> : <><Copy size={14} /> Copy Code</>}
                    </button>
                 </div>
                 <div className="p-6 overflow-x-auto custom-scrollbar">
                    <pre className="text-sm font-mono text-zinc-300 leading-relaxed tab-size-2">
                      <code>{item.fullCode || '// Code coming soon...'}</code>
                    </pre>
                 </div>
              </div>
            )}

            {/* INSTALLATION TAB */}
            {activeTab === 'installation' && (
              <div className="max-w-2xl">
                 <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                       <Terminal size={20} className="text-indigo-400" /> 
                       Install dependencies
                    </h3>
                    <p className="text-zinc-400 mb-6 text-sm">
                       Run the following command in your terminal to install the necessary packages for this component.
                    </p>
                    <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex items-center justify-between group">
                       <code className="font-mono text-sm text-indigo-300">
                         {item.installation || 'npm install @nexus/ui'}
                       </code>
                       <button 
                         className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
                         onClick={handleCopyInstall}
                         title="Copy command"
                       >
                         <Copy size={18} />
                       </button>
                    </div>
                 </div>
              </div>
            )}

            {/* USAGE TAB */}
            {activeTab === 'usage' && (
              <div className="grid gap-8 max-w-4xl">
                 {item.usageExamples && item.usageExamples.length > 0 ? (
                    item.usageExamples.map((example, index) => (
                      <div key={index} className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-start bg-zinc-800/30">
                           <div>
                             <h4 className="font-bold text-white text-base">{example.title}</h4>
                             {example.description && (
                               <p className="text-sm text-zinc-500 mt-1">{example.description}</p>
                             )}
                           </div>
                           <button
                             onClick={() => handleCopyExample(example.code, index)}
                             className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors bg-black/20 px-3 py-1.5 rounded-lg border border-white/5 hover:bg-black/40"
                           >
                              {copiedExampleIndex === index ? <><Check size={14} className="text-emerald-500" /> Copied</> : <><Copy size={14} /> Copy</>}
                           </button>
                        </div>
                        <div className="p-6 bg-[#0d0d0d] overflow-x-auto custom-scrollbar">
                           <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                             <code>{example.code}</code>
                           </pre>
                        </div>
                      </div>
                    ))
                 ) : (
                    <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-white/5 border-dashed">
                       <Sparkles className="mx-auto text-zinc-600 mb-4" size={32} />
                       <p className="text-zinc-400">No specific usage examples available for this component.</p>
                    </div>
                 )}
              </div>
            )}

            {/* PROPS TAB */}
            {activeTab === 'props' && (
              <div className="max-w-4xl">
                 <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl">
                    <div className="p-6 md:p-8">
                       <h3 className="text-xl font-bold text-white mb-6">Component Props</h3>
                       
                       {item.componentProps && item.componentProps.length > 0 ? (
                         <div className="overflow-x-auto">
                           <table className="w-full text-left border-collapse">
                             <thead>
                               <tr className="border-b border-white/10">
                                 <th className="pb-4 pt-2 font-medium text-zinc-400 text-xs uppercase tracking-wider pl-4">Prop</th>
                                 <th className="pb-4 pt-2 font-medium text-zinc-400 text-xs uppercase tracking-wider">Type</th>
                                 <th className="pb-4 pt-2 font-medium text-zinc-400 text-xs uppercase tracking-wider">Default</th>
                                 <th className="pb-4 pt-2 font-medium text-zinc-400 text-xs uppercase tracking-wider">Usage Example</th>
                                 <th className="pb-4 pt-2 font-medium text-zinc-400 text-xs uppercase tracking-wider">Description</th>
                               </tr>
                             </thead>
                             <tbody className="divide-y divide-white/5">
                               {item.componentProps.map((prop, idx) => (
                                 <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                   <td className="py-4 pl-4 pr-4 align-top">
                                     <code className="text-sm font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">{prop.name}</code>
                                   </td>
                                   <td className="py-4 pr-4 align-top">
                                     <code className="text-xs text-zinc-300 font-mono">{prop.type}</code>
                                   </td>
                                   <td className="py-4 pr-4 align-top">
                                     <span className="text-xs text-zinc-500 font-mono">{prop.default}</span>
                                   </td>
                                   <td className="py-4 pr-4 align-top">
                                     {prop.example ? (
                                        <code className="text-xs text-cyan-300 bg-cyan-900/20 px-1.5 py-0.5 rounded border border-cyan-900/30 whitespace-nowrap font-mono block">
                                          {prop.example}
                                        </code>
                                     ) : (
                                        <span className="text-xs text-zinc-600">-</span>
                                     )}
                                   </td>
                                   <td className="py-4 align-top text-sm text-zinc-400 leading-relaxed min-w-[200px]">
                                     {prop.description}
                                   </td>
                                 </tr>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       ) : (
                         <div className="text-zinc-500 text-sm text-center py-8">
                            This component accepts standard HTML attributes.
                         </div>
                       )}
                    </div>
                 </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Persistent Help Section */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <div>
              <h4 className="text-white font-semibold mb-1">Need help with this component?</h4>
              <p className="text-zinc-500 text-sm">Join our Discord server to get help from the community.</p>
           </div>
           <div className="flex gap-4">
              <button className="px-5 py-2.5 bg-zinc-900 border border-white/10 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
                 Report Issue
              </button>
              <button className="px-5 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors">
                 Join Discord
              </button>
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ComponentDetail;