import React from 'react';
import '../types';

interface BentoGridProps {
  onBookDemo: () => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onBookDemo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-20">
      
      {/* Card 1: Automate your ads */}
      <div className="col-span-1 md:col-span-4 bg-brand-black rounded-[32px] p-8 bento-card flex flex-col h-full min-h-[400px] border border-white/10">
        <h3 className="text-2xl font-semibold tracking-tight mb-6 text-white">Automate your ads</h3>
        <div className="flex-grow relative overflow-hidden rounded-xl">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d559fa30d0a90dc94c0402_1b63513b0449f57c179fd17eaa96aca8_ad%20automation.png" 
            className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90" 
            alt="Automation UI" 
          />
        </div>
      </div>

      {/* Card 2: Platforms (Updated Layout) */}
      <div className="col-span-1 md:col-span-8 bg-brand-black rounded-[32px] p-8 bento-card flex flex-col min-h-[400px] border border-white/10 relative overflow-hidden">
        <h3 className="text-2xl font-semibold tracking-tight text-white relative z-10 text-center md:text-left mb-8">Across every advertising platform</h3>
        
        {/* Logos Grid - Bigger and Better Aligned */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 w-full max-w-3xl mx-auto items-center justify-items-center">
            <iconify-icon icon="logos:meta-icon" width="64"></iconify-icon>
            <iconify-icon icon="logos:google-icon" width="48"></iconify-icon>
            <iconify-icon icon="logos:tiktok-icon" width="48"></iconify-icon>
            <iconify-icon icon="fa-brands:snapchat-ghost" width="52" style={{ color: 'white' }}></iconify-icon>
            <iconify-icon icon="logos:pinterest" width="48"></iconify-icon>
            <iconify-icon icon="logos:linkedin-icon" width="48"></iconify-icon>
            <iconify-icon icon="logos:twitter" width="48"></iconify-icon>
            <iconify-icon icon="logos:microsoft-icon" width="48"></iconify-icon>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 font-medium mt-8 relative z-10 text-center md:text-left">Rockyt is an official partner of all these platforms</p>
      </div>

      {/* Card 3: Improve Tracking */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none rounded-[32px] p-8 bento-card overflow-hidden min-h-[360px]">
        <h3 className="text-xl font-semibold tracking-tight mb-4 text-white">Improve tracking</h3>
        <div className="relative w-full aspect-square mt-4">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e516be839e96e52b8d2ad3_9c67ae54e8bf279af1990bcb8b8bffa9_Improve%20tracking.jpg" 
            className="w-full h-full object-cover rounded-2xl shadow-lg transform rotate-2 translate-y-4" 
            alt="Tracking UI" 
          />
        </div>
      </div>

      {/* Card 4: Launch ads */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none rounded-[32px] p-8 bento-card overflow-hidden min-h-[360px]">
        <h3 className="text-xl font-semibold tracking-tight mb-4 text-white">Launch ads at scale</h3>
        <div className="relative w-full aspect-square mt-4">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e516be84404dd9bc162f36_99b94e73076813fb7bc47d59d400bc0d_Launch%20ads%20at%20scale.jpg" 
            className="w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-1 translate-y-4" 
            alt="Scale UI" 
          />
        </div>
      </div>

      {/* Card 5: Automate Performance */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none rounded-[32px] p-8 bento-card overflow-hidden min-h-[360px]">
        <h3 className="text-xl font-semibold tracking-tight mb-4 text-white">Automate performance</h3>
        <div className="relative w-full aspect-square mt-4">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e516bef9dafa2f3c7cb5ff_714bd2a4d60bbd2c61b2f6b53da5087e_Automate%20performance.jpg" 
            className="w-full h-full object-cover rounded-2xl shadow-lg transform rotate-1 translate-y-4" 
            alt="Performance UI" 
          />
        </div>
      </div>

      {/* New Card: Creative Insights (Redesigned Visuals) */}
      <div className="col-span-1 md:col-span-12 bg-brand-yellow rounded-[32px] p-8 md:p-12 bento-card flex flex-col md:flex-row gap-12 relative overflow-hidden text-brand-black items-center">
        <div className="w-full md:w-1/3 flex flex-col gap-4 relative z-10">
           <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Explore creative insights</h3>
           <p className="text-lg font-medium opacity-80">Unlock the power of your ad data with real-time visual analytics.</p>
           <button onClick={onBookDemo} className="mt-4 bg-brand-black text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-black/80 transition-colors btn-hover-skew">
             <span>Start Analyzing</span>
           </button>
        </div>
        
        {/* Dashboard UI Container - Cleaned Up */}
        <div className="w-full md:w-2/3 bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-6 rotate-1 hover:rotate-0 transition-transform duration-500">
          
          {/* Top Bar: Thumbs & Controls */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[-8px]">
               {[1,2,3].map((i) => (
                 <div key={i} className={`w-12 h-12 rounded-full border-2 border-white relative shadow-md -ml-3 first:ml-0 overflow-hidden`}>
                    <img src={`https://randomuser.me/api/portraits/men/${i*20}.jpg`} className="w-full h-full object-cover" alt="User" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center -ml-3 text-xs font-bold text-gray-500 shadow-md">+5</div>
            </div>
            <div className="flex gap-2">
                 <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon></div>
                 <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><iconify-icon icon="solar:settings-linear" width="20"></iconify-icon></div>
            </div>
          </div>

          {/* Chart Section - Simplified & Cleaner */}
          <div className="flex flex-col gap-4">
             <div className="flex items-end justify-between">
                <div>
                   <div className="text-sm text-gray-400 font-medium">Total Spend</div>
                   <div className="text-3xl font-bold text-gray-900">$42,593.00</div>
                </div>
                <div className="flex items-center gap-1 text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-md">
                   <iconify-icon icon="solar:trending-up-bold"></iconify-icon> +12.5%
                </div>
             </div>
             
             <div className="relative h-40 w-full">
                {/* Simplified Chart */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <defs>
                        <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0 50 L10 40 L25 45 L40 30 L60 35 L80 15 L100 20 V 50 H 0 Z" fill="url(#gradientPurple)" />
                    <path d="M0 50 L10 40 L25 45 L40 30 L60 35 L80 15 L100 20" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
             </div>
          </div>

          {/* List Section - Cleaner */}
          <div className="space-y-3">
             <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <iconify-icon icon="solar:gallery-bold" width="20"></iconify-icon>
                </div>
                <div className="flex-grow">
                    <div className="text-sm font-bold text-gray-900">Summer Campaign_V2</div>
                    <div className="text-xs text-gray-500">Facebook • Image</div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">2.4%</div>
                    <div className="text-xs text-gray-500">CTR</div>
                </div>
             </div>
             <div className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <iconify-icon icon="solar:videocamera-bold" width="20"></iconify-icon>
                </div>
                <div className="flex-grow">
                    <div className="text-sm font-bold text-gray-900">Product Demo Reel</div>
                    <div className="text-xs text-gray-500">TikTok • Video</div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">3.1%</div>
                    <div className="text-xs text-gray-500">CTR</div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Card 6: Server Side Tracking */}
      <div className="col-span-1 md:col-span-8 bg-brand-black rounded-[32px] p-8 md:p-12 bento-card flex flex-col md:flex-row justify-between items-start md:items-center text-white relative overflow-hidden group border border-white/10">
        <div className="relative z-10 max-w-md">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Server-side tracking</h3>
          <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">Set up server-side tracking to make your ads more cost-effective by 23%</p>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white rounded-full text-sm font-semibold transition-colors btn-hover-skew">
            <span>Learn more</span>
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-12 w-full md:w-1/2 h-64 md:h-full opacity-90 transition-opacity group-hover:opacity-100">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d3ef72d409ad1e61d473f1_hub%20img%20for%20main%20page%20(1).png" 
            className="w-full h-full object-contain" 
            alt="Server Side UI" 
          />
        </div>
      </div>

      {/* Card 7: Integrations */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none rounded-[32px] p-8 bento-card flex flex-col justify-between min-h-[400px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2/3 bg-white/5 rounded-b-[40px] flex items-center justify-center p-8">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/69779936418f66d10a0258d1_d5228af4201f48b9df2a1b9173b96184_Integrations%20icons.svg" 
            className="w-full h-auto" 
            alt="Integrations" 
          />
        </div>
        <div className="mt-auto relative z-10 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white">Integrations</h3>
          <a href="#" className="inline-flex w-fit items-center justify-center px-6 py-3 bg-brand-yellow text-brand-black rounded-full text-sm font-semibold hover:bg-[#fcd34d] transition-colors btn-hover-skew">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      {/* Case 1: Mobile App */}
      <div className="col-span-1 md:col-span-4 bg-[#8B5CF6] text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[480px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase opacity-80">Mobile App</span>
          <div className="h-8 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bb67180715f131e3e1e9_keiki_logotype.svg" 
              className="h-full w-auto brightness-0 invert" 
              alt="Keiki" 
            />
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black/20">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e7bb3ffdb200709eba36d0_keiki-cs-main%20(1).jpg" 
            className="w-full h-full object-cover" 
            alt="Keiki Case Study" 
          />
        </div>
        <p className="text-lg font-medium leading-tight mb-6">With Rockyt marketing team spend 30% less time managing ads</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67cacf1cb6053e03aa2b6fe8_Daryna%20Bondar.png" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/20" 
              alt="Profile" 
            />
            <div className="text-xs opacity-90 leading-tight">Daryna Bondar<br/>Head of Growth</div>
          </div>
          <a href="#" className="w-10 h-10 rounded-full bg-white text-[#8B5CF6] flex items-center justify-center hover:scale-110 transition-transform">
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </a>
        </div>
      </div>

      {/* Case 2: E-commerce */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[480px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase text-gray-400">E-commerce</span>
          <div className="h-8 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" 
              className="h-full w-auto brightness-0 invert" 
              alt="Loop" 
            />
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100/10">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e62fa2d63f757594193fb5_loop-cs-main.jpg" 
            className="w-full h-full object-cover" 
            alt="Loop Case Study" 
          />
        </div>
        <p className="text-lg font-medium leading-tight mb-6">Loop Earplugs scale 200% faster with Rockyt automation</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e64a3d2406a97d3832da51_alexander-lodeweyckx-cs-main.jpg" 
              className="w-10 h-10 rounded-full object-cover border border-white/20" 
              alt="Profile" 
            />
            <div className="text-xs text-gray-400 leading-tight">Alexander L.<br/>Head of Perf.</div>
          </div>
          <a href="#" className="w-10 h-10 rounded-full bg-white text-brand-black flex items-center justify-center hover:scale-110 transition-transform">
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </a>
        </div>
      </div>

      {/* Case 3: Agency */}
      <div className="col-span-1 md:col-span-4 bg-brand-darkblue text-white rounded-[32px] p-8 bento-card flex flex-col min-h-[480px] relative overflow-hidden">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-wider uppercase opacity-60">Agency</span>
          <div className="h-8 mt-2">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" 
              className="h-full w-auto" 
              alt="AdParlor" 
            />
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-white/10">
          <img 
            src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e8d23cb4012069cfbd1764_adparlor-cs-main%20(2).jpg" 
            className="w-full h-full object-cover" 
            alt="AdParlor Case Study" 
          />
        </div>
        <p className="text-lg font-medium leading-tight mb-6">Rockyt has made high-volume campaign management seamless</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e64a3ddfc11dc9bb8510ff_sidharth-sharma-cs-main.jpg" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/10" 
              alt="Profile" 
            />
            <div className="text-xs opacity-60 leading-tight">Sidharth Sharma<br/>Campaign Mgr</div>
          </div>
          <a href="#" className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center hover:scale-110 transition-transform">
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
          </a>
        </div>
      </div>

      {/* Stats Row (Fonts Updated) */}
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-yellow">$2B</div>
        <p className="text-lg font-bold text-white font-serif tracking-wide uppercase leading-snug mt-2">Managed<br/>ad spend</p>
      </div>
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-pink">240M</div>
        <p className="text-lg font-bold text-white font-serif tracking-wide uppercase leading-snug mt-2">Saved Ad Spend<br/>per year</p>
      </div>
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-blue">15K</div>
        <p className="text-lg font-bold text-white font-serif tracking-wide uppercase leading-snug mt-2">ad accounts<br/>connected</p>
      </div>

      {/* Customers Strip - Updated Visual */}
      <div className="col-span-1 md:col-span-12 bg-white rounded-[32px] p-8 md:p-16 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
        {/* Removed header as per screenshot */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-x-24 md:gap-y-16 w-full max-w-6xl">
            {/* Liven */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848beced_6720e123b0ca4231f3a00bc7_Logo%202%202.png" className="h-8 md:h-10 w-auto object-contain" alt="Liven" />
            
            {/* Scentbird */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848bece7_scentbird.png" className="h-6 md:h-8 w-auto object-contain" alt="Scentbird" />
            
            {/* Loop - from case study, ensure it's visible on white */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e630347ae261f1cba047d3_loop-earplugs-svg.svg" className="h-6 md:h-8 w-auto object-contain" alt="Loop" />
            
            {/* Keiki - from case study or customer list */}
            {/* The list had logo.avif, case study had keiki_logotype.svg. The svg is likely better quality. */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bb67180715f131e3e1e9_keiki_logotype.svg" className="h-8 md:h-12 w-auto object-contain" alt="Keiki" />
            
            {/* Plantin */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bea94c7fbfef848becd9_plantin.avif" className="h-8 md:h-10 w-auto object-contain" alt="Plantin" />
            
            {/* AdParlor (Agency) - Make black */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e51ce0ac361e304aab6dd1_adparlor_new_logo_white_text.svg" className="h-8 md:h-10 w-auto object-contain brightness-0" alt="AdParlor" />
            
            {/* The mysterious Design 290x292.png from original customer list */}
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848becf1_Design%20290x292.png" className="h-8 md:h-10 w-auto object-contain" alt="Partner" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div 
        onClick={onBookDemo}
        className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[32px] p-8 flex items-center justify-center hover:border-white/40 transition-colors group cursor-pointer min-h-[160px]"
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
      >
        <h3 className="text-2xl font-semibold tracking-tight"><span>Book demo</span></h3>
      </div>
    </div>
  );
};

export default BentoGrid;