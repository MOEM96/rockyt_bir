import React from 'react';
import '../types';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative flex justify-center items-center -mt-16 mb-8 overflow-hidden">
      <lottie-player
        src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68ece6c98328b7f07810b227_Blow%20up%20Desktop.json"
        background="transparent"
        speed="1"
        style={{ width: '100%', height: '100%' }}
        hover="true"
        className="opacity-90"
      ></lottie-player>
      
      {/* Gradient Masks for Blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;