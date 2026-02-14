import React, { useState, useEffect } from 'react';

const NAMES = ["Alex", "Sarah", "Mike", "Jessica", "David", "Emily", "Chris", "Anna", "Ryan", "Lisa", "Tom", "Emma", "Daniel", "Sophie"];
const LOCATIONS = ["New York", "London", "Austin", "Berlin", "Toronto", "SF", "Sydney", "Chicago", "Paris", "Tokyo", "Denver", "Seattle"];

const SocialProofWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [info, setInfo] = useState({ name: 'Alex', location: 'New York' });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hideTimeoutId: NodeJS.Timeout;

    const scheduleNext = () => {
      // Random delay between 15s (15000ms) and 40s (40000ms)
      const delay = Math.floor(Math.random() * (40000 - 15000 + 1)) + 15000;
      
      timeoutId = setTimeout(() => {
        // Trigger Popup
        setInfo({
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
        });
        setIsVisible(true);

        // Hide after 2 seconds
        hideTimeoutId = setTimeout(() => {
          setIsVisible(false);
          scheduleNext(); 
        }, 2000);
      }, delay);
    };

    // Initial 10s delay after landing
    const initialTimeout = setTimeout(() => {
        setInfo({
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
        });
        setIsVisible(true);
        hideTimeoutId = setTimeout(() => {
            setIsVisible(false);
            scheduleNext();
        }, 2000);
    }, 10000);

    return () => {
        clearTimeout(initialTimeout);
        clearTimeout(timeoutId);
        clearTimeout(hideTimeoutId);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-4 md:bottom-8 md:left-8 z-[60] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform will-change-transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-95 pointer-events-none'}`}
    >
      <div className="flex items-center gap-3 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 px-3 py-2.5 md:px-4 md:py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-brand-yellow/30 transition-colors cursor-default select-none">
          {/* Avatar Stack */}
          <div className="flex -space-x-2 shrink-0">
             <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-brand-yellow to-[#FFAE00] flex items-center justify-center text-[10px] md:text-xs font-black text-black border-2 border-[#1A1A1A] shadow-lg relative z-10">
                {info.name.charAt(0)}
             </div>
             <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center text-gray-400 border-2 border-[#1A1A1A] relative z-0">
                <iconify-icon icon="solar:user-check-bold" width="14"></iconify-icon>
             </div>
          </div>
          
          {/* Text Info */}
          <div className="flex flex-col pr-2">
              <span className="text-[10px] md:text-xs font-bold text-white leading-tight mb-0.5">
                  <span className="text-brand-yellow">{info.name}</span> from {info.location}
              </span>
              <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-[9px] md:text-[10px] text-gray-400 font-medium leading-tight">
                      Booked a trial
                  </span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SocialProofWidget;