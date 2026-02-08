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
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  // Mobile scroll tracking
  const [mobileProgress, setMobileProgress] = useState(0);

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
      // Desktop Animation Logic
      if (desktopContainerRef.current && lottieRef.current) {
        const player = lottieRef.current;
        const anim = typeof player.getLottie === 'function' ? player.getLottie() : null;
        
        if (anim && anim.totalFrames) {
            const container = desktopContainerRef.current;
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate progress based on container position
            const scrollableDistance = container.offsetHeight - viewportHeight;
            const scrolled = -rect.top; 
            
            let progress = scrolled / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));
            
            const targetFrame = progress * (anim.totalFrames - 0.01);
            anim.goToAndStop(targetFrame, true);
        }
      }

      // Mobile Animation Logic
      // We use window.scrollY because Hero is at the top.
      // The mobile container height is set to 250vh.
      // Sticky content is 100vh.
      // Sticky duration = 250vh - 100vh = 150vh.
      // We map progress 0 to 1 over this 150vh distance.
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const stickyScrollDistance = viewportHeight * 1.5; // 150vh
      
      let p = scrollY / stickyScrollDistance;
      p = Math.min(1, Math.max(0, p));
      setMobileProgress(p);
    };

    const handleScroll = () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Lottie listener
    const player = lottieRef.current;
    const onPlayerLoad = () => {
        updateAnimation();
    };

    if (player) {
        player.addEventListener('load', onPlayerLoad);
        player.addEventListener('ready', onPlayerLoad);
    }
    
    // Initial call
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

  // Linear progression for scroll-tied animation
  const p = mobileProgress;
  
  // Custom transforms for the "gamified" scattered look
  // Start scattered, end aligned (translate 0, rotate 0)
  
  // Word 1: Performance (Top Left scatter)
  // Starts rotated -15deg, translated left/up. Converges to 0.
  const w1Style = {
      transform: `translate(${ -80 * (1 - p) }px, ${ -40 * (1 - p) }px) rotate(${ -15 * (1 - p) }deg)`,
      opacity: 0.2 + (0.8 * p)
  };
  
  // Word 2: Marketing (Right scatter)
  const w2Style = {
      transform: `translate(${ 80 * (1 - p) }px, ${ 10 * (1 - p) }px) rotate(${ 10 * (1 - p) }deg)`,
      opacity: 0.2 + (0.8 * p)
  };
  
  // Word 3: Automated (Bottom scatter)
  const w3Style = {
      transform: `translate(${ -10 * (1 - p) }px, ${ 60 * (1 - p) }px) rotate(${ -5 * (1 - p) }deg)`,
      opacity: 0.2 + (0.8 * p)
  };

  return (
    <div className="w-full relative -mt-20 md:-mt-24 mb-0">
      
      {/* Mobile View with Scroll Animation */}
      {/* 
          Container is 250vh tall. 
          The sticky child is 100vh.
          This leaves 150vh of "sticky scroll" space.
          The user MUST scroll through this 150vh to proceed.
          Our animation is synced to this 150vh.
      */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[250vh] z-40 pointer-events-none">
            {/* 
                Updated: 
                - z-40 to stay above BentoGrid (z-10)
                - pt-32 (128px) instead of pt-44 to ensure content fits on smaller screens
                - h-[100dvh] to handle mobile viewport properly
                - justify-between to space out content evenly
            */}
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start px-4 overflow-hidden bg-[#161616] pointer-events-auto pt-32 pb-8">
                
                {/* Gamified Headline */}
                <div className="flex flex-col items-center gap-3 mb-6 transition-all duration-300 ease-out flex-shrink-0">
                    
                    {/* Word 1: Performance */}
                    <div style={w1Style} className="bg-brand-blue border-[3px] border-white text-white px-5 py-1.5 rounded-2xl shadow-[4px_4px_0px_rgba(255,255,255,0.2)] text-xl font-black uppercase tracking-tighter transition-transform will-change-transform z-10 relative">
                        Performance
                    </div>
                    
                    {/* Word 2: Marketing */}
                    <div style={w2Style} className="bg-brand-pink border-[3px] border-white text-white px-7 py-1.5 rounded-2xl shadow-[-4px_4px_0px_rgba(255,255,255,0.2)] text-xl font-black uppercase tracking-tighter transition-transform will-change-transform z-20 relative">
                        Marketing
                    </div>

                    {/* Word 3: Automated */}
                    <div style={w3Style} className="bg-brand-yellow border-[3px] border-white text-brand-black px-5 py-1.5 rounded-2xl shadow-[0px_6px_0px_rgba(255,255,255,0.3)] text-xl font-black uppercase tracking-tighter transition-transform will-change-transform z-30 relative">
                        Automated
                    </div>
                </div>

                <p className="text-gray-400 text-sm max-w-[280px] mx-auto leading-relaxed mb-6 text-center transition-all duration-500 flex-shrink-0" style={{ opacity: p, transform: `translateY(${20 * (1-p)}px)` }}>
                  Scale faster with less manual work.
                </p>

                {/* Mobile Calculator Input */}
                <div className="w-full mb-6 space-y-3 transition-all duration-500 delay-75 flex-shrink-0" style={{ opacity: p, transform: `translateY(${30 * (1-p)}px)` }}>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <span className="text-gray-400 font-semibold text-base">$</span>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Monthly ad spend" 
                            value={adSpend}
                            onChange={(e) => setAdSpend(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 text-white rounded-full py-3.5 pl-10 pr-4 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-gray-500 text-base"
                        />
                    </div>
                    <button 
                        onClick={handleCalculate}
                        className="w-full bg-brand-yellow text-brand-black font-bold py-3.5 rounded-full text-base hover:bg-[#fcd34d] transition-colors shadow-lg shadow-brand-yellow/10"
                    >
                        Calculate wasted ad spend
                    </button>
                </div>

                {/* Carousel (Mobile) */}
                <div className="w-full mt-auto mb-4 transition-opacity duration-500 delay-150 flex-shrink-0" style={{ opacity: p }}>
                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3 text-center">Trusted by market leaders</p>
                    <div className="scale-90 origin-bottom">
                         <PartnersCarousel />
                    </div>
                </div>
            </div>
      </div>

      {/* Desktop Scroll Container (Unchanged) */}
      <div ref={desktopContainerRef} className="hidden md:block w-full h-[250vh] relative">
         <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            
            {/* Lottie Animation */}
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
                
                {/* Desktop Calculator Input */}
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

      {/* Calculator Result Modal - Minimalist Redesign (Unchanged) */}
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