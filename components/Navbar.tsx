import React, { useState, useEffect } from 'react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center transition-all duration-300">
        <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-center h-full">
          {/* Logo - Ensure z-index is higher than mobile menu */}
          <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('home'); }} className="h-8 text-white flex items-center gap-2 group relative z-50">
            {/* Rocket Icon for Rockyt */}
            <div className="w-8 h-8 relative flex items-center justify-center text-brand-yellow">
               <iconify-icon icon="solar:rocket-bold-duotone" width="32"></iconify-icon>
            </div>
            {/* Text Logo */}
            <span className="text-2xl font-bold tracking-tight text-white hidden md:block">Rockyt</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('performance'); }} className="hover:text-brand-yellow transition-colors">Performance</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('hub'); }} className="hover:text-brand-yellow transition-colors">Hub</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cases'); }} className="hover:text-brand-yellow transition-colors">Cases</a>
          </div>

          {/* Actions - Only Book Demo */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onBookDemo}
              className="bg-brand-yellow text-brand-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#fcd34d] transition-colors btn-hover-skew"
            >
              <span>Book a demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group relative z-50 focus:outline-none"
          >
              {isMobileMenuOpen ? (
                  <div className="text-white flex items-center justify-center">
                      <iconify-icon icon="solar:close-circle-bold" width="32"></iconify-icon>
                  </div>
              ) : (
                  <>
                      <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
                      <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
                      <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
                  </>
              )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to avoid stacking context issues */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-start pt-32 transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
           <div className="flex flex-col items-center gap-8 text-2xl font-medium text-white/90 w-full px-6">
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('performance'); }} className="text-white hover:text-brand-yellow transition-colors">Performance</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('hub'); }} className="text-white hover:text-brand-yellow transition-colors">Hub</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavigate('cases'); }} className="text-white hover:text-brand-yellow transition-colors">Cases</a>
              
              <div className="mt-8">
                   <button 
                      onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }}
                      className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full text-lg font-bold hover:bg-[#fcd34d] transition-colors"
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