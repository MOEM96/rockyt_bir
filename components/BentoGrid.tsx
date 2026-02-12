import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { COMPANY_STATS, CUSTOMER_LOGOS, CASE_STUDIES, EXTERNAL_LINKS, CAL_CONFIG } from '../constants/index';

const BentoGrid: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-10 font-poppins pb-20">
      
      {/* 1. Social Proof / Video (Full Width) - KEPT AS IS */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
         <div className="w-full md:w-5/12 relative z-10 flex flex-col items-start text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                See Why 15,000+ Brands Trust Rockyt
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Stop guessing. Start scaling. See how top DTC brands use automation to cut CPA by 22% and increase ROAS by 40% in just 7 days.
            </p>
            <div className="flex items-center gap-4 bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=8" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                </div>
                <span className="text-sm font-semibold text-white">Join the top 1% of advertisers</span>
            </div>
         </div>

         <div className="w-full md:w-7/12 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full bg-black relative aspect-video transform group-hover:scale-[1.02] transition-transform duration-500">
                <style>{`
                    wistia-player[media-id='kwbq8jkoy8']:not(:defined) { 
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kwbq8jkoy8/swatch'); 
                        display: block; 
                        filter: blur(5px); 
                        padding-top:56.25%; 
                    }
                `}</style>
                <wistia-player media-id="kwbq8jkoy8" aspect="1.7777777777777777"></wistia-player>
            </div>
         </div>
      </div>

      {/* 2. THE PAIN SECTION */}
      <div className="col-span-1 md:col-span-12 flex flex-col items-center text-center mt-8 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
              According to Meta <span className="text-red-500">20-50%</span> of ad-spend is wasted
          </h2>
      </div>

      {/* Pain Card 1: Creative Fatigue */}
      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <iconify-icon icon="solar:gallery-remove-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Creative Fatigue</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Limited & Poor Creatives. Your ads die faster than you can make them.
          </p>
      </div>

      {/* Pain Card 2: Delayed Analytics */}
      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:graph-down-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Delayed Analytics</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Inaccurate & Delayed Data. Making blind decisions on yesterday's news.
          </p>
      </div>

      {/* Pain Card 3: Slow Optimizations */}
      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:hourglass-line-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Slow Optimizations</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Manual Testing. Reacting too late to market changes and bleeding budget.
          </p>
      </div>


      {/* 3. SOLUTION: CREATIVES (Col 6) */}
      <div className="col-span-1 md:col-span-6 bg-[#FFE241] rounded-[32px] p-8 flex flex-col min-h-[420px] group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg text-black">
         <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-[10px] font-bold uppercase tracking-wider mb-4 border border-black/10">
                <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon> AI Creative Studio
             </div>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Generate Evergreen Winning Creatives in Mins
             </h3>
             <p className="text-black/70 font-medium mb-8 leading-relaxed">
                Access Shutterstock Library, 5+ AI tools, and a built-in editor. Create AI UGC, Product Images, Voice overs, Reels, Hooks, Ad Copy, and Memes in minutes.
             </p>

             <div className="grid grid-cols-2 gap-3">
                 {[
                     { icon: 'solar:videocamera-record-bold', label: 'AI UGC Avatars' },
                     { icon: 'solar:gallery-wide-bold', label: 'Shutterstock Lib' },
                     { icon: 'solar:microphone-3-bold', label: 'AI Voice Overs' },
                     { icon: 'solar:pen-new-square-bold', label: 'AI Ad Copy' },
                 ].map((tool, i) => (
                     <div key={i} className="bg-black/5 border border-black/5 rounded-xl p-3 flex items-center gap-2 transition-colors hover:bg-black/10">
                         <iconify-icon icon={tool.icon} width="20"></iconify-icon>
                         <span className="text-xs font-bold">{tool.label}</span>
                     </div>
                 ))}
             </div>
         </div>
         <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/40 blur-3xl rounded-full pointer-events-none"></div>
      </div>


      {/* 4. SOLUTION: ANALYTICS (Col 6) */}
      <div className="col-span-1 md:col-span-6 bg-[#161616] border border-white/10 rounded-[32px] p-8 flex flex-col min-h-[420px] group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-blue/20">
                <iconify-icon icon="solar:chart-2-bold"></iconify-icon> Advanced Analytics
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Analytics That Bring Customers, Not Confusion
             </h3>
             <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                Overwhelmed by multiple ad managers? Get one real-time view revealing the full customer journey. Simple, data-driven recommendations to know exactly what to scale.
             </p>

             <div className="bg-[#050505] rounded-xl p-5 border border-white/10 mt-auto transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                        <iconify-icon icon="solar:globus-bold"></iconify-icon> Cross-Channel View
                    </span>
                    <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full animate-pulse">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="text-[10px] text-gray-500 mb-1 uppercase font-bold">LTV</div>
                        <div className="text-xl font-bold text-white">$450</div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20">
                        <div className="text-[10px] text-brand-yellow mb-1 uppercase font-bold">ROAS</div>
                        <div className="text-xl font-bold text-brand-yellow">4.2x</div>
                    </div>
                    <div className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="text-[10px] text-gray-500 mb-1 uppercase font-bold">CAC</div>
                        <div className="text-xl font-bold text-white">$32</div>
                    </div>
                </div>
             </div>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
      </div>


      {/* 5. SOLUTION: OPTIMIZATION (Full Width) */}
      <div className="col-span-1 md:col-span-12 bg-[#1D2E5C] text-white rounded-[32px] p-8 md:p-12 overflow-hidden relative group border border-white/10 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-[10px] font-bold uppercase tracking-wider mb-6 border border-blue-400/30">
                    <iconify-icon icon="solar:shield-check-bold"></iconify-icon> 24/7 Budget Protection
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Cut Wasted Ad Spend by 90%</h3>
                  <p className="text-blue-100 text-lg mb-8 font-medium leading-relaxed opacity-90">
                      Humans react after performance drops. Rockyt’s AI reacts <span className="text-white font-bold underline decoration-blue-400 underline-offset-4">while it's happening</span>. We leverage advanced ML models to audit your account & maximize performance on multiple levels.
                  </p>
                  
                  <div className="space-y-5">
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-400/20">
                              <iconify-icon icon="solar:users-group-rounded-bold" class="text-blue-300 text-lg"></iconify-icon>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-base">Audience Optimizations</h4>
                              <p className="text-sm text-blue-200/70 mt-1">Adjusts targeting (audiences, interests, locations, placements) for best results in real-time.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-400/20">
                              <iconify-icon icon="solar:globus-bold" class="text-blue-300 text-lg"></iconify-icon>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-base">Platform Optimizations</h4>
                              <p className="text-sm text-blue-200/70 mt-1">Shift spend instantly between Meta, Google, TikTok, and Snapchat based on performance.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-400/20">
                              <iconify-icon icon="solar:magic-stick-3-bold" class="text-blue-300 text-lg"></iconify-icon>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-base">Creative Optimizations</h4>
                              <p className="text-sm text-blue-200/70 mt-1">Tests and rotates new ad copy & formats. Pauses losers instantly and scales winners.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Visual Side */}
              <div className="relative h-full min-h-[350px] bg-black/30 rounded-2xl border border-white/10 p-6 flex flex-col justify-center backdrop-blur-sm">
                   <div className="flex items-center justify-between mb-6">
                       <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">AI Optimization Log</span>
                       <div className="flex items-center gap-1.5">
                           <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                           <span className="text-[10px] text-green-400 font-bold uppercase">Active</span>
                       </div>
                   </div>
                   <div className="space-y-3 font-mono">
                       <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg backdrop-blur-md">
                           <iconify-icon icon="solar:close-circle-bold" class="text-red-500 text-lg"></iconify-icon>
                           <div className="text-xs text-white leading-relaxed">
                               <span className="text-red-400 font-bold">PAUSED:</span> Ad Set "Broad_v2"<br/>
                               <span className="opacity-60">Reason: CPA $45 > Target $30</span>
                           </div>
                       </div>
                       <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg backdrop-blur-md">
                           <iconify-icon icon="solar:check-circle-bold" class="text-green-500 text-lg"></iconify-icon>
                           <div className="text-xs text-white leading-relaxed">
                               <span className="text-green-400 font-bold">SCALED:</span> Ad "UGC_Hook_3"<br/>
                               <span className="opacity-60">Action: +20% Budget Increase</span>
                           </div>
                       </div>
                       <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-md">
                           <iconify-icon icon="solar:refresh-circle-bold" class="text-blue-400 text-lg animate-spin-slow"></iconify-icon>
                           <div className="text-xs text-white leading-relaxed">
                               <span className="text-blue-300 font-bold">SHIFTED:</span> Budget reallocation<br/>
                               <span className="opacity-60">Action: $500 Meta → TikTok</span>
                           </div>
                       </div>
                   </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      </div>

      {/* 6. SETUP (Col 12) */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[32px] p-8 md:p-16 text-center text-black flex flex-col items-center justify-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
              Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight max-w-3xl">
              1 Min Set-up. 2x ROAS.<br/>3 Simple Steps.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:bg-brand-yellow transition-all duration-300 shadow-xl shadow-gray-200/50 z-10">
                      1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Import</h3>
                  <p className="text-gray-500 font-medium">Connect your ad accounts in one click.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:bg-brand-yellow transition-all duration-300 shadow-xl shadow-gray-200/50 z-10">
                      2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect</h3>
                  <p className="text-gray-500 font-medium">Link your analytics and creative library.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:bg-brand-yellow transition-all duration-300 shadow-xl shadow-gray-200/50 z-10">
                      3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Optimize</h3>
                  <p className="text-gray-500 font-medium">Let AI protect your budget & scale profitably.</p>
              </div>
          </div>
      </div>

      {/* 7. THEY KNOW HOW IT WORKS (Case Studies) */}
      <div className="col-span-1 md:col-span-12 text-center mt-8 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">They know how it works</h2>
          <p className="text-gray-500 mt-2">Who can explain it better than our users?</p>
      </div>

      {/* Keiki */}
      <div className="col-span-1 md:col-span-4 bg-[#8B5CF6] text-white rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group hover:shadow-[0_10px_40px_rgba(139,92,246,0.4)] transition-all duration-500">
        <div className="mb-auto relative z-10">
          <h4 className="text-sm font-bold opacity-80 uppercase tracking-wider mb-2">Mobile App</h4>
          <div className="h-8 mb-6">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bb67180715f131e3e1e9_keiki_logotype.svg" 
              className="h-full w-auto brightness-0 invert" 
              alt="Keiki"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="rounded-xl overflow-hidden mb-6 aspect-video shadow-lg group-hover:scale-[1.03] transition-transform duration-500">
             <img 
                src={CASE_STUDIES.find(c => c.id === 'keiki')?.image} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
             />
          </div>
        </div>
        <div className="relative z-10">
           <p className="text-lg font-medium leading-tight mb-4">"We spend 30% less time managing ads and scaled 2.7x faster."</p>
           <p className="text-sm opacity-80 mb-6">Daryna Bondar, Head of Growth</p>
           <button 
             data-cal-link={CAL_CONFIG.link}
             data-cal-namespace={CAL_CONFIG.namespace}
             data-cal-config={JSON.stringify(CAL_CONFIG.config)}
             className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors"
           >
             Read Case Study
           </button>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
      </div>

      {/* Loop */}
      <div className="col-span-1 md:col-span-4 bg-white text-black rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
        <div className="mb-auto">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">E-commerce</h4>
          <div className="h-8 mb-6">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" 
              className="h-full w-auto" 
              alt="Loop"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-gray-100 shadow-md group-hover:scale-[1.03] transition-transform duration-500">
             <img 
                src={CASE_STUDIES.find(c => c.id === 'loop')?.image} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
             />
          </div>
        </div>
        <div>
           <p className="text-lg font-medium leading-tight mb-4">"Rockyt helped us scale 200% faster with complete automation."</p>
           <p className="text-sm text-gray-500 mb-6">Alexander L., Global Head of Performance</p>
           <button 
             data-cal-link={CAL_CONFIG.link}
             data-cal-namespace={CAL_CONFIG.namespace}
             data-cal-config={JSON.stringify(CAL_CONFIG.config)}
             className="bg-[#161616] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors"
           >
             Read Case Study
           </button>
        </div>
      </div>

      {/* AdParlor */}
      <div className="col-span-1 md:col-span-4 bg-[#1D2E5C] text-white rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group hover:shadow-[0_10px_40px_rgba(29,46,92,0.5)] transition-all duration-500">
        <div className="mb-auto relative z-10">
          <h4 className="text-sm font-bold opacity-80 uppercase tracking-wider mb-2">Agency</h4>
          <div className="h-8 mb-6">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" 
              className="h-full w-auto" 
              alt="AdParlor"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-white/10 shadow-lg group-hover:scale-[1.03] transition-transform duration-500">
             <img 
                src={CASE_STUDIES.find(c => c.id === 'adparlor')?.image} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
             />
          </div>
        </div>
        <div className="relative z-10">
           <p className="text-lg font-medium leading-tight mb-4">"High-volume campaign management is finally seamless."</p>
           <p className="text-sm opacity-80 mb-6">Sidharth Sharma, Senior Campaign Mgr</p>
           <button 
             data-cal-link={CAL_CONFIG.link}
             data-cal-namespace={CAL_CONFIG.namespace}
             data-cal-config={JSON.stringify(CAL_CONFIG.config)}
             className="bg-[#1D2E5C] border border-white text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-[#1D2E5C] transition-colors"
           >
             Read Case Study
           </button>
        </div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
      </div>

      {/* 6. Stats Row */}
      {COMPANY_STATS.map((stat, index) => (
        <div key={index} className="col-span-1 md:col-span-4 bg-[#161616] rounded-[32px] p-8 aspect-square flex flex-col items-center justify-center text-center border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
            <div className={`text-5xl md:text-6xl font-semibold tracking-tighter mb-4 text-brand-${stat.color} group-hover:scale-110 transition-transform duration-500`}>
              {stat.value}
            </div>
            <div className="text-xl md:text-2xl font-bold text-white leading-tight">
               {stat.label.split('\n').map((line, i) => (
                   <React.Fragment key={i}>
                       {line}<br/>
                   </React.Fragment>
               ))}
            </div>
        </div>
      ))}

      {/* 7. Customers */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[32px] p-12 flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="text-xl font-bold text-black mb-8 relative z-10">Trusted by over 15,000 businesses</div>
         <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl relative z-10">
            {CUSTOMER_LOGOS.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                className={`h-8 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${logo.name === 'AdParlor' ? 'brightness-0' : ''}`}
                alt={logo.alt}
                loading="lazy"
                decoding="async" 
              />
            ))}
         </div>
      </div>

      {/* 8. Bottom CTA */}
      <div 
        className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[32px] p-8 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group min-h-[180px]" 
        data-cal-link={CAL_CONFIG.link}
        data-cal-namespace={CAL_CONFIG.namespace}
        data-cal-config={JSON.stringify(CAL_CONFIG.config)}
      >
         <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:scale-105 transition-transform text-center">
            Stop Burning Money.<br/>Book a Demo.
         </h3>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#161616] rounded-[32px] p-8 flex flex-col items-center justify-center min-h-[180px] border border-white/5 hover:border-white/20 transition-colors">
          <div className="text-5xl font-bold text-[#FFE241] mb-2">14</div>
          <div className="text-white font-medium text-lg mb-4">Days Free Trial</div>
          <div className="flex gap-2">
             <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">Full Access</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">No Commitments</span>
          </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[180px] shadow-lg hover:shadow-yellow-400/30" onClick={() => window.location.href = EXTERNAL_LINKS.signup}>
          <h3 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2">
            Start Free Trial <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
          </h3>
      </div>

    </div>
  );
};

export default BentoGrid;