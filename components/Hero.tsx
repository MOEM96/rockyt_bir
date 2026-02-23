import React, { useState } from 'react';
import PartnersCarousel from './PartnersCarousel';
import Modal from './Modal';
import Button from './Button';
import { DemoBookingProps } from '../types/index';


const Hero: React.FC<DemoBookingProps> = ({ onGetStarted }) => {
    const [showCalculatorModal, setShowCalculatorModal] = useState(false);

    const handleCalculate = () => {
        // We open the modal to show "how it works"
        setShowCalculatorModal(true);
    };

    const handleModalClose = () => {
        setShowCalculatorModal(false);
    };

    const handleFixItNow = () => {
        handleModalClose();
        onGetStarted();
    };

    return (
        <div className="w-full relative pt-10 pb-12 md:pt-10 md:pb-20 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[80vh] bg-[#161616]">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 rounded-full blur-[60px] md:blur-[120px] -z-10 pointer-events-none mix-blend-screen transform-gpu translate-z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[50px] md:blur-[100px] -z-10 pointer-events-none mix-blend-screen transform-gpu translate-z-0"></div>

            <div className="max-w-6xl w-full mx-auto text-center z-10 flex flex-col items-center">

                {/* Tech Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <span className="text-gray-400 text-[10px] md:text-xs font-medium tracking-wider uppercase">Powered by</span>
                    <div className="w-px h-3 bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <iconify-icon icon="simple-icons:openai" width="14" class="text-white group-hover:text-brand-blue transition-colors duration-300"></iconify-icon>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 font-bold text-xs md:text-sm tracking-wide">GPT-5.2</span>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.95] md:leading-[0.9]">
                    out-perform{' '}
                    <span className="inline-block relative group">
                        <span className="relative z-10 animate-gradient-text bg-gradient-to-r from-white via-red-500 to-white bg-[length:200%_auto] bg-clip-text text-transparent pb-1">human</span>
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                    {' '}ad experts
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                    Humans react after performance drops. Rockyt's AI reacts <span className="text-white font-medium">while it's happening</span>, because every $ counts
                </p>

                {/* CTA Section */}
                <div className="w-full flex justify-center mb-8 relative z-10">
                    <button
                        onClick={handleCalculate}
                        className="relative h-14 md:h-16 px-10 md:px-12 bg-white text-black rounded-full flex items-center justify-center gap-3 font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 overflow-hidden group/btn hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:scale-95 shadow-xl"
                    >
                        <span className="relative z-10 transition-colors duration-300">How it works</span>
                        <iconify-icon icon="solar:arrow-right-linear" class="relative z-10 text-xl transition-transform duration-300 group-hover/btn:translate-x-1"></iconify-icon>
                        <div className="absolute inset-0 bg-brand-yellow transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                    </button>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 animate-fade-in opacity-90">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[12, 25, 43].map((i) => (
                                <img key={i} src={`https://i.pravatar.cc/64?img=${i}`} alt="Customer" className="w-7 h-7 rounded-full border border-[#161616]" loading="lazy" />
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-0.5 text-[#FFE241] text-[10px] mb-0.5">
                                {[1, 2, 3, 4, 5].map(s => <iconify-icon key={s} icon="solar:star-bold"></iconify-icon>)}
                                <span className="text-gray-400 font-bold ml-1.5 text-xs">4.6</span>
                            </div>
                            <div className="text-xs text-gray-400 font-medium">
                                <span className="text-white font-bold">15,000+</span> advertisers
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-6 bg-white/10"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                            <iconify-icon icon="solar:chart-2-bold" class="text-sm"></iconify-icon>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-white font-bold">$2B+ Ad Spend</div>
                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Managed Annually</div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-5xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <PartnersCarousel />
                </div>

            </div>

            {/* Ultra-Compact Results Modal */}
            <Modal isOpen={showCalculatorModal} onClose={handleModalClose} size="lg">
                <div className="p-4 md:p-6 flex flex-col items-center">
                    <div className="mb-4 w-full text-center">
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase tracking-[0.2em]">beat the algorithm</h3>
                    </div>

                    {/* Wistia Video Embed - Compact */}
                    <div className="w-full max-w-[480px] bg-black rounded-xl overflow-hidden shadow-xl border border-white/10 mb-4 aspect-video relative">
                        <style>{`
                            wistia-player[media-id='okb9j6qvf5']:not(:defined) { 
                                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/okb9j6qvf5/swatch'); 
                                display: block; 
                                filter: blur(5px); 
                                padding-top:56.25%; 
                            }
                        `}</style>
                        <wistia-player media-id="okb9j6qvf5" aspect="1.7777777777777777"></wistia-player>
                    </div>

                    {/* Steps Horizontal/Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-6">
                        {[
                            { step: '01', title: 'import', desc: 'Sync Meta & Google.', icon: 'solar:import-bold', color: 'text-brand-blue' },
                            { step: '02', title: 'optimize', desc: 'AI finds leaks.', icon: 'solar:magic-stick-3-bold', color: 'text-brand-yellow' },
                            { step: '03', title: 'scale', desc: 'Stop the burn.', icon: 'solar:fire-bold', color: 'text-red-500' }
                        ].map((s) => (
                            <div key={s.step} className="flex flex-row md:flex-col items-center gap-3 md:gap-1.5 bg-white/[0.02] border border-white/5 p-2 rounded-xl text-left md:text-center transition-colors">
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 ${s.color}`}>
                                    <iconify-icon icon={s.icon} class="text-lg md:text-xl"></iconify-icon>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[12px] md:text-xs font-bold text-white leading-none">{s.title}</h4>
                                    <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex items-center justify-center gap-4 mb-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">+40% ROAS</span>
                        <div className="w-px h-3 bg-white/10"></div>
                        <span className="text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20">-22% CPA</span>
                    </div>

                    <Button onClick={handleFixItNow} fullWidth className="h-12 md:h-14 text-sm font-bold uppercase tracking-wide group">
                        <span>Start Saving Now</span>
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
                    </Button>
                </div>
            </Modal>

            <style>{`
                @keyframes gradient-text {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .animate-gradient-text {
                    animation: gradient-text 3s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;