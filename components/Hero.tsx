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
  const mobileLottieRef = useRef<any>(null);

  // Mobile animation refs (Direct DOM manipulation for performance)
  const calculatorRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll Animation Logic using custom hook
  useScrollAnimation(() => {
      const scrubLottie = (container: HTMLElement | null, lottie: any) => {
        if (!container || !lottie) return 0;
        try {
            const anim = (lottie && typeof lottie.getLottie === 'function') ? lottie.getLottie() : null;
            if (!anim || !anim.totalFrames) return 0;

            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate progress based on container position relative to viewport
            // We want to animate while the container is scrolling through
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
            return progress;
        } catch (e) {
            // console.warn('Lottie update error:', e);
            return 0;
        }
      };

      // Desktop Animation
      scrubLottie(desktopContainerRef.current, lottieRef.current);

      // Mobile Animation
      const mobileProgress = scrubLottie(mobileContainerRef.current, mobileLottieRef.current);
      
      // Mobile element animations using the same progress
      const invP = 1 - mobileProgress;

      if (calculatorRef.current) {
          // Subtle fade/move on scroll for calculator
          calculatorRef.current.style.opacity = `${0.8 + (0.2 * invP)}`; 
          calculatorRef.current.style.transform = `scale(${0.95 + (0.05 * invP)})`;
      }

      if (carouselRef.current) {
          carouselRef.current.style.opacity = `${mobileProgress}`;
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
      
      {/* Mobile View with Scroll Animation - Increased height for scroll track */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[250vh] z-40 pointer-events-none mb-10">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center px-4 overflow-hidden bg-[#161616] pointer-events-auto">
                
                {/* Mobile Lottie Background - Scroll Bound */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <lottie-player
                      ref={mobileLottieRef}
                      src={LOTTIE_URLS.hero}
                      background="transparent"
                      speed="1"
                      className="w-full h-full"
                      preserveAspectRatio="xMidYMid slice"
                    ></lottie-player>
                </div>

                {/* Mobile Calculator Input - Compact & Minimal & Centered */}
                <div ref={calculatorRef} className="will-change-[transform,opacity] w-full max-w-[300px] flex-shrink-0 pointer-events-auto z-30 relative">
                    <div className="relative flex items-center bg-[#222]/80 backdrop-blur-md rounded-full border border-white/20 p-1 shadow-2xl">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <span className="text-gray-400 font-semibold text-sm">$</span>
                            </div>
                            <input 
                                type="number" 
                                placeholder="Monthly spend (e.g. $50k)" 
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                className="w-full bg-transparent border-none text-white rounded-l-full py-2.5 pl-7 pr-2 focus:outline-none focus:ring-0 placeholder:text-gray-500 text-xs font-medium"
                                aria-label="Enter monthly ad spend"
                            />
                        </div>
                        <button 
                            onClick={handleCalculate} 
                            className="bg-brand-yellow text-brand-black hover:bg-[#fcd34d] rounded-full py-2 px-3 text-[10px] font-bold uppercase tracking-wide transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap"
                        >
                            <span>Show Waste</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="10"></iconify-icon>
                        </button>
                    </div>
                </div>

                {/* Carousel (Mobile) - Bottom Anchor */}
                <div ref={carouselRef} className="will-change-opacity w-full absolute bottom-8 left-0 px-4 flex-shrink-0 opacity-70 z-20">
                    <div className="scale-75 origin-bottom">
                         <PartnersCarousel />
                    </div>
                </div>
            </div>
      </div>

      {/* Desktop Scroll Container */}
      <div ref={desktopContainerRef} className="hidden md:block w-full h-[250vh] relative">
         <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            
            {/* Lottie Animation - Z-Index 0 (Background) */}
            <div className="w-full h-full absolute inset-0 bg-[#161616] z-0">
                <lottie-player
                  ref={lottieRef}
                  src={LOTTIE_URLS.hero}
                  background="transparent"
                  className="w-full h-full opacity-60"
                  preserveAspectRatio="xMidYMid meet"
                  aria-label="Animation showing ad performance blowing up"
                ></lottie-player>
            </div>

            {/* Desktop Overlay: Calculator and Social Proof at Bottom - Z-Index 20 (Foreground) */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 z-20 pointer-events-none max-w-4xl mx-auto text-center px-6">
                
                {/* Calculator Input - New Design */}
                <div className="pointer-events-auto w-full max-w-[640px] animate-fade-in-up">
                    <div className="flex items-center gap-2 bg-[#0F0F0F] border border-white/20 p-2 pl-6 rounded-full shadow-2xl w-full transform transition-all hover:scale-[1.01] hover:border-white/30">
                        <div className="flex-grow flex items-center h-full relative">
                            <span className="text-gray-400 font-medium text-xl mr-3 relative top-[1px]">$</span>
                            <input 
                                type="number" 
                                placeholder="Enter monthly ad spend" 
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                className="w-full bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder:text-gray-500 text-lg font-medium h-full leading-normal"
                                aria-label="Enter monthly ad spend"
                            />
                        </div>
                        <button 
                            onClick={handleCalculate} 
                            className="bg-[#262626] hover:bg-[#333] text-white text-[11px] font-bold py-4 px-8 rounded-full uppercase tracking-wider transition-all border border-white/5 whitespace-nowrap flex items-center gap-2 hover:brightness-110"
                        >
                            Show Me What I'm Wasting <span className="text-sm">→</span>
                        </button>
                    </div>
                </div>
                
                {/* Social Proof - Anchored below input */}
                <div className="mt-12 flex flex-col items-center w-full max-w-xl pointer-events-auto opacity-90">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Trusted by the brands that dominate their markets</p>
                     <div className="w-full">
                        <PartnersCarousel />
                     </div>
                </div>
            </div>
         </div>
      </div>

      {/* Calculator Result Modal */}
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
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-2">You're Losing Every Month</div>
                    <div className="text-5xl font-bold text-white tracking-tighter mb-2">
                        <span className="text-red-500">${formatNumber(wastedAmount)}</span>
                    </div>
                    <div className="text-xs text-gray-500">That's ${formatNumber(wastedAmount * 12)} per year going straight into the trash.</div>
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
                        <div className="text-sm text-white font-medium">Auto-Kill Underperformers</div>
                    </div>
                </div>

                {/* Day 7 */}
                <div className="relative flex items-center gap-4 z-10">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow border border-brand-yellow flex items-center justify-center text-[10px] font-bold text-brand-black shadow-[0_0_10px_rgba(255,226,65,0.4)]">
                        07
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-brand-yellow uppercase">Day 7</div>
                        <div className="text-sm text-white font-bold">Profitable & Scaling</div>
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
            <span>Fix This Now - Book Strategy Call</span>
            <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </Button>
        <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500 font-medium uppercase tracking-wider">
            <iconify-icon icon="solar:star-bold" class="text-brand-yellow"></iconify-icon>
            Avg. client saves $127K in first 90 days
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;