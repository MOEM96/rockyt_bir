import React, { useState, useRef } from 'react';
import PartnersCarousel from './PartnersCarousel';
import Modal from './Modal';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { useScrollAnimation } from '../hooks/index';
import { calculateWastedSpend, parseNumberInput, formatNumber } from '../utils/helpers';
import { LOTTIE_URLS, CAL_CONFIG } from '../constants/index';

const Hero: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [adSpend, setAdSpend] = useState('');
  const [wastedAmount, setWastedAmount] = useState<number>(0);

  // Refs for scroll animation containers
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  // Mobile animation refs (Direct DOM manipulation for performance)
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll Animation Logic using custom hook
  useScrollAnimation(() => {
      // Desktop Animation Logic
      try {
          if (desktopContainerRef.current && lottieRef.current) {
            const player = lottieRef.current;
            const anim = (player && typeof player.getLottie === 'function') ? player.getLottie() : null;
            
            if (anim && anim.totalFrames) {
                const container = desktopContainerRef.current;
                const rect = container.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // Calculate progress based on container position
                const scrollableDistance = container.offsetHeight - viewportHeight;
                const scrolled = -rect.top; 
                
                let progress = 0;
                if (scrollableDistance > 0) {
                  progress = scrolled / scrollableDistance;
                  progress = Math.max(0, Math.min(1, progress));
                }
                
                const targetFrame = progress * (anim.totalFrames - 0.01);
                // Ensure goToAndStop exists before calling
                if (typeof anim.goToAndStop === 'function') {
                    anim.goToAndStop(targetFrame, true);
                }
            }
          }
      } catch (e) {
        console.warn('Lottie update error:', e);
      }

      // Mobile Animation Logic
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      let p = 0;
      if (viewportHeight > 0) {
        const stickyScrollDistance = viewportHeight * 1.5; // 150vh
        p = scrollY / stickyScrollDistance;
        p = Math.min(1, Math.max(0, p));
        if (isNaN(p)) p = 0;
      }
      
      const invP = 1 - p; // Inverse progress for scattering effect

      if (word1Ref.current) {
          word1Ref.current.style.transform = `translate(${ -80 * invP }px, ${ -40 * invP }px) rotate(${ -15 * invP }deg)`;
          word1Ref.current.style.opacity = `${0.2 + (0.8 * p)}`;
      }

      if (word2Ref.current) {
          word2Ref.current.style.transform = `translate(${ 80 * invP }px, ${ 10 * invP }px) rotate(${ 10 * invP }deg)`;
          word2Ref.current.style.opacity = `${0.2 + (0.8 * p)}`;
      }

      if (word3Ref.current) {
          word3Ref.current.style.transform = `translate(${ -10 * invP }px, ${ 60 * invP }px) rotate(${ -5 * invP }deg)`;
          word3Ref.current.style.opacity = `${0.2 + (0.8 * p)}`;
      }

      if (subtextRef.current) {
          subtextRef.current.style.opacity = `${p}`;
          subtextRef.current.style.transform = `translateY(${20 * invP}px)`;
      }

      if (calculatorRef.current) {
          calculatorRef.current.style.opacity = `${p}`;
          calculatorRef.current.style.transform = `translateY(${30 * invP}px)`;
      }

      if (carouselRef.current) {
          carouselRef.current.style.opacity = `${p}`;
      }
  }, []);

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
    <div className="w-full relative -mt-20 md:-mt-24 mb-0">
      
      {/* Mobile View with Scroll Animation */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[250vh] z-40 pointer-events-none mb-20">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start px-4 overflow-hidden bg-[#161616] pointer-events-auto pt-28 pb-4">
                
                {/* Gamified Headline */}
                <div className="flex flex-col items-center gap-2 mb-4 flex-shrink-0">
                    <div ref={word1Ref} className="will-change-[transform,opacity] bg-brand-blue border-[2px] border-white text-white px-4 py-1 rounded-xl shadow-[3px_3px_0px_rgba(255,255,255,0.2)] text-lg font-black uppercase tracking-tighter z-10 relative">
                        Performance
                    </div>
                    <div ref={word2Ref} className="will-change-[transform,opacity] bg-brand-pink border-[2px] border-white text-white px-6 py-1 rounded-xl shadow-[-3px_3px_0px_rgba(255,255,255,0.2)] text-lg font-black uppercase tracking-tighter z-20 relative">
                        Marketing
                    </div>
                    <div ref={word3Ref} className="will-change-[transform,opacity] bg-brand-yellow border-[2px] border-white text-brand-black px-4 py-1 rounded-xl shadow-[0px_4px_0px_rgba(255,255,255,0.3)] text-lg font-black uppercase tracking-tighter z-30 relative">
                        Automated
                    </div>
                </div>

                <p ref={subtextRef} className="will-change-[transform,opacity] text-gray-400 text-xs max-w-[260px] mx-auto leading-relaxed mb-6 text-center flex-shrink-0 font-medium">
                  Scale faster with less manual work.
                </p>

                {/* Mobile Calculator Input - Compact & Minimal */}
                <div ref={calculatorRef} className="will-change-[transform,opacity] w-full max-w-[300px] mb-6 flex-shrink-0">
                    <div className="relative flex items-center bg-[#222] rounded-full border border-white/10 p-1 shadow-lg">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <span className="text-gray-400 font-semibold text-sm">$</span>
                            </div>
                            <input 
                                type="number" 
                                placeholder="Monthly spend" 
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                className="w-full bg-transparent border-none text-white rounded-l-full py-2.5 pl-7 pr-2 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-sm font-medium"
                                aria-label="Enter monthly ad spend"
                            />
                        </div>
                        <button 
                            onClick={handleCalculate} 
                            className="bg-brand-yellow text-brand-black rounded-full py-2 px-4 text-xs font-bold hover:bg-[#fcd34d] transition-colors flex items-center gap-1 shrink-0"
                        >
                            <span>Calculate</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
                        </button>
                    </div>
                </div>

                {/* Carousel (Mobile) - Compact */}
                <div ref={carouselRef} className="will-change-opacity w-full mt-auto mb-2 flex-shrink-0 opacity-70">
                    <div className="scale-75 origin-bottom -mb-2">
                         <PartnersCarousel />
                    </div>
                </div>
            </div>
      </div>

      {/* Desktop Scroll Container */}
      <div ref={desktopContainerRef} className="hidden md:block w-full h-[250vh] relative">
         <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            
            {/* Lottie Animation */}
            <div className="w-full h-full absolute inset-0 bg-[#161616]">
                <lottie-player
                  ref={lottieRef}
                  src={LOTTIE_URLS.hero}
                  background="transparent"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                  aria-label="Animation showing ad performance blowing up"
                ></lottie-player>
            </div>

            {/* Desktop Overlay: Calculator and Social Proof - Minimal */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 z-20 pointer-events-none">
                
                {/* Desktop Calculator Input - Minimal Glass Pill */}
                <div className="pointer-events-auto bg-black/40 backdrop-blur-md p-1 pl-1.5 pr-1 rounded-full border border-white/10 hover:border-white/20 hover:bg-black/60 transition-all flex items-center gap-0 shadow-lg hover:shadow-2xl transform translate-y-0 group">
                    <div className="relative w-40 h-full flex items-center">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-medium text-sm group-hover:text-gray-400 transition-colors">$</span>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Ad spend..." 
                            value={adSpend}
                            onChange={(e) => setAdSpend(e.target.value)}
                            className="w-full bg-transparent border-none text-white rounded-full py-2 pl-7 pr-2 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-sm font-medium h-full leading-none"
                            aria-label="Enter monthly ad spend"
                        />
                    </div>
                    <button 
                        onClick={handleCalculate} 
                        className="h-8 px-4 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-black text-white text-[11px] font-bold uppercase tracking-wide transition-all border border-white/5 hover:border-brand-yellow flex items-center justify-center whitespace-nowrap backdrop-blur-sm"
                    >
                        Calculate
                    </button>
                </div>
                
                {/* Minimal Carousel */}
                <div className="mt-6 flex flex-col items-center pointer-events-auto w-full max-w-xl opacity-30 hover:opacity-100 transition-opacity duration-300">
                     <div className="w-full scale-75 origin-bottom grayscale hover:grayscale-0 transition-all duration-300">
                        <PartnersCarousel />
                     </div>
                </div>
            </div>
         </div>
      </div>

      {/* Calculator Result Modal - Minimalist Redesign */}
      <Modal isOpen={showCalculatorModal} onClose={handleModalClose} size="md">
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
                        <span className="text-red-500">${formatNumber(wastedAmount)}</span>
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
        <Button 
            onClick={handleFixItNow}
            asBookingButton
            fullWidth
            className="h-14 text-lg btn-hover-skew shadow-[0_0_20px_rgba(255,226,65,0.15)] group"
        >
            <span>Fix it now</span>
            <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;