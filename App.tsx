import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PerformancePage from './components/PerformancePage';
import CasesPage from './components/CasesPage';
import PricingPage from './components/PricingPage';
import Footer from './components/Footer';
import SocialProofWidget from './components/SocialProofWidget';
import Modal from './components/Modal';
import { PageType } from './types/index';
import { EXTERNAL_LINKS } from './constants/index';

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (type: string, eventName: string, params?: any) => void;
    datafast?: (eventName: string, params?: any) => void;
  }
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Ref to prevent double-firing pixel events (debounce)
  const lastBookingTimeRef = useRef<number>(0);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // No-op function since Cal.com handles the modal via data attributes
  const handleBookDemo = () => { };

  // Open the Get Started Modal
  const handleGetStarted = () => {
    setIsGetStartedOpen(true);
  };

  const handleCloseGetStarted = () => {
    setIsGetStartedOpen(false);
    // Reset the flow state after modal closes
    setTimeout(() => {
      setIsBookingConfirmed(false);
    }, 300);
  };

  const trackBookingSuccess = () => {
    const now = Date.now();
    // Debounce: prevent firing if tracked in the last 5 seconds
    if (now - lastBookingTimeRef.current < 5000) {
      return;
    }

    lastBookingTimeRef.current = now;

    if (window.fbq) {
      console.log('Rockyt: Tracking Schedule event');
      window.fbq('track', 'Schedule');
    }

    // DataFast: Schedule Goal
    if (window.datafast) {
      console.log('Rockyt: Tracking DataFast Schedule event');
      window.datafast('schedule');
    }

    setIsBookingConfirmed(true);
  };

  // Handle Trial Button Click for DataFast and Meta Pixel
  const handleTrialClick = () => {
    if (isBookingConfirmed) {
      // DataFast: Start Trial Goal
      if (window.datafast) {
        console.log('Rockyt: Tracking DataFast Start Trial event');
        window.datafast('start_trial');
      }

      // Meta Pixel: StartTrial Event
      if (window.fbq) {
        console.log('Rockyt: Tracking Meta StartTrial event');
        window.fbq('track', 'StartTrial', {
          value: 0.00,
          currency: 'USD',
          predicted_ltv: 0.00
        });
      }
    }
  };

  // Handle Cal.com booking success events
  useEffect(() => {
    // Handler 1: Listen for direct PostMessages from iframe (Works for Get Started Modal & Popups)
    const handleCalPostMessage = (e: MessageEvent) => {
      if (!e.data) return;

      let eventData = e.data;

      // Handle stringified data (Cal.com sometimes sends this)
      if (typeof eventData === 'string') {
        try {
          eventData = JSON.parse(eventData);
        } catch (err) {
          // Not a JSON string, ignore
          return;
        }
      }

      // Check for multiple event type signatures
      const type = eventData.type || eventData.action || eventData.event;

      if (
        type === 'cal:bookingSuccessful' ||
        type === 'bookingSuccessful'
      ) {
        trackBookingSuccess();
      }
    };

    // Handler 2: Listen for Custom Event dispatched from index.html (Works for Global Popups like Book Demo / Offer)
    const handleCalCustomEvent = () => {
      trackBookingSuccess();
    };

    window.addEventListener('message', handleCalPostMessage);
    window.addEventListener('rockyt:bookingSuccessful', handleCalCustomEvent);

    return () => {
      window.removeEventListener('message', handleCalPostMessage);
      window.removeEventListener('rockyt:bookingSuccessful', handleCalCustomEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#161616] flex flex-col">
      <Navbar
        onBookDemo={handleBookDemo}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onGetStarted={handleGetStarted}
      />

      <main className="pt-32 pb-20 px-4 md:px-6 flex-grow">
        {currentPage === 'home' && <HomePage onBookDemo={handleBookDemo} onGetStarted={handleGetStarted} />}
        {currentPage === 'performance' && <PerformancePage onBookDemo={handleBookDemo} onGetStarted={handleGetStarted} />}
        {currentPage === 'cases' && <CasesPage onBookDemo={handleBookDemo} onGetStarted={handleGetStarted} />}
        {currentPage === 'pricing' && <PricingPage onBookDemo={handleBookDemo} onGetStarted={handleGetStarted} />}
      </main>
      <Footer onNavigate={handleNavigate} />

      <SocialProofWidget />

      {/* Get Started / Onboarding Modal */}
      <Modal
        isOpen={isGetStartedOpen}
        onClose={handleCloseGetStarted}
        size="xl"
        className="h-[85vh] md:h-[90vh] flex flex-col overflow-hidden p-0"
        showCloseButton={true}
      >
        {/* Header Steps - Optimized for Mobile (2 Steps, Compact) */}
        <div className="bg-[#121212] border-b border-white/10 px-3 py-3 md:px-4 md:py-6 shrink-0 relative z-20">
          <div className="max-w-3xl mx-auto flex flex-row items-center justify-center gap-2 md:gap-8">

            {/* Step 1: Book Onboarding */}
            <div className={`flex items-center gap-2 md:gap-3 relative group transition-opacity duration-300 ${isBookingConfirmed ? 'opacity-50' : 'opacity-100'}`}>
              <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black transition-all duration-300 ${isBookingConfirmed ? 'bg-green-500 text-white shadow-none' : 'bg-brand-yellow text-black shadow-[0_0_15px_rgba(255,226,65,0.4)]'}`}>
                {isBookingConfirmed ? <iconify-icon icon="solar:check-read-bold"></iconify-icon> : '1'}
              </div>
              <span className="text-white font-bold text-[10px] md:text-sm tracking-wide uppercase whitespace-nowrap">Book Onboarding</span>
            </div>

            {/* Connector */}
            <div className="w-4 h-px bg-white/10 md:w-12"></div>

            {/* Step 2: Create Account */}
            <div className={`flex items-center gap-2 md:gap-3 transition-opacity duration-300 ${isBookingConfirmed ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs border transition-all duration-300 ${isBookingConfirmed ? 'bg-brand-yellow text-black border-brand-yellow shadow-[0_0_15px_rgba(255,226,65,0.4)] font-black' : 'bg-white/10 text-white border-white/10 font-bold'}`}>
                2
              </div>
              <span className={`${isBookingConfirmed ? 'text-white' : 'text-gray-300'} font-medium text-[10px] md:text-sm tracking-wide uppercase transition-colors whitespace-nowrap`}>Create Account</span>
            </div>

            {/* Step 3: Scale Ads - HIDDEN ON MOBILE */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-12 h-px bg-white/10"></div>
              <div className="flex items-center gap-3 opacity-40">
                <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-xs border border-white/10">3</div>
                <span className="text-gray-300 font-medium text-sm tracking-wide uppercase">Scale Ads</span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Content Area */}
        <div className="flex flex-col flex-grow overflow-hidden relative">

          {/* Calendar Embed */}
          <div className="flex-grow w-full relative bg-[#161616]">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
              <span className="animate-pulse">Loading calendar...</span>
            </div>
            <iframe
              src="https://app.cal.com/rock-yt-admanager/15min?theme=dark&embed=true"
              className="w-full h-full border-none relative z-10"
              title="Book your onboarding"
              allow="camera; microphone; autoplay; fullscreen"
              data-cal-namespace="15min"
              data-cal-link="rock-yt-admanager/15min"
              data-cal-config='{"theme":"dark"}'
            ></iframe>
          </div>

          {/* Bottom Action Bar - Compact & Minimal */}
          <div className="shrink-0 p-3 md:py-4 bg-[#121212] border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="text-xs text-gray-400 flex items-center gap-2">
              {isBookingConfirmed
                ? <span className="text-green-400 font-bold flex items-center gap-1.5 animate-fade-in"><iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon> Booking Confirmed! Proceed to next step.</span>
                : <span>Please <span className="text-white font-bold">confirm booking</span> above to unlock:</span>
              }
            </div>

            <a
              href={isBookingConfirmed ? EXTERNAL_LINKS.getStarted : '#'}
              onClick={(e) => {
                if (!isBookingConfirmed) {
                  e.preventDefault();
                } else {
                  handleTrialClick();
                }
              }}
              className={`
                            px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300
                            ${isBookingConfirmed
                  ? 'bg-[#FFE241] text-black hover:bg-[#ffeb7a] shadow-[0_0_15px_rgba(255,226,65,0.4)] cursor-pointer transform hover:-translate-y-0.5'
                  : 'bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed'
                }
                        `}
              aria-disabled={!isBookingConfirmed}
            >
              {isBookingConfirmed ? (
                <>
                  <span>Start a 7-day free trial</span>
                  <iconify-icon icon="solar:arrow-right-bold" class="text-sm"></iconify-icon>
                </>
              ) : (
                <span className="flex items-center gap-1.5">
                  <iconify-icon icon="solar:lock-keyhole-minimalistic-bold" class="text-sm shrink-0"></iconify-icon>
                  <span>Start a 7-day free trial</span>
                </span>
              )}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;