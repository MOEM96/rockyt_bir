import React from 'react';
import '../types';

interface NavbarProps {
  onBookDemo: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center transition-all duration-300">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="h-8 text-white flex items-center gap-2 group">
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
          <a href="#" className="hover:text-brand-yellow transition-colors">Blog</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">Pricing</a>
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
        <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group">
          <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
          <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
          <span className="block w-1.5 h-1.5 bg-white rounded-full transition-all group-hover:scale-110"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;