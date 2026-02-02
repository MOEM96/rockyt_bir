import React from 'react';
import '../types';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[50vh] md:h-[700px] relative flex justify-center items-center -mt-20 md:-mt-24 mb-0 overflow-hidden">
      {/* Wrapper to constrain and mask the lottie */}
      <div className="w-full h-full relative">
        
        {/* Mobile Lottie: Use 'meet' to fit the animation within the viewport width without zooming in */}
        <div className="block md:hidden w-full h-full flex items-center justify-center">
            <lottie-player
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
              background="transparent"
              speed="1"
              style={{ width: '100%', height: '100%' }}
              hover="true"
              preserveAspectRatio="xMidYMid meet"
              className="opacity-90"
            ></lottie-player>
        </div>

        {/* Desktop Lottie: Use 'slice' to cover the large hero area */}
        <div className="hidden md:block w-full h-full">
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
        
        {/* Stronger Edge Blending / Masking - Hidden on mobile */}
        {/* Top Fade */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Bottom Fade */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Left Fade */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-8 md:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-8 md:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Radial Vignette for extra centering focus - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Hero;