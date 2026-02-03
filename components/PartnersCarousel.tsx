import React, { useEffect, useState } from 'react';

const logos = [
  { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Bing', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Bing_Fluent_Logo.svg' },
  { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
  { name: 'TikTok', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg' },
  { name: 'Snapchat', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/300px-Snapchat_logo.svg.png' },
  { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
  { name: 'LinkedIn', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
];

// Double the items for seamless infinite scroll
const carouselItems = [...logos, ...logos];

const PartnersCarousel: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start animation after a short delay to allow layout to settle, 
    // or when images trigger load (simulated here for simplicity as we use eager loading)
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="partners-carousel w-full" aria-label="Partner logos carousel">
       <style>{`
        .partners-carousel {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          background: transparent;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .carousel-track {
          display: flex;
          align-items: center;
          gap: 40px;
          width: fit-content;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .carousel-track.loaded {
          opacity: 1;
          animation: scroll 30s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .partner-logo {
          flex-shrink: 0;
          width: 100px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 8px;
          padding: 8px;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        
        @media (min-width: 768px) {
            .partner-logo {
                width: 120px;
                height: 80px;
                padding: 10px;
                gap: 60px;
            }
        }

        .partner-logo:hover {
          transform: translateY(-4px) scale(1.05);
          background: rgba(255,255,255,0.05);
        }

        .partner-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          /* Adjusted for dark mode: invert to make them white/light */
          filter: grayscale(100%) invert(1) brightness(1.5);
          opacity: 0.6;
          transition: filter 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
          user-drag: none; 
          -webkit-user-drag: none;
        }
        
        .partner-logo:hover img { 
            /* On hover, restore original colors roughly, but ensure visibility on dark bg */
            filter: grayscale(0%) invert(0) brightness(1.1);
            opacity: 1;
            transform: scale(1.1); 
        }

        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
       `}</style>
       <div className={`carousel-track ${isLoaded ? 'loaded' : ''}`}>
          {carouselItems.map((item, index) => (
            <div className="partner-logo" key={index} title={item.name} aria-hidden={index >= logos.length}>
              <img 
                src={item.src} 
                alt={`${item.name} logo`} 
                loading="eager"
              />
            </div>
          ))}
       </div>
    </div>
  );
};

export default PartnersCarousel;