import React from 'react';

import { DemoBookingProps } from '../types/index';
import { COMPANY_STATS, CUSTOMER_LOGOS, CASE_STUDIES, CAL_CONFIG } from '../constants/index';


const BentoGrid: React.FC<DemoBookingProps> = ({ onGetStarted }) => {

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
                    {/* === REDESIGNED CREATIVE STUDIO VISUAL === */}
                    <style>{`
               @keyframes gen-progress { 0% { width: 0% } 60% { width: 85% } 100% { width: 100% } }
               .animate-gen { animation: gen-progress 2.5s ease-in-out infinite; }
               @keyframes shimmer-card { 0%,100% { opacity:.6 } 50% { opacity:1 } }
               .shimmer-1 { animation: shimmer-card 2s ease-in-out infinite; }
               .shimmer-2 { animation: shimmer-card 2s ease-in-out .4s infinite; }
               .shimmer-3 { animation: shimmer-card 2s ease-in-out .8s infinite; }
             `}</style>
                    <div className="w-full bg-[#0A0A0A] rounded-2xl shadow-2xl border border-black/20 overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500 group/studio">

                        {/* Top bar */}
                        <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                            <div className="ml-3 flex items-center gap-1.5 bg-white/5 rounded-md px-2 py-0.5 border border-white/5">
                                <iconify-icon icon="solar:magic-stick-3-bold" class="text-[#FFE241] text-[10px]"></iconify-icon>
                                <span className="text-[10px] text-gray-400 font-mono">Rockyt Creative Studio</span>
                            </div>
                            <div className="ml-auto flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-[9px] text-green-400 font-bold">LIVE</span>
                            </div>
                        </div>

                        {/* Prompt bar */}
                        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 bg-[#0D0D0D]">
                            <span className="text-[10px] font-black text-[#4450F2] uppercase tracking-widest shrink-0">AI Prompt</span>
                            <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-white/10 px-3 py-1.5 flex items-center gap-2">
                                <span className="text-[11px] text-gray-300 truncate">Generate a high-converting Nike sneaker ad for Instagram Reels...</span>
                                <span className="shrink-0 w-1 h-4 bg-white/60 rounded animate-pulse"></span>
                            </div>
                            <button className="shrink-0 bg-[#FFE241] text-black px-3 py-1.5 rounded-lg text-[10px] font-black hover:brightness-110 transition-all flex items-center gap-1">
                                <iconify-icon icon="solar:play-bold" class="text-[10px]"></iconify-icon> Generate
                            </button>
                        </div>

                        {/* Generation progress */}
                        <div className="px-4 py-2 bg-[#0A0A0A] border-b border-white/5 flex items-center gap-3">
                            <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider shrink-0">Generating</span>
                            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#4450F2] to-[#FFE241] rounded-full animate-gen"></div>
                            </div>
                            <span className="text-[9px] text-[#FFE241] font-bold shrink-0">4 assets</span>
                        </div>

                        {/* Asset grid */}
                        <div className="grid grid-cols-4 gap-2 p-3">

                            {/* Featured large card — Image Ad */}
                            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden border border-white/5 group/c shimmer-1" style={{ minHeight: '160px' }}>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                {/* Ad frame overlay */}
                                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                                    <iconify-icon icon="simple-icons:midjourney" class="text-white text-[9px]"></iconify-icon>
                                    <span className="text-[8px] text-white font-bold">MidJourney v6</span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2">
                                    <div className="text-[10px] font-black text-white mb-1">Product Image Ad</div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[8px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full border border-green-400/20 font-bold">✓ Ready</span>
                                        <span className="text-[8px] text-gray-400">1080×1080</span>
                                    </div>
                                </div>
                            </div>

                            {/* Video Reel */}
                            <div className="col-span-2 relative rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br from-indigo-950/80 to-purple-950/80 shimmer-2 flex flex-col items-center justify-center" style={{ minHeight: '76px' }}>
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 group/c hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:clapperboard-play-bold" class="text-white text-sm"></iconify-icon>
                                </div>
                                <span className="relative text-[9px] text-white font-bold">Reels / TikTok</span>
                                <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-black/50 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                                    <iconify-icon icon="simple-icons:openai" class="text-white text-[8px]"></iconify-icon>
                                    <span className="text-[7px] text-gray-300">Sora</span>
                                </div>
                            </div>

                            {/* Voiceover */}
                            <div className="col-span-1 rounded-xl border border-white/5 bg-[#111] flex flex-col items-center justify-center shimmer-3 p-2 gap-1" style={{ minHeight: '76px' }}>
                                <div className="flex items-end gap-0.5">
                                    {[2, 4, 3, 5, 2, 4, 3].map((h, i) => (
                                        <div key={i} className="w-0.5 bg-[#FFE241] rounded-full animate-pulse" style={{ height: `${h * 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                                <span className="text-[8px] text-gray-400 font-bold">Voiceover</span>
                                <span className="text-[7px] text-gray-600">ElevenLabs</span>
                            </div>

                            {/* Ad Copy */}
                            <div className="col-span-1 rounded-xl border border-white/5 bg-[#111] p-2 flex flex-col gap-1 shimmer-1" style={{ minHeight: '76px' }}>
                                <div className="h-1 w-2/3 bg-gray-700 rounded-full"></div>
                                <div className="h-1 w-full bg-gray-800 rounded-full"></div>
                                <div className="h-1 w-5/6 bg-gray-800 rounded-full"></div>
                                <div className="h-1 w-4/5 bg-gray-800 rounded-full"></div>
                                <div className="mt-auto flex items-center gap-1">
                                    <iconify-icon icon="simple-icons:anthropic" class="text-white text-[8px]"></iconify-icon>
                                    <span className="text-[7px] text-gray-500">Claude</span>
                                </div>
                            </div>

                        </div>

                        {/* AI tool pills footer */}
                        <div className="px-3 pb-3 flex items-center gap-2 flex-wrap">
                            {['UGC Video', 'Meme', 'Hook Generator', 'Ad Copy', 'Product Shot'].map(t => (
                                <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-400 hover:border-[#FFE241]/40 hover:text-[#FFE241] transition-colors cursor-default">{t}</span>
                            ))}
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
                    {/* === REDESIGNED ANALYTICS DASHBOARD VISUAL === */}
                    <style>{`
               @keyframes bar-grow-1 { from { height:0 } to { height:55% } }
               @keyframes bar-grow-2 { from { height:0 } to { height:75% } }
               @keyframes bar-grow-3 { from { height:0 } to { height:42% } }
               @keyframes bar-grow-4 { from { height:0 } to { height:88% } }
               @keyframes bar-grow-5 { from { height:0 } to { height:62% } }
               .bar-1 { animation: bar-grow-1 1s ease-out forwards; }
               .bar-2 { animation: bar-grow-2 1s .1s ease-out forwards; }
               .bar-3 { animation: bar-grow-3 1s .2s ease-out forwards; }
               .bar-4 { animation: bar-grow-4 1s .3s ease-out forwards; }
               .bar-5 { animation: bar-grow-5 1s .4s ease-out forwards; }
               @keyframes float-tip { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-4px) } }
               .float-tip { animation: float-tip 3s ease-in-out infinite; }
               @keyframes draw-line {
                 from { stroke-dashoffset: 400; }
                 to { stroke-dashoffset: 0; }
               }
               .draw-line { stroke-dasharray: 400; animation: draw-line 2s ease-out forwards; }
             `}</style>
                    <div className="rounded-2xl bg-[#0C0C0C] border border-white/10 overflow-hidden shadow-2xl group-hover:border-[#4450F2]/40 transition-colors duration-500 relative">

                        {/* dot-grid bg */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4450F2 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></span>
                                <span className="text-xs font-bold text-white">Unified Analytics</span>
                            </div>
                            <div className="flex gap-1.5">
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-gray-400 border border-white/5">7D</span>
                                <span className="px-2 py-0.5 rounded bg-[#4450F2]/20 text-[9px] text-[#4450F2] border border-[#4450F2]/20 font-bold">30D</span>
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-gray-400 border border-white/5">90D</span>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 relative z-10">

                            {/* ROAS + revenue row */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Total ROAS</div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-black text-white tracking-tighter">4.82</span>
                                        <span className="text-green-400 text-xs font-bold mb-0.5 bg-green-400/10 px-1.5 py-0.5 rounded-full border border-green-400/20">↑32%</span>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Revenue</div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-black text-white tracking-tighter">$68k</span>
                                        <span className="text-[#4450F2] text-xs font-bold mb-0.5 bg-[#4450F2]/10 px-1.5 py-0.5 rounded-full border border-[#4450F2]/20">+$14k</span>
                                    </div>
                                </div>
                            </div>

                            {/* Platform Attribution bars */}
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-3">Attribution by Platform</div>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Meta', pct: 88, color: '#4450F2', cls: 'bar-2', revenue: '$38.2k' },
                                        { label: 'Google', pct: 65, color: '#34D399', cls: 'bar-3', revenue: '$18.1k' },
                                        { label: 'TikTok', pct: 47, color: '#F472B6', cls: 'bar-4', revenue: '$9.4k' },
                                        { label: 'Snapchat', pct: 32, color: '#FFE241', cls: 'bar-5', revenue: '$2.8k' },
                                    ].map(p => (
                                        <div key={p.label} className="flex items-center gap-2">
                                            <span className="text-[9px] text-gray-400 font-bold w-14 shrink-0">{p.label}</span>
                                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${p.pct}%`, backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}60` }}></div>
                                            </div>
                                            <span className="text-[9px] text-gray-400 font-bold w-10 text-right shrink-0">{p.revenue}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trend chart + CPA pill */}
                            <div className="relative h-20 w-full">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4450F2" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#4450F2" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,70 C30,65 50,72 80,50 C110,30 130,40 160,18 C190,0 210,12 240,8 C265,-2 280,5 300,2" fill="url(#analyticsGrad)" stroke="none" className="opacity-40" />
                                    <path d="M0,70 C30,65 50,72 80,50 C110,30 130,40 160,18 C190,0 210,12 240,8 C265,-2 280,5 300,2" fill="none" stroke="#4450F2" strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="draw-line" />
                                    {/* Glow dot at peak */}
                                    <circle cx="240" cy="8" r="4" fill="#4450F2" className="opacity-80" />
                                    <circle cx="240" cy="8" r="8" fill="#4450F2" className="opacity-20 animate-ping" />
                                </svg>
                                {/* Floating tooltip */}
                                <div className="float-tip absolute top-[-8px] right-[18%] bg-[#1A1A1A] border border-[#4450F2]/40 px-2 py-1 rounded-lg shadow-xl">
                                    <span className="text-[9px] text-gray-400 uppercase font-bold">ROAS</span>
                                    <div className="text-xs font-black text-white">5.1x ↑</div>
                                </div>
                            </div>

                            {/* CPA + Conversion funnel mini */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-1 bg-white/5 rounded-xl p-2.5 border border-white/5 flex flex-col items-center justify-center">
                                    <div className="text-[9px] text-gray-500 uppercase font-black">CPA</div>
                                    <div className="text-base font-black text-white">$12.4</div>
                                    <span className="text-[8px] text-green-400 font-bold">↓ 18%</span>
                                </div>
                                <div className="col-span-2 bg-white/5 rounded-xl p-2.5 border border-white/5">
                                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1.5">Funnel</div>
                                    <div className="flex items-end gap-1 h-8">
                                        {[
                                            { h: '100%', c: '#4450F2', l: 'Reach' },
                                            { h: '72%', c: '#4450F2', l: 'Click' },
                                            { h: '45%', c: '#34D399', l: 'Lead' },
                                            { h: '28%', c: '#FFE241', l: 'Buy' },
                                        ].map(b => (
                                            <div key={b.l} className="flex-1 flex flex-col items-center gap-0.5">
                                                <div className="w-full rounded-sm" style={{ height: b.h, backgroundColor: b.c, opacity: 0.8, boxShadow: `0 0 6px ${b.c}60` }}></div>
                                                <span className="text-[7px] text-gray-600">{b.l}</span>
                                            </div>
                                        ))}
                                    </div>
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
                    1 Min Set-up. 2x ROAS.<br />3 Simple Steps.
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
                                {line}<br />
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
                    Stop Burning Money.<br />Book a Demo.
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