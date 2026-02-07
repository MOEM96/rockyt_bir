import React, { useState, useEffect } from 'react';
import { RockytLogo } from './Logo';
import '../types';

interface NavbarProps {
  onBookDemo: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-28 flex items-center pointer-events-none">
        <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-center h-full">
          
          {/* Logo Island */}
          <div className="pointer-events-auto">
             <a 
               href="#" 
               onClick={(e) => { e.preventDefault(); handleMobileNavigate('home'); }} 
               className="flex items-center gap-3 bg-[#161616]/80 backdrop-blur-xl border border-white/10 pl-4 pr-6 py-3 rounded-full shadow-2xl hover:-translate-y-1 transition-transform duration-300 group"
             >
                <div className="w-8 h-8 flex items-center justify-center text-brand-blue group-hover:text-white transition-colors relative">
                   <div className="absolute inset-0 bg-brand-blue/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <RockytLogo className="w-full h-full relative z-10" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white hidden md:block">Rockyt</span>
             </a>
          </div>

          {/* Desktop Menu Island */}
          <div className="hidden lg:flex pointer-events-auto">
            <div className="flex items-center p-1.5 gap-1 bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
              {['Performance', 'Hub', 'Cases'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }} 
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Actions Island - 3D Button */}
          <div className="hidden lg:flex pointer-events-auto">
            <button 
              onClick={onBookDemo}
              data-cal-link="rock-yt-admanager/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
              className="bg-brand-yellow text-brand-black px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-[0_6px_0_0_#bfa322] hover:-translate-y-1 hover:shadow-[0_8px_0_0_#bfa322] active:translate-y-1 active:shadow-none border border-brand-yellow"
            >
              <span>Book a demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Island */}
          <div className="lg:hidden pointer-events-auto">
              <button 
                  onClick={toggleMobileMenu}
                  className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl active:scale-95 transition-all"
              >
                  {isMobileMenuOpen ? (
                      <iconify-icon icon="solar:close-circle-bold" width="28" class="text-white"></iconify-icon>
                  ) : (
                      <div className="flex flex-col gap-1.5">
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                      </div>
                  )}
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#161616]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
           <div className="flex flex-col items-center gap-8 text-2xl font-bold text-white w-full px-6">
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('performance'); }} className="hover:text-brand-yellow transition-colors">Performance</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('hub'); }} className="hover:text-brand-yellow transition-colors">Hub</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('cases'); }} className="hover:text-brand-yellow transition-colors">Cases</a>
              
              <div className="mt-8">
                   <button 
                      onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }}
                      data-cal-link="rock-yt-admanager/15min"
                      data-cal-namespace="15min"
                      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                      className="bg-brand-yellow text-brand-black px-10 py-4 rounded-full text-lg font-bold shadow-[0_6px_0_0_#bfa322] active:translate-y-1 active:shadow-none transition-all"
                  >
                      Book a demo
                  </button>
              </div>
           </div>
      </div>
    </>
  );
};

export default Navbar;