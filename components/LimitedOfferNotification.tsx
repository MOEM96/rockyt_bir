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
    // If user manually dismissed it, don't show it again even on page change
    if (isDismissed) return;

    // Reset visibility immediately when page changes (so it can animate in again)
    setIsVisible(false);

    // Set timer for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentPage, isDismissed]);

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-6 md:bottom-10 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-[60] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#161616]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,226,65,0.15)] rounded-full p-2 pl-5 pr-2 flex items-center justify-between md:justify-start gap-4 md:gap-6 w-full md:w-auto max-w-lg mx-auto ring-1 ring-white/5">
        
        {/* Icon & Text */}
        <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="solar:gift-bold" class="text-brand-yellow text-lg animate-pulse"></iconify-icon>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-1.5 leading-tight">
                <span className="text-xs md:text-sm font-medium text-gray-300 whitespace-nowrap">Limited Offer:</span>
                <span className="text-sm md:text-sm font-bold text-white whitespace-nowrap">
                    Get <span className="text-brand-yellow">$100 Free Ad Credits</span>
                </span>
            </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
            <button 
                data-cal-link={CAL_CONFIG.link}
                data-cal-namespace={CAL_CONFIG.namespace}
                data-cal-config={JSON.stringify(CAL_CONFIG.config)}
                className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-yellow transition-colors shadow-lg shadow-white/5 whitespace-nowrap"
            >
                Claim Now
            </button>
            <button 
                onClick={() => setIsDismissed(true)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
                aria-label="Dismiss offer"
            >
                <iconify-icon icon="solar:close-circle-linear" class="text-lg"></iconify-icon>
            </button>
        </div>

      </div>
    </div>
  );
};

export default LimitedOfferNotification;