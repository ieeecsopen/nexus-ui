import React, { useState } from 'react';
import { TemplateItem } from '../types';
import { X, Smartphone, Monitor, Tablet, ShoppingCart } from 'lucide-react';
import { 
  SaasStarterDemo, 
  PortfolioProDemo, 
  EcommerceModernDemo, 
  AgencyXDemo, 
  DashboardDemo, 
  BlogMinimalDemo 
} from './DemoLayouts';

interface Props {
  item: TemplateItem;
  onClose: () => void;
}

const TemplateDemo: React.FC<Props> = ({ item, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getContainerWidth = () => {
    switch (device) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'max-w-full';
    }
  };

  const renderContent = () => {
    switch (item.id) {
      case '1': return <SaasStarterDemo />;
      case '2': return <PortfolioProDemo />;
      case '3': return <EcommerceModernDemo />;
      case '4': return <AgencyXDemo />;
      case '5': return <DashboardDemo />;
      case '6': return <BlogMinimalDemo />;
      default: return (
        <div className="flex items-center justify-center h-full bg-zinc-100 text-zinc-400">
           <p>Demo content not available</p>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col">
      {/* Top Bar */}
      <div className="h-16 bg-zinc-900 border-b border-white/10 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
            title="Close Preview"
          >
            <X size={20} />
          </button>
          <div className="h-6 w-px bg-zinc-800"></div>
          <div className="flex items-center gap-3">
             <span className="font-bold text-white hidden sm:block">{item.title}</span>
             <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 border border-zinc-700">{item.price}</span>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="hidden md:flex items-center bg-zinc-950 rounded-lg p-1 border border-zinc-800">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-md transition-colors ${device === 'desktop' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Monitor size={18} />
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={`p-2 rounded-md transition-colors ${device === 'tablet' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Tablet size={18} />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-md transition-colors ${device === 'mobile' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Smartphone size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
           <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-colors">
              <ShoppingCart size={16} /> Buy Now
           </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 bg-zinc-950 overflow-hidden relative flex items-center justify-center p-4 md:p-8">
        <div 
           className={`w-full h-full bg-white transition-all duration-300 ease-in-out shadow-2xl overflow-hidden ${getContainerWidth()} ${device !== 'desktop' ? 'rounded-[2rem] border-4 border-zinc-800' : 'rounded-lg border border-zinc-800'}`}
        >
           <div className="w-full h-full overflow-y-auto custom-scrollbar">
              {renderContent()}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDemo;