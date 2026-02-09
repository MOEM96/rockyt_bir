import React, { useState, useRef, useEffect } from 'react';
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
        <span className="text-lg font-medium text-white group-hover:text-brand-yellow transition-colors pr-8">{question}</span>
        <div className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <iconify-icon icon="solar:add-circle-bold" width="24" class={isOpen ? 'text-brand-yellow' : 'text-gray-500'}></iconify-icon>
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

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147354dd1b9d4d833dc44_2dc4c4ced51c6adaa954a52032b58d06_hub-01.jpg",
    "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147354cb4d49080511413_90fcd60e808c00e064c86c7c5efbc757_02_2.jpg",
    "https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d147351a3fa852ba291630_a8a36591f13a1d245bd2f7747921fe7f_03_2.jpg"
  ];

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const slides = container.children;
    if (!slides || slides.length <= index) return;

    const slide = slides[index] as HTMLElement;
    if (!slide) return;

    const containerWidth = container.offsetWidth;
    const slideWidth = slide.offsetWidth;
    
    // Calculate position to center the slide:
    const slideLeft = slide.offsetLeft;
    const targetScroll = slideLeft - (containerWidth / 2) + (slideWidth / 2);

    container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % images.length;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(prev);
  };

  // Center the first slide on mount
  useEffect(() => {
      const timer = setTimeout(() => scrollToIndex(0), 100);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full group">
        <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar py-8 px-4 md:px-0" 
            style={{ 
                scrollSnapType: 'x mandatory',
                paddingLeft: 'max(1rem, calc(50% - 400px))', 
                paddingRight: 'max(1rem, calc(50% - 400px))' 
            }}
        >
            {images.map((img, i) => (
                <div 
                    key={i} 
                    className="snap-center shrink-0 w-[85vw] md:w-[800px] aspect-[16/9] transition-transform duration-500 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                >
                    <img src={img} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-12 max-w-[1200px] mx-auto">
            <button 
                onClick={handlePrev}
                className="pointer-events-auto w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all md:flex hidden z-20"
            >
                <iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
            </button>
            <button 
                onClick={handleNext}
                className="pointer-events-auto w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all md:flex hidden z-20"
            >
                <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
            </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => scrollToIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-white w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
                />
            ))}
        </div>
    </div>
  );
};

const HubPage: React.FC<HubPageProps> = ({ onBookDemo }) => {
  return (
    <div className="w-full bg-[#161616] text-white overflow-hidden pb-20 font-sans">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 text-center relative">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          
          {/* Background Gradient (Replaces Lottie) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] md:w-[100%] h-[150%] -z-10 pointer-events-none overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[100px] mix-blend-screen"></div>
          </div>

          {/* Animated Box Headline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 flex-wrap">
             {/* Box 1: Simple */}
             <div className="bg-[#E5E5E5] text-black text-4xl md:text-6xl font-bold px-8 py-4 rounded-2xl shadow-[0_4px_0_0_#999] transform transition hover:-translate-y-1 cursor-default relative">
                  Simple
             </div>

             {/* Box 2: Friendly */}
             <div className="bg-[#FF21A6] text-white text-4xl md:text-6xl font-bold px-8 py-4 rounded-2xl shadow-[0_4px_0_0_#B30066] transform transition hover:-translate-y-1 cursor-default relative -rotate-2 hover:rotate-0">
                  Friendly
             </div>

             {/* Box 3: Server-side tracking */}
             <div className="bg-[#FFE241] text-black text-4xl md:text-6xl font-bold px-8 py-4 rounded-2xl shadow-[0_4px_0_0_#C7B000] transform transition hover:-translate-y-1 cursor-default relative rotate-1 hover:rotate-0">
                  Server-side tracking
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8 mt-2">
            <span className="text-xl md:text-3xl font-light text-gray-400">for</span>
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1243f2f5c678d4e6bf697_meta%20logo.svg" alt="Meta" className="h-8 md:h-10 w-auto" />
            <span className="text-xl md:text-3xl font-bold text-white">Meta ads</span>
          </div>
          
          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] mb-12">in partnership with Meta</p>
          
          <a
            href="https://app.bir.ch/signup?gateway=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 hover:border-white rounded-full text-lg font-bold text-white transition-all hover:scale-105"
          >
            <span className="group-hover:skew-x-[-10deg] transition-transform inline-block">Get started with Hub</span>
          </a>

          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">for other platforms</p>
            <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e7a32653e14bb9fe1e_platform-icons-snap.svg" alt="Snapchat" className="h-6 md:h-8 w-auto" loading="lazy" />
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e725a0a70ca1dada45_platform-icons-tt.svg" alt="TikTok" className="h-6 md:h-8 w-auto" loading="lazy" />
              <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d128e75afd588ac47a3430_platform-icons-google.svg" alt="Google" className="h-6 md:h-8 w-auto" loading="lazy" />
            </div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">coming soon</p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1200px] mx-auto border-t border-white/10"></div>

      {/* Setup Slider Section */}
      <section className="py-24 text-center overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Hassle-free setup</h2>
            <p className="text-xl md:text-2xl text-gray-400">
                with user <span className="text-white font-semibold underline decoration-brand-yellow/50 decoration-2 underline-offset-4">friendly</span> interface
            </p>
        </div>
        
        <Carousel />
      </section>

      <div className="w-full max-w-[1200px] mx-auto border-t border-white/10"></div>

      {/* How it Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-24 tracking-tight">How it works</h2>
            
            {/* Schematic Lines - Absolute Positioning */}
            <div className="hidden lg:block absolute top-[180px] left-1/2 -translate-x-1/2 w-[850px] h-[300px] pointer-events-none z-0">
                {/* Top Line */}
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d3d97f2b778bf0f7a55566_0fe454c9b119f96abc01be900563e89a_line%20top.svg" className="absolute top-0 left-1/2 -translate-x-1/2" alt="" loading="lazy" />
                {/* Left Line */}
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26074b400cfe61c4638b5_95eaf2f6cb2eb1215faecb2fde919969_line-left.svg" className="absolute top-[50px] left-[130px]" alt="" loading="lazy" />
                {/* Right Line */}
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d260740f4ecf1ac7e4fd33_2e33f9e29e9c07049efbcf6631cfa2ef_line-right.svg" className="absolute top-[50px] right-[130px]" alt="" loading="lazy" />
                {/* Bottom Line */}
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d3d97f0d8f37be41b6f040_7720018fc7cc6334771f8e983ce0e1f2_line%20bottom.svg" className="absolute bottom-0 left-1/2 -translate-x-1/2" alt="" loading="lazy" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start max-w-6xl mx-auto">
            
                {/* Step 1: Pixel */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-32 h-32 bg-[#1A1A1A] rounded-[32px] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10 bg-clip-padding">
                        <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531ade0e52bef0112fa5_how-it-works-pixel.svg" alt="Pixel" className="w-14 h-14" loading="lazy" />
                    </div>
                    <h3 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">first-party</h3>
                    <h3 className="text-4xl font-bold text-white mb-4">pixel</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">Immune to browser restrictions and ad blockers for reliable event tracking</p>
                </div>

                {/* Step 2: Hub */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-36 h-36 bg-[#1A1A1A] rounded-[32px] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative overflow-hidden z-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-pink/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531b6093edfd9e779f3f_how-it-works-birch.svg" alt="Birch Hub" className="w-16 h-16 relative z-10" loading="lazy" />
                    </div>
                    <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-pink mb-4 mt-2">hub</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">Events are collected and processed safely within your own gateway server</p>
                </div>

                {/* Step 3: Meta */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-32 h-32 bg-[#1A1A1A] rounded-[32px] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d1531b0cd0cabc414d2229_how-it-works-meta.svg" alt="Meta" className="w-14 h-14" loading="lazy" />
                    </div>
                    <h3 className="text-4xl font-bold text-[#0081FB] mb-4 mt-8">meta</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">Data is sent via CAPI to Meta, improving attribution and ROAS</p>
                </div>
            </div>
        </div>
      </section>

      <div className="w-full max-w-[1200px] mx-auto border-t border-white/10"></div>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight leading-tight">
            With Bïrch Hub<br/>conversion is higher
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-[#1A1A1A] rounded-[32px] p-8 relative overflow-hidden h-72 flex flex-col justify-between group border border-white/5 hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow blur-[80px] rounded-full -mr-10 -mt-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <p className="text-2xl font-bold text-white relative z-10 leading-tight">More data <br/>events</p>
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c9017decfc2e8c8350b_hub-card-icons-01.svg" alt="Icon" className="w-14 h-14 relative z-10" loading="lazy" />
                </div>
                {/* Card 2 */}
                <div className="bg-[#1A1A1A] rounded-[32px] p-8 relative overflow-hidden h-72 flex flex-col justify-between group border border-white/5 hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 blur-[80px] rounded-full -mr-10 -mt-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <p className="text-2xl font-bold text-white relative z-10 leading-tight">More accurate <br/>attribution</p>
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c909a5f8aebfdb9b0ee_hub-card-icons-02.svg" alt="Icon" className="w-14 h-14 relative z-10" loading="lazy" />
                </div>
                {/* Card 3 */}
                <div className="bg-[#1A1A1A] rounded-[32px] p-8 relative overflow-hidden h-72 flex flex-col justify-between group border border-white/5 hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-pink blur-[80px] rounded-full -mr-10 -mt-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <p className="text-2xl font-bold text-white relative z-10 leading-tight">Better functioning <br/>ad algorithms</p>
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c902a58ffcf4a388486_hub-card-icons-04.svg" alt="Icon" className="w-14 h-14 relative z-10" loading="lazy" />
                </div>
                {/* Card 4 */}
                <div className="bg-[#1A1A1A] rounded-[32px] p-8 relative overflow-hidden h-72 flex flex-col justify-between group border border-white/5 hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple blur-[80px] rounded-full -mr-10 -mt-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <p className="text-2xl font-bold text-white relative z-10 leading-tight">More relevant <br/>audience</p>
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d26c90cfdc1e723c61f230_hub-card-icons-03.svg" alt="Icon" className="w-14 h-14 relative z-10" loading="lazy" />
                </div>
            </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-24 space-y-8 max-w-[1200px] mx-auto px-4">
        
        {/* Case Study 1: Cricksy Dog */}
        <div className="bg-brand-yellow rounded-[32px] p-8 md:p-12 lg:p-16 text-brand-black flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="w-full md:w-1/2 z-10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d279d4f15478b10ec73872_hub-logo-cs-1.png" alt="Cricksy Dog" className="h-12 w-auto mb-8" loading="lazy" />
            <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">Cricksy Dog after Switching to Bïrch Hub</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">30%</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">decreased<br/>in CPA</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">35%</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">increased in<br/>conversions</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">40%</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">increased in total<br/>events tracked</div>
              </div>
            </div>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
                Read case study <span>→</span>
            </a>
          </div>
          <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-end">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d278c5737807c8c73a6a8c_ce398b4063c4480b89b7478287052446_hub-cs-img_cricksy-dog.png" alt="Dog" className="max-h-[400px] w-auto object-contain drop-shadow-2xl" loading="lazy" />
          </div>
        </div>

        {/* Case Study 2: Pawz.rs */}
        <div className="bg-[#8B5CF6] rounded-[32px] p-8 md:p-12 lg:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]"></div>
          
          <div className="w-full md:w-1/2 z-10">
            <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d279d568e44944bac7d230_hub-logo-cs-2.png" alt="Pawz" className="h-10 w-auto mb-8 brightness-0 invert" loading="lazy" />
            <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">Accurate Tracking Helped Pawz.rs Scale Campaigns Profitably</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">9+</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">ROAS on cold<br/>campaigns</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">22%</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">decrease<br/>in CPA</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">25%</div>
                <div className="text-xs font-bold uppercase leading-tight opacity-70">increase in total<br/>tracked events</div>
              </div>
            </div>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="bg-white text-[#8B5CF6] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
                Read case study <span>→</span>
            </a>
          </div>
          <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-end">
             <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/68d278c5ea536c9556b345ca_hub-cs-img_pawz.png" alt="Pawz Visual" className="max-h-[400px] w-auto object-contain drop-shadow-2xl" loading="lazy" />
          </div>
        </div>

      </section>

      {/* Pricing Section */}
      <section className="text-center mb-24 max-w-[1200px] mx-auto px-4">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-pink text-4xl md:text-5xl font-bold mb-2 tracking-tight">Pricing</h2>
        <p className="text-gray-400 mb-12 text-lg">per gateway</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-brand-yellow text-brand-black p-6 rounded-2xl flex flex-col justify-between h-56 border border-transparent shadow-lg transform hover:-translate-y-1 transition-transform">
             <div className="text-xs font-bold uppercase opacity-80 leading-tight text-left">10,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">Free</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-56 border border-white/10 hover:border-white/30 transition-colors">
             <div className="text-xs font-bold uppercase text-gray-400 leading-tight text-left">500,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">$10</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-56 border border-white/10 hover:border-white/30 transition-colors">
             <div className="text-xs font-bold uppercase text-gray-400 leading-tight text-left">5,000,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">$49</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-56 border border-white/10 hover:border-white/30 transition-colors">
             <div className="text-xs font-bold uppercase text-gray-400 leading-tight text-left">20,000,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">$149</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-56 border border-white/10 hover:border-white/30 transition-colors">
             <div className="text-xs font-bold uppercase text-gray-400 leading-tight text-left">50,000,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">$249</div>
          </div>
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl flex flex-col justify-between h-56 border border-white/10 hover:border-white/30 transition-colors">
             <div className="text-xs font-bold uppercase text-gray-400 leading-tight text-left">150,000,000<br/>events/mo</div>
             <div className="text-4xl font-bold tracking-tight text-left">$499</div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-t border-white/10 w-full mb-16"></div>
          <a 
            href="https://app.bir.ch/signup?gateway=true"
            className="group inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/20 hover:border-white rounded-full text-xl font-bold text-white transition-all hover:scale-105"
          >
            <span className="group-hover:skew-x-[-10deg] transition-transform inline-block">Create your Bïrch hub</span>
          </a>
        </div>
      </section>

      <div className="w-full max-w-[1200px] mx-auto border-t border-white/10"></div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">FAQ</h2>
        
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