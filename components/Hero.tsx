import React, { useState, useEffect } from 'react';
import PartnersCarousel from './PartnersCarousel';
import '../types';

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Lock scroll when video is open
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

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
                    onClick={() => setShowVideoModal(true)}
                    className="w-full bg-white/5 border border-white/20 text-white font-bold py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
                >
                   How it works
                </button>
            </div>

            {/* Carousel (Mobile) */}
            <div className="w-full mt-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">Trusted by market leaders</p>
                <PartnersCarousel />
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
                    onClick={() => setShowVideoModal(true)}
                    className="bg-white/5 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                   How it works
                </button>
            </div>
            
            <div className="mt-12 flex flex-col items-center pointer-events-auto w-full max-w-4xl">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Trusted by market leaders</p>
                 <PartnersCarousel />
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

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
            onClick={() => setShowVideoModal(false)}
          ></div>

          <div className="relative bg-[#161616] w-full max-w-4xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex flex-col animate-fade-in-up">
            {/* Header / Hook */}
            <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-[#161616] relative z-20">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <iconify-icon icon="solar:danger-triangle-bold" className="text-red-500"></iconify-icon>
                  Stop burning your ad budget
                </h3>
                <p className="text-gray-400 text-sm md:text-base">Every second you wait, inefficient ads are draining your account. See how to stop the bleeding.</p>
              </div>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
              >
                <iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
              </button>
            </div>

            {/* Video Container */}
            <div className="w-full bg-black relative">
              <wistia-player media-id="okb9j6qvf5" aspect="1.7777777777777777"></wistia-player>
            </div>
            
            {/* Footer / CTA */}
            <div className="p-6 bg-[#161616] border-t border-white/10 flex justify-center">
              <button 
                onClick={() => { setShowVideoModal(false); if(onBookDemo) onBookDemo(); }}
                data-cal-link="rock-yt-admanager/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full font-bold hover:bg-[#fcd34d] transition-colors btn-hover-skew"
              >
                <span>Fix my campaigns now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;