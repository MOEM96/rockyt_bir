import React, { useState } from 'react';
import '../types';

interface HubPageProps {
  onBookDemo: () => void;
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-brand-yellow transition-colors">{question}</span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <iconify-icon icon="solar:add-circle-bold" width="24" className={isOpen ? 'text-brand-yellow' : 'text-gray-500'}></iconify-icon>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const HubPage: React.FC<HubPageProps> = ({ onBookDemo }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4">
             {/* Simple Gradient Animation Placeholder - Lottie would go here */}
             <div className="w-20 h-20 bg-gradient-to-tr from-brand-blue to-brand-pink rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Simple </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">friendly </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 block md:inline">server-side tracking</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-2xl md:text-3xl font-light text-gray-400">for</span>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1243f2f5c678d4e6bf697_meta%20logo.svg" alt="Meta" className="h-8 md:h-10 w-auto" />
            <span className="text-2xl md:text-3xl font-bold text-white">Meta ads</span>
          </div>
          
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-12">in partnership with Meta</p>
          
          <button 
            onClick={onBookDemo}
            data-cal-link="rock-yt-admanager/15min"
            data-cal-namespace="15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all btn-hover-skew mb-16"
          >
            <span>Get started with Hub</span>
          </button>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">for other platforms</p>
            <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e7a32653e14bb9fe1e_platform-icons-snap.svg" alt="Snapchat" className="h-8 w-auto" />
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e725a0a70ca1dada45_platform-icons-tt.svg" alt="TikTok" className="h-8 w-auto" />
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e75afd588ac47a3430_platform-icons-google.svg" alt="Google" className="h-8 w-auto" />
            </div>
            <p className="text-xs text-gray-600">coming soon</p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 my-16"></div>

      {/* Setup Slider Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hassle-free setup</h2>
        <p className="text-xl text-gray-400 mb-12">with user <span className="text-white font-semibold">friendly</span> interface</p>
        
        <div className="relative w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-8 no-scrollbar">
          <div className="snap-center shrink-0 w-[80vw] md:w-[60vw] rounded-2xl overflow-hidden border border-white/10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147354dd1b9d4d833dc44_2dc4c4ced51c6adaa954a52032b58d06_hub-01.jpg" alt="Hub Setup 1" className="w-full h-auto" />
          </div>
          <div className="snap-center shrink-0 w-[80vw] md:w-[60vw] rounded-2xl overflow-hidden border border-white/10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147354cb4d49080511413_90fcd60e808c00e064c86c7c5efbc757_02_2.jpg" alt="Hub Setup 2" className="w-full h-auto" />
          </div>
          <div className="snap-center shrink-0 w-[80vw] md:w-[60vw] rounded-2xl overflow-hidden border border-white/10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147351a3fa852ba291630_a8a36591f13a1d245bd2f7747921fe7f_03_2.jpg" alt="Hub Setup 3" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">How it works</h2>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Connection Lines (Desktop only visuals approx) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-gray-700 via-brand-blue to-brand-blue opacity-30 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531ade0e52bef0112fa5_how-it-works-pixel.svg" alt="Pixel" className="w-12 h-12" />
            </div>
            <h3 className="text-sm text-gray-400 font-medium mb-1">first-party</h3>
            <h3 className="text-3xl font-bold text-white mb-4">pixel</h3>
            <p className="text-gray-400 text-sm max-w-xs">Immune to browser restrictions and ad blockers for reliable event tracking</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531b6093edfd9e779f3f_how-it-works-birch.svg" alt="Birch Hub" className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 mt-6">hub</h3>
            <p className="text-gray-400 text-sm max-w-xs">Events are collected and processed safely within your own gateway server</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-xl">
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531b0cd0cabc414d2229_how-it-works-meta.svg" alt="Meta" className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-bold text-[#0081FB] mb-4 mt-6">meta</h3>
            <p className="text-gray-400 text-sm max-w-xs">Data is sent via CAPI to Meta, improving attribution and ROAS</p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 my-16"></div>

      {/* Benefits Section */}
      <section className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          With Rockyt Hub<br/>conversion is higher
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 blur-[50px] rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <p className="text-xl font-bold text-white relative z-10">More data <br/>events</p>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c9017decfc2e8c8350b_hub-card-icons-01.svg" alt="Icon" className="w-12 h-12 relative z-10" />
          </div>
          {/* Card 2 */}
          <div className="bg-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <p className="text-xl font-bold text-white relative z-10">More accurate <br/>attribution</p>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c909a5f8aebfdb9b0ee_hub-card-icons-02.svg" alt="Icon" className="w-12 h-12 relative z-10" />
          </div>
          {/* Card 3 */}
          <div className="bg-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 blur-[50px] rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <p className="text-xl font-bold text-white relative z-10">Better functioning <br/>ad algorithms</p>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c902a58ffcf4a388486_hub-card-icons-04.svg" alt="Icon" className="w-12 h-12 relative z-10" />
          </div>
          {/* Card 4 */}
          <div className="bg-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden h-64 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-[50px] rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <p className="text-xl font-bold text-white relative z-10">More relevant <br/>audience</p>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c90cfdc1e723c61f230_hub-card-icons-03.svg" alt="Icon" className="w-12 h-12 relative z-10" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-24 space-y-8">
        
        {/* Case Study 1: Cricksy Dog */}
        <div className="bg-brand-yellow rounded-[32px] p-8 md:p-12 text-brand-black flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 z-10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d279d4f15478b10ec73872_hub-logo-cs-1.png" alt="Cricksy Dog" className="h-8 w-auto mb-6" />
            <h3 className="text-3xl font-bold mb-8">Cricksy Dog after Switching to Rockyt Hub</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-4xl font-bold mb-1">30%</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">decreased in CPA</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">35%</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">increased in conversions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">40%</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">increased events tracked</div>
              </div>
            </div>
            <button className="bg-brand-black text-white px-6 py-3 rounded-full font-bold hover:bg-black/80 transition-colors">Read case study →</button>
          </div>
          <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-end">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d278c5737807c8c73a6a8c_ce398b4063c4480b89b7478287052446_hub-cs-img_cricksy-dog.png" alt="Dog" className="max-h-80 w-auto object-contain" />
          </div>
        </div>

        {/* Case Study 2: Pawz.rs */}
        <div className="bg-[#8B5CF6] rounded-[32px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 z-10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d279d568e44944bac7d230_hub-logo-cs-2.png" alt="Pawz" className="h-8 w-auto mb-6 brightness-0 invert" />
            <h3 className="text-3xl font-bold mb-8">Accurate Tracking Helped Pawz.rs Scale Campaigns Profitably</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-4xl font-bold mb-1">9+</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">ROAS on cold campaigns</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">22%</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">decrease in CPA</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">25%</div>
                <div className="text-xs font-semibold uppercase leading-tight opacity-70">increase total events</div>
              </div>
            </div>
            <button className="bg-white text-[#8B5CF6] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">Read case study →</button>
          </div>
          <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-end">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d278c5ea536c9556b345ca_hub-cs-img_pawz.png" alt="Pawz Visual" className="max-h-80 w-auto object-contain" />
          </div>
        </div>

      </section>

      {/* Pricing Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl font-bold text-white mb-2">Pricing</h2>
        <p className="text-gray-400 mb-12">per gateway</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-brand-yellow text-brand-black p-6 rounded-2xl flex flex-col justify-between h-48 border border-transparent">
             <div className="text-xs font-bold uppercase opacity-80">10,000<br/>events/mo</div>
             <div className="text-3xl font-bold">Free</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-48 border border-white/10">
             <div className="text-xs font-bold uppercase text-gray-400">500,000<br/>events/mo</div>
             <div className="text-3xl font-bold">$10</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-48 border border-white/10">
             <div className="text-xs font-bold uppercase text-gray-400">5,000,000<br/>events/mo</div>
             <div className="text-3xl font-bold">$49</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-48 border border-white/10">
             <div className="text-xs font-bold uppercase text-gray-400">20,000,000<br/>events/mo</div>
             <div className="text-3xl font-bold">$149</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-48 border border-white/10">
             <div className="text-xs font-bold uppercase text-gray-400">50,000,000<br/>events/mo</div>
             <div className="text-3xl font-bold">$249</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-48 border border-white/10">
             <div className="text-xs font-bold uppercase text-gray-400">150,000,000<br/>events/mo</div>
             <div className="text-3xl font-bold">$499</div>
          </div>
        </div>

        <div className="mt-12">
          <button 
            onClick={onBookDemo}
            data-cal-link="rock-yt-admanager/15min"
            data-cal-namespace="15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all btn-hover-skew"
          >
            <span>Create your Rockyt hub</span>
          </button>
        </div>
      </section>

      <div className="border-t border-white/10 my-16"></div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">FAQ</h2>
        
        <div className="space-y-2">
          <FAQItem 
            question="What is 1st party data and 3rd party data?" 
            answer="First-party data is information you gather directly from your audience through channels like your website, app, email subscribers, and CRM. Third-party data, on the other hand, is collected by another entity or business and then shared with you. As browsers continue to prohibit the collection of third-party data, many advertisers are shifting their focus to first-party data." 
          />
          <FAQItem 
            question="Why many marketers are switching to server-side tracking?" 
            answer="Professionals noticed decrease in ad performance due to inaccurate or incomplete data they see in their advertising platforms. Since third-party cookies are being constantly restricted, they might as well be gone soon. So everyone will have to switch to server-side tracking eventually." 
          />
          <FAQItem 
            question="What is the difference between Meta Conversions API Gateway and Signals Gateway?" 
            answer="Both provide ability to use first-party data. But there 2 main advantages to Signals Gateway. First, it allows you to use any sources and distribute data to any destinations, since it is designed to be independent from Meta. Second, Signals Gateway uses the new pixel, so it shows even better results." 
          />
          <FAQItem 
            question="What’s the difference between Meta Pixel and Signals Gateway Pixel?" 
            answer="Signals Gateway Pixel collects data from your website and shares it exclusively with your Signals Gateway cloud server, without any use of third-party cookies and is independent from Meta’s servers." 
          />
          <FAQItem 
            question="How Signals Gateway helps to make advertising more effective?" 
            answer="More data signals transmitted → more accurate attribution → better functioning Meta ad algorithms → ad is shown to more relevant audience → higher conversion." 
          />
          <FAQItem 
            question="How do you charge for it?" 
            answer="Event-based pricing charges you based on the number of tracked events per gateway. This scalable model helps you keep initial costs low while expanding your data volume as needed. There are no overage fees — if you exceed your plan, you continue paying the same rate per additional event. This ensures a predictable and dependable solution for marketing teams handling variable traffic." 
          />
          <FAQItem 
            question="Is it GDPR compliant?" 
            answer="Signals Gateway and first-party data help with compliance by reducing reliance on third-party cookies, ensuring user consent, and giving businesses full control over their data." 
          />
        </div>
      </section>

    </div>
  );
};

export default HubPage;