import React from 'react';
import { Users, Heart, Globe, Code, Zap, Target, Github, Twitter, Linkedin, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden font-sans">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 pt-48 pb-20 relative z-10">

                {/* Header / Mission */}
                <div className="max-w-4xl mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
                        <Users size={12} />
                        <span>The team behind Nexus Kit</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-10 leading-[0.9] font-walsheim">
                        We craft the tools <br />
                        <span className="text-zinc-500">you build with.</span>
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Nexus Kit started as a small internal library and grew into a global community of developers who believe that high-quality UI should be accessible to everyone.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-32">
                    {[
                        { label: 'Downloads', value: '2M+' },
                        { label: 'Components', value: '500+' },
                        { label: 'Contributors', value: '120+' },
                        { label: 'Happiness', value: '99%' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-black p-8 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-32">
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Target className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Pixel Perfection</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            We obsess over every pixel, margin, and animation timing. Good enough is never good enough for us.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Zap className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Performance First</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Zero runtime overhead. Optimized bundles. We ensure your applications stay fast and responsive.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Globe className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Open for All</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            We believe in open source. While we have premium tiers, our core will always remain free for the community.
                        </p>
                    </div>
                </div>

                {/* Image Break */}
                <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-32 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                        alt="Team collaborating"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white tracking-tight">Built remotely, worldwide.</h2>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-12">Meet the Makers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Alex Rivera', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'Sarah Chen', role: 'Engineering', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'Marcus Johnson', role: 'Product', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-white/5">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-zinc-500 mb-3">{member.role}</p>
                                <div className="flex gap-3">
                                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter size={16} /></a>
                                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Github size={16} /></a>
                                    <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={16} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="py-20 border-t border-white/10 text-center">
                    <Award className="mx-auto text-zinc-500 mb-6" size={48} />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the movement.</h2>
                    <p className="text-zinc-400 max-w-lg mx-auto mb-10">
                        We're hiring designers and engineers who are passionate about building the future of the web.
                    </p>
                    <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                        View Open Positions
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;