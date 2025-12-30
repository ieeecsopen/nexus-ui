import React from 'react';
import { 
  Check, ArrowRight, Star, ShoppingBag, Search, Menu, 
  BarChart3, Users, DollarSign, Package, Settings, 
  TrendingUp, Calendar, ArrowUpRight, Github, Twitter, Linkedin
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                1. SaaS Starter                             */
/* -------------------------------------------------------------------------- */
export const SaasStarterDemo = () => (
  <div className="bg-black min-h-full text-white font-sans selection:bg-white/30">
    {/* Navbar */}
    <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Streamline<span className="text-zinc-500">.</span></div>
        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-medium text-zinc-300 hover:text-white">Log in</button>
          <button className="text-sm font-medium bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-full transition-colors">Get Started</button>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="pt-24 pb-32 px-6 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-medium mb-8 border border-white/10">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> New v2.0 Released
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
        Automate your workflow <br />
        <span className="text-zinc-500">at lightning speed.</span>
      </h1>
      <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Stop wasting time on manual tasks. Streamline uses AI to optimize your daily operations, saving you hours every week.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">Start Free Trial</button>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
           <Github size={18} /> Star on GitHub
        </button>
      </div>
    </section>

    {/* Features Grid (Carousel on Mobile) */}
    <section className="bg-zinc-950 py-24 px-6 border-y border-white/5">
       <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Everything you need to scale</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
             {[
               { title: 'Real-time Analytics', desc: 'Track your growth with precision.', icon: BarChart3 },
               { title: 'Team Collaboration', desc: 'Work together in real-time.', icon: Users },
               { title: 'Global Payments', desc: 'Accept payments from anywhere.', icon: DollarSign },
             ].map((f, i) => (
               <div key={i} className="min-w-[85%] md:min-w-0 snap-center p-6 rounded-2xl bg-black border border-white/5 hover:border-white/20 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <f.icon className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-zinc-400">{f.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </section>

    {/* Pricing */}
    <section className="py-24 px-6 max-w-6xl mx-auto">
       <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
             <div className="text-zinc-400 font-medium mb-2">Starter</div>
             <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
             <ul className="space-y-4 mb-8">
               {['1 User', '5 Projects', 'Community Support'].map(item => (
                 <li key={item} className="flex items-center gap-3 text-zinc-300">
                   <Check size={16} className="text-white" /> {item}
                 </li>
               ))}
             </ul>
             <button className="w-full py-3 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700">Get Started</button>
          </div>
          <div className="p-8 rounded-3xl bg-white text-black border border-zinc-200 relative overflow-hidden">
             <div className="relative z-10">
               <div className="text-zinc-500 font-medium mb-2">Pro</div>
               <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-zinc-400 font-normal">/mo</span></div>
               <ul className="space-y-4 mb-8">
                 {['Unlimited Users', 'Unlimited Projects', 'Priority Support', 'Advanced Analytics'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-black">
                     <div className="bg-black/10 p-0.5 rounded-full"><Check size={12} /></div> {item}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-3 rounded-xl bg-black text-white font-bold hover:bg-zinc-800">Upgrade Now</button>
             </div>
          </div>
       </div>
    </section>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                2. Portfolio Pro                            */
/* -------------------------------------------------------------------------- */
export const PortfolioProDemo = () => (
  <div className="bg-white min-h-full text-zinc-900 font-sans">
    {/* Navigation */}
    <header className="px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-2xl font-bold font-serif">alex.design</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
        <a href="#" className="hover:text-black">Work</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Contact</a>
      </nav>
      <button className="md:hidden"><Menu /></button>
    </header>

    {/* Hero */}
    <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
       <h1 className="text-5xl md:text-8xl font-light leading-tight mb-12">
         Creating digital experiences <br />
         that <span className="italic font-serif">resonate</span>.
       </h1>
       <div className="flex gap-4">
          <div className="h-px w-24 bg-black mt-3"></div>
          <p className="max-w-md text-lg text-zinc-600 leading-relaxed">
            I am a multidisciplinary designer focusing on UI/UX, branding, and motion design. Based in New York.
          </p>
       </div>
    </section>

    {/* Masonry Grid */}
    <section className="px-6 pb-32 max-w-7xl mx-auto">
       <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
             <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" alt="Project 1" />
                </div>
                <div className="flex justify-between items-end">
                   <div>
                      <h3 className="text-xl font-medium">Kinetic Type</h3>
                      <p className="text-zinc-500 text-sm">Typography / Motion</p>
                   </div>
                   <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
             <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" alt="Project 2" />
                </div>
                 <div className="flex justify-between items-end">
                   <div>
                      <h3 className="text-xl font-medium">Mono Chair</h3>
                      <p className="text-zinc-500 text-sm">Product Design</p>
                   </div>
                   <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
          </div>
          <div className="space-y-8 md:pt-24">
             <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" alt="Project 3" />
                </div>
                 <div className="flex justify-between items-end">
                   <div>
                      <h3 className="text-xl font-medium">Art Gallery</h3>
                      <p className="text-zinc-500 text-sm">Branding / Web</p>
                   </div>
                   <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
             <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-zinc-100 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" alt="Project 4" />
                </div>
                 <div className="flex justify-between items-end">
                   <div>
                      <h3 className="text-xl font-medium">Urban Architecture</h3>
                      <p className="text-zinc-500 text-sm">Photography</p>
                   </div>
                   <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
          </div>
       </div>
    </section>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                3. Ecommerce Modern                         */
/* -------------------------------------------------------------------------- */
export const EcommerceModernDemo = () => (
  <div className="bg-white min-h-full text-gray-900 font-sans">
     {/* Promo Banner */}
     <div className="bg-black text-white text-xs text-center py-2 font-medium tracking-wide">
       FREE SHIPPING ON ORDERS OVER $100 — RETURNS ARE FREE
     </div>

     {/* Header */}
     <header className="sticky top-0 bg-white/90 backdrop-blur-xl z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <div className="flex items-center gap-6">
              <button className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"><Menu size={20} /></button>
              <Search size={20} className="text-gray-400" />
           </div>
           <div className="text-2xl font-black tracking-tighter">MODERNE</div>
           <div className="flex items-center gap-6">
              <span className="text-sm font-medium hidden sm:block">Account</span>
              <div className="relative">
                 <ShoppingBag size={20} />
                 <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
              </div>
           </div>
        </div>
     </header>

     {/* Hero */}
     <div className="relative h-[600px] bg-gray-100 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale" alt="Fashion" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
           <div className="bg-white/95 backdrop-blur-sm p-12 max-w-lg mx-4 shadow-2xl">
              <div className="text-xs font-bold tracking-[0.2em] mb-4 text-gray-500">NEW ARRIVALS</div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Summer Collection</h2>
              <button className="px-8 py-3 bg-black text-white text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors">
                 SHOP NOW
              </button>
           </div>
        </div>
     </div>

     {/* Categories */}
     <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
           <h3 className="text-2xl font-bold">Trending Now</h3>
           <a href="#" className="text-sm font-medium border-b border-gray-300 pb-0.5 hover:border-black transition-colors">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { name: 'Linen Shirt', price: '$89', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop' },
             { name: 'Cotton Dress', price: '$120', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop' },
             { name: 'Leather Bag', price: '$245', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop' },
             { name: 'Summer Hat', price: '$45', img: 'https://images.unsplash.com/photo-1565610023023-e18e0018d451?q=80&w=1000&auto=format&fit=crop' },
           ].map((p, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
                   <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt={p.name} />
                   <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                      <ShoppingBag size={16} />
                   </button>
                </div>
                <h4 className="text-sm font-medium">{p.name}</h4>
                <p className="text-sm text-gray-500">{p.price}</p>
             </div>
           ))}
        </div>
     </section>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                4. Agency X                                 */
/* -------------------------------------------------------------------------- */
export const AgencyXDemo = () => (
  <div className="bg-black min-h-full text-white font-sans selection:bg-white selection:text-black">
     {/* Header */}
     <header className="px-6 py-6 flex justify-between items-center mix-blend-difference relative z-50">
        <div className="text-2xl font-bold tracking-tighter">AGENCY<span className="text-zinc-500">X</span></div>
        <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors group">
           <div className="w-6 space-y-1.5 group-hover:space-y-0 relative">
              <div className="h-0.5 bg-white w-full group-hover:bg-black group-hover:rotate-45 group-hover:absolute group-hover:top-0 transition-all"></div>
              <div className="h-0.5 bg-white w-full group-hover:opacity-0 transition-all"></div>
              <div className="h-0.5 bg-white w-full group-hover:bg-black group-hover:-rotate-45 group-hover:absolute group-hover:top-0 transition-all"></div>
           </div>
        </button>
     </header>

     {/* Hero */}
     <section className="px-6 py-24 md:py-40">
        <div className="max-w-[90vw]">
           <h1 className="text-6xl md:text-[9vw] font-black leading-[0.85] uppercase tracking-tighter mb-12">
              We Build <br />
              <span className="text-zinc-500">Digital</span> <br />
              Future
           </h1>
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/20 pt-8">
              <p className="max-w-md text-xl text-neutral-400">
                 Agency X is a strategic design and technology partner for forward-thinking brands.
              </p>
              <div className="flex gap-4">
                 <button className="px-8 py-4 bg-white text-black font-bold uppercase hover:bg-zinc-200 transition-colors">
                    Start a Project
                 </button>
              </div>
           </div>
        </div>
     </section>

     {/* Services */}
     <section className="py-24 border-t border-white/10">
        <div className="px-6">
           {[
             { num: '01', title: 'Brand Strategy', desc: 'Defining the core of your business.' },
             { num: '02', title: 'Product Design', desc: 'Creating intuitive user experiences.' },
             { num: '03', title: 'Development', desc: 'Robust engineering for scale.' },
             { num: '04', title: 'Marketing', desc: 'Growth strategies that convert.' },
           ].map((s, i) => (
             <div key={i} className="group flex flex-col md:flex-row md:items-center py-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="px-6 md:w-1/4 text-neutral-500 font-mono text-sm mb-4 md:mb-0">{s.num}</div>
                <div className="px-6 md:w-1/2 text-3xl md:text-5xl font-bold uppercase group-hover:text-white transition-colors group-hover:pl-10 text-zinc-400">{s.title}</div>
                <div className="px-6 md:w-1/4 text-neutral-400 text-sm md:text-right mt-4 md:mt-0">{s.desc}</div>
             </div>
           ))}
        </div>
     </section>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                5. Dashboard UI                             */
/* -------------------------------------------------------------------------- */
export const DashboardDemo = () => (
  <div className="bg-gray-50 min-h-full text-slate-800 font-sans flex">
     {/* Sidebar */}
     <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-400 h-screen fixed left-0 top-0">
        <div className="p-6">
           <div className="text-white font-bold text-xl flex items-center gap-2">
             <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center"><BarChart3 size={18} className="text-white" /></div>
             Dash<span className="text-zinc-500">UI</span>
           </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
           <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-lg font-medium">
             <BarChart3 size={20} /> Dashboard
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
             <Users size={20} /> Customers
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
             <Package size={20} /> Products
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
             <DollarSign size={20} /> Revenue
           </a>
        </nav>
        <div className="p-4 border-t border-white/10">
           <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
             <Settings size={20} /> Settings
           </a>
        </div>
     </aside>

     {/* Main Content */}
     <main className="flex-1 md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
           <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
           <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                 <Calendar size={14} /> Last 30 Days
              </div>
              <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-700 font-bold border-2 border-white shadow-sm">JD</div>
           </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {[
             { label: 'Total Revenue', val: '$45,231', change: '+20.1%', pos: true },
             { label: 'Active Users', val: '2,345', change: '+15.2%', pos: true },
             { label: 'Bounce Rate', val: '42.3%', change: '-4.1%', pos: true },
             { label: 'Active Sessions', val: '12,234', change: '-1.2%', pos: false },
           ].map((s, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm text-slate-500 font-medium mb-2">{s.label}</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{s.val}</div>
                <div className={`text-xs font-bold flex items-center gap-1 ${s.pos ? 'text-zinc-900' : 'text-zinc-500'}`}>
                   <TrendingUp size={12} className={!s.pos ? "rotate-180" : ""} /> {s.change} <span className="text-slate-400 font-normal">from last month</span>
                </div>
             </div>
           ))}
        </div>

        {/* Charts Section Placeholder */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
           <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-80 flex flex-col">
              <h3 className="font-bold text-slate-900 mb-6">Revenue Over Time</h3>
              <div className="flex-1 flex items-end gap-2 px-4">
                 {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-zinc-800 rounded-t-sm hover:bg-zinc-700 transition-colors relative group">
                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">${h}k</div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-80">
              <h3 className="font-bold text-slate-900 mb-6">Traffic Sources</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Direct', val: 40, col: 'bg-zinc-900' },
                   { label: 'Social', val: 35, col: 'bg-zinc-700' },
                   { label: 'Referral', val: 15, col: 'bg-zinc-500' },
                   { label: 'Other', val: 10, col: 'bg-zinc-300' },
                 ].map((d, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                         <span className="text-slate-600">{d.label}</span>
                         <span className="font-bold">{d.val}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div style={{ width: `${d.val}%` }} className={`h-full ${d.col}`}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
     </main>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                6. Blog Minimal                             */
/* -------------------------------------------------------------------------- */
export const BlogMinimalDemo = () => (
  <div className="bg-[#faf9f6] min-h-full text-[#333] font-serif">
     {/* Header */}
     <header className="py-12 px-6 text-center border-b border-stone-200">
        <div className="uppercase tracking-[0.2em] text-xs font-sans text-stone-500 mb-4">The Journal</div>
        <h1 className="text-4xl font-bold text-stone-900 mb-6">Minimalist.</h1>
        <nav className="flex justify-center gap-8 font-sans text-sm font-medium">
           <a href="#" className="border-b border-black pb-0.5">Home</a>
           <a href="#" className="text-stone-500 hover:text-black transition-colors">Culture</a>
           <a href="#" className="text-stone-500 hover:text-black transition-colors">Tech</a>
           <a href="#" className="text-stone-500 hover:text-black transition-colors">Design</a>
           <a href="#" className="text-stone-500 hover:text-black transition-colors">About</a>
        </nav>
     </header>

     {/* Content */}
     <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-20">
           <article className="group cursor-pointer">
              <div className="text-xs font-sans text-stone-500 mb-3 tracking-wider">OCTOBER 24, 2024</div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-stone-600 transition-colors">The Art of Doing Nothing</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6 font-sans">
                 In a world obsessed with productivity, taking time to pause is a revolutionary act. We explore how stillness can actually fuel creativity.
              </p>
              <div className="h-64 bg-stone-200 mb-6 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Blog 1" />
              </div>
              <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider border-b-2 border-transparent group-hover:border-black transition-all pb-1">
                 Read Story <ArrowRight size={14} />
              </a>
           </article>

           <article className="group cursor-pointer">
              <div className="text-xs font-sans text-stone-500 mb-3 tracking-wider">OCTOBER 20, 2024</div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-stone-600 transition-colors">Sustainable Architecture</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6 font-sans">
                 How modern architects are blending nature with brutalism to create living spaces that breathe.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider border-b-2 border-transparent group-hover:border-black transition-all pb-1">
                 Read Story <ArrowRight size={14} />
              </a>
           </article>
           
           <article className="group cursor-pointer">
              <div className="text-xs font-sans text-stone-500 mb-3 tracking-wider">OCTOBER 15, 2024</div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-stone-600 transition-colors">Digital Minimalism</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6 font-sans">
                 Reclaiming our attention in the age of the algorithm.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider border-b-2 border-transparent group-hover:border-black transition-all pb-1">
                 Read Story <ArrowRight size={14} />
              </a>
           </article>
        </div>
        
        <div className="mt-20 pt-12 border-t border-stone-200 text-center">
           <button className="px-8 py-3 border border-stone-300 rounded-full font-sans text-sm hover:bg-stone-900 hover:text-white transition-colors">
              Load More Articles
           </button>
        </div>
     </main>

     <footer className="bg-stone-900 text-stone-400 py-12 text-center font-sans text-sm">
        <p>&copy; 2024 Minimalist Blog Template. All rights reserved.</p>
     </footer>
  </div>
);