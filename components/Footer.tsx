import React from 'react';
import { RockytLogo } from './Logo';
import { NavigationProps, PageType } from '../types/index';
import { scrollToTop } from '../utils/helpers';

const Footer: React.FC<NavigationProps> = ({ onNavigate }) => {
  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    scrollToTop();
  };

  return (
    <footer className="bg-brand-black text-white py-8 border-t border-white/10 mt-auto" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <button 
          onClick={() => handleNavigate('home')} 
          className="flex items-center gap-2 group hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
          aria-label="Go to homepage"
        >
            <div className="w-6 h-6 flex items-center justify-center text-brand-blue group-hover:text-white transition-colors">
                <RockytLogo className="w-full h-full" />
            </div>
            <span className="text-lg font-bold tracking-tight">Rockyt</span>
        </button>

        {/* Links */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
            <button 
              onClick={() => handleNavigate('performance')} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
            >
              Performance
            </button>
            <button 
              onClick={() => handleNavigate('cases')} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
            >
              Cases
            </button>
            <a 
              href="https://aiads.tawk.help/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
            >
              Help Center
            </a>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-gray-600 font-medium">
           © Rockyt Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;