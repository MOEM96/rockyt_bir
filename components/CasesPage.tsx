import React, { useState } from 'react';
import '../types';

interface CasesPageProps {
  onBookDemo: () => void;
}

type Category = 'all' | 'agency' | 'ecom' | 'app';
type Platform = 'meta' | 'tiktok' | 'snapchat';

interface CaseStudy {
  id: string;
  size: 'big' | 'small';
  category: Category;
  title: string;
  image: string;
  logo: string;
  platforms: Platform[];
  // Style overrides
  bgColor?: string; 
  textColor?: string;
  logoInvert?: boolean;
}

const PLATFORM_ICONS: Record<Platform, string> = {
  meta: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/693994f4ba4c11ad5e156975_CS-platfrom-meta.svg",
  tiktok: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/693995dde1b01dbf7d5fccf6_CS-platfrom-tt.svg",
  snapchat: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6980db70963c92fb17931ed0_2c4fefd121a16278851bed297cb08aa6_CS-platfrom-Snapchat.svg"
};

const caseStudies: CaseStudy[] = [
  {
    id: 'cricksydog',
    size: 'big',
    category: 'ecom',
    title: "CricksyDog's CPA drops 30% after switching to Bïrch Signal Gateways",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682ef087944cd4eb082f4dde_f55e8fca892d32417f975093cb8313d5_CricksyDog-for-main-cases-page.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682eef7f89d00ecb83853bbc_a870021f1d8128b91c23f6b4b9ac8726_CricksyDog_logo%20for%20main.png",
    platforms: ['meta'],
    bgColor: "bg-[#F3F5F7]",
    textColor: "text-black"
  },
  {
    id: 'fabulous',
    size: 'small',
    category: 'app',
    title: "From Manual to Automated: Scaling 50% More While Maintaining Target CPA",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6981fee63f350af65871c684_e1c44fadef4fdbf83f527f7052580769_the_fabulous-cs-gallery.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6980e060a1565ce1f098d476_Fabulous_Logo_white_background_2.png",
    platforms: ['tiktok', 'snapchat', 'meta'],
    logoInvert: false 
  },
  {
    id: 'adparlor',
    size: 'small',
    category: 'agency',
    title: "AdParlor eliminated manual work in TikTok Ads management using Bïrch",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/69399d07b708063c77035dbb_sidharth-sharma-cs-main_s%20(1).jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682c768b41d8916da356af4d_svg-ap-a-fluent-company-2x-1.png",
    platforms: ['tiktok'],
    logoInvert: true
  },
  {
    id: 'loop',
    size: 'big',
    category: 'ecom',
    title: "Loop Earplugs scale 200% faster with Bïrch automation",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67f77ac7b93f9783c8f899ae_ac6b6bbf988cff9a1d064e689b38e789_alex-loop-for-cases-page.jpeg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67e5347e3a4e93c87276fd1e_loop%20logo_Avantt_FINAL%20-%20black.png",
    platforms: ['meta'],
    bgColor: "bg-[#F3F5F7]",
    textColor: "text-black"
  },
  {
    id: 'pawz',
    size: 'small',
    category: 'ecom',
    title: "How Accurate Tracking Helps Pawz.rs Scale Cold Campaigns Profitably",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e3b37354530907f6ab9bfd_cat_400w.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e3ad96284718eb55d52c4c_Pawz_logo.svg",
    platforms: ['meta']
  },
  {
    id: 'cocosolis',
    size: 'small',
    category: 'ecom',
    title: "How Cocosolis streamlined multi-account ad management while improving ROAS",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6888b0696dda7159a0b78f57_plamen%20photo%20(1).jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/686cfb4487f2067ea15234a8_logo-COCOSOLIS-png.png",
    platforms: ['meta']
  },
  {
    id: 'adquantum',
    size: 'big',
    category: 'agency',
    title: "AdQuantum was able to spend 30% less time managing ad campaigns",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd93_cs-artem.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd15_adquantum-01.png",
    platforms: ['meta'],
    bgColor: "bg-[#F3F5F7]",
    textColor: "text-black"
  },
  {
    id: 'ecomhouse',
    size: 'small',
    category: 'agency',
    title: "ECOM HOUSE uses various rules to reduce CPA for their clients",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd79_cs-ecomhouse.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfc79_Ecom_House_Logo_Black%20-%20Emanuele%20Maragno.png",
    platforms: ['meta'],
    logoInvert: true
  },
  {
    id: 'webtopia',
    size: 'small',
    category: 'agency',
    title: "Webtopia scaled ad accounts from $1,000/day to $30,000/day with Bïrch",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67b6fbaa96fae701fd1578bc_6716718ea408f53194adfdab_cs-ecomdept.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67b6f8af5e2974f894ade66d_W_Icon.png",
    platforms: ['meta'],
    logoInvert: true
  },
  {
    id: 'scentbird',
    size: 'big',
    category: 'ecom',
    title: "Scentbird does 80% more ad creative testing to find winning angles faster",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd8a_cs-oleg.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adf9b3_black-scentbird.svg",
    platforms: ['meta'],
    bgColor: "bg-[#F3F5F7]",
    textColor: "text-black"
  },
  {
    id: 'ignite',
    size: 'small',
    category: 'agency',
    title: "Ignite Your Brand helped a client reach $3.9M in sales in one month",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd84_cs-lalo.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd87_ignite.png",
    platforms: ['meta']
  },
  {
    id: 'marco',
    size: 'small',
    category: 'agency',
    title: "Marco Battaglia helped his client decrease CPA by 25.87% in 6 months",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdac_cs-marco.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdb4_marco-logo.png",
    platforms: ['meta'],
    logoInvert: true
  },
  {
    id: 'keiki',
    size: 'big',
    category: 'app',
    title: "Keiki's ad spend has increased by 2.76 times",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6720e7b4575fd83783e88d8b_cs-keiki.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6720e123b0ca4231f3a00bc7_Logo%202.svg",
    platforms: ['meta'],
    bgColor: "bg-[#F3F5F7]",
    textColor: "text-black"
  },
  {
    id: 'voy',
    size: 'small',
    category: 'agency',
    title: "Voy Media can take on more clients per account manager allowing the agency to scale faster",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd89_kevin.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfcce_voy_media_logo.png",
    platforms: ['meta']
  },
  {
    id: 'alessandro',
    size: 'small',
    category: 'agency',
    title: "Alessandro can take on more clients and host more coaching events",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd88_cs-ag.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdb0_garguilo-logobl.png",
    platforms: ['meta'],
    logoInvert: true
  },
  {
    id: 'ecomdept',
    size: 'small',
    category: 'agency',
    title: "ECOM DEPT eliminates $10k+ in wasted monthly ad spend for their clients",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdab_cs-ecomdept.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfc06_ecom_logo%201.png",
    platforms: ['meta'],
    logoInvert: true
  }
];

const CasesPage: React.FC<CasesPageProps> = ({ onBookDemo }) => {
  const [filter, setFilter] = useState<Category>('all');

  const filteredCases = caseStudies.filter(
    cs => filter === 'all' || cs.category === filter
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center relative">
        <div className="relative z-10 w-full max-w-[800px]">
          <div className="flex justify-center mb-8 relative">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/690e0a2584c50c47df407571_Hero%20Cases.svg" alt="Case Studies" className="w-full h-auto hidden md:block" />
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/69209457e14b75fc4102cdac_548346ff9a31271f378b4b7c9fb9ab5c_Hero%20Cases.svg" alt="Case Studies" className="w-full h-auto block md:hidden" />
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${filter === 'all' ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              All case studies
            </button>
            <button 
              onClick={() => setFilter('agency')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${filter === 'agency' ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              Agencies
            </button>
            <button 
              onClick={() => setFilter('ecom')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${filter === 'ecom' ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              eCommerce
            </button>
            <button 
              onClick={() => setFilter('app')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${filter === 'app' ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              Apps
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Fixed to 2 cols for better alignment matching source */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr mb-24">
        {filteredCases.map((cs) => {
          if (cs.size === 'big') {
            return (
              <div key={cs.id} className={`col-span-1 md:col-span-2 rounded-[32px] overflow-hidden flex flex-col md:flex-row ${cs.bgColor || 'bg-[#F3F5F7]'} ${cs.textColor || 'text-black'} group border border-transparent transition-all hover:shadow-2xl`}>
                {/* Image Side */}
                <div className="w-full md:w-5/12 relative bg-[#e0e0e0] overflow-hidden min-h-[300px] md:min-h-full">
                     <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy" 
                        decoding="async"
                     />
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between relative">
                    {/* Top: Logo & Platform Icons */}
                    <div className="flex justify-between items-start mb-6">
                        <img src={cs.logo} alt="Logo" className="h-8 md:h-10 w-auto object-contain object-left" style={cs.logoInvert ? { filter: 'brightness(0) invert(1)' } : {}} loading="lazy" />
                        <div className="flex gap-2">
                            {cs.platforms.map(p => (
                                <img key={p} src={PLATFORM_ICONS[p]} alt={p} className="w-6 h-6 md:w-8 md:h-8 opacity-70" loading="lazy" />
                            ))}
                        </div>
                    </div>

                    {/* Middle: Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-[1.1] tracking-tight">{cs.title}</h3>

                    {/* Bottom: CTA */}
                    <div>
                         <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-transform hover:-translate-y-1 inline-flex items-center gap-2 text-sm md:text-base">
                            Read case study <span className="text-xl">→</span>
                         </button>
                    </div>
                </div>
              </div>
            );
          } else {
            return (
              <a href="#" onClick={e => e.preventDefault()} key={cs.id} className="col-span-1 bg-[#1A1A1A] rounded-[32px] overflow-hidden flex flex-col group border border-white/5 hover:border-white/20 transition-all h-full relative">
                
                {/* Full Header Image - Widescreen aspect ratio for better 2-col layout */}
                <div className="w-full aspect-[16/9] relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80 z-10"></div>
                     <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy"
                        decoding="async"
                     />
                     
                     {/* Top Elements overlay */}
                     <div className="absolute top-4 left-4 z-20">
                         <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                            {cs.category === 'agency' ? 'Agency' : cs.category === 'ecom' ? 'eCommerce' : 'App'}
                         </span>
                     </div>
                     
                     {/* Platforms */}
                     <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                        {cs.platforms.map(p => (
                            <div key={p} className="bg-black/40 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center border border-white/10">
                                <img src={PLATFORM_ICONS[p]} alt={p} className="w-4 h-4 opacity-100" loading="lazy" />
                            </div>
                        ))}
                     </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-16">
                     {/* Logo */}
                     <div className="mb-4">
                         <div className="h-12 w-fit p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center">
                            <img src={cs.logo} alt="Logo" className="h-full w-auto object-contain max-w-[100px]" style={cs.logoInvert ? { filter: 'brightness(0) invert(1)' } : {}} loading="lazy" />
                         </div>
                     </div>

                     <h3 className="text-xl font-bold text-white mb-6 leading-tight line-clamp-3">{cs.title}</h3>

                     <div className="mt-auto">
                        <div className="text-brand-yellow font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read case study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                        </div>
                     </div>
                </div>
              </a>
            );
          }
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-[#161616] text-white py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Get started now</h2>
          <div className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
            Automate campaign management. Automate growth.
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://app.bir.ch/signup" className="w-full md:w-auto bg-brand-yellow text-brand-black px-10 py-5 rounded-full text-xl font-bold hover:bg-[#fcd34d] transition-all hover:scale-105 active:scale-95 inline-flex justify-center items-center">
              Try for Free
            </a>
            <button 
                onClick={onBookDemo}
                data-cal-link="rock-yt-admanager/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                className="w-full md:w-auto bg-[#161616] border border-white/20 text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
                <span>Book a Demo</span>
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfec6_sales.png" alt="" width="24" className="rounded-full" loading="lazy" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow font-bold">✓</span> 14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow font-bold">✓</span> No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow font-bold">✓</span> Cancel anytime
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CasesPage;