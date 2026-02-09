import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { VIDEO_URLS, COMPANY_STATS, CUSTOMER_LOGOS } from '../constants/index';

const BentoGrid: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-10">
      
      {/* 1. PROFITABLE TESTING: Transformation / Comparison Card */}
      <div className="col-span-1 md:col-span-12 bg-brand-black border border-white/10 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
         {/* Left Side: Traditional Testing (Pain) */}
         <div className="w-full md:w-5/12 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative bg-[#0f0f0f]">
            <div className="flex items-center gap-3 mb-6 opacity-60">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <h3 className="text-xl font-bold text-gray-300">The "Old Way" of Testing</h3>
            </div>
            
            <div className="space-y-8 relative z-10">
                <div className="flex gap-4 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="mt-1">
                        <iconify-icon icon="solar:flame-bold" width="20" class="text-gray-500"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-300 text-sm">Budget Bleed</div>
                        <div className="text-xs text-gray-500 mt-0.5">Wasting 30-50% of spend on losing ads before pausing.</div>
                    </div>
                </div>
                <div className="flex gap-4 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="mt-1">
                        <iconify-icon icon="solar:hourglass-bold" width="20" class="text-gray-500"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-300 text-sm">Slow Velocity</div>
                        <div className="text-xs text-gray-500 mt-0.5">Testing 1-2 creatives a week. Scale is impossible.</div>
                    </div>
                </div>
                <div className="flex gap-4 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="mt-1">
                        <iconify-icon icon="solar:blindframe-bold" width="20" class="text-gray-500"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-300 text-sm">Guesswork</div>
                        <div className="text-xs text-gray-500 mt-0.5">Relying on "gut feeling" instead of data signals.</div>
                    </div>
                </div>
            </div>
         </div>

         {/* Right Side: Profitable Testing (Gain) */}
         <div className="w-full md:w-7/12 p-8 md:p-10 relative bg-gradient-to-br from-[#161616] to-[#1A1A1A]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent opacity-50"></div>
            
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(255,226,65,0.8)] animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Profitable Testing Protocol</h3>
            </div>

            <div className="grid gap-6">
                {/* Feature 1 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:rocket-2-bold-duotone" width="24"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-bold text-white text-base">Test 10x Faster</div>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Launch dozens of creatives, messages, and audiences simultaneously.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-bold text-white text-base">Zero-Waste Budget Protection</div>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            AI detects low performers instantly and cuts their budget before they burn cash.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:graph-up-bold-duotone" width="24"></iconify-icon>
                    </div>
                    <div>
                        <div className="font-bold text-white text-base">Auto-Scale Winners</div>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                           Automatically shift budget to the top 5% of ads driving the highest ROAS.
                        </p>
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* 2. MULTI-LAYER BUDGET OPTIMIZATION (Video Card) */}
      <div className="col-span-1 md:col-span-8 bg-brand-black rounded-[32px] overflow-hidden bento-card border border-white/10 min-h-[400px] relative group">
        <div className="absolute top-0 left-0 w-full z-20 p-8 md:p-10 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
            <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500 text-white uppercase tracking-wider">Live</span>
                 <span className="text-xs font-bold text-green-400 uppercase tracking-widest">24/7 AI Pilot</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Multi-Layer Budget Optimization</h3>
            <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
                Rockyt monitors your ads every second of the day. It optimizes bids across <strong>Platform, Campaign, Ad-Set, and Ad levels</strong> in real-time.
                <br/><span className="text-brand-yellow font-bold mt-2 block">Result: Lower CPC, Lower CPL, and Maximized ROAS.</span>
            </p>
        </div>

        <div className="w-full h-full bg-[#050505] relative flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-black opacity-60 z-10"></div>
            
            <video 
            id="ai-budget-protection-video"
            autoPlay 
            loop 
            muted 
            playsInline 
            poster={VIDEO_URLS.budgetOptimizationPoster}
            className="w-full h-full object-cover relative z-0 transform group-hover:scale-105 transition-transform duration-700"
            aria-label="Video demonstrating budget optimization"
            >
            <source src={VIDEO_URLS.budgetOptimization} type="video/mp4" />
            <source src={VIDEO_URLS.budgetOptimizationWebm} type="video/webm" />
            </video>
        </div>
      </div>

      {/* 4. COMPACT AI TOOLS CARD (Small Card) */}
      <div className="col-span-1 md:col-span-4 bg-gradient-to-b from-[#1E1E1E] to-[#161616] rounded-[32px] p-8 bento-card flex flex-col min-h-[400px] border border-white/10 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-purple/10 blur-[80px] rounded-full -mr-10 -mt-10 pointer-events-none"></div>

         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
                 <div className="w-8 h-8 rounded-lg bg-brand-purple/20 text-brand-purple flex items-center justify-center">
                    <iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
                 </div>
                 <h3 className="text-lg font-bold text-white">Creative Studio</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Access 5 enterprise-grade AI tools to generate high-converting assets in seconds, not days.
            </p>

            <div className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <iconify-icon icon="solar:magic-stick-3-bold-duotone" width="18" class="text-blue-400"></iconify-icon>
                    <span className="text-sm font-medium text-white">Magic Editor</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <iconify-icon icon="solar:text-square-bold-duotone" width="18" class="text-purple-400"></iconify-icon>
                    <span className="text-sm font-medium text-white">Ad Copy Gen</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <iconify-icon icon="solar:gallery-wide-bold-duotone" width="18" class="text-pink-400"></iconify-icon>
                    <span className="text-sm font-medium text-white">Text to Image</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <iconify-icon icon="solar:videocamera-record-bold-duotone" width="18" class="text-orange-400"></iconify-icon>
                    <span className="text-sm font-medium text-white">Video Gen</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <iconify-icon icon="solar:microphone-3-bold-duotone" width="18" class="text-cyan-400"></iconify-icon>
                    <span className="text-sm font-medium text-white">AI Voiceover</span>
                </div>
            </div>
         </div>
      </div>

      {/* 3. REAL-TIME UNIFIED ANALYTICS (Large Dashboard Card) */}
      <div className="col-span-1 md:col-span-12 bg-brand-yellow rounded-[32px] p-8 md:p-12 bento-card flex flex-col lg:flex-row gap-8 relative overflow-hidden text-brand-black items-center min-h-[500px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-6 relative z-10 shrink-0">
           <div>
               <div className="inline-block px-3 py-1 rounded-full bg-black/10 text-brand-black text-xs font-bold uppercase tracking-wider mb-4 border border-black/5">
                    One Source of Truth
               </div>
               <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">Real-Time Unified Analytics</h3>
           </div>
           
           <p className="text-lg font-medium opacity-80 leading-relaxed">
             Stop platform-hopping. Access one advanced dashboard that acts as the single source of truth for all campaigns. 
             <br/><br/>
             Powered by <strong>AI Recommendations</strong> that remove the guesswork, helping you understand customer journeys like a top 1% expert.
           </p>
           
           <Button 
             onClick={onBookDemo} 
             asBookingButton
             className="bg-brand-black text-white hover:bg-black/80 w-fit btn-hover-skew shadow-xl border-none"
            >
             <span>See Your Data</span>
           </Button>
        </div>
        
        {/* Compact Dashboard UI Container - keeping HTML structure but ensuring accessibility */}
        <div className="w-full lg:w-2/3 bg-[#EBF1F5] p-3 rounded-[24px] shadow-2xl flex flex-col gap-3 rotate-1 hover:rotate-0 transition-transform duration-500 font-sans text-slate-800 border-[4px] border-white ring-1 ring-black/5" aria-hidden="true">
             <div className="flex flex-col xl:flex-row gap-3">
                {/* Left Column - Metrics */}
                <div className="flex-grow flex flex-col gap-3 w-full">
                  {/* Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    
                    {/* Recommendations */}
                    <div className="col-span-2 bg-[#051C74] rounded-xl p-3 text-white relative overflow-hidden flex flex-col justify-between min-h-[90px] shadow-sm group">
                       <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/50 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                       <div className="relative z-10">
                          <div className="text-[10px] opacity-70 mb-0.5">AI Insights</div>
                          <div className="font-semibold text-sm leading-tight">Scale "Ad_Set_03"</div>
                          <div className="text-yellow-300 text-[10px] mt-0.5">High Potential ✦</div>
                       </div>
                    </div>
                    {/* ... (Other metrics kept for visual fidelity) ... */}
                    {/* Spend */}
                    <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:wallet-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">Spend</div>
                          <div className="flex items-end justify-between gap-1 flex-wrap">
                             <div className="text-xs font-bold">$12,400</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">On Track</div>
                          </div>
                       </div>
                    </div>
                     {/* Clicks */}
                     <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:cursor-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">ROAS</div>
                          <div className="flex items-end justify-between gap-1 flex-wrap">
                             <div className="text-xs font-bold">4.2x</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">↑ 12%</div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
        </div>
      </div>

      {/* Case Studies & Stats Section */}
      {/* Keiki */}
      <div className="col-span-1 md:col-span-4 bg-[#8B5CF6] text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[300px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase opacity-80">Success Story</span>
          <div className="h-6 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bb67180715f131e3e1e9_keiki_logotype.svg" 
              className="h-full w-auto brightness-0 invert" 
              alt="Keiki"
              loading="lazy" 
            />
          </div>
        </div>
        <p className="text-xl font-medium leading-tight mb-6">"Our ad spend increased 2.7x while maintaining profitability."</p>
        <div className="mt-auto flex items-center justify-between">
            <div className="text-xs opacity-90 leading-tight">Daryna Bondar<br/>Head of Growth</div>
        </div>
      </div>

      {/* Case 2: E-commerce */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[300px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase text-gray-400">E-commerce</span>
          <div className="h-6 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" 
              className="h-full w-auto brightness-0 invert" 
              alt="Loop"
              loading="lazy" 
            />
          </div>
        </div>
        <p className="text-xl font-medium leading-tight mb-6">Loop Earplugs scale 200% faster with Rockyt automation</p>
        <div className="mt-auto flex items-center justify-between">
            <div className="text-xs opacity-60 leading-tight">Alexander L.<br/>Head of Perf.</div>
        </div>
      </div>

      {/* Case 3: Agency */}
      <div className="col-span-1 md:col-span-4 bg-brand-darkblue text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[300px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase opacity-60">Agency</span>
          <div className="h-6 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" 
              className="h-full w-auto" 
              alt="AdParlor"
              loading="lazy" 
            />
          </div>
        </div>
        <p className="text-xl font-medium leading-tight mb-6">Rockyt has made high-volume campaign management seamless</p>
        <div className="mt-auto flex items-center justify-between">
            <div className="text-xs opacity-60 leading-tight">Sidharth Sharma<br/>Campaign Mgr</div>
        </div>
      </div>

      {/* Stats Row */}
      {COMPANY_STATS.map((stat, index) => (
        <div key={index} className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
            <div className={`text-5xl font-semibold tracking-tighter mb-2 text-brand-${stat.color}`}>
              {stat.value}
            </div>
            <p className="text-lg font-bold text-white font-serif tracking-wide uppercase leading-snug mt-2 whitespace-pre-line">
              {stat.label}
            </p>
        </div>
      ))}

      {/* Customers Strip - Updated Visual */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[32px] p-8 md:p-16 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-x-24 md:gap-y-16 w-full max-w-6xl">
            {CUSTOMER_LOGOS.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                className={`h-8 md:h-10 w-auto object-contain ${logo.name === 'AdParlor' ? 'brightness-0' : ''}`}
                alt={logo.alt} 
                loading="lazy" 
              />
            ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div 
        onClick={onBookDemo}
        className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[32px] p-8 flex items-center justify-center hover:border-white/40 transition-colors group cursor-pointer min-h-[160px]"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onBookDemo()}
      >
        <h3 className="text-2xl font-semibold tracking-tight text-gray-400 group-hover:text-white transition-colors">Book demo</h3>
      </div>
      
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 text-white rounded-[32px] p-8 flex flex-col items-center justify-center gap-2 min-h-[160px]">
        <div className="text-4xl font-semibold text-brand-yellow">14</div>
        <div className="text-sm font-medium">days free trial</div>
        <div className="flex gap-2 mt-2">
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Cancel anytime</span>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">No credit card</span>
        </div>
      </div>

      <div 
        onClick={onBookDemo}
        className="col-span-1 md:col-span-4 bg-brand-yellow text-brand-black rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] transition-colors cursor-pointer min-h-[160px] btn-hover-skew"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onBookDemo()}
      >
        <h3 className="text-2xl font-semibold tracking-tight"><span>Book demo</span></h3>
      </div>
    </div>
  );
};

export default BentoGrid;
