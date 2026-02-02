import React from 'react';
import '../types';

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <div className="w-full min-h-[90vh] md:h-[700px] relative flex justify-center items-center -mt-20 md:-mt-24 mb-0 overflow-hidden">
      {/* Wrapper to constrain and mask the lottie */}
      <div className="w-full h-full relative flex items-center justify-center">
        
        {/* Mobile View: Headline, CTAs, Social Proof */}
        <div className="md:hidden flex flex-col items-center justify-center px-6 text-center z-30 pt-24 pb-12 w-full max-w-md">
            <h1 className="text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
              Where <span className="text-brand-yellow">creativity</span> <br/> meets <span className="text-brand-pink">performance</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-[300px] mx-auto leading-relaxed mb-8">
              Automate your advertising strategy and scale faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col w-full gap-4 mb-12">
                <button 
                    onClick={onBookDemo}
                    data-cal-link="rock-yt-admanager/15min"
                    data-cal-namespace="15min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                    className="w-full bg-brand-yellow text-brand-black font-bold py-4 rounded-full text-lg hover:bg-[#fcd34d] transition-colors btn-hover-skew"
                >
                    <span>Book free consultation</span>
                </button>
                <button 
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="w-full bg-white/5 border border-white/20 text-white font-bold py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
                >
                   How it works
                </button>
            </div>

            {/* Social Proof */}
            <div className="w-full">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Trusted by market leaders</p>
                <div className="flex justify-center items-center gap-8 opacity-60 grayscale">
                    {/* Loop */}
                    <img 
                        src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" 
                        className="h-6 w-auto brightness-0 invert" 
                        alt="Loop" 
                    />
                    {/* Scentbird */}
                    <img 
                        src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848bece7_scentbird.png" 
                        className="h-5 w-auto brightness-0 invert" 
                        alt="Scentbird" 
                    />
                    {/* AdParlor */}
                    <img 
                        src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" 
                        className="h-6 w-auto brightness-0 invert" 
                        alt="AdParlor" 
                    />
                </div>
            </div>
        </div>

        {/* Desktop Lottie: Use 'slice' to cover the large hero area */}
        <div className="hidden md:block w-full h-full absolute inset-0">
            <lottie-player
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
              background="transparent"
              speed="1"
              style={{ width: '100%', height: '100%' }}
              hover="true"
              preserveAspectRatio="xMidYMid slice"
              className="opacity-90"
            ></lottie-player>
        </div>

        {/* Desktop Overlay: CTAs and Social Proof */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-end items-center pb-24 z-20 pointer-events-none">
            <div className="flex items-center gap-6 pointer-events-auto">
                <button 
                    onClick={onBookDemo}
                    data-cal-link="rock-yt-admanager/15min"
                    data-cal-namespace="15min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                    className="bg-brand-yellow text-brand-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#fcd34d] transition-colors btn-hover-skew shadow-xl shadow-brand-yellow/10"
                >
                    <span>Book free consultation</span>
                </button>
                <button 
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="bg-white/5 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                   How it works
                </button>
            </div>
            
            <div className="mt-12 flex flex-col items-center pointer-events-auto">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Trusted by market leaders</p>
                 <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" className="h-6 w-auto brightness-0 invert" alt="Loop" />
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848bece7_scentbird.png" className="h-5 w-auto brightness-0 invert" alt="Scentbird" />
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" className="h-6 w-auto brightness-0 invert" alt="AdParlor" />
                 </div>
            </div>
        </div>
        
        {/* Stronger Edge Blending / Masking */}
        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Left Fade */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="absolute inset-y-0 right-0 w-8 md:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Radial Vignette for extra centering focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Hero;