import React from 'react';
import { DemoBookingProps } from '../types/index';
import { CAL_CONFIG } from '../constants/index';

const PartnersPage: React.FC<DemoBookingProps> = () => {
  const BENEFITS = [
    {
      title: "Qualified Client Pool",
      description: "Get matched with high-value brands looking for experts. Stop chasing leads and start closing deals.",
      icon: "solar:users-group-rounded-bold",
      color: "text-brand-blue",
      bg: "bg-brand-blue/10"
    },
    {
      title: "Global Exposure",
      description: "Showcase your agency to 15,000+ businesses on our marketplace. Build your authority instantly.",
      icon: "solar:globus-bold",
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/10"
    },
    {
      title: "Unlimited Workspaces",
      description: "Manage all your clients in one place with no limits. Streamline operations and reduce overhead.",
      icon: "solar:folder-with-files-bold",
      color: "text-brand-pink",
      bg: "bg-brand-pink/10"
    },
    {
      title: "White Label Solution",
      description: "Offer your own branded ad tech. Custom domain, your logo, your pricing. We power the engine.",
      icon: "solar:pallete-2-bold",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "Expert Community",
      description: "Join an exclusive network of top 1% performance marketers. Share insights and grow together.",
      icon: "solar:chat-round-stars-bold",
      color: "text-green-400",
      bg: "bg-green-500/10"
    },
    {
      title: "Partner Certification",
      description: "Earn your verified partner badge. Stand out from the competition and build instant trust with clients.",
      icon: "solar:medal-star-bold",
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <div className="bg-[#161616] min-h-screen pt-24 pb-20">
      
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">For Agencies & Experts</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Partner with Rockyt.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-blue">Scale Your Agency.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
           Join the fastest-growing ecosystem of performance marketers. Access exclusive tools, leads, and technology to 10x your client results.
        </p>
      </div>

      {/* Benefits Grid (6 Cards) */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-start">
                    <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5`}>
                        <iconify-icon icon={benefit.icon} width="28"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {benefit.description}
                    </p>
                </div>
            ))}
         </div>
      </div>

      {/* Catchy CTA Section */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <div 
            data-cal-link={CAL_CONFIG.link}
            data-cal-namespace={CAL_CONFIG.namespace}
            data-cal-config={JSON.stringify(CAL_CONFIG.config)}
            className="group relative w-full max-w-2xl mx-auto cursor-pointer"
        >
            {/* Glow Effect behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-[#FFAE00] to-brand-pink rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
            
            <div className="relative flex items-center justify-between px-8 py-6 bg-[#1A1A1A] rounded-[40px] leading-none border border-white/10 group-hover:border-white/30 transition-all z-20">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 mx-auto md:mx-0">
                    <div className="w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center text-black shrink-0 shadow-[0_0_20px_rgba(255,226,65,0.3)]">
                        <iconify-icon icon="solar:calendar-add-bold" width="28"></iconify-icon>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-white font-bold text-xl md:text-2xl">Ready to scale?</h3>
                        <p className="text-gray-400 text-sm mt-1">Book your partnership call.</p>
                    </div>
                </div>
                
                <div className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform group-hover:scale-105 shadow-xl">
                    <span>Apply Now</span>
                    <iconify-icon icon="solar:arrow-right-bold" width="18"></iconify-icon>
                </div>
            </div>

            {/* Mobile Button overlay for full visibility */}
             <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pt-2 z-30 w-max">
                 <button className="flex items-center gap-2 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-[0_4px_20px_rgba(255,226,65,0.4)] border-2 border-[#1A1A1A] active:scale-95 transition-transform">
                     <span>Apply Now</span>
                     <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
                 </button>
             </div>
        </div>
      </div>

    </div>
  );
};

export default PartnersPage;
