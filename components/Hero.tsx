import React from 'react';
import '../types';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative flex justify-center items-center -mt-16 mb-8 overflow-hidden">
      {/* Wrapper to constrain and mask the lottie */}
      <div className="w-full h-full relative">
        <lottie-player
          src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          hover="true"
          className="opacity-90"
        ></lottie-player>
        
        {/* Stronger Edge Blending / Masking */}
        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        {/* Left Fade */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Radial Vignette for extra centering focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Hero;