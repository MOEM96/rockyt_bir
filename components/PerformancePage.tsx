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
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">5 Superpowers That Turn Ad Spend Into Profit</h2>
        <p className="text-gray-400">Every feature designed with one goal: Make you more money than yesterday.</p>
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
                <h3 className="text-xl text-gray-400 font-medium mb-6">Stop Platform Juggling. Start Winning.</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Remember when you had 17 browser tabs open, 3 spreadsheets, 2 Slack channels, and still couldn't figure out which campaign was actually making money? The Unified Command Centre brings Meta, Google, TikTok, LinkedIn, Snapchat, and Pinterest into one beautiful dashboard. Launch a campaign across 4 platforms in 4 clicks. See real-time performance at a glance. Make decisions in seconds, not hours.
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Your AI Creative Partner</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">Ship Winning Ads 10x Faster</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Staring at a blank screen? While you're stuck, your competitor just launched 30 variations. Let AI be your creative co-pilot. Describe your product, and AI generates 20+ proven ad variations in 30 seconds. Use our UGC Avatar Studio to create realistic video ads without actors. Found a winner? Turn it into a template and scale it across platforms instantly.
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Your 24/7 AI Optimization Machine</h2>
                <h3 className="text-xl text-gray-400 font-medium mb-6">Never Miss a Winning Moment. Never Waste a Dollar.</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  While you sleep, the Untiring Pilot is working. Every second, it's monitoring every campaign, analyzing performance against your goals, adjusting bids, and shifting budget from losers to winners. It's not just automation; it's AI that learns. The result? Lower CPC, higher CTR, and tripled ROAS—all while you focus on growing your business.
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
                <h3 className="text-xl text-gray-400 font-medium mb-6">Perfect Tracking, Perfect Decisions</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Making decisions with bad data is like driving blindfolded. Rockyt fixes tracking issues (like iOS 14.5 blocks) with server-side tracking that captures every click, view, and purchase with surgical precision. No data loss. No estimation. With perfect data, our AI optimizes for actual profit, not just clicks.
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
                <h3 className="text-xl text-gray-400 font-medium mb-6">Reports That Actually Matter</h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Forget vanity metrics. We show what matters: Revenue, Profit, CAC, and LTV. Generate beautiful white-labeled reports in 60 seconds to impress clients or prove ROI to stakeholders. Plus, use our predictive analytics to know what will work before you spend a dollar.
                </p>
                
                <VideoPlaceholder />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-brand-black border border-dashed border-white/20 rounded-[32px] p-12 text-center hover:border-brand-yellow/50 transition-colors group">
             <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-brand-yellow transition-colors">Let AI Manage Your Campaigns</h2>
             <Button 
               onClick={onBookDemo} 
               asBookingButton
               className="h-14 text-lg btn-hover-skew"
              >
                <span>Book a Demo</span>
             </Button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PerformancePage;