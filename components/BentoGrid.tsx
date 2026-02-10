import React from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { COMPANY_STATS, CUSTOMER_LOGOS, CASE_STUDIES, PLATFORM_ICONS, EXTERNAL_LINKS } from '../constants/index';

const BentoGrid: React.FC<DemoBookingProps> = ({ onBookDemo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-10 font-poppins">
      
      {/* 0. NEW: Customer Reviews Video (Top Full Width) */}
      <div className="col-span-1 md:col-span-12 bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden group">
         <div className="w-full md:w-5/12 relative z-10 flex flex-col items-start text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Don't Just Take Our Word For It.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                See how top DTC brands and agencies are scaling past $1M/mo with Rockyt's automation.
            </p>
            <div className="flex items-center gap-4 bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                    <img src="https://i.pravatar.cc/100?img=8" alt="" className="w-10 h-10 rounded-full border-2 border-[#161616]" loading="lazy" decoding="async" width="40" height="40" />
                </div>
                <span className="text-sm font-semibold text-white">Join 15,000+ others</span>
            </div>
         </div>

         <div className="w-full md:w-7/12 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full bg-black relative aspect-video">
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

      {/* Row 1 */}
      {/* Automate Card */}
      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex flex-col justify-between min-h-[360px] relative overflow-hidden group">
         <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Automate<br/>your ads</h3>
         </div>
         <div className="mt-8 relative z-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
             <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                 <iconify-icon icon="solar:rocket-2-bold-duotone" width="96" class="text-black/80"></iconify-icon>
             </div>
         </div>
      </div>

      {/* Platforms Card */}
      <div className="col-span-1 md:col-span-8 bg-[#F3F5F7] rounded-[32px] p-8 md:p-12 flex flex-col relative overflow-hidden min-h-[360px]">
         <div className="relative z-10 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Across every<br/>advertising platform</h3>
         </div>
         <div className="mt-auto relative z-10">
            <div className="flex flex-wrap items-center gap-6 md:gap-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* Replaced complex SVGs with Iconify for cleaner code while maintaining visual parity */}
               <iconify-icon icon="logos:meta-icon" width="40"></iconify-icon>
               <iconify-icon icon="logos:google-icon" width="36"></iconify-icon>
               <iconify-icon icon="logos:tiktok-icon" width="36"></iconify-icon>
               <iconify-icon icon="logos:snapchat" width="40"></iconify-icon>
               <iconify-icon icon="logos:linkedin-icon" width="40"></iconify-icon>
               <iconify-icon icon="logos:pinterest" width="40"></iconify-icon>
               <iconify-icon icon="logos:twitter" width="36"></iconify-icon>
               <iconify-icon icon="logos:spotify-icon" width="36"></iconify-icon>
            </div>
            <p className="text-sm font-medium text-gray-400 mt-8 hidden md:block">
               Rockyt is an official partner of all these platforms
            </p>
         </div>
      </div>

      {/* Row 2: Features */}
      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex flex-col min-h-[340px] group overflow-hidden relative">
         <h3 className="text-xl md:text-2xl font-bold text-black mb-4 relative z-10">Improve<br/>tracking</h3>
         <div className="mt-auto self-center transform group-hover:translate-y-2 transition-transform duration-500">
             <iconify-icon icon="solar:target-bold-duotone" width="120" class="text-black/10 group-hover:text-black/20 transition-colors"></iconify-icon>
         </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex flex-col min-h-[340px] group overflow-hidden relative">
         <h3 className="text-xl md:text-2xl font-bold text-black mb-4 relative z-10">Launch ads<br/>at scale</h3>
         <div className="mt-auto self-center transform group-hover:rotate-12 transition-transform duration-500">
             <iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="120" class="text-black/10 group-hover:text-black/20 transition-colors"></iconify-icon>
         </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex flex-col min-h-[340px] group overflow-hidden relative">
         <h3 className="text-xl md:text-2xl font-bold text-black mb-4 relative z-10">Automate<br/>performance</h3>
         <div className="mt-auto self-center transform group-hover:scale-110 transition-transform duration-500">
             <iconify-icon icon="solar:graph-new-up-bold-duotone" width="120" class="text-black/10 group-hover:text-black/20 transition-colors"></iconify-icon>
         </div>
      </div>

      {/* Row 3: Server Side & Integrations */}
      <div className="col-span-1 md:col-span-8 bg-[#161616] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group min-h-[340px]">
         <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Server-side<br/>tracking</h3>
            <p className="text-gray-400 mb-8 max-w-sm">Set up server-side tracking to make your ads more cost-effective by 23%</p>
            <button 
                onClick={onBookDemo}
                className="bg-[#8B5CF6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#7c3aed] transition-colors inline-flex items-center gap-2"
            >
                Learn more
            </button>
         </div>
         <div className="w-full md:w-1/2 flex items-center justify-center">
             <div className="w-64 h-48 bg-gradient-to-tr from-[#2a2a2a] to-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 bg-brand-purple/20 blur-[60px] rounded-full"></div>
                <iconify-icon icon="solar:server-square-bold-duotone" width="96" class="text-white relative z-10"></iconify-icon>
             </div>
         </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-white rounded-[32px] p-8 flex flex-col min-h-[340px] relative overflow-hidden group">
         <div className="mb-4">
             <div className="w-full aspect-[4/3] relative flex items-center justify-center">
                 <img 
                    src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/69779936418f66d10a0258d1_d5228af4201f48b9df2a1b9173b96184_Integrations%20icons.svg" 
                    alt="Integrations" 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                    decoding="async"
                 />
             </div>
         </div>
         <div className="mt-auto">
             <h3 className="text-2xl font-bold text-black mb-4">Integrations</h3>
             <button 
                onClick={onBookDemo}
                className="bg-[#FFE241] text-black px-8 py-3 rounded-full font-bold hover:bg-[#fcd34d] transition-colors w-full md:w-auto text-center"
             >
                Learn more
             </button>
         </div>
      </div>

      {/* Row 4: Case Studies */}
      {/* Keiki */}
      <div className="col-span-1 md:col-span-4 bg-[#8B5CF6] text-white rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group">
        <div className="mb-auto">
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
          <div className="rounded-xl overflow-hidden mb-6 aspect-video">
             <img 
                src={CASE_STUDIES.find(c => c.id === 'keiki')?.image} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
             />
          </div>
        </div>
        <div>
           <p className="text-lg font-medium leading-tight mb-4">With Rockyt marketing team spend 30% less time managing ads</p>
           <p className="text-sm opacity-80 mb-6">Daryna Bondar, Head of Growth</p>
           <button onClick={onBookDemo} className="bg-white text-[#8B5CF6] px-6 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors">Read</button>
        </div>
      </div>

      {/* Loop */}
      <div className="col-span-1 md:col-span-4 bg-white text-black rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group">
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
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-gray-100">
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
           <p className="text-lg font-medium leading-tight mb-4">Loop Earplugs scale 200% faster with Rockyt automation</p>
           <p className="text-sm text-gray-500 mb-6">Alexander L., Global Head of Performance</p>
           <button onClick={onBookDemo} className="bg-[#161616] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors">Read</button>
        </div>
      </div>

      {/* AdParlor */}
      <div className="col-span-1 md:col-span-4 bg-[#1D2E5C] text-white rounded-[32px] p-8 flex flex-col min-h-[400px] relative overflow-hidden group">
        <div className="mb-auto">
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
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-white/10">
             <img 
                src={CASE_STUDIES.find(c => c.id === 'adparlor')?.image} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
             />
          </div>
        </div>
        <div>
           <p className="text-lg font-medium leading-tight mb-4">Rockyt has made high-volume campaign management seamless</p>
           <p className="text-sm opacity-80 mb-6">Sidharth Sharma, Senior Campaign Mgr</p>
           <button onClick={onBookDemo} className="bg-[#1D2E5C] border border-white text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-[#1D2E5C] transition-colors">Read</button>
        </div>
      </div>

      {/* Row 5: Stats */}
      {COMPANY_STATS.map((stat, index) => (
        <div key={index} className="col-span-1 md:col-span-4 bg-[#161616] rounded-[32px] p-8 aspect-square flex flex-col items-center justify-center text-center">
            <div className={`text-5xl md:text-6xl font-semibold tracking-tighter mb-4 text-brand-${stat.color}`}>
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

      {/* Row 6: Customers */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[32px] p-12 flex flex-col items-center justify-center">
         <div className="text-xl font-bold text-black mb-8">Our customers</div>
         <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl">
            {CUSTOMER_LOGOS.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                className={`h-8 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${logo.name === 'AdParlor' ? 'brightness-0' : ''}`}
                alt={logo.alt}
                loading="lazy"
                decoding="async" 
              />
            ))}
         </div>
      </div>

      {/* Row 7: CTA */}
      <div className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[32px] p-8 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer group min-h-[180px]" onClick={onBookDemo}>
         <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:scale-105 transition-transform">Book demo</h3>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#161616] rounded-[32px] p-8 flex flex-col items-center justify-center min-h-[180px]">
          <div className="text-5xl font-bold text-[#FFE241] mb-2">14</div>
          <div className="text-white font-medium text-lg mb-4">days free trial</div>
          <div className="flex gap-2">
             <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">Cancel anytime</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">No card required</span>
          </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#FFE241] rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] transition-colors cursor-pointer min-h-[180px]" onClick={() => window.location.href = EXTERNAL_LINKS.signup}>
          <h3 className="text-2xl md:text-3xl font-bold text-black">Try Rockyt</h3>
      </div>

    </div>
  );
};

export default BentoGrid;