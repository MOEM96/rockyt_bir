import React, { useState } from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';

const PartnersPage: React.FC<DemoBookingProps> = () => {
  const [formState, setFormState] = useState({
    experience: '',
    platforms: [] as string[],
    industry: '',
    portfolio: '',
    email: '',
    countryCode: '+1',
    phone: '',
    name: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const PLATFORM_OPTIONS = ['Meta', 'Google', 'TikTok', 'Snapchat', 'LinkedIn', 'Native Ads'];

  const handlePlatformToggle = (platform: string) => {
    setFormState(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform) 
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormState({
        experience: '',
        platforms: [],
        industry: '',
        portfolio: '',
        email: '',
        countryCode: '+1',
        phone: '',
        name: ''
      });
    }, 1500);
  };

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
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <iconify-icon icon={benefit.icon} width="24"></iconify-icon>
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
      <div className="max-w-[1200px] mx-auto px-6 mb-24">
        <div 
            onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full max-w-2xl mx-auto cursor-pointer"
        >
            {/* Glow Effect behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-[#FFAE00] to-brand-pink rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
            
            <div className="relative flex items-center justify-between px-8 py-6 bg-[#1A1A1A] rounded-full leading-none border border-white/10 group-hover:border-white/30 transition-all">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mx-auto md:mx-0">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black shrink-0">
                        <iconify-icon icon="solar:rocket-bold" width="24"></iconify-icon>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-white font-bold text-lg md:text-xl">Ready to scale your agency?</h3>
                        <p className="text-gray-400 text-xs md:text-sm">Join the top 1% of marketers today.</p>
                    </div>
                </div>
                
                <div className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-transform group-hover:scale-105">
                    <span>Apply Now</span>
                    <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
                </div>
            </div>
            {/* Mobile Button overlay for full clickability */}
             <div className="md:hidden absolute bottom-4 right-1/2 translate-x-1/2 translate-y-full pt-4">
                 <button className="flex items-center gap-2 bg-brand-yellow text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-brand-yellow/20">
                     <span>Apply Now</span>
                     <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
                 </button>
             </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="apply-form" className="max-w-[800px] mx-auto px-6">
         <div className="bg-[#1A1A1A] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3">Partner Application</h2>
                <p className="text-gray-400">Tell us about your expertise. We review applications within 48 hours.</p>
            </div>

            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <iconify-icon icon="solar:verified-check-bold" width="40"></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Thanks for applying. Our partnership team will review your profile and contact you via email shortly.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 text-sm font-bold text-brand-yellow hover:underline"
                    >
                        Submit another application
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    
                    {/* Name & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                            <input 
                                required
                                type="text" 
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Experience (Years)</label>
                            <input 
                                required
                                type="number" 
                                placeholder="e.g. 5"
                                min="0"
                                value={formState.experience}
                                onChange={e => setFormState({...formState, experience: e.target.value})}
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                         <input 
                             required
                             type="email" 
                             placeholder="you@agency.com"
                             value={formState.email}
                             onChange={e => setFormState({...formState, email: e.target.value})}
                             className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                         />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                        <div className="flex gap-3">
                            <input 
                                required
                                type="text" 
                                placeholder="+1"
                                className="w-24 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all text-center"
                                value={formState.countryCode}
                                onChange={e => setFormState({...formState, countryCode: e.target.value})}
                            />
                            <input 
                                required
                                type="tel" 
                                placeholder="555-0123"
                                className="flex-1 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                                value={formState.phone}
                                onChange={e => setFormState({...formState, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Primary Industries</label>
                         <input 
                             type="text" 
                             placeholder="e.g. eCommerce, SaaS, Real Estate"
                             value={formState.industry}
                             onChange={e => setFormState({...formState, industry: e.target.value})}
                             className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                         />
                    </div>

                    {/* Platforms (Multi-select visual) */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Platform Expertise</label>
                        <div className="flex flex-wrap gap-2">
                            {PLATFORM_OPTIONS.map(platform => (
                                <button
                                    key={platform}
                                    type="button"
                                    onClick={() => handlePlatformToggle(platform)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                                        formState.platforms.includes(platform)
                                            ? 'bg-brand-yellow text-black border-brand-yellow'
                                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                                    }`}
                                >
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio */}
                    <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Portfolio / LinkedIn / Website</label>
                         <input 
                             required
                             type="url" 
                             placeholder="https://"
                             value={formState.portfolio}
                             onChange={e => setFormState({...formState, portfolio: e.target.value})}
                             className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-all placeholder:text-gray-600"
                         />
                    </div>

                    {/* Submit Button */}
                    <Button 
                        type="submit" 
                        fullWidth 
                        size="lg"
                        className="mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        By submitting, you agree to our Partner Terms and Privacy Policy.
                    </p>
                </form>
            )}
         </div>
      </div>
    </div>
  );
};

export default PartnersPage;
