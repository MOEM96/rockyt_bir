import React from 'react';
import { RockytLogo } from './Logo';
import '../types';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-black text-white py-8 border-t border-white/10 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <button 
          onClick={() => { window.scrollTo(0,0); onNavigate('home'); }} 
          className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
        >
            <div className="w-6 h-6 flex items-center justify-center text-brand-blue group-hover:text-white transition-colors">
                <RockytLogo className="w-full h-full" />
            </div>
            <span className="text-lg font-bold tracking-tight">Rockyt</span>
        </button>

        {/* Links */}
        <nav className="flex items-center gap-8">
            <button 
              onClick={() => { window.scrollTo(0,0); onNavigate('performance'); }} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Performance
            </button>
            <button 
              onClick={() => { window.scrollTo(0,0); onNavigate('hub'); }} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Hub
            </button>
            <button 
              onClick={() => { window.scrollTo(0,0); onNavigate('cases'); }} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cases
            </button>
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