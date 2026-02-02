import React from 'react';
import '../types';

const BentoGrid: React.FC = () => {
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

      {/* Card 2: Platforms */}
      <div className="col-span-1 md:col-span-8 bg-brand-black rounded-[32px] p-8 bento-card flex flex-col min-h-[400px] border border-white/10 relative overflow-hidden">
        <h3 className="text-2xl font-semibold tracking-tight text-white relative z-10">Across every advertising platform</h3>
        
        {/* Logos Grid filling the space */}
        <div className="flex-grow flex flex-wrap items-center justify-center content-center gap-x-12 gap-y-10 px-4 py-8 relative z-10">
          <iconify-icon icon="logos:meta-icon" width="56" height="32"></iconify-icon>
          <iconify-icon icon="logos:google-icon" width="40" height="40"></iconify-icon>
          <iconify-icon icon="logos:tiktok-icon" width="40" height="40"></iconify-icon>
          <iconify-icon icon="fa-brands:snapchat-ghost" width="44" height="44" style={{ color: 'white' }}></iconify-icon>
          <iconify-icon icon="logos:pinterest" width="40" height="40"></iconify-icon>
          <iconify-icon icon="logos:linkedin-icon" width="40" height="40"></iconify-icon>
          <iconify-icon icon="logos:twitter" width="40" height="40"></iconify-icon>
          <iconify-icon icon="logos:microsoft-icon" width="40" height="40"></iconify-icon>
        </div>
        
        <p className="text-sm text-gray-400 font-medium mt-auto relative z-10">Bïrch is an official partner of all these platforms</p>
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

      {/* New Card: Creative Insights */}
      <div className="col-span-1 md:col-span-12 bg-brand-yellow rounded-[32px] p-6 md:p-10 bento-card flex flex-col relative overflow-hidden text-brand-black">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Explore creative insights</h3>
        
        {/* Dashboard UI Container */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl w-full flex flex-col gap-8">
          
          {/* Top Bar: Thumbs & Controls */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Thumbnails */}
            <div className="flex items-center gap-2">
               {[1,2,3,4,5].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 overflow-hidden relative shadow-sm group cursor-pointer hover:ring-2 ring-brand-blue ring-offset-1 transition-all">
                    <div className={`w-full h-full bg-gradient-to-br ${
                        i===1 ? 'from-purple-500 to-indigo-600' :
                        i===2 ? 'from-blue-400 to-cyan-300' :
                        i===3 ? 'from-red-500 to-rose-400' :
                        i===4 ? 'from-amber-400 to-orange-200' :
                        'from-emerald-500 to-green-400'
                    } opacity-90 group-hover:opacity-100`}>
                      {i === 1 && <iconify-icon icon="solar:folder-bold" style={{color: 'white', position: 'absolute', bottom: '2px', left: '2px', fontSize: '10px'}}></iconify-icon>}
                      {i === 2 && <iconify-icon icon="solar:folder-bold" style={{color: 'white', position: 'absolute', bottom: '2px', left: '2px', fontSize: '10px'}}></iconify-icon>}
                      {i === 3 && <iconify-icon icon="solar:folder-bold" style={{color: 'white', position: 'absolute', bottom: '2px', left: '2px', fontSize: '10px'}}></iconify-icon>}
                    </div>
                 </div>
               ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
                 <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
                    <iconify-icon icon="solar:graph-up-bold" width="18"></iconify-icon>
                 </div>
                 <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-md text-gray-400 hover:bg-gray-50 transition-colors cursor-pointer">
                    <iconify-icon icon="solar:list-bold" width="18"></iconify-icon>
                 </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex flex-col gap-2">
             <div className="flex justify-between items-center">
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-transparent hover:bg-gray-50 px-2 py-1 rounded transition-colors">
                    Spend <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                </button>
             </div>
             
             <div className="relative h-48 w-full mt-2">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-400 font-medium">
                   <div className="w-full border-b border-gray-100 flex items-start pb-1">4,000</div>
                   <div className="w-full border-b border-gray-100"></div>
                   <div className="w-full border-b border-gray-100"></div>
                   <div className="w-full border-b border-gray-100 flex items-end pt-1">0</div>
                </div>
                
                {/* Chart Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible p-[1px]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Purple Line */}
                    <path 
                        d="M0 100 L20 80 L40 65 L60 50 L80 35 L100 32" 
                        fill="none" 
                        stroke="#8B5CF6" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                    />
                    {/* Blue Line */}
                    <path 
                        d="M0 100 L25 75 L50 70 L75 50 L100 45" 
                        fill="none" 
                        stroke="#4450F2" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                    />
                    {/* Orange Line */}
                    <path 
                        d="M0 100 L30 90 L50 60 L70 65 L90 40 L100 25" 
                        fill="none" 
                        stroke="#F59E0B" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                    />
                </svg>
                
                {/* X Axis Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-gray-400 font-medium px-2">
                    <span>Nov 25</span>
                    <span className="pl-8">Nov 28</span>
                    <span>Dec 1</span>
                </div>
             </div>

             {/* Legend */}
             <div className="flex items-center gap-8 text-[10px] font-medium justify-end pt-6">
                <div className="flex items-center gap-1.5 text-green-600 font-bold">
                   <iconify-icon icon="solar:arrow-down-linear"></iconify-icon> Spend
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                   Link clicks
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                   CTR
                </div>
             </div>
          </div>

          {/* List Section */}
          <div className="flex flex-col border-t border-gray-100 pt-2">
             {/* Header Row (Implicit) */}
             <div className="flex justify-end gap-8 text-[10px] text-gray-400 font-medium mb-2 px-2">
                 <span className="w-16 text-right">Spend</span>
                 <span className="w-8 text-right hidden sm:block">Link clicks</span>
                 <span className="w-8 text-right hidden sm:block">CTR</span>
             </div>

             {/* Row 1 */}
             <div className="flex items-center gap-4 p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer border-b border-gray-50 last:border-0">
                <div className="flex-shrink-0 text-blue-500 bg-blue-50 rounded p-0.5">
                   <iconify-icon icon="solar:check-square-bold" width="16"></iconify-icon>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d559fa30d0a90dc94c0402_1b63513b0449f57c179fd17eaa96aca8_ad%20automation.png" className="w-full h-full object-cover" alt="Ad" />
                </div>
                <div className="flex-grow min-w-0 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-green-600 truncate">Conversions_Women25-40_ImageV1_ABTest</span>
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-gray-300 text-[10px]"></iconify-icon>
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">Image • Used in 4 ads</div>
                </div>
                <div className="flex-shrink-0 flex gap-8 items-center">
                    <div className="text-xs font-bold text-gray-800 w-16 text-right">$900.50</div>
                    <div className="text-xs font-medium text-gray-500 w-8 text-right hidden sm:block">2.1</div>
                    <div className="text-xs font-medium text-gray-500 w-8 text-right hidden sm:block">1.1</div>
                </div>
             </div>
             
             {/* Row 2 */}
             <div className="flex items-center gap-4 p-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                <div className="flex-shrink-0 text-yellow-500 bg-yellow-50 rounded p-0.5">
                   <iconify-icon icon="solar:check-square-bold" width="16"></iconify-icon>
                </div>
                 <div className="w-10 h-10 rounded-lg bg-orange-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Ad" />
                </div>
                <div className="flex-grow min-w-0 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-green-600 truncate">Conversions_Women25-40_ImageV2_ABTest</span>
                         <iconify-icon icon="solar:alt-arrow-right-linear" className="text-gray-300 text-[10px]"></iconify-icon>
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">Image • Used in 4 ads</div>
                </div>
                 <div className="flex-shrink-0 flex gap-8 items-center">
                    <div className="text-xs font-bold text-gray-800 w-16 text-right">$750.00</div>
                    <div className="text-xs font-medium text-gray-500 w-8 text-right hidden sm:block">2.0</div>
                    <div className="text-xs font-medium text-gray-500 w-8 text-right hidden sm:block">1.2</div>
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
        <p className="text-lg font-medium leading-tight mb-6">With Bïrch marketing team spend 30% less time managing ads</p>
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
        <p className="text-lg font-medium leading-tight mb-6">Loop Earplugs scale 200% faster with Bïrch automation</p>
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
        <p className="text-lg font-medium leading-tight mb-6">Bïrch has made high-volume campaign management seamless</p>
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

      {/* Stats Row */}
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-yellow">$2B</div>
        <p className="text-sm font-medium text-gray-400">annual<br/>ad spend</p>
      </div>
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-pink">240M</div>
        <p className="text-sm font-medium text-gray-400">automated actions<br/>per year</p>
      </div>
      <div className="col-span-1 md:col-span-4 bg-brand-black text-white rounded-[32px] p-8 bento-card flex flex-col items-center justify-center text-center aspect-square border border-white/10">
        <div className="text-5xl font-semibold tracking-tighter mb-2 text-brand-blue">15K</div>
        <p className="text-sm font-medium text-gray-400">ad accounts<br/>connected</p>
      </div>

      {/* Customers Strip */}
      <div className="col-span-1 md:col-span-12 bg-brand-black rounded-[32px] p-8 border border-white/10 flex flex-col justify-center items-center gap-8 overflow-hidden">
        <h3 className="text-xl font-semibold tracking-tight text-center text-white">Our customers</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848beced_6720e123b0ca4231f3a00bc7_Logo%202%202.png" className="h-6 md:h-8 w-auto brightness-0 invert" alt="Logo" />
          <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bea94c7fbfef848becd4_logo.avif" className="h-6 md:h-8 w-auto brightness-0 invert" alt="Logo" />
          <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848bece7_scentbird.png" className="h-6 md:h-8 w-auto brightness-0 invert" alt="Logo" />
          <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5beaa4c7fbfef848becf1_Design%20290x292.png" className="h-6 md:h-8 w-auto brightness-0 invert" alt="Logo" />
          <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5bea94c7fbfef848becd9_plantin.avif" className="h-6 md:h-8 w-auto brightness-0 invert" alt="Logo" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="col-span-1 md:col-span-4 border-2 border-dashed border-white/20 rounded-[32px] p-8 flex items-center justify-center hover:border-white/40 transition-colors group cursor-pointer min-h-[160px]">
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

      <div className="col-span-1 md:col-span-4 bg-brand-yellow text-brand-black rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] transition-colors cursor-pointer min-h-[160px] btn-hover-skew">
        <h3 className="text-2xl font-semibold tracking-tight"><span>Try Bïrch</span></h3>
      </div>
    </div>
  );
};

export default BentoGrid;