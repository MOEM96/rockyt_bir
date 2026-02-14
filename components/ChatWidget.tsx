import React, { useState, useEffect } from 'react';
import { CAL_CONFIG } from '../constants/index';

const MESSAGES = [
  "Get a free strategy 🚀",
  "Get a free audit 📊",
  "Hire ad experts for free 👨‍💻"
];

const ChatWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls the bubble visibility
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Select a random message
    const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setMessage(randomMsg);

    // Show message after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Message Bubble - Floats above/left of the icon */}
      <div 
        className={`pointer-events-auto origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4'}`}
      >
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs md:text-sm font-medium py-2.5 px-4 rounded-2xl rounded-br-sm shadow-xl relative max-w-[200px] md:max-w-none">
             {message}
             {/* Close button for the bubble */}
             <button 
                onClick={() => setIsVisible(false)}
                className="absolute -top-2 -left-2 bg-[#1A1A1A] rounded-full p-0.5 border border-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close message"
             >
                <iconify-icon icon="solar:close-circle-bold" width="14"></iconify-icon>
             </button>
         </div>
      </div>

      {/* Main FAB (Floating Action Button) */}
      <button
        data-cal-link={CAL_CONFIG.link}
        data-cal-namespace={CAL_CONFIG.namespace}
        data-cal-config={JSON.stringify(CAL_CONFIG.config)}
        className="pointer-events-auto group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-brand-yellow/50 active:scale-95 animate-float"
        aria-label="Book a demo"
      >
        {/* Glowing pulsing ring behind */}
        <div className="absolute inset-0 rounded-full bg-brand-yellow/20 animate-ping opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <div className="relative z-10 text-white group-hover:text-brand-yellow transition-colors duration-300 flex items-center justify-center">
            <iconify-icon icon="solar:calendar-add-bold" width="24" class="md:text-2xl"></iconify-icon>
        </div>

        {/* Online Status Dot */}
        <div className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#161616] z-20"></div>
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;