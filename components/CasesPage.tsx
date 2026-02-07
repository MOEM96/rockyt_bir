import React, { useState } from 'react';
import '../types';

interface CasesPageProps {
  onBookDemo: () => void;
}

type Category = 'all' | 'agency' | 'ecom' | 'app';

interface CaseStudy {
  id: string;
  category: Category;
  isFeatured: boolean;
  title: string;
  image: string;
  logo: string;
  logoHeight?: number;
  bgColor?: string; // For featured cards
}

const caseStudies: CaseStudy[] = [
  {
    id: 'cricksydog',
    category: 'ecom',
    isFeatured: true,
    title: "CricksyDog's CPA drops 30% after switching to Rockyt Signal Gateways",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682ef087944cd4eb082f4dde_f55e8fca892d32417f975093cb8313d5_CricksyDog-for-main-cases-page.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682eef7f89d00ecb83853bbc_a870021f1d8128b91c23f6b4b9ac8726_CricksyDog_logo%20for%20main.png",
    bgColor: "bg-white" // Custom bg for this card based on HTML
  },
  {
    id: 'webtopia',
    category: 'agency',
    isFeatured: false,
    title: "Webtopia scaled ad accounts from $1,000/day to $30,000/day with Rockyt",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67b6fbaa96fae701fd1578bc_6716718ea408f53194adfdab_cs-ecomdept.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67b6f8af5e2974f894ade66d_W_Icon.png"
  },
  {
    id: 'adparlor',
    category: 'agency',
    isFeatured: false,
    title: "AdParlor eliminated manual work in TikTok Ads management using Rockyt",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/69399d07b708063c77035dbb_sidharth-sharma-cs-main_s%20(1).jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/682c768b41d8916da356af4d_svg-ap-a-fluent-company-2x-1.png"
  },
  {
    id: 'loop',
    category: 'ecom',
    isFeatured: true,
    title: "Loop Earplugs scale 200% faster with Rockyt automation",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67f77ac7b93f9783c8f899ae_ac6b6bbf988cff9a1d064e689b38e789_alex-loop-for-cases-page.jpeg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67e5347e3a4e93c87276fd1e_loop%20logo_Avantt_FINAL%20-%20black.png",
    bgColor: "bg-brand-gray"
  },
  {
    id: 'pawz',
    category: 'ecom',
    isFeatured: false,
    title: "How Accurate Tracking Helps Pawz.rs Scale Cold Campaigns Profitably",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e3b37354530907f6ab9bfd_cat_400w.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68e3ad96284718eb55d52c4c_Pawz_logo.svg"
  },
  {
    id: 'cocosolis',
    category: 'ecom',
    isFeatured: false,
    title: "How Cocosolis streamlined multi-account ad management while improving ROAS",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6888b0696dda7159a0b78f57_plamen%20photo%20(1).jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/686cfb4487f2067ea15234a8_logo-COCOSOLIS-png.png"
  },
  {
    id: 'adquantum',
    category: 'agency',
    isFeatured: true,
    title: "AdQuantum was able to spend 30% less time managing ad campaigns",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd93_cs-artem.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd15_adquantum-01.png",
    bgColor: "bg-white"
  },
  {
    id: 'marco',
    category: 'agency',
    isFeatured: false,
    title: "Marco Battaglia helped his client decrease CPA by 25.87% in 6 months",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdac_cs-marco.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdb4_marco-logo.png"
  },
  {
    id: 'ecomhouse',
    category: 'agency',
    isFeatured: false,
    title: "ECOM HOUSE uses various rules to reduce CPA for their clients",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd79_cs-ecomhouse.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfc79_Ecom_House_Logo_Black%20-%20Emanuele%20Maragno.png"
  },
  {
    id: 'scentbird',
    category: 'ecom',
    isFeatured: true,
    title: "Scentbird does 80% more ad creative testing to find winning angles faster",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd8a_cs-oleg.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adf9b3_black-scentbird.svg",
    bgColor: "bg-white"
  },
  {
    id: 'ecomdept',
    category: 'agency',
    isFeatured: false,
    title: "ECOM DEPT eliminates $10k+ in wasted monthly ad spend for their clients",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdab_cs-ecomdept.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfc06_ecom_logo%201.png"
  },
  {
    id: 'ignite',
    category: 'agency',
    isFeatured: false,
    title: "Ignite Your Brand helped a client reach $3.9M in sales in one month",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd84_cs-lalo.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd87_ignite.png"
  },
  {
    id: 'keiki',
    category: 'app',
    isFeatured: true,
    title: "Keiki's ad spend has increased by 2.76 times",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6720e7b4575fd83783e88d8b_cs-keiki.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6720e123b0ca4231f3a00bc7_Logo%202.svg",
    bgColor: "bg-[#8B5CF6] text-white"
  },
  {
    id: 'voy',
    category: 'agency',
    isFeatured: false,
    title: "Voy Media can take on more clients per account manager",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd89_kevin.png",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfcce_voy_media_logo.png"
  },
  {
    id: 'alessandro',
    category: 'agency',
    isFeatured: false,
    title: "Alessandro can take on more clients and host more coaching events",
    image: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfd88_cs-ag.jpg",
    logo: "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfdb0_garguilo-logobl.png"
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
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/690e0a2584c50c47df407571_Hero%20Cases.svg" alt="Case Studies Hero" className="w-full max-w-[600px] h-auto" />
          </div>
          
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              All case studies
            </button>
            <button 
              onClick={() => setFilter('agency')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'agency' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Agencies
            </button>
            <button 
              onClick={() => setFilter('ecom')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'ecom' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              eCommerce
            </button>
            <button 
              onClick={() => setFilter('app')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'app' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Apps
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr mb-24">
        {filteredCases.map((cs) => {
          if (cs.isFeatured) {
            return (
              <div key={cs.id} className={`col-span-1 md:col-span-2 rounded-[32px] overflow-hidden flex flex-col md:flex-row ${cs.bgColor || 'bg-white'} text-black min-h-[400px] group`}>
                <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto relative">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start relative">
                  <img src={cs.logo} alt="Logo" className={`h-8 w-auto mb-6 ${cs.id === 'keiki' ? 'brightness-0 invert' : ''}`} />
                  <h3 className={`text-2xl md:text-3xl font-bold mb-8 leading-tight ${cs.id === 'keiki' ? 'text-white' : 'text-black'}`}>{cs.title}</h3>
                  <button className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${cs.id === 'keiki' ? 'bg-white text-[#8B5CF6] hover:bg-gray-100' : 'bg-black text-white hover:bg-black/80'}`}>
                    Read case study <span className="text-xl">→</span>
                  </button>
                  {/* Platform Icon */}
                  <div className="absolute bottom-8 right-8">
                     <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/693994f4ba4c11ad5e156975_CS-platfrom-meta.svg" alt="Platform" className="w-6 h-6 opacity-50" />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={cs.id} className="col-span-1 bg-[#1A1A1A] rounded-[32px] overflow-hidden flex flex-col group border border-white/5 hover:border-white/20 transition-all">
                <div className="p-6 pb-0 flex items-start justify-between">
                   <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-black flex-shrink-0">
                      <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="bg-white/10 rounded-full px-3 py-1 flex items-center justify-center">
                      <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/693994f4ba4c11ad5e156975_CS-platfrom-meta.svg" alt="Meta" className="w-4 h-4 opacity-70" />
                   </div>
                </div>
                <div className="p-8 flex flex-col h-full">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{cs.category === 'agency' ? 'Agency' : 'eCommerce'}</div>
                  <img src={cs.logo} alt="Logo" className="h-6 w-auto mb-4 object-contain object-left brightness-0 invert opacity-80" />
                  <h3 className="text-xl font-medium text-white mb-8 flex-grow leading-snug">{cs.title}</h3>
                  <div className="text-brand-yellow font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read case study <span>→</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-brand-black border border-white/10 rounded-[32px] p-8 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get started now</h2>
          <p className="text-xl text-gray-400 mb-10">Automate campaign management. Automate growth.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <a href="https://app.rockyt.com/signup" className="bg-brand-yellow text-brand-black px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fcd34d] transition-colors btn-hover-skew">
              <span>Try for Free</span>
            </a>
            <button 
              onClick={onBookDemo} 
              data-cal-link="rock-yt-admanager/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Book a Demo</span>
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6716718ea408f53194adfec6_sales.png" alt="Sales" className="w-6 h-6 rounded-full group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> 14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> Cancel anytime
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CasesPage;