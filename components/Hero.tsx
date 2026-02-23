import React, { useState } from 'react';
import PartnersCarousel from './PartnersCarousel';
import Modal from './Modal';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { calculateWastedSpend, parseNumberInput, formatNumber } from '../utils/helpers';

const Hero: React.FC<DemoBookingProps> = ({ onGetStarted }) => {
    const [showCalculatorModal, setShowCalculatorModal] = useState(false);
    const [adSpend, setAdSpend] = useState('');
    const [wastedAmount, setWastedAmount] = useState<number>(0);

    const handleCalculate = () => {
        const spend = parseNumberInput(adSpend);
        if (spend) {
            setWastedAmount(calculateWastedSpend(spend));
            setShowCalculatorModal(true);
        } else {
            setWastedAmount(0);
            setShowCalculatorModal(true);
        }
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

            {/* Ambient Background Glows - Optimized for Mobile Performance */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 rounded-full blur-[60px] md:blur-[120px] -z-10 pointer-events-none mix-blend-screen transform-gpu will-change-transform translate-z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[50px] md:blur-[100px] -z-10 pointer-events-none mix-blend-screen transform-gpu will-change-transform translate-z-0"></div>

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
                        {/* Subtle underline decoration */}
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

                {/* NEW SWITCH-STYLE INPUT DESIGN */}
                <div className="w-full max-w-[540px] mb-8 relative group/container">
                    {/* Container Glow on Hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-full blur opacity-0 group-hover/container:opacity-100 transition-opacity duration-500"></div>

                    {/* Main Switch Container - Dark Track */}
                    <div className="relative flex flex-col md:flex-row items-stretch md:items-center bg-[#080808] border border-white/10 p-2 rounded-[2rem] md:rounded-full shadow-2xl transition-all duration-300 hover:border-white/20 gap-2 md:gap-0">

                        {/* Input Side (Left) - The Label */}
                        <div className="w-full md:w-auto flex-grow flex items-center pl-6 pr-4 h-14 relative z-10">
                            <span className="text-gray-600 font-medium text-lg md:text-xl mr-2 select-none">$</span>
                            <input
                                type="number"
                                placeholder="Monthly ad spend"
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                className="w-full bg-transparent border-none text-white text-lg md:text-xl font-medium placeholder:text-gray-700 focus:outline-none focus:ring-0 p-0 h-full"
                                aria-label="Enter monthly ad spend"
                            />
                        </div>

                        {/* Button Side (Right) - The Knob */}
                        <button
                            onClick={handleCalculate}
                            className="w-full md:w-auto relative h-14 px-8 bg-white text-black rounded-full flex items-center justify-center gap-3 font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group/btn hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shrink-0"
                        >
                            {/* Text and Icon */}
                            <span className="relative z-10 transition-colors duration-300">How it works</span>
                            <iconify-icon icon="solar:arrow-right-linear" class="relative z-10 text-lg transition-transform duration-300 group-hover/btn:translate-x-1"></iconify-icon>

                            {/* Left-to-Right Fill Animation */}
                            <div className="absolute inset-0 bg-[#FFE241] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                        </button>
                    </div>
                </div>

                {/* Redesigned Compact Social Proof */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 animate-fade-in opacity-90">
                    {/* Trust Badge */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[12, 25, 43].map((i) => (
                                <img key={i} src={`https://i.pravatar.cc/64?img=${i}`} alt="Customer" className="w-7 h-7 rounded-full border border-[#161616]" loading="lazy" />
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-0.5 text-[#FFE241] text-[10px] mb-0.5">
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <iconify-icon icon="solar:star-bold"></iconify-icon>
                                <span className="text-gray-400 font-bold ml-1.5 text-xs">4.6</span>
                            </div>
                            <div className="text-xs text-gray-400 font-medium">
                                <span className="text-white font-bold">15,000+</span> advertisers
                            </div>
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-6 bg-white/10"></div>

                    {/* Managed Spend */}
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

                {/* Carousel */}
                <div className="w-full max-w-5xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <PartnersCarousel />
                </div>

            </div>

            {/* Calculator Result Modal */}
            <Modal isOpen={showCalculatorModal} onClose={handleModalClose} size="lg">
                <style>{`
            wistia-player[media-id='okb9j6qvf5']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/okb9j6qvf5/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
            }
        `}</style>

                <div className="p-4 md:p-8 flex flex-col items-center text-center">

                    <div className="mb-4 md:mb-6 w-full">
                        {wastedAmount > 0 ? (
                            <div className="flex flex-col items-center">
                                <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Potential Monthly Waste</div>
                                <div className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                    <span className="text-red-500">${formatNumber(wastedAmount)}</span>
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">Don't let this burn.</div>
                            </div>
                        ) : (
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Stop burning budget</h3>
                        )}
                    </div>

                    <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-4 md:mb-8 aspect-video relative z-10">
                        <wistia-player media-id="okb9j6qvf5" aspect="1.7777777777777777"></wistia-player>
                    </div>

                    <div className="w-full mb-4 md:mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Results in 7 Days</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                            <div className="bg-[#1A1A1A] rounded-xl p-3 md:p-4 border border-white/5 flex flex-col items-center justify-center">
                                <div className="text-xl md:text-3xl font-black text-brand-yellow">+40%</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">ROAS Increase</div>
                            </div>
                            <div className="bg-[#1A1A1A] rounded-xl p-3 md:p-4 border border-white/5 flex flex-col items-center justify-center">
                                <div className="text-xl md:text-3xl font-black text-brand-blue">-22%</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">CPA Decrease</div>
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={handleFixItNow}
                        fullWidth
                        className="h-10 md:h-14 text-xs md:text-base font-bold uppercase tracking-wide btn-hover-skew shadow-[0_0_20px_rgba(255,226,65,0.1)] group"
                    >
                        <span>Optimize for me</span>
                        <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
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