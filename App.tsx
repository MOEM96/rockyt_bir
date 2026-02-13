import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PerformancePage from './components/PerformancePage';
import CasesPage from './components/CasesPage';
import Footer from './components/Footer';
import LimitedOfferNotification from './components/LimitedOfferNotification';
import Modal from './components/Modal';
import { PageType } from './types/index';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // No-op function since Cal.com handles the modal via data attributes
  const handleBookDemo = () => {};

  return (
    <div className="min-h-screen bg-[#161616] flex flex-col">
      <Navbar 
        onBookDemo={handleBookDemo} 
        onNavigate={handleNavigate} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onGetStarted={() => setIsGetStartedOpen(true)}
      />
      
      {/* Global Notification Bar - Resets on page change, hides when mobile menu is open */}
      <LimitedOfferNotification 
        currentPage={currentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="pt-32 pb-20 px-4 md:px-6 flex-grow">
        {currentPage === 'home' && <HomePage onBookDemo={handleBookDemo} />}
        {currentPage === 'performance' && <PerformancePage onBookDemo={handleBookDemo} />}
        {currentPage === 'cases' && <CasesPage onBookDemo={handleBookDemo} />}
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* Get Started / Onboarding Modal */}
      <Modal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
        size="xl"
        className="h-[85vh] md:h-[90vh] flex flex-col overflow-hidden p-0"
        showCloseButton={true}
      >
          {/* Header Steps */}
          <div className="bg-[#121212] border-b border-white/10 px-4 py-5 md:py-6 shrink-0 relative z-20">
              <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
                  
                  {/* Step 1: Active */}
                  <div className="flex items-center gap-3 relative group">
                      <div className="w-7 h-7 rounded-full bg-brand-yellow text-black font-black flex items-center justify-center text-xs shadow-[0_0_15px_rgba(255,226,65,0.4)]">1</div>
                      <span className="text-white font-bold text-sm tracking-wide uppercase">Book Onboarding</span>
                  </div>

                  {/* Connector */}
                  <div className="hidden md:block w-12 h-px bg-white/10"></div>
                  <div className="md:hidden w-px h-3 bg-white/10 my-1"></div>

                  {/* Step 2: Inactive */}
                  <div className="flex items-center gap-3 opacity-40">
                      <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-xs border border-white/10">2</div>
                      <span className="text-gray-300 font-medium text-sm tracking-wide uppercase">Create Account</span>
                  </div>

                   {/* Connector */}
                  <div className="hidden md:block w-12 h-px bg-white/10"></div>
                  <div className="md:hidden w-px h-3 bg-white/10 my-1"></div>

                  {/* Step 3: Inactive */}
                  <div className="flex items-center gap-3 opacity-40">
                      <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-xs border border-white/10">3</div>
                      <span className="text-gray-300 font-medium text-sm tracking-wide uppercase">Scale Ads</span>
                  </div>

              </div>
          </div>

          {/* Calendar Embed */}
          <div className="flex-grow w-full h-full bg-[#161616] relative">
               {/* Loading indicator behind iframe */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                   <span className="animate-pulse">Loading calendar...</span>
               </div>
               <iframe 
                  src="https://app.cal.com/rock-yt-admanager/15min?theme=dark&embed=true"
                  className="w-full h-full border-none relative z-10"
                  title="Book your onboarding"
                  allow="camera; microphone; autoplay; fullscreen"
               ></iframe>
          </div>
      </Modal>
    </div>
  );
};

export default App;