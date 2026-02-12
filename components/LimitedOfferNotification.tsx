import React, { useState, useEffect } from 'react';
import { CAL_CONFIG } from '../constants/index';
import { PageType } from '../types/index';

interface LimitedOfferNotificationProps {
  currentPage: PageType;
}

const LimitedOfferNotification: React.FC<LimitedOfferNotificationProps> = ({ currentPage }) => {
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
      {/* Desktop Version: Slides from under the navbar content (attached to header) */}
      {/* Navbar is z-50. We use z-40 to slide from underneath. */}
      {/* Top position 88px places it just peeking out from the bottom of the navbar islands */}
      <div 
        className={`hidden lg:flex fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible ? 'top-[88px] opacity-100' : 'top-[40px] opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative group">
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

            {/* Dismiss Button (Floating outside to keep main pill minimal) */}
            <button 
                onClick={() => setIsDismissed(true)}
                className="absolute -right-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors p-1"
                aria-label="Dismiss offer"
            >
                <iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
            </button>
        </div>
      </div>

      {/* Mobile Version: Compact pill in the header center space */}
      <div 
        className={`lg:hidden fixed top-[38px] left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0 pointer-events-none'
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