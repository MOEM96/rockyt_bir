import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { COMPANY_STATS, CUSTOMER_LOGOS, CASE_STUDIES, EXTERNAL_LINKS, CAL_CONFIG } from '../constants/index';

const BentoGrid: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-10 font-poppins pb-20">
      
      {/* 1. Social Proof / Video (Full Width) */}
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

      {/* 2a. Unified Intelligence (Analytics) - Split Card 1 */}
      <div className="col-span-1 md:col-span-6 bg-[#111] rounded-[32px] p-6 md:p-8 overflow-hidden relative group border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500">
         <div className="mb-6 relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-3 border border-brand-blue/20">
                <iconify-icon icon="solar:chart-square-bold"></iconify-icon> Analytics
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Unified Intelligence</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
                One dashboard. All your data. 100% accurate server-side tracking.
             </p>
         </div>

         <div className="bg-[#050505] border border-white/10 rounded-xl p-4 shadow-inner relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
             {/* Header */}
             <div className="flex justify-between items-center mb-4">
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Performance</div>
                 <div className="h-5 px-2 bg-brand-blue rounded text-[9px] font-bold text-white flex items-center shadow-[0_0_10px_rgba(68,80,242,0.4)]">Last 7d</div>
             </div>
             
             {/* Chart/Leads Visual */}
             <div className="mb-3 h-24 w-full bg-[#121212] rounded-lg border border-white/5 relative overflow-hidden flex items-end pb-0">
                  <div className="absolute top-2 left-3">
                      <div className="text-[9px] text-gray-500 font-medium">Total Leads</div>
                      <div className="text-lg font-bold text-white">1,573 <span className="text-[9px] text-green-400 align-top">+12%</span></div>
                  </div>
                  {/* CSS Chart */}
                  <div className="w-full h-16 flex items-end justify-between px-2 gap-1">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} style={{height: `${h}%`}} className="w-full bg-brand-blue/20 hover:bg-brand-blue rounded-t-sm transition-colors cursor-pointer"></div>
                      ))}
                  </div>
             </div>

             {/* Metrics Grid Compact */}
             <div className="grid grid-cols-2 gap-2">
                 {[
                     { l: 'Spend', v: '$6.1k', c: 'text-white' },
                     { l: 'ROAS', v: '4.2x', c: 'text-green-400' },
                     { l: 'CPA', v: '$12.4', c: 'text-white' },
                     { l: 'Conv.', v: '482', c: 'text-white' }
                 ].map((m, i) => (
                     <div key={i} className="bg-[#1A1A1A] rounded-lg p-2.5 border border-white/5 hover:bg-[#222] transition-colors">
                         <div className="text-[9px] text-gray-500 uppercase font-bold mb-0.5">{m.l}</div>
                         <div className={`text-sm font-bold ${m.c}`}>{m.v}</div>
                     </div>
                 ))}
             </div>
         </div>
         
         {/* Bg Glow */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none"></div>
      </div>

      {/* 2b. Waste-Free Testing - Split Card 2 */}
      <div className="col-span-1 md:col-span-6 bg-[#111] rounded-[32px] p-6 md:p-8 overflow-hidden relative group border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500">
         <div className="mb-6 relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-3 border border-purple-500/20">
                <iconify-icon icon="solar:test-tube-bold"></iconify-icon> Safe Testing
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Waste-Free Testing</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
                Test everything at once. We cut losers instantly and only scale winners.
             </p>
         </div>

         <div className="space-y-3 relative z-10">
             {/* Visualizing Multiple Tests */}
             <div className="grid grid-cols-2 gap-2">
                 {[
                    { name: 'Ad_Var_A', status: 'losing', spend: '$12.50' },
                    { name: 'Ad_Var_B', status: 'winning', spend: '$450.00' },
                    { name: 'Ad_Var_C', status: 'losing', spend: '$8.20' },
                    { name: 'Ad_Var_D', status: 'testing', spend: '$42.00' },
                 ].map((test, i) => (
                    <div key={i} className={`p-3 rounded-xl border ${test.status === 'winning' ? 'bg-green-500/10 border-green-500/30' : test.status === 'losing' ? 'bg-red-500/5 border-red-500/10 opacity-60' : 'bg-white/5 border-white/10'} flex flex-col justify-between group/test hover:scale-[1.02] transition-transform`}>
                        <div className="flex justify-between items-start mb-2">
                             <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                                <iconify-icon icon={test.status === 'winning' ? "solar:graph-up-bold" : "solar:gallery-wide-bold"} class={test.status === 'winning' ? "text-green-500" : "text-gray-400"}></iconify-icon>
                             </div>
                             {test.status === 'winning' && <iconify-icon icon="solar:check-circle-bold" class="text-green-500"></iconify-icon>}
                             {test.status === 'losing' && <iconify-icon icon="solar:close-circle-bold" class="text-red-500"></iconify-icon>}
                             {test.status === 'testing' && <iconify-icon icon="solar:refresh-circle-bold" class="text-blue-400 animate-spin"></iconify-icon>}
                        </div>
                        <div>
                             <div className="text-[9px] font-bold text-gray-400 mb-0.5">{test.name}</div>
                             <div className={`text-xs font-bold ${test.status === 'winning' ? 'text-green-400' : 'text-white'}`}>{test.spend}</div>
                        </div>
                    </div>
                 ))}
             </div>
             
             {/* Summary Pill */}
             <div className="bg-[#1A1A1A] border border-white/10 rounded-full py-2 px-4 flex items-center justify-between mt-2">
                 <span className="text-[10px] text-gray-500 font-bold uppercase">Active Tests</span>
                 <div className="flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span className="text-xs font-bold text-white">24 Running</span>
                 </div>
             </div>
         </div>

         {/* Bg Glow */}
         <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>
      </div>

      {/* 3. Value Props Row */}
      {/* Faster Testing / Creative Tools */}
      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex flex-col min-h-[380px] group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 relative z-10 leading-tight">
            Launch 10x More Creative Tests
         </h3>
         <p className="text-black/70 font-medium mb-6 relative z-10">
            5 AI tools for creative generation. Ship winning ads in seconds.
         </p>
         
         {/* 5 AI Tools Visualization */}
         <div className="mt-auto relative z-10 grid grid-cols-2 gap-2">
             {[
                 { icon: 'solar:videocamera-record-bold', label: 'AI Video' },
                 { icon: 'solar:gallery-wide-bold', label: 'AI Image' },
                 { icon: 'solar:user-id-bold', label: 'UGC Avatar' },
                 { icon: 'solar:microphone-3-bold', label: 'AI Voice' },
                 { icon: 'solar:sticker-smile-circle-2-bold', label: 'AI Memes' },
             ].map((tool, i) => (
                 <div key={i} className={`bg-black/5 border border-black/5 rounded-xl p-3 flex items-center gap-2 hover:bg-black/10 transition-colors ${i === 4 ? 'col-span-2' : ''}`}>
                     <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-black">
                         <iconify-icon icon={tool.icon} width="14"></iconify-icon>
                     </div>
                     <span className="text-xs font-bold text-black">{tool.label}</span>
                 </div>
             ))}
         </div>
         
         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/40 blur-3xl rounded-full pointer-events-none"></div>
      </div>

      {/* Accurate Data */}
      <div className="col-span-1 md:col-span-4 bg-[#161616] border border-white/10 rounded-[32px] p-8 flex flex-col min-h-[380px] group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 leading-tight">
            100% Accurate<br/>Server-Side Data
         </h3>
         <p className="text-gray-400 font-medium mb-6 relative z-10">
            Bypass iOS blocks. Feed the algorithms the exact data they need to lower your CPA.
         </p>
         <div className="mt-auto self-center transform group-hover:translate-y-[-10px] transition-transform duration-500">
             <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-white/5 relative">
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
                <iconify-icon icon="solar:server-path-bold-duotone" width="80" class="text-green-400"></iconify-icon>
             </div>
         </div>
      </div>

      {/* Budget Allocation */}
      <div className="col-span-1 md:col-span-4 bg-[#F3F5F7] rounded-[32px] p-8 flex flex-col min-h-[380px] group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 relative z-10 leading-tight">
            Fast, Profitable Scaling
         </h3>
         <p className="text-gray-500 font-medium mb-6 relative z-10">
            Our AI kills losing ads and scales winners instantly. No emotion, just math.
         </p>
         <div className="mt-auto self-center w-full">
             <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transform group-hover:scale-105 transition-transform">
                 <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-bold text-red-500">Losing Ad</span>
                     <span className="text-xs font-bold text-gray-400">-$200</span>
                 </div>
                 <div className="w-full bg-gray-100 h-2 rounded-full mb-4">
                     <div className="bg-red-400 h-2 rounded-full w-1/4"></div>
                 </div>
                 <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-bold text-green-600">Winning Ad</span>
                     <span className="text-xs font-bold text-black">+$1,400</span>
                 </div>
                 <div className="w-full bg-gray-100 h-2 rounded-full">
                     <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                 </div>
             </div>
         </div>
      </div>

      {/* 4. Platforms / Connected Accounts (Moved & Compact) */}
      <div className="col-span-1 md:col-span-12 bg-[#111] rounded-[32px] p-8 overflow-hidden relative group border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500">
         {/* Background Glow - Reduced blur/size */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

         <div className="text-center max-w-2xl mx-auto mb-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-3 border border-purple-500/20">
                <iconify-icon icon="solar:globus-bold" class="text-base"></iconify-icon>
                <span>Omni-Channel Scale</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Connect Once. Scale Everywhere.
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
                Unified control for Meta, Google, TikTok, and 20+ networks.
            </p>
         </div>

         {/* Visual Recreation - Compact */}
         <div className="bg-[#050505] border border-white/10 rounded-xl p-5 shadow-inner w-full max-w-5xl mx-auto relative z-10">
            {/* Header - Compact */}
            <div className="flex justify-between items-center mb-5">
                <div className="text-base font-bold text-white flex items-center gap-2">
                    <iconify-icon icon="solar:tuning-bold" class="text-gray-500"></iconify-icon>
                    Active Channels
                </div>
                <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 text-xs font-bold hover:bg-white/5 transition-colors cursor-pointer">
                        Filter
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-bold shadow-[0_0_10px_rgba(0,102,255,0.2)] cursor-pointer flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        Connected
                    </div>
                </div>
            </div>

            {/* Grid of Platforms - Compact (2 rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-5">
                {[
                    { name: "Meta", icon: "logos:meta-icon", color: "text-blue-500" },
                    { name: "Instagram", icon: "logos:instagram-icon", color: "text-pink-500" },
                    { name: "TikTok", icon: "logos:tiktok-icon", color: "text-white" },
                    { name: "Google", icon: "logos:google-icon", color: "text-white" },
                    { name: "YouTube", icon: "logos:youtube-icon", color: "text-red-500" },
                    { name: "Snapchat", icon: "logos:snapchat", color: "text-yellow-400" },
                    { name: "LinkedIn", icon: "logos:linkedin-icon", color: "text-blue-500" },
                    { name: "Pinterest", icon: "logos:pinterest", color: "text-red-600" },
                    { name: "Twitter", icon: "logos:twitter", color: "text-blue-400" },
                    { name: "Spotify", icon: "logos:spotify-icon", color: "text-green-500" },
                    { name: "Bing", icon: "logos:bing", color: "text-blue-400" },
                    { name: "Reddit", icon: "logos:reddit-icon", color: "text-orange-500" },
                ].map((p, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 border border-white/5 rounded-lg bg-[#121212] hover:bg-[#1A1A1A] transition-colors group/item">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                            <iconify-icon icon={p.icon} class={`${p.color} text-lg group-hover/item:scale-110 transition-transform`}></iconify-icon>
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="text-[10px] font-bold text-gray-300 truncate">{p.name}</div>
                            <div className="text-[9px] text-blue-400 font-medium truncate opacity-60 group-hover/item:opacity-100 transition-opacity">Synced</div>
                        </div>
                         <div className="w-1 h-1 rounded-full bg-green-500"></div>
                    </div>
                ))}
            </div>
            
            {/* Bottom - Optimization Rules (Compact) */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/5 overflow-x-auto no-scrollbar">
                <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap mr-2">Auto-Scaling:</span>
                <div className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-md flex items-center gap-2 whitespace-nowrap">
                     <iconify-icon icon="solar:bolt-bold" class="text-yellow-500 text-xs"></iconify-icon>
                     <span className="text-[10px] text-yellow-500 font-bold">ROAS &gt; 3.0x</span>
                </div>
                 <div className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-2 whitespace-nowrap">
                     <iconify-icon icon="solar:forbidden-circle-bold" class="text-red-500 text-xs"></iconify-icon>
                     <span className="text-[10px] text-red-500 font-bold">CPA &gt; $40</span>
                </div>
                 <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-center gap-2 whitespace-nowrap">
                     <iconify-icon icon="solar:graph-up-bold" class="text-blue-500 text-xs"></iconify-icon>
                     <span className="text-[10px] text-blue-500 font-bold">Scale Budget 20%</span>
                </div>
            </div>

         </div>
      </div>

      {/* 5. Case Studies Row */}
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