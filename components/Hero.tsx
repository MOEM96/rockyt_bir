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
      <div ref={mobileContainerRef} className="md:hidden relative h-[250vh] z-40 pointer-events-none">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start px-4 overflow-hidden bg-[#161616] pointer-events-auto pt-32 pb-8">
                
                {/* Gamified Headline */}
                <div className="flex flex-col items-center gap-3 mb-6 flex-shrink-0">
                    <div ref={word1Ref} className="will-change-[transform,opacity] bg-brand-blue border-[3px] border-white text-white px-5 py-1.5 rounded-2xl shadow-[4px_4px_0px_rgba(255,255,255,0.2)] text-xl font-black uppercase tracking-tighter z-10 relative">
                        Performance
                    </div>
                    <div ref={word2Ref} className="will-change-[transform,opacity] bg-brand-pink border-[3px] border-white text-white px-7 py-1.5 rounded-2xl shadow-[-4px_4px_0px_rgba(255,255,255,0.2)] text-xl font-black uppercase tracking-tighter z-20 relative">
                        Marketing
                    </div>
                    <div ref={word3Ref} className="will-change-[transform,opacity] bg-brand-yellow border-[3px] border-white text-brand-black px-5 py-1.5 rounded-2xl shadow-[0px_6px_0px_rgba(255,255,255,0.3)] text-xl font-black uppercase tracking-tighter z-30 relative">
                        Automated
                    </div>
                </div>

                <p ref={subtextRef} className="will-change-[transform,opacity] text-gray-400 text-sm max-w-[280px] mx-auto leading-relaxed mb-6 text-center flex-shrink-0">
                  Scale faster with less manual work.
                </p>

                {/* Mobile Calculator Input */}
                <div ref={calculatorRef} className="will-change-[transform,opacity] w-full mb-6 space-y-3 flex-shrink-0">
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
                            aria-label="Enter monthly ad spend"
                        />
                    </div>
                    <Button onClick={handleCalculate} fullWidth>
                        Calculate wasted ad spend
                    </Button>
                </div>

                {/* Carousel (Mobile) */}
                <div ref={carouselRef} className="will-change-opacity w-full mt-auto mb-4 flex-shrink-0">
                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3 text-center">Trusted by market leaders</p>
                    <div className="scale-90 origin-bottom">
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
                            aria-label="Enter monthly ad spend"
                        />
                    </div>
                    <Button onClick={handleCalculate} size="sm" className="whitespace-nowrap">
                        Calculate wasted ad spend
                    </Button>
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
