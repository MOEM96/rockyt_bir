import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { COMPANY_STATS, CUSTOMER_LOGOS, CASE_STUDIES, EXTERNAL_LINKS, CAL_CONFIG } from '../constants/index';
import { usePrefersReducedMotion } from '../hooks/index';

const BentoGrid: React.FC<DemoBookingProps> = ({ onBookDemo, onGetStarted }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Prepare case studies for marquee (duplicate for seamless loop)
  // We use specific case studies from the design: Keiki, Loop, AdParlor
  const showcaseStudies = CASE_STUDIES.filter(c => ['keiki', 'loop', 'adparlor'].includes(c.id));
  const marqueeStudies = [...showcaseStudies, ...showcaseStudies, ...showcaseStudies]; // Triple for smoothness

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-min relative z-10 font-poppins pb-20">
      
      {/* 1. Social Proof / Video (Full Width) - KEPT AS IS */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
         <div className="w-full md:w-5/12 relative z-10 flex flex-col items-start text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                See Why 15,000+ Brands Trust Rockyt
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Stop guessing. Start scaling. See how top DTC brands use automation to cut CPA by 22% and increase ROAS by 40% in just 7 days.
            </p>
            <div className="flex items-center gap-3 md:gap-4 bg-white/5 pr-4 md:pr-6 pl-2 py-2 rounded-full border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors w-full md:w-auto">
                <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=8" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">Join the top 1% of advertisers</span>
            </div>
         </div>

         <div className="w-full md:w-7/12 relative z-10">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full bg-black relative aspect-video transform group-hover:scale-[1.02] transition-transform duration-500">
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
      <div className="col-span-1 md:col-span-12 flex flex-col items-center text-center mt-6 md:mt-8 mb-2">
          <h2 className="text-xl md:text-3xl font-bold text-white px-4">
              According to Meta <span className="text-red-500">20-50%</span> of ad-spend is wasted
          </h2>
      </div>

      {/* Pain Cards */}
      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <iconify-icon icon="solar:gallery-remove-bold" class="text-red-500 text-xl md:text-2xl"></iconify-icon>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Creative Fatigue</h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Limited & Poor Creatives. Your ads die faster than you can make them.
          </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:graph-down-bold" class="text-red-500 text-xl md:text-2xl"></iconify-icon>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Delayed Analytics</h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Inaccurate & Delayed Data. Making blind decisions on yesterday's news.
          </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:hourglass-line-bold" class="text-red-500 text-xl md:text-2xl"></iconify-icon>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Slow Optimizations</h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Manual Testing. Reacting too late to market changes and bleeding budget.
          </p>
      </div>


      {/* 3. SOLUTION: CREATIVES (Full Width) */}
      <div className="col-span-1 md:col-span-12 bg-[#FFE241] rounded-[24px] md:rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg text-black">
         <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-[10px] font-bold uppercase tracking-wider mb-4 border border-black/10 w-fit">
                <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon> AI Creative Studio
             </div>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Generate Evergreen Winning Creatives in Mins
             </h3>
             <p className="text-black/70 font-medium leading-relaxed text-sm md:text-base">
                Access Shutterstock Library, 5+ AI tools, and a built-in editor. Create AI UGC, Product Images, Voice overs, Reels, Hooks, Ad Copy, and Memes in minutes.
             </p>
         </div>
         <div className="w-full md:w-1/2 relative z-10">
             {/* Interactive Visual Container */}
             <div className="w-full h-[300px] md:h-[350px] bg-[#0A0A0A] rounded-xl md:rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col relative group/studio transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Window Header */}
                <div className="h-6 md:h-8 bg-[#141414] border-b border-white/5 flex items-center px-3 md:px-4 gap-1.5 md:gap-2 shrink-0">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80"></div>
                    <div className="ml-auto text-[9px] md:text-[10px] text-gray-600 font-mono">Rockyt Studio v2.0</div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-10 md:w-14 bg-[#111] border-r border-white/5 flex flex-col items-center py-3 md:py-4 gap-4 md:gap-6 shrink-0 z-10">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center border border-brand-yellow/20">
                            <iconify-icon icon="solar:magic-stick-3-bold" class="text-sm md:text-lg"></iconify-icon>
                        </div>
                        <div className="w-px h-3 md:h-4 bg-white/5"></div>
                        <iconify-icon icon="solar:gallery-bold" class="text-gray-600 hover:text-white transition-colors text-lg md:text-xl"></iconify-icon>
                        <iconify-icon icon="solar:clapperboard-play-bold" class="text-gray-600 hover:text-white transition-colors text-lg md:text-xl"></iconify-icon>
                        <iconify-icon icon="solar:text-square-bold" class="text-gray-600 hover:text-white transition-colors text-lg md:text-xl"></iconify-icon>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 p-3 md:p-4 relative bg-[#050505] flex flex-col gap-3 md:gap-4">
                        {/* Prompt Input */}
                        <div className="w-full h-8 md:h-10 bg-[#1A1A1A] rounded-lg border border-white/10 flex items-center px-2 md:px-3 gap-2 md:gap-3 shrink-0">
                            <span className="text-brand-blue font-bold text-[10px] md:text-xs">PROMPT</span>
                            <div className="h-3 md:h-4 w-px bg-white/10"></div>
                            <span className="text-gray-400 text-[10px] md:text-xs truncate typing-cursor w-full">Generate viral nike sneaker ad...</span>
                            <button className="ml-auto bg-brand-blue text-white px-2 py-0.5 md:px-3 md:py-1 rounded text-[9px] md:text-[10px] font-bold hover:bg-brand-blue/80 transition-colors shrink-0">
                                GEN
                            </button>
                        </div>

                        {/* Asset Grid */}
                        <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 min-h-0">
                            {/* Image Generation */}
                            <div className="bg-[#111] rounded-lg md:rounded-xl border border-white/5 relative overflow-hidden group/item hover:border-brand-yellow/30 transition-colors">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-60 group-hover/item:opacity-100 transition-opacity duration-500 scale-105" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                                    <span className="text-[9px] md:text-[10px] text-white font-medium">Product</span>
                                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                                        <iconify-icon icon="simple-icons:midjourney" class="text-white text-[9px] md:text-[10px]"></iconify-icon>
                                        <span className="text-[8px] text-gray-300 hidden md:inline">v6.0</span>
                                    </div>
                                </div>
                            </div>

                            {/* Video Generation */}
                            <div className="bg-[#111] rounded-lg md:rounded-xl border border-white/5 relative overflow-hidden group/item hover:border-brand-blue/30 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover/item:scale-110 transition-transform">
                                        <iconify-icon icon="solar:play-bold" class="text-white ml-0.5 text-xs md:text-base"></iconify-icon>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                                    <span className="text-[9px] md:text-[10px] text-white font-medium">Video</span>
                                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                                        <iconify-icon icon="simple-icons:openai" class="text-white text-[9px] md:text-[10px]"></iconify-icon>
                                        <span className="text-[8px] text-gray-300 hidden md:inline">Sora</span>
                                    </div>
                                </div>
                            </div>

                            {/* Copy Generation */}
                            <div className="bg-[#111] rounded-lg md:rounded-xl border border-white/5 p-2 md:p-3 relative overflow-hidden group/item hover:border-brand-pink/30 transition-colors">
                                <div className="space-y-1.5 md:space-y-2">
                                    <div className="h-1 md:h-1.5 w-1/3 bg-gray-700 rounded-full"></div>
                                    <div className="h-1 md:h-1.5 w-full bg-gray-800 rounded-full"></div>
                                    <div className="h-1 md:h-1.5 w-5/6 bg-gray-800 rounded-full"></div>
                                    <div className="h-1 md:h-1.5 w-4/5 bg-gray-800 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                                        <iconify-icon icon="simple-icons:anthropic" class="text-white text-[9px] md:text-[10px]"></iconify-icon>
                                        <span className="text-[8px] text-gray-300 hidden md:inline">Claude</span>
                                </div>
                            </div>

                            {/* Voice Generation */}
                            <div className="bg-[#111] rounded-lg md:rounded-xl border border-white/5 relative overflow-hidden group/item hover:border-green-500/30 transition-colors flex items-center justify-center">
                                <div className="flex items-center gap-1">
                                    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-brand-yellow rounded-full animate-pulse"></div>
                                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-brand-yellow rounded-full animate-pulse delay-75"></div>
                                    <div className="w-0.5 md:w-1 h-3 md:h-4 bg-brand-yellow rounded-full animate-pulse delay-150"></div>
                                    <div className="w-0.5 md:w-1 h-3.5 md:h-5 bg-brand-yellow rounded-full animate-pulse delay-100"></div>
                                </div>
                                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                                        <span className="text-[9px] md:text-[10px] text-white">11</span>
                                        <span className="text-[8px] text-gray-300 hidden md:inline">Labs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>


      {/* 4. SOLUTION: ANALYTICS (Full Width) - Redesigned Dashboard */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-blue/20 w-fit">
                <iconify-icon icon="solar:chart-2-bold"></iconify-icon> Advanced Analytics
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Analytics That Bring Customers, Not Confusion
             </h3>
             <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                Overwhelmed by multiple ad managers? Get one real-time view revealing the full customer journey. Simple, data-driven recommendations to know exactly what to scale.
             </p>
         </div>
         <div className="w-full md:w-1/2 relative z-10">
             {/* Dashboard Visualization */}
             <div className="rounded-xl md:rounded-2xl bg-[#0F0F0F] border border-white/10 p-4 md:p-6 shadow-2xl relative overflow-hidden group-hover:border-brand-blue/30 transition-colors duration-500">
                 {/* Background Grid Pattern */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4450F2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 {/* Dashboard Header */}
                 <div className="flex justify-between items-center mb-4 md:mb-6 relative z-10 border-b border-white/5 pb-3 md:pb-4">
                     <div className="flex items-center gap-2 md:gap-3">
                         <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                         <span className="text-xs md:text-sm font-bold text-white tracking-wide">Live Performance</span>
                     </div>
                     <div className="flex gap-1.5 md:gap-2">
                          <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-gray-400 border border-white/5">Today</span>
                          <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-brand-blue/20 text-[9px] md:text-[10px] text-brand-blue border border-brand-blue/20">Last 7D</span>
                     </div>
                 </div>

                 {/* ROAS Highlight */}
                 <div className="flex items-end gap-3 md:gap-4 mb-6 md:mb-8 relative z-10">
                     <div>
                         <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Total ROAS</div>
                         <div className="text-4xl md:text-5xl font-black text-white tracking-tighter flex items-center gap-2">
                             4.82
                             <iconify-icon icon="solar:trending-up-bold" class="text-green-400 text-xl md:text-2xl"></iconify-icon>
                         </div>
                     </div>
                     <div className="pb-1.5 md:pb-2">
                         <span className="text-green-400 text-xs md:text-sm font-bold bg-green-400/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full border border-green-400/20">+32.4%</span>
                     </div>
                 </div>

                 {/* Secondary Metrics */}
                 <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8 relative z-10">
                      <div className="bg-white/5 rounded-lg md:rounded-xl p-2 md:p-3 border border-white/5">
                          <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold mb-0.5 md:mb-1">Spend</div>
                          <div className="text-base md:text-lg font-bold text-white">$14.2k</div>
                      </div>
                      <div className="bg-white/5 rounded-lg md:rounded-xl p-2 md:p-3 border border-white/5">
                          <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold mb-0.5 md:mb-1">Revenue</div>
                          <div className="text-base md:text-lg font-bold text-white">$68.5k</div>
                      </div>
                      <div className="bg-white/5 rounded-lg md:rounded-xl p-2 md:p-3 border border-white/5">
                          <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold mb-0.5 md:mb-1">CPA</div>
                          <div className="text-base md:text-lg font-bold text-white">$12.40</div>
                      </div>
                 </div>

                 {/* Simple Chart Visualization */}
                 <div className="relative h-20 md:h-24 w-full z-10">
                      {/* Chart Line SVG */}
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                          <defs>
                              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#4450F2" stopOpacity="0.5"/>
                                  <stop offset="100%" stopColor="#4450F2" stopOpacity="0"/>
                              </linearGradient>
                          </defs>
                          <path d="M0,80 C20,75 40,85 60,60 C80,40 100,50 120,30 C140,10 160,20 180,40 C200,60 220,50 240,20 C260,-10 280,10 300,5" fill="url(#chartGradient)" stroke="none" className="opacity-30" />
                          <path d="M0,80 C20,75 40,85 60,60 C80,40 100,50 120,30 C140,10 160,20 180,40 C200,60 220,50 240,20 C260,-10 280,10 300,5" fill="none" stroke="#4450F2" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                      </svg>
                      
                      {/* Data Point Tooltip Simulation */}
                      <div className="absolute top-[10%] right-[20%] bg-[#1A1A1A] border border-brand-blue/30 px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-xl flex flex-col items-center transform scale-90 md:scale-100 origin-bottom">
                           <style>{`
                              @keyframes float-tooltip {
                                  0%, 100% { transform: translateY(0); }
                                  50% { transform: translateY(-5px); }
                              }
                           `}</style>
                           <div style={{ animation: 'float-tooltip 3s ease-in-out infinite' }} className="flex flex-col items-center">
                               <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase">ROAS</span>
                               <span className="text-xs md:text-sm font-bold text-white">5.1x</span>
                               <div className="w-2 h-2 bg-[#1A1A1A] border-r border-b border-brand-blue/30 transform rotate-45 -mt-1 translate-y-1"></div>
                           </div>
                      </div>
                 </div>
             </div>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
      </div>


      {/* 5. SOLUTION: OPTIMIZATION (Full Width) - Restructured Layout */}
      <div className="col-span-1 md:col-span-12 bg-[#1D2E5C] text-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 overflow-hidden relative group border border-white/10 shadow-2xl flex flex-col gap-8 md:gap-10">
          
          {/* Header Section */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-[10px] font-bold uppercase tracking-wider mb-4 md:mb-6 border border-blue-400/30">
                <iconify-icon icon="solar:shield-check-bold"></iconify-icon> 24/7 Budget Protection
              </div>
              <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Cut Wasted Ad Spend by 90%</h3>
              <p className="text-blue-100 text-sm md:text-lg font-medium leading-relaxed opacity-90 max-w-2xl">
                  Humans react after performance drops. Rockyt’s AI reacts <span className="text-white font-bold underline decoration-blue-400 underline-offset-4">while it's happening</span>. We leverage advanced ML models to audit your account & maximize performance on multiple levels.
              </p>
          </div>

          {/* Optimizations Horizontal Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full">
              <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-0 md:mb-4 border border-blue-400/20 shrink-0">
                      <iconify-icon icon="solar:users-group-rounded-bold" class="text-blue-300 text-xl md:text-2xl"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg mb-1 md:mb-2">Audience</h4>
                    <p className="text-xs md:text-sm text-blue-100/70 leading-relaxed">Adjusts targeting (audiences, interests, locations) for best results.</p>
                  </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-0 md:mb-4 border border-blue-400/20 shrink-0">
                      <iconify-icon icon="solar:magic-stick-3-bold" class="text-blue-300 text-xl md:text-2xl"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg mb-1 md:mb-2">Creative</h4>
                    <p className="text-xs md:text-sm text-blue-100/70 leading-relaxed">Pauses fatigue creatives and scales winning variations based on ROAS.</p>
                  </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-0 md:mb-4 border border-blue-400/20 shrink-0">
                      <iconify-icon icon="solar:globus-bold" class="text-blue-300 text-xl md:text-2xl"></iconify-icon>
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-base md:text-lg mb-1 md:mb-2">Platform</h4>
                     <p className="text-xs md:text-sm text-blue-100/70 leading-relaxed">Shift spend instantly between Meta, Google, TikTok, and Snapchat.</p>
                  </div>
              </div>
          </div>

          {/* Full Width Visual */}
          <div className="relative z-10 w-full h-[250px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-0 md:mt-2 group-hover:scale-[1.01] transition-transform duration-700">
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               >
                 <source src="https://cdn.prod.website-files.com/6798ff28c64131df111e57cc%2F68856e2581a36b66731c485a_OptimizationFolder-transcode.mp4" type="video/mp4" />
               </video>
               {/* Overlay Gradient for integration */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#1D2E5C]/50 to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      </div>

      {/* 6. NEW: MULTI-PLATFORM (Full Width) - Interactive Visualization */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12 overflow-hidden relative group hover:border-white/20 transition-all duration-500 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-wider mb-4 md:mb-6 border border-brand-purple/20">
                    <iconify-icon icon="solar:layers-minimalistic-bold"></iconify-icon> Unified Management
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                      Manage 11+ Platforms in One View
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                      Total control and visibility. Easily understand your data and scale across all major advertising channels without the headache of switching between multiple dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                      {['Meta', 'Google', 'TikTok', 'Snapchat', 'LinkedIn', 'Spotify', 'Bing', 'Pinterest'].map((p) => (
                          <span key={p} className="px-2 py-1 md:px-3 md:py-1 bg-white/5 rounded-lg text-[10px] md:text-xs text-gray-400 border border-white/5 hover:bg-white/10 transition-colors cursor-default">{p}</span>
                      ))}
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-white/5 rounded-lg text-[10px] md:text-xs text-brand-yellow border border-white/5">+3 more</span>
                  </div>
               </div>
               
               {/* Interactive Network Graph Visual */}
               <div className="relative h-[280px] md:h-[400px] w-full flex items-center justify-center bg-white/5 rounded-xl md:rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                    <style>{`
                        @keyframes float-1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-5px, -10px); } }
                        @keyframes float-2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(5px, 8px); } }
                        @keyframes float-3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-8px, 5px); } }
                        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
                        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
                        .animate-float-3 { animation: float-3 4.5s ease-in-out infinite; }
                    `}</style>
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff10 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    
                    {/* Connecting Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                        <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                    {/* Central Hub Node */}
                    <div className="relative z-20 w-16 h-16 md:w-24 md:h-24 bg-[#161616] rounded-full border-2 border-brand-purple shadow-[0_0_50px_rgba(139,92,246,0.3)] flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-brand-purple/50 animate-ping opacity-20"></div>
                        <span className="font-black text-white text-base md:text-xl tracking-tight">Rockyt</span>
                    </div>

                    {/* Orbiting Platform Icons */}
                    <div className="absolute top-[20%] left-[20%] p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-1">
                        <iconify-icon icon="logos:meta-icon" width="16" class="md:w-6"></iconify-icon>
                    </div>
                    <div className="absolute top-[20%] right-[20%] p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-2">
                        <iconify-icon icon="logos:google-icon" width="16" class="md:w-6"></iconify-icon>
                    </div>
                    <div className="absolute bottom-[20%] left-[20%] p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-3">
                        <iconify-icon icon="logos:tiktok-icon" width="16" class="md:w-6"></iconify-icon>
                    </div>
                    <div className="absolute bottom-[20%] right-[20%] p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-1">
                        <iconify-icon icon="logos:linkedin-icon" width="16" class="md:w-6"></iconify-icon>
                    </div>
                    <div className="absolute top-[50%] right-[10%] transform -translate-y-1/2 p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-2">
                        <iconify-icon icon="fa-brands:snapchat-ghost" class="text-yellow-400 text-lg md:text-2xl"></iconify-icon>
                    </div>
                    <div className="absolute top-[50%] left-[10%] transform -translate-y-1/2 p-2 md:p-3 bg-[#1A1A1A] rounded-lg md:rounded-xl border border-white/10 shadow-xl animate-float-3">
                        <iconify-icon icon="logos:pinterest" width="16" class="md:w-6"></iconify-icon>
                    </div>
               </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      </div>

      {/* 7. SETUP (Col 12) - Redesigned to Dark Theme */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[24px] md:rounded-[32px] p-8 md:p-16 text-center text-white flex flex-col items-center justify-center relative overflow-hidden">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
              Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 tracking-tight max-w-3xl">
              1 Min Set-up. 2x ROAS.<br/>3 Simple Steps.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl relative z-10">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-xl md:text-2xl font-black mb-4 md:mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Connect</h3>
                  <p className="text-gray-500 text-sm md:text-base font-medium">Connect your ad accounts in one click.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-xl md:text-2xl font-black mb-4 md:mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      2
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Import</h3>
                  <p className="text-gray-500 text-sm md:text-base font-medium">Import your running campaigns from any ad platform.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-xl md:text-2xl font-black mb-4 md:mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      3
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Scale</h3>
                  <p className="text-gray-500 text-sm md:text-base font-medium">Let Rockyt protect your budget & scale profitably.</p>
              </div>
          </div>
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none -z-0"></div>
      </div>

      {/* 8. CASE STUDIES - Animated Auto Scroll */}
      <div className="col-span-1 md:col-span-12 text-center mt-6 md:mt-8 mb-2 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-white">They know how it works</h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">Who can explain it better than our users?</p>
      </div>

      <div className="col-span-1 md:col-span-12 overflow-hidden w-full relative -mx-4 md:mx-0 mask-gradient-x">
         <style>{`
            .mask-gradient-x {
               mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
               -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            @keyframes marquee {
               0% { transform: translateX(0); }
               100% { transform: translateX(-33.33%); } /* Move 1/3 of the width (original set) */
            }
            .animate-marquee {
               animation: marquee 40s linear infinite;
            }
            .animate-marquee:hover {
               animation-play-state: paused;
            }
         `}</style>
         
         <div className="flex gap-4 md:gap-6 w-max animate-marquee py-4 px-4 md:px-0">
            {marqueeStudies.map((cs, idx) => {
               // Render logic based on original design but mapped for marquee
               // We force a consistent 'small' card style for the marquee to ensure alignment
               
               // Customize card based on type
               let bgColor = 'bg-[#1D2E5C]'; // Default AdParlor style
               let textColor = 'text-white';
               
               if (cs.id === 'keiki') {
                  bgColor = 'bg-[#8B5CF6]';
               } else if (cs.id === 'loop') {
                  bgColor = 'bg-white';
                  textColor = 'text-black';
               }

               return (
                  <div 
                     key={`${cs.id}-${idx}`}
                     className={`w-[280px] md:w-[400px] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col flex-shrink-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white/5 ${bgColor} ${textColor}`}
                  >
                     <div className="mb-4 md:mb-6 relative z-10 h-6 md:h-8">
                         <img 
                           src={cs.logo} 
                           alt="Logo" 
                           className={`h-full w-auto object-contain ${cs.id === 'loop' ? '' : 'brightness-0 invert'}`} 
                        />
                     </div>
                     
                     <div className="rounded-xl overflow-hidden mb-4 md:mb-6 aspect-video shadow-lg group-hover:scale-[1.03] transition-transform duration-500 bg-black/10">
                        <img 
                           src={cs.image} 
                           alt="" 
                           className="w-full h-full object-cover" 
                           loading="lazy"
                        />
                     </div>

                     <div className="relative z-10 mt-auto">
                        <p className="text-base md:text-lg font-medium leading-tight mb-4">
                           {cs.title}
                        </p>
                        <button 
                           className={`px-4 py-2 md:px-5 md:py-2 rounded-full font-bold text-xs md:text-sm transition-colors ${cs.id === 'loop' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
                           data-cal-link={CAL_CONFIG.link}
                           data-cal-namespace={CAL_CONFIG.namespace}
                           data-cal-config={JSON.stringify(CAL_CONFIG.config)}
                        >
                           Read Case Study
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>


      {/* 9. Stats Row */}
      {COMPANY_STATS.map((stat, index) => (
        <div key={index} className="col-span-1 md:col-span-4 bg-[#161616] rounded-[24px] md:rounded-[32px] p-6 md:p-8 aspect-square md:aspect-square flex flex-col items-center justify-center text-center border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
            <div className={`text-4xl md:text-6xl font-semibold tracking-tighter mb-2 md:mb-4 text-brand-${stat.color} group-hover:scale-110 transition-transform duration-500`}>
              {stat.value}
            </div>
            <div className="text-lg md:text-2xl font-bold text-white leading-tight">
               {stat.label.split('\n').map((line, i) => (
                   <React.Fragment key={i}>
                       {line}<br/>
                   </React.Fragment>
               ))}
            </div>
        </div>
      ))}

      {/* 10. Customers */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="text-lg md:text-xl font-bold text-black mb-6 md:mb-8 relative z-10 text-center">Trusted by over 15,000 businesses</div>
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl relative z-10">
            {CUSTOMER_LOGOS.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                className={`h-6 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${logo.name === 'AdParlor' ? 'brightness-0' : ''}`}
                alt={logo.alt}
                loading="lazy"
                decoding="async" 
              />
            ))}
         </div>
      </div>

      {/* 11. Bottom CTA */}
      <div 
        className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group min-h-[140px] md:min-h-[180px]" 
        data-cal-link={CAL_CONFIG.link}
        data-cal-namespace={CAL_CONFIG.namespace}
        data-cal-config={JSON.stringify(CAL_CONFIG.config)}
      >
         <h3 className="text-xl md:text-3xl font-bold text-white group-hover:scale-105 transition-transform text-center">
            Stop Burning Money.<br/>Book a Demo.
         </h3>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#161616] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] border border-white/5 hover:border-white/20 transition-colors">
          <div className="text-4xl md:text-5xl font-bold text-[#FFE241] mb-2">14</div>
          <div className="text-white font-medium text-base md:text-lg mb-3 md:mb-4">Days Free Trial</div>
          <div className="flex gap-2">
             <span className="bg-white/10 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs text-white">Full Access</span>
             <span className="bg-white/10 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs text-white">No Commitments</span>
          </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex items-center justify-center hover:bg-[#fcd34d] hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[140px] md:min-h-[180px] shadow-lg hover:shadow-yellow-400/30" onClick={onGetStarted}>
          <h3 className="text-xl md:text-3xl font-bold text-black flex items-center gap-2">
            Start Free Trial <iconify-icon icon="solar:arrow-right-linear" class="text-lg md:text-xl"></iconify-icon>
          </h3>
      </div>

    </div>
  );
};

export default BentoGrid;