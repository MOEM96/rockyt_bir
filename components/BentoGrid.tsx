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

      {/* Card 2: AI Content Hub */}
      <div className="col-span-1 md:col-span-8 bg-brand-black rounded-[32px] p-8 md:p-10 bento-card flex flex-col min-h-[400px] border border-white/10 relative overflow-hidden group">
        
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-purple/20 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">AI Content Hub</h3>
                    <p className="text-gray-400 mt-2 text-base">Generate high-converting ad creatives with 6 powerful AI tools.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-3 py-1.5 rounded-full w-fit h-fit border border-brand-purple/20">
                    <iconify-icon icon="solar:stars-minimalistic-bold" width="14"></iconify-icon>
                    <span>Gen AI</span>
                </div>
            </div>

            {/* 6 AI Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow">
                {[
                    { icon: "solar:magic-stick-3-bold-duotone", label: "Magic Edit", desc: "Modify assets", color: "text-blue-400", bg: "bg-blue-500/20" },
                    { icon: "solar:text-square-bold-duotone", label: "Ad Copy", desc: "Generate text", color: "text-purple-400", bg: "bg-purple-500/20" },
                    { icon: "solar:gallery-wide-bold-duotone", label: "Text to Image", desc: "Create visuals", color: "text-pink-400", bg: "bg-pink-500/20" },
                    { icon: "solar:videocamera-record-bold-duotone", label: "Video Gen", desc: "Motion ads", color: "text-orange-400", bg: "bg-orange-500/20" },
                    { icon: "solar:layers-minimalistic-bold-duotone", label: "Product BG", desc: "Smart studio", color: "text-green-400", bg: "bg-green-500/20" },
                    { icon: "solar:microphone-3-bold-duotone", label: "Voiceover", desc: "AI narration", color: "text-cyan-400", bg: "bg-cyan-500/20" }
                ].map((tool, index) => (
                    <div key={index} className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl p-4 flex flex-col justify-center gap-3 transition-all duration-300 group/tool cursor-default">
                        <div className={`w-10 h-10 rounded-full ${tool.bg} ${tool.color} flex items-center justify-center group-hover/tool:scale-110 transition-transform`}>
                            <iconify-icon icon={tool.icon} width="24"></iconify-icon>
                        </div>
                        <div>
                            <div className="font-semibold text-white text-sm">{tool.label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{tool.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
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

      {/* New Card: Creative Insights (Redesigned Compact Dashboard) */}
      <div className="col-span-1 md:col-span-12 bg-brand-yellow rounded-[32px] p-8 md:p-12 bento-card flex flex-col lg:flex-row gap-8 relative overflow-hidden text-brand-black items-center min-h-[480px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 relative z-10 shrink-0">
           <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Explore creative insights</h3>
           <p className="text-lg font-medium opacity-80">Unlock the power of your ad data with real-time visual analytics.</p>
           <button 
             onClick={onBookDemo} 
             data-cal-link="rock-yt-admanager/15min"
             data-cal-namespace="15min"
             data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
             className="mt-4 bg-brand-black text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-black/80 transition-colors btn-hover-skew"
            >
             <span>Start Analyzing</span>
           </button>
        </div>
        
        {/* Compact Dashboard UI Container */}
        <div className="w-full lg:w-2/3 bg-[#EBF1F5] p-3 rounded-[20px] shadow-2xl flex flex-col gap-3 rotate-1 hover:rotate-0 transition-transform duration-500 font-sans text-slate-800 border-[3px] border-white">
             
             <div className="flex flex-col xl:flex-row gap-3">
                {/* Left Column - Metrics */}
                <div className="flex-grow flex flex-col gap-3 w-full">
                  {/* Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    
                    {/* Recommendations */}
                    <div className="col-span-2 bg-[#051C74] rounded-xl p-3 text-white relative overflow-hidden flex flex-col justify-between min-h-[90px] shadow-sm group">
                       <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/50 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                       <div className="relative z-10">
                          <div className="text-[10px] opacity-70 mb-0.5">Results</div>
                          <div className="font-semibold text-sm leading-tight">Recommendations</div>
                          <div className="text-yellow-300 text-[10px] mt-0.5">✦✦</div>
                       </div>
                       <div className="relative z-10 mt-auto">
                          <div className="text-[8px] cursor-pointer bg-white/10 backdrop-blur-md px-2 py-1 rounded-md border border-white/20 hover:bg-white/20 transition-colors w-fit">
                            Tap to generate
                          </div>
                       </div>
                    </div>

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
                             <div className="text-xs font-bold">$6,160.81</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">+0%</div>
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
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">Clicks</div>
                          <div className="flex items-end justify-between gap-1 flex-wrap">
                             <div className="text-xs font-bold">9,118</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">+0%</div>
                          </div>
                       </div>
                    </div>

                    {/* Leads */}
                    <div className="col-span-2 bg-[#022c22] rounded-xl p-3 text-white relative overflow-hidden flex flex-col justify-between min-h-[90px] shadow-sm">
                       <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-50"></div>
                       <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                       <div className="relative z-10">
                          <div className="font-semibold text-sm">Leads</div>
                          <iconify-icon icon="solar:chart-2-bold" width="12" className="opacity-50 mt-0.5"></iconify-icon>
                       </div>
                       <div className="relative z-10 flex items-end justify-between mt-auto">
                          <div>
                             <div className="text-lg font-bold">1,573</div>
                             <div className="text-[7px] font-bold bg-green-500 text-white px-1 py-0.5 rounded w-fit mt-0.5">+0%</div>
                          </div>
                          <div className="text-[7px] bg-white text-black px-2 py-1 rounded font-bold flex items-center gap-1 cursor-pointer hover:bg-gray-100">
                            Download <iconify-icon icon="solar:download-linear"></iconify-icon>
                          </div>
                       </div>
                    </div>

                    {/* Cpc */}
                    <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:dollar-minimalistic-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">Cpc</div>
                          <div className="flex items-end justify-between gap-1">
                             <div className="text-xs font-bold">$0.68</div>
                             <div className="flex flex-col items-end">
                                <div className="text-[6px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded mb-0.5">-62%</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Ctr */}
                    <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:cursor-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">Ctr</div>
                          <div className="flex items-end justify-between gap-1">
                             <div className="text-xs font-bold">3.50%</div>
                             <div className="flex flex-col items-end">
                                <div className="text-[6px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded mb-0.5">100%</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Reach */}
                    <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:users-group-rounded-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">Reach</div>
                          <div className="flex items-end justify-between gap-1 flex-wrap">
                             <div className="text-xs font-bold">84k</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">+0%</div>
                          </div>
                       </div>
                    </div>

                    {/* Cost Per Lead */}
                    <div className="col-span-1 bg-white rounded-xl p-2.5 flex flex-col justify-between shadow-sm min-h-[90px]">
                       <div className="flex justify-between items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <iconify-icon icon="solar:dollar-minimalistic-bold" width="12"></iconify-icon>
                          </div>
                       </div>
                       <div>
                          <div className="text-[8px] text-gray-500 font-bold mb-0.5">CPL</div>
                          <div className="flex items-end justify-between gap-1 flex-wrap">
                             <div className="text-xs font-bold">$3.26</div>
                             <div className="text-[7px] font-bold bg-green-100 text-green-600 px-1 py-0.5 rounded">+0%</div>
                          </div>
                       </div>
                    </div>

                  </div>

                  {/* Filter Bar */}
                  <div className="bg-white rounded-lg p-1.5 flex flex-wrap gap-2 justify-between items-center shadow-sm">
                     <button className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded text-[9px] font-bold text-gray-600">
                        Spend <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                     </button>
                     <div className="flex bg-gray-100 rounded-md p-0.5">
                         <button className="px-2 py-0.5 text-[8px] font-bold text-gray-500">Day</button>
                         <button className="px-2 py-0.5 text-[8px] font-bold bg-blue-500 text-white rounded shadow-sm">Week</button>
                         <button className="px-2 py-0.5 text-[8px] font-bold text-gray-500">Month</button>
                     </div>
                  </div>
                </div>

                {/* Right Column - Status */}
                <div className="w-full xl:w-48 flex-shrink-0 flex flex-col gap-2">
                   
                   {/* Campaign Status */}
                   <div className="bg-white rounded-xl p-3 shadow-sm flex-grow">
                      <div className="flex items-center justify-between mb-3">
                         <h3 className="font-bold text-[10px]">Status</h3>
                         <div className="w-6 h-3.5 bg-gray-200 rounded-full relative cursor-pointer">
                            <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                         </div>
                      </div>
                      
                      <div className="relative pl-2.5 border-l border-gray-100 space-y-3">
                         {/* Activity Item 1 */}
                         <div className="relative">
                            <div className="absolute -left-[14px] top-0 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
                            <div>
                                <div className="text-[9px] font-bold text-gray-800">Updated campaign</div>
                                <div className="text-[7px] text-gray-400 leading-tight">Name updated.</div>
                            </div>
                         </div>
                         {/* Activity Item 2 */}
                         <div className="relative">
                            <div className="absolute -left-[14px] top-0 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
                            <div>
                                <div className="text-[9px] font-bold text-gray-800">Updated creative</div>
                                <div className="text-[7px] text-gray-400 leading-tight">Creative updated.</div>
                            </div>
                         </div>
                         {/* Activity Item 3 */}
                         <div className="relative">
                            <div className="absolute -left-[14px] top-0 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
                            <div>
                                <div className="text-[9px] font-bold text-gray-800">Status Updated</div>
                                <div className="text-[7px] text-gray-400 leading-tight">Paused.</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Actual Results vs Forecasted */}
                   <div className="bg-[#bbf7d0] rounded-xl p-3 text-[#064e3b] shadow-sm">
                       <div className="flex justify-between items-center mb-2">
                          <div className="text-[8px] font-bold flex items-center gap-1">
                            Actual vs Forecasted
                          </div>
                          <iconify-icon icon="solar:square-top-down-linear" width="10"></iconify-icon>
                       </div>
                       
                       <div className="bg-green-500 text-white rounded-lg p-2 flex items-center gap-2 shadow-sm mb-2">
                           <div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center text-white">
                              <iconify-icon icon="solar:dollar-minimalistic-bold" width="10"></iconify-icon>
                            </div>
                           <div className="font-bold text-[10px]">Savings $720</div>
                       </div>
                       
                       <div className="space-y-1">
                           <div className="bg-white/80 rounded p-1 text-[7px] flex justify-between items-center shadow-sm">
                               <span className="font-medium">Spend $301 (+0.6%)</span>
                           </div>
                       </div>
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

      {/* Card 7: AI Budget Optimization (Replacing Integrations) */}
      <div className="col-span-1 md:col-span-4 bg-brand-black border border-white/10 shadow-none rounded-[32px] p-8 bento-card flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
        
        {/* Visual Header */}
        <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-[#1D2E5C] to-transparent rounded-b-[40px] flex flex-col items-center justify-center p-6 border-b border-white/5">
            
            {/* Floating Elements for Visualization */}
            <div className="w-full space-y-3 relative z-10">
                {/* Row 1: Scaling Up */}
                <div className="flex items-center gap-3 p-2 bg-brand-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg translate-y-2 transition-transform duration-700 group-hover:-translate-y-1">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <iconify-icon icon="solar:graph-new-up-bold" width="20"></iconify-icon>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-[10px] text-gray-400 font-medium mb-1">
                            <span>Winner Ad Set</span>
                            <span className="text-green-400">Scaling</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 w-3/4"></div>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-white">+$500</div>
                </div>

                {/* Row 2: Scaling Down */}
                <div className="flex items-center gap-3 p-2 bg-brand-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg translate-y-2 transition-transform duration-700 group-hover:translate-y-1 delay-100">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                        <iconify-icon icon="solar:graph-new-down-bold" width="20"></iconify-icon>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-[10px] text-gray-400 font-medium mb-1">
                            <span>Loser Ad Set</span>
                            <span className="text-red-400">Paused</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-1/4 opacity-50"></div>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-gray-500">$0</div>
                </div>

                {/* Central Intelligence Badge */}
                <div className="absolute -top-4 right-0 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-xl flex items-center gap-1 border border-brand-blue/50">
                    <iconify-icon icon="solar:cpu-bolt-bold" width="12"></iconify-icon>
                    AI Active
                </div>
            </div>
            
            {/* Grid Background Effect */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#4450F2 1px, transparent 1px), linear-gradient(90deg, #4450F2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>

        <div className="mt-auto relative z-10 flex flex-col gap-4">
          <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">AI Budget Optimization</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Real-time allocations prevent wasted spend and scale your best ads profitably.
              </p>
          </div>
          <a href="#" className="inline-flex w-fit items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-semibold transition-colors btn-hover-skew border border-white/10">
            <span>See how it works</span>
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
        data-cal-link="rock-yt-admanager/15min"
        data-cal-namespace="15min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
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
        data-cal-link="rock-yt-admanager/15min"
        data-cal-namespace="15min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
        className="col-span-1 md:col-span-4 bg-brand-yellow text-brand-black rounded-[32px] p-8 flex items-center justify-center hover:bg-[#fcd34d] transition-colors cursor-pointer min-h-[160px] btn-hover-skew"
      >
        <h3 className="text-2xl font-semibold tracking-tight"><span>Book demo</span></h3>
      </div>
    </div>
  );
};

export default BentoGrid;