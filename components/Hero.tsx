import React, { useState, useEffect } from 'react';
import PartnersCarousel from './PartnersCarousel';
import '../types';

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [adSpend, setAdSpend] = useState('');
  const [wastedAmount, setWastedAmount] = useState<number>(0);

  // Lock scroll when modal is open
  useEffect(() => {
    if (showCalculatorModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCalculatorModal]);

  const handleCalculate = () => {
    const spend = parseFloat(adSpend.replace(/,/g, ''));
    if (!isNaN(spend) && spend > 0) {
        // Calculating 40% as average wasted spend based on the 30-50% range
        setWastedAmount(Math.round(spend * 0.4));
        setShowCalculatorModal(true);
    } else {
        // If empty or invalid, focus the input or just show modal with generic message
        setWastedAmount(0);
        setShowCalculatorModal(true);
    }
  };

  return (
    <div className="w-full min-h-[90vh] md:h-[700px] relative flex justify-center items-center -mt-20 md:-mt-24 mb-0 overflow-hidden">
      {/* Wrapper to constrain and mask the lottie */}
      <div className="w-full h-full relative flex items-center justify-center">
        
        {/* Mobile View: Headline, Calculator, Social Proof */}
        <div className="md:hidden flex flex-col items-center justify-center px-6 text-center z-30 pt-24 pb-12 w-full max-w-md">
            <h1 className="text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
              Where <span className="text-brand-yellow">creativity</span> <br/> meets <span className="text-brand-pink">performance</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-[300px] mx-auto leading-relaxed mb-8">
              Automate your advertising strategy and scale faster.
            </p>

            {/* Mobile Calculator Input */}
            <div className="w-full mb-8 space-y-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-semibold text-lg">$</span>
                    </div>
                    <input 
                        type="number" 
                        placeholder="Monthly ad spend" 
                        value={adSpend}
                        onChange={(e) => setAdSpend(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-full py-4 pl-10 pr-4 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-gray-500 text-lg"
                    />
                </div>
                <button 
                    onClick={handleCalculate}
                    className="w-full bg-brand-yellow text-brand-black font-bold py-4 rounded-full text-lg hover:bg-[#fcd34d] transition-colors shadow-lg shadow-brand-yellow/10"
                >
                    Calculate wasted ad spend
                </button>
            </div>

            {/* Carousel (Mobile) */}
            <div className="w-full mt-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">Trusted by market leaders</p>
                <PartnersCarousel />
            </div>
        </div>

        {/* Desktop Lottie: Use 'slice' to cover the large hero area */}
        <div className="hidden md:block w-full h-full absolute inset-0">
            <lottie-player
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
              background="transparent"
              speed="1"
              style={{ width: '100%', height: '100%' }}
              hover="true"
              preserveAspectRatio="xMidYMid slice"
              className="opacity-90"
            ></lottie-player>
        </div>

        {/* Desktop Overlay: Calculator and Social Proof */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-end items-center pb-24 z-20 pointer-events-none">
            
            {/* Desktop Calculator Input */}
            <div className="pointer-events-auto bg-black/60 backdrop-blur-md p-2 pr-3 rounded-full border border-white/15 hover:border-white/30 transition-all flex items-center gap-2 shadow-2xl shadow-brand-blue/5">
                <div className="relative w-64 h-full">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-semibold text-xl">$</span>
                    </div>
                    <input 
                        type="number" 
                        placeholder="Monthly ad spend" 
                        value={adSpend}
                        onChange={(e) => setAdSpend(e.target.value)}
                        className="w-full bg-transparent border-none text-white rounded-full py-4 pl-10 pr-4 focus:outline-none focus:ring-0 placeholder:text-gray-500 text-xl font-medium h-full"
                    />
                </div>
                <button 
                    onClick={handleCalculate}
                    className="bg-brand-yellow text-brand-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#fcd34d] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-yellow/20 whitespace-nowrap"
                >
                    Calculate wasted ad spend
                </button>
            </div>
            
            <div className="mt-16 flex flex-col items-center pointer-events-auto w-full max-w-4xl opacity-80 hover:opacity-100 transition-opacity">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Trusted by market leaders</p>
                 <PartnersCarousel />
            </div>
        </div>
        
        {/* Stronger Edge Blending / Masking */}
        <div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-8 md:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none"></div>
      </div>

      {/* Calculator Result Modal (Lead Magnet Flow) */}
      {showCalculatorModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
            onClick={() => setShowCalculatorModal(false)}
          ></div>

          <div className="relative bg-[#161616] w-full max-w-3xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex flex-col animate-fade-in-up max-h-[95vh] overflow-y-auto">
             
             {/* Close Button */}
             <button onClick={() => setShowCalculatorModal(false)} className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 rounded-full text-white/50 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                <iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
             </button>

             <div className="p-8 md:p-12 flex flex-col items-center text-center">
                
                {/* Result Header */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider mb-4">
                        <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
                        Analysis Report
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        {wastedAmount > 0 ? (
                           <>You could be wasting <span className="text-red-500 text-nowrap">${wastedAmount.toLocaleString()}</span> / mo</>
                        ) : (
                           <>Stop burning your ad budget</>
                        )}
                    </h3>
                </div>

                {/* Education Content */}
                <div className="max-w-xl mx-auto mb-8 bg-white/5 rounded-2xl p-6 border border-white/5">
                    <p className="text-lg text-gray-300 mb-4">
                        <span className="font-bold text-white">Why?</span> On average, 30-50% of ad spend is wasted due to:
                    </p>
                    <ul className="text-left space-y-3 text-gray-400 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <iconify-icon icon="solar:close-circle-bold" class="text-red-500 mt-1 shrink-0"></iconify-icon>
                            <span><strong className="text-white">Creative Fatigue:</strong> Running ads that audiences have already ignored.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <iconify-icon icon="solar:close-circle-bold" class="text-red-500 mt-1 shrink-0"></iconify-icon>
                            <span><strong className="text-white">Delayed Tracking:</strong> Making decisions on 48h old data.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <iconify-icon icon="solar:close-circle-bold" class="text-red-500 mt-1 shrink-0"></iconify-icon>
                            <span><strong className="text-white">Manual Errors:</strong> Forgetting to kill losing ads over weekends.</span>
                        </li>
                    </ul>
                </div>

                {/* Video Embed */}
                <div className="w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8 relative">
                    <wistia-player media-id="okb9j6qvf5" aspect="1.7777777777777777"></wistia-player>
                </div>

                {/* Final CTA */}
                <div className="w-full max-w-md space-y-4">
                    <button 
                        onClick={() => { setShowCalculatorModal(false); if(onBookDemo) onBookDemo(); }}
                        data-cal-link="rock-yt-admanager/15min"
                        data-cal-namespace="15min"
                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                        className="w-full bg-brand-yellow text-brand-black px-8 py-4 rounded-full text-xl font-bold hover:bg-[#fcd34d] transition-colors btn-hover-skew shadow-[0_0_20px_rgba(255,226,65,0.3)] animate-pulse"
                    >
                        <span>Stop the bleeding - Fix it now</span>
                    </button>
                    <p className="text-xs text-gray-500">
                        Book a free audit. No commitment required.
                    </p>
                </div>

             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;