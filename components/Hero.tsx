import React, { useState, useEffect, useRef } from 'react';
import PartnersCarousel from './PartnersCarousel';
import '../types';

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [adSpend, setAdSpend] = useState('');
  const [wastedAmount, setWastedAmount] = useState<number>(0);

  // Refs for scroll animation
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  // Modal body scroll lock
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

  // Scroll Animation Logic
  useEffect(() => {
    let animationFrameId: number;

    const updateAnimation = () => {
      if (!desktopContainerRef.current || !lottieRef.current) return;

      const player = lottieRef.current;
      // Access the Lottie instance directly via getLottie() method exposed by lottie-player web component
      // This allows for more robust frame-by-frame control compared to seek()
      const anim = typeof player.getLottie === 'function' ? player.getLottie() : null;
      
      // If animation instance isn't ready or loaded, we can't scrub yet
      if (!anim || !anim.totalFrames) return;

      const container = desktopContainerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress relative to the container
      // The container is 250vh tall. The sticky content is 100vh.
      // So we have (250vh - 100vh) = 150vh of scrollable track.
      const scrollableDistance = container.offsetHeight - viewportHeight;
      
      // scrolled distance: 
      // rect.top starts at >0 (when container enters view)
      // becomes 0 (when container hits top of viewport) -> start animation
      // becomes negative (as we scroll down) -> advance animation
      // We start scrubbing when the container hits the top of the viewport.
      const scrolled = -rect.top; 
      
      let progress = scrolled / scrollableDistance;
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      // Map progress to total frames
      // Use goToAndStop(frame, isFrame=true) for smooth scrubbing
      const targetFrame = progress * (anim.totalFrames - 0.01); // subtract tiny bit to prevent overflow loop
      anim.goToAndStop(targetFrame, true);
    };

    const handleScroll = () => {
        // Use requestAnimationFrame for performance
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    const player = lottieRef.current;
    
    // Handler to start animation loop once loaded (to get totalFrames)
    const onPlayerLoad = () => {
        updateAnimation();
    };

    if (player) {
        player.addEventListener('load', onPlayerLoad);
        player.addEventListener('ready', onPlayerLoad);
    }
    
    // Initial update attempt
    updateAnimation();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (player) {
          player.removeEventListener('load', onPlayerLoad);
          player.removeEventListener('ready', onPlayerLoad);
      }
    };
  }, []);

  const handleCalculate = () => {
    const spend = parseFloat(adSpend.replace(/,/g, ''));
    if (!isNaN(spend) && spend > 0) {
        setWastedAmount(Math.round(spend * 0.4));
        setShowCalculatorModal(true);
    } else {
        setWastedAmount(0);
        setShowCalculatorModal(true);
    }
  };

  return (
    <div className="w-full relative -mt-20 md:-mt-24 mb-0">
      
      {/* Mobile View */}
      <div className="md:hidden min-h-[90vh] flex flex-col items-center justify-center px-6 text-center z-30 pt-24 pb-12 w-full relative overflow-hidden bg-[#161616]">
            <div className="relative z-10 w-full max-w-md flex flex-col items-center">
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
      </div>

      {/* Desktop Scroll Container - 250vh height to create scroll track */}
      <div ref={desktopContainerRef} className="hidden md:block w-full h-[250vh] relative">
         <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            
            {/* Lottie Animation */}
            {/* Changed aspect ratio to 'meet' (contain) for full visibility, background to #161616 */}
            <div className="w-full h-full absolute inset-0 bg-[#161616]">
                <lottie-player
                  ref={lottieRef}
                  src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
                  background="transparent"
                  style={{ width: '100%', height: '100%' }}
                  preserveAspectRatio="xMidYMid meet"
                ></lottie-player>
            </div>

            {/* Desktop Overlay: Calculator and Social Proof */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-10 z-20 pointer-events-none">
                
                {/* Desktop Calculator Input - Compact & Minimal */}
                <div className="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-2xl p-1.5 pr-2 rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 shadow-2xl shadow-black/80 transform translate-y-4">
                    <div className="relative w-56 h-full flex items-center">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-medium text-lg">$</span>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Monthly ad spend" 
                            value={adSpend}
                            onChange={(e) => setAdSpend(e.target.value)}
                            className="w-full bg-transparent border-none text-white rounded-full py-2.5 pl-9 pr-4 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-base font-medium h-full leading-none"
                        />
                    </div>
                    <button 
                        onClick={handleCalculate}
                        className="bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#fcd34d] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-yellow/10 whitespace-nowrap"
                    >
                        Calculate wasted ad spend
                    </button>
                </div>
                
                <div className="mt-8 flex flex-col items-center pointer-events-auto w-full max-w-4xl opacity-50 hover:opacity-100 transition-opacity">
                     <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.2em] mb-3">Trusted by market leaders</p>
                     <div className="w-full max-w-3xl scale-90 origin-bottom">
                        <PartnersCarousel />
                     </div>
                </div>
            </div>
         </div>
      </div>

      {/* Calculator Result Modal - Minimalist Redesign */}
      {showCalculatorModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setShowCalculatorModal(false)}
          ></div>

          <div className="relative bg-[#161616] w-full max-w-md rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex flex-col animate-fade-in-up">
             
             {/* Close Button */}
             <button onClick={() => setShowCalculatorModal(false)} className="absolute top-4 right-4 z-50 w-8 h-8 bg-white/5 rounded-full text-white/50 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <iconify-icon icon="solar:close-circle-bold" width="20"></iconify-icon>
             </button>

             <div className="p-8 pt-12 flex flex-col items-center text-center">
                
                {/* Result Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider mb-4">
                        <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
                        Analysis Report
                    </div>
                    {wastedAmount > 0 ? (
                        <>
                            <div className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-2">Potential Monthly Waste</div>
                            <div className="text-5xl font-bold text-white tracking-tighter">
                                <span className="text-red-500">${wastedAmount.toLocaleString()}</span>
                            </div>
                        </>
                    ) : (
                        <h3 className="text-3xl font-bold text-white mb-2">Stop burning budget</h3>
                    )}
                </div>

                {/* 7-Day Transformation Timeline */}
                <div className="w-full bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 mb-8 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[40px] rounded-full pointer-events-none"></div>
                    
                    <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                        Transformation in 7 Days
                    </h4>
                    
                    <div className="relative space-y-6">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/20 to-brand-yellow/50"></div>

                        {/* Day 1 */}
                        <div className="relative flex items-center gap-4 z-10">
                            <div className="w-6 h-6 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                01
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase">Day 1</div>
                                <div className="text-sm text-white font-medium">AI Audit & Auto-Setup</div>
                            </div>
                        </div>

                        {/* Day 3 */}
                        <div className="relative flex items-center gap-4 z-10">
                            <div className="w-6 h-6 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                03
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase">Day 3</div>
                                <div className="text-sm text-white font-medium">Kill losing ads automatically</div>
                            </div>
                        </div>

                        {/* Day 7 */}
                        <div className="relative flex items-center gap-4 z-10">
                            <div className="w-6 h-6 rounded-full bg-brand-yellow border border-brand-yellow flex items-center justify-center text-[10px] font-bold text-brand-black shadow-[0_0_10px_rgba(255,226,65,0.4)]">
                                07
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-brand-yellow uppercase">Day 7</div>
                                <div className="text-sm text-white font-bold">Budget Stabilized & Profitable</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <button 
                    onClick={() => { setShowCalculatorModal(false); if(onBookDemo) onBookDemo(); }}
                    data-cal-link="rock-yt-admanager/15min"
                    data-cal-namespace="15min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                    className="w-full bg-brand-yellow text-brand-black h-14 rounded-full text-lg font-bold hover:bg-[#fcd34d] transition-all btn-hover-skew shadow-[0_0_20px_rgba(255,226,65,0.15)] flex items-center justify-center gap-2 group"
                >
                    <span>Fix it now</span>
                    <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;