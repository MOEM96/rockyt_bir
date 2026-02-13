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

      {/* Pain Cards */}
      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <iconify-icon icon="solar:gallery-remove-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Creative Fatigue</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Limited & Poor Creatives. Your ads die faster than you can make them.
          </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:graph-down-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Delayed Analytics</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Inaccurate & Delayed Data. Making blind decisions on yesterday's news.
          </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#0F0F0F] rounded-[32px] p-8 border border-white/5 hover:border-red-500/30 transition-all duration-300 group shadow-lg hover:shadow-red-900/10 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <iconify-icon icon="solar:hourglass-line-bold" class="text-red-500 text-2xl"></iconify-icon>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Slow Optimizations</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
              Manual Testing. Reacting too late to market changes and bleeding budget.
          </p>
      </div>


      {/* 3. SOLUTION: CREATIVES (Col 6) - Updated Visual */}
      <div className="col-span-1 md:col-span-6 bg-[#FFE241] rounded-[32px] p-8 flex flex-col group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg text-black">
         <div className="relative z-10 flex flex-col h-full">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-[10px] font-bold uppercase tracking-wider mb-4 border border-black/10 w-fit">
                <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon> AI Creative Studio
             </div>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Generate Evergreen Winning Creatives in Mins
             </h3>
             <p className="text-black/70 font-medium mb-8 leading-relaxed">
                Access Shutterstock Library, 5+ AI tools, and a built-in editor. Create AI UGC, Product Images, Voice overs, Reels, Hooks, Ad Copy, and Memes in minutes.
             </p>

             {/* Replaced Icon Grid with GIF */}
             <div className="mt-auto rounded-xl overflow-hidden shadow-2xl border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                 <img 
                    src="https://cdn.prod.website-files.com/6798ff28c64131df111e57cc/685484896afd50a61f5760f5_AI%20Creative%20Studio%20copy%2011.gif" 
                    alt="AI Creative Studio Demo" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                 />
             </div>
         </div>
      </div>


      {/* 4. SOLUTION: ANALYTICS (Col 6) - Updated Visual */}
      <div className="col-span-1 md:col-span-6 bg-[#161616] border border-white/10 rounded-[32px] p-8 flex flex-col group overflow-hidden relative hover:-translate-y-2 transition-transform duration-500 shadow-lg">
         <div className="relative z-10 flex flex-col h-full">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-blue/20 w-fit">
                <iconify-icon icon="solar:chart-2-bold"></iconify-icon> Advanced Analytics
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Analytics That Bring Customers, Not Confusion
             </h3>
             <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                Overwhelmed by multiple ad managers? Get one real-time view revealing the full customer journey. Simple, data-driven recommendations to know exactly what to scale.
             </p>

             {/* Replaced UI with WebP */}
             <div className="mt-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                    src="https://cdn.prod.website-files.com/6798ff28c64131df111e57cc/688575265c8fc879372bc4a0_6-p-800.webp" 
                    alt="Analytics Dashboard" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
             </div>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
      </div>


      {/* 5. SOLUTION: OPTIMIZATION (Full Width) - Updated Visual */}
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
                  </div>
              </div>

              {/* Visual Side - Replaced with MP4 */}
              <div className="relative h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                   <video 
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover"
                   >
                     <source src="https://cdn.prod.website-files.com/6798ff28c64131df111e57cc%2F68856e2581a36b66731c485a_OptimizationFolder-transcode.mp4" type="video/mp4" />
                   </video>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      </div>

      {/* 6. NEW: MULTI-PLATFORM (Full Width) */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden relative group hover:border-white/20 transition-all duration-500 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-wider mb-6 border border-brand-purple/20">
                    <iconify-icon icon="solar:layers-minimalistic-bold"></iconify-icon> Unified Management
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      Manage 11+ Platforms in One View
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      Total control and visibility. Easily understand your data and scale across all major advertising channels without the headache of switching between multiple dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                      {['Meta', 'Google', 'TikTok', 'Snapchat', 'LinkedIn', 'Spotify', 'Bing', 'Pinterest'].map((p) => (
                          <span key={p} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5">{p}</span>
                      ))}
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-brand-yellow border border-white/5">+3 more</span>
                  </div>
               </div>
               
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform group-hover:scale-[1.01] transition-transform duration-500">
                    <img 
                        src="https://cdn.prod.website-files.com/6798ff28c64131df111e57cc/68857526114ee66a928eea93_4-p-800.webp" 
                        alt="Multi-platform management" 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
               </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      </div>

      {/* 7. SETUP (Col 12) - Redesigned to Dark Theme */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-16 text-center text-white flex flex-col items-center justify-center relative overflow-hidden">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
              Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight max-w-3xl">
              1 Min Set-up. 2x ROAS.<br/>3 Simple Steps.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl relative z-10">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Import</h3>
                  <p className="text-gray-500 font-medium">Connect your ad accounts in one click.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect</h3>
                  <p className="text-gray-500 font-medium">Link your analytics and creative library.</p>
              </div>
              
              <div className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-2xl font-black mb-6 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl z-10">
                      3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Optimize</h3>
                  <p className="text-gray-500 font-medium">Let AI protect your budget & scale profitably.</p>
              </div>
          </div>
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none -z-0"></div>
      </div>

      {/* 8. CASE STUDIES - Animated Auto Scroll */}
      <div className="col-span-1 md:col-span-12 text-center mt-8 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">They know how it works</h2>
          <p className="text-gray-500 mt-2">Who can explain it better than our users?</p>
      </div>

      <div className="col-span-1 md:col-span-12 overflow-hidden w-full relative -mx-6 md:mx-0 mask-gradient-x">
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
         
         <div className="flex gap-6 w-max animate-marquee py-4 px-6 md:px-0">
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
                     className={`w-[320px] md:w-[400px] rounded-[32px] p-8 flex flex-col flex-shrink-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white/5 ${bgColor} ${textColor}`}
                  >
                     <div className="mb-6 relative z-10 h-8">
                         <img 
                           src={cs.logo} 
                           alt="Logo" 
                           className={`h-full w-auto object-contain ${cs.id === 'loop' ? '' : 'brightness-0 invert'}`} 
                        />
                     </div>
                     
                     <div className="rounded-xl overflow-hidden mb-6 aspect-video shadow-lg group-hover:scale-[1.03] transition-transform duration-500 bg-black/10">
                        <img 
                           src={cs.image} 
                           alt="" 
                           className="w-full h-full object-cover" 
                           loading="lazy"
                        />
                     </div>

                     <div className="relative z-10 mt-auto">
                        <p className="text-lg font-medium leading-tight mb-4">
                           {cs.title}
                        </p>
                        <button 
                           className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${cs.id === 'loop' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
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

      {/* 10. Customers */}
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

      {/* 11. Bottom CTA */}
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

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[180px] shadow-lg hover:shadow-yellow-400/30" onClick={onGetStarted}>
          <h3 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2">
            Start Free Trial <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
          </h3>
      </div>

    </div>
  );
};

export default BentoGrid;