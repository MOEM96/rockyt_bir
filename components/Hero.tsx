import React, { useState } from 'react';
import PartnersCarousel from './PartnersCarousel';
import Modal from './Modal';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { calculateWastedSpend, parseNumberInput, formatNumber } from '../utils/helpers';

const Hero: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
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
    onBookDemo();
  };

  return (
    <div className="w-full relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-[#161616]">
       
       {/* Ambient Background Glows */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen"></div>

       <div className="max-w-6xl w-full mx-auto text-center z-10 flex flex-col items-center">
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.95] md:leading-[0.9]">
                Scale Your Campaigns<br className="hidden md:block" />
                <span className="mx-2 md:mx-4 inline-block relative group">
                    <span className="relative z-10 animate-gradient-text bg-gradient-to-r from-white via-brand-yellow to-white bg-[length:200%_auto] bg-clip-text text-transparent pb-1">Without</span>
                    {/* Subtle underline decoration */}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
                Wasting Budget
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Scale From $10K to $1M in Ad Spend <span className="text-white font-medium">Faster & Profitable</span>
            </p>

            {/* Input Component */}
            <div className="w-full max-w-[480px] mb-8 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 p-1.5 pl-6 rounded-full shadow-2xl transition-transform transform group-hover:scale-[1.01]">
                     <div className="flex-grow flex items-center h-full relative">
                        <span className="text-gray-500 font-medium text-lg mr-2">$</span>
                        <input 
                            type="number" 
                            placeholder="Monthly ad spend" 
                            value={adSpend}
                            onChange={(e) => setAdSpend(e.target.value)}
                            className="w-full bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder:text-gray-600 text-base font-medium h-full"
                            aria-label="Enter monthly ad spend"
                        />
                    </div>
                    <button 
                        onClick={handleCalculate} 
                        className="bg-white hover:bg-gray-100 text-black text-sm font-bold py-3 px-6 rounded-full uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2"
                    >
                        How it works
                    </button>
                </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-xs md:text-sm text-gray-500 font-medium mb-20 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                <iconify-icon icon="solar:shield-check-bold" class="text-brand-yellow text-lg"></iconify-icon>
                <span>Trusted by <span className="text-white">15,000+ advertisers</span> managing <span className="text-white">$2B</span> in ad spend</span>
            </div>

            {/* Carousel */}
            <div className="w-full max-w-5xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <PartnersCarousel />
            </div>

       </div>

      {/* Compact Calculator Result Modal */}
      <Modal isOpen={showCalculatorModal} onClose={handleModalClose} size="md">
        <style>{`
            wistia-player[media-id='okb9j6qvf5']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/okb9j6qvf5/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
            }
        `}</style>
        
        <div className="p-6 flex flex-col items-center text-center">
        
        {/* Result Header - Minimal */}
        <div className="mb-6 w-full">
            {wastedAmount > 0 ? (
                <div className="flex flex-col items-center">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Potential Monthly Waste</div>
                    <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                        <span className="text-red-500">${formatNumber(wastedAmount)}</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Don't let this burn.</div>
                </div>
            ) : (
                <h3 className="text-2xl font-bold text-white mb-2">Stop burning budget</h3>
            )}
        </div>

        {/* Video Embed - Compact */}
        <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-6 aspect-video relative z-10">
             <wistia-player media-id="okb9j6qvf5" aspect="1.7777777777777777"></wistia-player>
        </div>

        {/* Headlines & Stats - Replacing Timeline */}
        <div className="w-full mb-6">
             <div className="flex items-center justify-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Results in 7 Days</h4>
             </div>
             
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1A1A1A] rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                    <div className="text-2xl font-black text-brand-yellow">+40%</div>
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1">ROAS Increase</div>
                </div>
                 <div className="bg-[#1A1A1A] rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                    <div className="text-2xl font-black text-brand-blue">-22%</div>
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1">CPA Decrease</div>
                </div>
             </div>
        </div>

        {/* Final CTA */}
        <Button 
            onClick={handleFixItNow}
            asBookingButton
            fullWidth
            className="h-12 text-sm font-bold uppercase tracking-wide btn-hover-skew shadow-[0_0_20px_rgba(255,226,65,0.1)] group"
        >
            <span>Fix My Ad Spend Now</span>
            <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </Button>
        
        </div>
      </Modal>

      {/* Styles for Hero Animation */}
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