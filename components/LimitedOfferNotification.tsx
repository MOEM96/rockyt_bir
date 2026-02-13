import React, { useState, useEffect } from 'react';
import { CAL_CONFIG } from '../constants/index';
import { PageType } from '../types/index';

interface LimitedOfferNotificationProps {
  currentPage: PageType;
  isMobileMenuOpen: boolean;
}

const LimitedOfferNotification: React.FC<LimitedOfferNotificationProps> = ({ currentPage, isMobileMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Reset visibility to trigger animation on page navigation
    setIsVisible(false);

    // Slight delay to allow new page to load before animating in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPage, isDismissed]);

  if (isDismissed) return null;

  return (
    <>
      {/* Desktop Version: Slides from under the RIGHT CTA box */}
      {/* Container replicates the Navbar max-width layout to align with the right CTA group */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-6 relative h-full">
            <div 
                className={`absolute right-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto ${
                isVisible ? 'top-[88px] opacity-100' : 'top-[20px] opacity-0'
                }`}
            >
                {/* 
                   Positioned relative to the right edge. 
                   Added mr-16 to roughly center it under the "Login - Book - Get Started" group 
                   which spans about ~350px on the right. 
                */}
                <div className="relative group mr-16">
                    <button 
                        data-cal-link={CAL_CONFIG.link}
                        data-cal-namespace={CAL_CONFIG.namespace}
                        data-cal-config={JSON.stringify(CAL_CONFIG.config)}
                        className="flex items-center gap-3 bg-[#161616] border border-white/10 rounded-full py-2 pl-2 pr-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:border-brand-yellow/40 transition-all duration-300 group-hover:translate-y-0.5"
                    >
                        {/* Colorful Icon */}
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-yellow to-[#FFAE00] flex items-center justify-center text-black shadow-lg shadow-brand-yellow/20">
                            <iconify-icon icon="solar:gift-bold" width="14"></iconify-icon>
                        </div>

                        {/* Text */}
                        <div className="text-xs font-bold text-white tracking-wide">
                            Get <span className="text-brand-yellow">$100 free ad credits</span>
                        </div>

                        {/* Minimal Arrow CTA */}
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-gray-400 group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                            <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
                        </div>
                    </button>

                    {/* Dismiss Button - Placed on the LEFT side now to avoid being off-screen on the right */}
                    <button 
                        onClick={() => setIsDismissed(true)}
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors p-1"
                        aria-label="Dismiss offer"
                    >
                        <iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Mobile Version: Compact pill repositioned lower (top-[95px]) to clear logo/menu */}
      {/* Hide when mobile menu is open to prevent overlap/clutter */}
      <div 
        className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible && !isMobileMenuOpen ? 'top-[95px] opacity-100 scale-100' : 'top-[80px] opacity-0 scale-95 pointer-events-none'
        }`}
      >
         <button
            data-cal-link={CAL_CONFIG.link}
            data-cal-namespace={CAL_CONFIG.namespace}
            data-cal-config={JSON.stringify(CAL_CONFIG.config)}
            className="relative flex items-center gap-2 bg-[#161616]/95 backdrop-blur-xl border border-white/10 rounded-full py-1.5 px-3 shadow-xl ring-1 ring-white/5 active:scale-95 transition-transform"
         >
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-yellow to-[#FFAE00] flex items-center justify-center text-black shadow-sm">
                 <iconify-icon icon="solar:gift-bold" width="10"></iconify-icon>
            </div>
            <span className="text-[10px] font-bold text-white whitespace-nowrap tracking-wide">
                Get <span className="text-brand-yellow">$100 free ad credits</span>
            </span>
            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-white/40 text-[10px] ml-1"></iconify-icon>
         </button>
      </div>
    </>
  );
};

export default LimitedOfferNotification;