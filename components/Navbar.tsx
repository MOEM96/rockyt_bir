import React, { useState, useRef } from 'react';
import { RockytLogo } from './Logo';
import Button from './Button';
import { NavigationProps, DemoBookingProps, PageType } from '../types/index';
import { useScrollLock, useFocusTrap, useKeyPress } from '../hooks/index';
import { scrollToTop } from '../utils/helpers';

interface NavbarProps extends NavigationProps, DemoBookingProps {}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useScrollLock(isMobileMenuOpen);
  useFocusTrap(mobileMenuRef, isMobileMenuOpen);
  
  useKeyPress('Escape', () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileNavigate = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const handleDesktopNavigate = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    onNavigate(page);
    scrollToTop();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-28 flex items-center pointer-events-none" role="navigation" aria-label="Main navigation">
        <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-center h-full">
          
          {/* Logo Island */}
          <div className="pointer-events-auto">
             <a 
               href="#" 
               onClick={(e) => handleDesktopNavigate(e, 'home')}
               className="flex items-center gap-3 bg-[#161616]/80 backdrop-blur-xl border border-white/10 pl-4 pr-6 py-3 rounded-full shadow-2xl hover:-translate-y-1 transition-transform duration-300 group"
               aria-label="Go to homepage"
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
              {(['performance', 'hub', 'cases'] as PageType[]).map((item) => (
                <a 
                  key={item}
                  href="#" 
                  onClick={(e) => handleDesktopNavigate(e, item)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Actions Island - 3D Button */}
          <div className="hidden lg:flex pointer-events-auto">
            <Button onClick={onBookDemo} asBookingButton size="md">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Toggle Island */}
          <div className="lg:hidden pointer-events-auto">
              <button 
                  onClick={toggleMobileMenu}
                  className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
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
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-[#161616]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden={!isMobileMenuOpen}
      >
           <div className="flex flex-col items-center gap-8 text-2xl font-bold text-white w-full px-6">
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('performance'); }} className="hover:text-brand-yellow transition-colors">Performance</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('hub'); }} className="hover:text-brand-yellow transition-colors">Hub</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('cases'); }} className="hover:text-brand-yellow transition-colors">Cases</a>
              
              <div className="mt-8">
                  <Button 
                    onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }} 
                    asBookingButton 
                    size="lg"
                  >
                    Book a demo
                  </Button>
              </div>
           </div>
      </div>
    </>
  );
};

export default Navbar;
