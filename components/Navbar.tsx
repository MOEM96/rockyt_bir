import React, { useState, useRef } from 'react';
import { RockytLogo } from './Logo';
import Button from './Button';
import { NavigationProps, DemoBookingProps, PageType } from '../types/index';
import { useScrollLock, useFocusTrap, useKeyPress } from '../hooks/index';
import { scrollToTop } from '../utils/helpers';
import { EXTERNAL_LINKS } from '../constants/index';

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
              <a 
                href="#" 
                onClick={(e) => handleDesktopNavigate(e, 'performance')}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 capitalize"
              >
                Performance
              </a>
              <a 
                href="#" 
                onClick={(e) => handleDesktopNavigate(e, 'cases')}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 capitalize"
              >
                Cases
              </a>
              <a 
                href="https://aiads.tawk.help/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 capitalize"
              >
                Help Center
              </a>
            </div>
          </div>

          {/* Actions Island - Login, Book Demo, Get Started */}
          <div className="hidden lg:flex items-center gap-1.5 p-1.5 bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
            {/* Login */}
            <a 
                href={EXTERNAL_LINKS.login}
                className="px-5 py-2.5 text-sm font-bold text-gray-300 hover:text-white transition-colors"
            >
                Login
            </a>

            {/* Book a Demo */}
            <Button 
                onClick={onBookDemo} 
                asBookingButton 
                size="sm"
                variant="outline"
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold"
            >
              Book a demo
            </Button>

            {/* Get Started */}
            <a 
                href={EXTERNAL_LINKS.getStarted}
                className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-black text-sm font-bold hover:bg-[#fcd34d] transition-all shadow-[0_0_15px_rgba(255,226,65,0.2)] hover:shadow-[0_0_25px_rgba(255,226,65,0.4)] hover:-translate-y-0.5 flex items-center gap-1.5"
            >
                Get Started
                <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
            </a>
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
           <div className="flex flex-col items-center gap-8 text-2xl font-bold text-white w-full px-6 max-w-sm">
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('performance'); }} className="hover:text-brand-yellow transition-colors">Performance</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('cases'); }} className="hover:text-brand-yellow transition-colors">Cases</a>
              <a 
                href="https://aiads.tawk.help/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="hover:text-brand-yellow transition-colors"
              >
                Help Center
              </a>
              
              <div className="w-full h-px bg-white/10 my-2"></div>

              <div className="flex flex-col w-full gap-4">
                  {/* Order: Login -> Book -> Get Started (or prioritized for mobile) */}
                  
                  {/* Book Demo */}
                  <Button 
                    onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }} 
                    asBookingButton 
                    fullWidth
                    variant="outline"
                    className="border-white/20"
                  >
                    Book a demo
                  </Button>

                  {/* Get Started */}
                  <a 
                    href={EXTERNAL_LINKS.getStarted}
                    className="w-full py-4 rounded-full bg-brand-yellow text-brand-black text-lg font-bold hover:bg-[#fcd34d] transition-colors text-center shadow-lg shadow-brand-yellow/20 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </a>
                  
                  {/* Login */}
                  <a 
                    href={EXTERNAL_LINKS.login}
                    className="text-sm font-semibold text-gray-500 hover:text-white transition-colors text-center mt-2"
                  >
                    Login to existing account
                  </a>
              </div>
           </div>
      </div>
    </>
  );
};

export default Navbar;