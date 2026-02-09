import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { useActiveSection, useSmoothScroll } from '../hooks/index';
import { PERFORMANCE_SECTIONS } from '../constants/index';

const VideoPlaceholder = () => (
  <div className="w-full aspect-video bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    
    {/* Play Button */}
    <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
      <iconify-icon icon="solar:play-circle-bold" width="48" class="text-white"></iconify-icon>
    </div>
    
    <div className="absolute bottom-6 left-6 z-10">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Watch Demo</div>
        <div className="text-sm font-medium text-white">Feature Walkthrough</div>
    </div>
  </div>
);

const PerformancePage: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  const activeSection = useActiveSection(
    PERFORMANCE_SECTIONS.map(s => s.id),
    150
  );
  const scrollTo = useSmoothScroll();

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
      
      {/* Page Header - Replaced with Styled Boxes */}
      <div className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Automate - Blue Button Style */}
        <div className="bg-[#0066FF] text-white text-3xl md:text-5xl font-bold px-8 py-4 rounded-xl shadow-[0_6px_0_0_#0044AA] transform transition hover:-translate-y-1 cursor-default">
          Automate
        </div>
        
        {/* Analyze - Grey Ticket Style */}
        <div className="bg-[#E5E5E5] text-black text-3xl md:text-5xl font-mono font-bold px-8 py-4 rounded-lg border-b-4 border-gray-400 relative cursor-default">
          {/* Decorative notches */}
          <div className="absolute top-1/2 -left-2 w-4 h-4 bg-black rounded-full transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 -right-2 w-4 h-4 bg-black rounded-full transform -translate-y-1/2"></div>
          Analyze
        </div>

        {/* Amplify - Red Skewed Style */}
        <div className="bg-[#FF3333] text-white text-3xl md:text-5xl font-bold italic px-8 py-4 transform -skew-x-12 shadow-[4px_4px_0_0_#CC0000] cursor-default hover:skew-x-0 transition-transform">
          <div className="transform skew-x-12">Amplify</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <nav className="border-l border-white/10 pl-6 space-y-4" aria-label="Page sections">
              {PERFORMANCE_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  aria-current={activeSection === section.id}
                  className={`block text-sm font-medium transition-all duration-200 text-left w-full hover:text-brand-yellow flex items-center gap-3 ${
                    activeSection === section.id ? 'text-brand-yellow scale-105 origin-left' : 'text-gray-500'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${activeSection === section.id ? 'bg-brand-yellow' : 'bg-transparent border border-gray-600'}`}></span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow space-y-16 w-full lg:max-w-4xl">
          
          {/* Chapter 1: Unified Command Centre */}
          <section id="unified-command" className="scroll-mt-32">
            <div className="bg-brand-black border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden relative group">
              <div className="max-w-3xl">
                <div className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Chapter 1</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Unified Command Centre</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">Centralised Multi-Platform Dashboard</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Instead of jumping between tabs for Facebook, Google, TikTok, and LinkedIn, enter a single "Command Centre". All ad platforms are now in one place. It replaces the feeling of "tech-overload" with simplicity, making it easy even for "less techy people" to launch successful campaigns.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* Chapter 2: Creative Genius */}
          <section id="creative-genius" className="scroll-mt-32">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-[32px] p-8 md:p-12 overflow-hidden">
              <div className="max-w-3xl">
                <div className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-2">Chapter 2</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Creative Genius at Your Fingertips</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">AI Ad Creation and UGC Avatars</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Stop staring at a blank page. The AI acts as a creative partner, generating AI-powered ad copy, images, and videos. Use AI UGC Avatars to create high-performing video content for reels and landing pages without a camera crew. Turn winning ads into templates to reuse proven strategies instantly without rebuilding from scratch.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* Chapter 3: Untiring Pilot */}
          <section id="untiring-pilot" className="scroll-mt-32">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden">
              <div className="max-w-3xl">
                <div className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Chapter 3</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Untiring Pilot (24/7 Optimization)</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">"Optimize for Me" and Automated Workflows</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  While you sleep, the "AI ad manager" is working 24/7. It identifies underperforming placements and shifts the budget to what is actually driving results. Experience results like a 98% reduction in CPC or a 1500% increase in CTR. The burden of manual manual bidding and targeting is gone, replaced by automated optimization folders.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* Chapter 4: Crystal Clear Lens */}
          <section id="crystal-clear" className="scroll-mt-32">
            <div className="bg-gradient-to-br from-[#022c22] to-black border border-green-500/20 rounded-[32px] p-8 md:p-12 overflow-hidden">
              <div className="max-w-3xl">
                <div className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">Chapter 4</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Crystal Clear Lens</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">Automated Analytics and Server-Side Tracking</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  As your business scales, avoid data fragmentation. Don't spend days implementing analytics. Leverage Rockyt's automated infrastructure to ensure tracking is robust and reliable. This "Crystal Clear Lens" allows the AI to work with perfect information, accurately identifying high-quality requests and massive ROI—tracking every conversion without manual labour.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* Chapter 5: Insight Engine */}
          <section id="insight-engine" className="scroll-mt-32">
            <div className="bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden">
              <div className="max-w-3xl">
                <div className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Chapter 5</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Insight Engine</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">Client-Ready Reporting and Social Scheduling</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Prove your value. Instead of manual spreadsheets, generate clear, automated reports that show insights across all client campaigns. Expand into a full organic presence with an AI social media scheduler to plan and boost posts across Instagram, Facebook, and LinkedIn.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-brand-black border border-dashed border-white/20 rounded-[32px] p-12 text-center hover:border-brand-yellow/50 transition-colors group">
             <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-brand-yellow transition-colors">Ready to scale?</h2>
             <Button 
               onClick={onBookDemo} 
               asBookingButton
               className="h-14 text-lg btn-hover-skew"
              >
                <span>Book a demo</span>
             </Button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
