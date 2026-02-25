import React, { useState } from 'react';
import Button from './Button';
import { DemoBookingProps } from '../types/index';
import { formatCurrency } from '../utils/helpers';
import { CAL_CONFIG } from '../constants/index';

const PricingPage: React.FC<DemoBookingProps> = ({ onBookDemo, onGetStarted }) => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [businessAdSpend, setBusinessAdSpend] = useState<number>(5000);

    // Commission Calculation
    const commission = Math.round(businessAdSpend * 0.20);

    const plans = [
        {
            name: "Starter",
            baseMonthly: 29,
            annualMonthly: 19,
            promoFirstMonth: 14,
            description: "Scale a single brand with AI automation.",
            features: [
                { text: "1 Ad Platform (Meta, Google or TikTok)", icon: "solar:laptop-minimalistic-bold" },
                { text: "1 Dedicated Workspace", icon: "solar:folder-bold" },
                { text: "AI Creative Suite (Image & Video)", icon: "solar:magic-stick-3-bold" },
                { text: "Performance Analytics", icon: "solar:chart-2-bold" },
                { text: "Standard Email Support", icon: "solar:letter-bold" }
            ],
            color: "brand-yellow",
            accent: "#FFE241",
            cta: "Get Started",
            popular: false
        },
        {
            name: "Growth",
            baseMonthly: 49,
            annualMonthly: 34,
            promoFirstMonth: 24,
            description: "Multi-channel scaling for growing teams.",
            features: [
                { text: "3 Major Ad Platforms", icon: "solar:layers-minimalistic-bold" },
                { text: "3 Multi-brand Workspaces", icon: "solar:folder-with-files-bold" },
                { text: "Full AI Suite (UGC & Voice AI)", icon: "solar:magic-stick-3-bold" },
                { text: "Server-side Tracking (10k events)", icon: "solar:server-square-bold", highlight: true },
                { text: "Priority Support", icon: "solar:delivery-bold" }
            ],
            color: "brand-blue",
            accent: "#4450F2",
            cta: "Start Scaling",
            popular: true
        },
        {
            name: "Scale",
            baseMonthly: 99,
            annualMonthly: 69,
            promoFirstMonth: 49,
            description: "Total dominance for high-volume brands.",
            features: [
                { text: "All 11+ Ad Platforms", icon: "solar:globe-bold" },
                { text: "Unlimited Workspaces", icon: "solar:infinity-bold" },
                { text: "Proven Winning Ads Library Access", icon: "solar:library-bold" },
                { text: "High-Volume Tracking (500k events)", icon: "solar:server-path-bold", highlight: true },
                { text: "24/7 Dedicated Priority Support", icon: "solar:rocket-2-bold" }
            ],
            color: "brand-pink",
            accent: "#FF21A6",
            cta: "Go Unlimited",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#161616] pt-24 pb-20 px-4 md:px-6 font-inter">

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                    Pricing that scales<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-blue animate-gradient-text">with your growth</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                    Stop overpaying for tools. Get everything you need to automate and scale your ads in one simple subscription.
                </p>

                {/* Trust Badges - New Addition */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 animate-fade-in-up">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                        <iconify-icon icon="solar:calendar-check-bold" class="text-brand-yellow"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-gray-200">7-Day Free Trial</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                        <iconify-icon icon="solar:card-recieved-bold" class="text-brand-yellow"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-gray-200">No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                        <iconify-icon icon="solar:verified-check-bold" class="text-brand-yellow"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-gray-200">30-Day Money Back Guarantee</span>
                    </div>
                </div>
            </div>

            {/* Improved Dynamic Toggle */}
            <div className="flex justify-center mb-16 sticky top-24 z-30">
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl p-2 rounded-full border border-white/10 flex items-center relative shadow-2xl ring-1 ring-white/5">
                    {/* Sliding Background */}
                    <div
                        className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg ${isAnnual ? 'left-[calc(50%+4px)]' : 'left-2'}`}
                    ></div>

                    <button
                        onClick={() => setIsAnnual(false)}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300 w-40 flex justify-center ${!isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsAnnual(true)}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300 w-40 flex justify-center items-center gap-2 ${isAnnual ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        Annual
                        {/* Floating Badge */}
                        <span className={`absolute -top-3 -right-3 md:-top-4 md:-right-6 bg-[#FF21A6] text-white text-[10px] md:text-xs font-black px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-wide shadow-lg transform transition-all duration-500 ${isAnnual ? 'scale-100 rotate-6' : 'scale-90 rotate-0 opacity-70'} animate-bounce-slow`}>
                            Save 30%
                        </span>
                    </button>
                </div>
            </div>

            {/* 1. SaaS Plans Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative z-10">
                {plans.map((plan) => {
                    const finalRecurringPrice = isAnnual ? plan.annualMonthly : plan.baseMonthly;
                    const billingText = isAnnual ? "billed yearly" : "billed monthly";

                    return (
                        <div
                            key={plan.name}
                            className={`
                        relative flex flex-col bg-[#0F0F0F] rounded-[40px] p-8 md:p-10 border transition-all duration-500 group hover:-translate-y-2
                        ${plan.popular
                                    ? `border-${plan.color} shadow-[0_0_80px_-20px_rgba(68,80,242,0.3)] z-10 scale-[1.02] md:scale-105`
                                    : 'border-white/5 hover:border-white/20 hover:shadow-2xl'
                                }
                    `}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(68,80,242,0.5)] flex items-center gap-2">
                                    <iconify-icon icon="solar:fire-bold"></iconify-icon> Recommended
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-6 text-center md:text-left">
                                <h3 className={`text-3xl font-black text-${plan.color} mb-3 uppercase tracking-tight`}>
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium min-h-[40px]">{plan.description}</p>
                            </div>

                            {/* Price Block - Optimized for Offer Visibility */}
                            <div className="mb-8 text-center md:text-left">
                                <div className="text-[10px] font-black text-brand-yellow uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
                                    <iconify-icon icon="solar:tag-bold"></iconify-icon> Limited Time Offer
                                </div>
                                <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                                    <span className="text-gray-500 line-through text-2xl font-medium decoration-red-500/40">${isAnnual ? plan.baseMonthly : plan.baseMonthly}</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-6xl font-black text-white tracking-tighter">${plan.promoFirstMonth}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm font-bold tracking-wide">for your first month</p>

                                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-1">
                                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Then recurring at:</div>
                                    <div className="flex items-center gap-2 justify-center md:justify-start">
                                        <span className="text-white font-bold text-lg">${finalRecurringPrice}</span>
                                        <span className="text-gray-500 text-xs font-medium uppercase tracking-tighter">/ month ({billingText})</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={onGetStarted}
                                className={`w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 mb-10 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${plan.popular
                                    ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-brand-blue/20'
                                    : 'bg-white text-black hover:bg-gray-200 shadow-white/10'
                                    }`}
                            >
                                <span>{plan.cta}</span>
                                <iconify-icon icon="solar:arrow-right-linear" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
                            </button>

                            {/* Features List */}
                            <div className="space-y-4 flex-grow">
                                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">Includes</div>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group/feature opacity-100">
                                        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${plan.popular ? 'bg-brand-blue/10 text-brand-blue group-hover/feature:bg-brand-blue group-hover/feature:text-white' : 'bg-white/5 text-gray-400 group-hover/feature:bg-white group-hover/feature:text-black'}`}>
                                            <iconify-icon icon={feature.icon} width="14"></iconify-icon>
                                        </div>
                                        <span className={`text-[13px] font-semibold transition-colors ${feature.highlight ? 'text-white' : 'text-gray-400 group-hover/feature:text-white'}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 2. NEW: Business Solution (Performance Model) */}
            <div className="max-w-[1200px] mx-auto mb-24 relative z-10">
                <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-[40px] border border-white/10 p-8 md:p-16 overflow-hidden shadow-2xl group hover:border-brand-yellow/30 transition-all duration-500">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: Content & Slider */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6 border border-brand-yellow/20">
                                <iconify-icon icon="solar:graph-up-bold"></iconify-icon> Performance Model
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Pay Only For<br />
                                <span className="text-brand-yellow">Performance</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                                Perfect for established businesses. No monthly subscription fees. We manage everything and align our success with yours.
                            </p>

                            {/* Dynamic Slider Section */}
                            <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
                                <label className="flex justify-between text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                                    <span>Your Monthly Ad Spend</span>
                                    <span className="text-white">{formatCurrency(businessAdSpend)}</span>
                                </label>

                                {/* Custom Slider */}
                                <div className="relative h-12 flex items-center mb-8">
                                    <input
                                        type="range"
                                        min="1000"
                                        max="50000"
                                        step="500"
                                        value={businessAdSpend}
                                        onChange={(e) => setBusinessAdSpend(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-yellow hover:accent-brand-yellow/80 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                                    />
                                    {/* Track Fill Mockup (Optional enhancement) */}
                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-brand-yellow rounded-l-lg pointer-events-none z-10"
                                        style={{ width: `${((businessAdSpend - 1000) / (50000 - 1000)) * 100}%` }}
                                    ></div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Our Fee (20%)</div>
                                        <div className="text-3xl font-black text-white tracking-tight">{formatCurrency(commission)}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Includes</div>
                                        <div className="text-white font-medium flex items-center justify-end gap-1">
                                            <iconify-icon icon="solar:check-read-bold" class="text-brand-yellow"></iconify-icon> Dedicated Manager
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Benefits Grid */}
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-[#161616] p-5 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group/card">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <iconify-icon icon="solar:user-id-bold" width="20"></iconify-icon>
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Dedicated Manager</h4>
                                    <p className="text-xs text-gray-400">Personal strategy & weekly optimization calls.</p>
                                </div>
                                <div className="bg-[#161616] p-5 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group/card">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <iconify-icon icon="solar:palette-bold" width="20"></iconify-icon>
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Creative Production</h4>
                                    <p className="text-xs text-gray-400">We design & test creatives for you at no extra cost.</p>
                                </div>
                                <div className="bg-[#161616] p-5 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group/card">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <iconify-icon icon="solar:chart-square-bold" width="20"></iconify-icon>
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Advanced Reporting</h4>
                                    <p className="text-xs text-gray-400">Custom dashboards & deeper data insights.</p>
                                </div>
                                <div className="bg-[#161616] p-5 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group/card">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <iconify-icon icon="solar:rocket-bold" width="20"></iconify-icon>
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Priority Scale</h4>
                                    <p className="text-xs text-gray-400">First access to beta features & new platforms.</p>
                                </div>
                            </div>

                            {/* Tech-Forward 3D CTA Button - Optimized for Mobile */}
                            <button
                                onClick={onBookDemo}
                                className="relative w-full group mt-6 h-16 md:h-20 z-10 select-none touch-manipulation"
                                data-cal-link={CAL_CONFIG.link}
                                data-cal-namespace={CAL_CONFIG.namespace}
                                data-cal-config={JSON.stringify(CAL_CONFIG.config)}
                                style={{ perspective: '1000px' }}
                            >
                                {/* 3D Depth / Shadow Block */}
                                <div className="absolute inset-0 bg-[#c2a100] rounded-xl md:rounded-2xl transform translate-y-1.5 md:translate-y-2 transition-transform duration-150 group-hover:translate-y-2 md:group-hover:translate-y-2.5 group-active:translate-y-0.5 shadow-xl"></div>

                                {/* Main Button Surface */}
                                <div className="absolute inset-0 bg-[#FFE241] rounded-xl md:rounded-2xl transform transition-transform duration-150 group-hover:-translate-y-0.5 group-active:translate-y-1 md:group-active:translate-y-2 flex items-center justify-center overflow-hidden border border-[#fffec9] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]">

                                    {/* Tech Grid Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                                    {/* Animated Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shine z-10 transform -skew-x-12"></div>

                                    {/* Content */}
                                    <div className="relative z-20 flex items-center justify-center gap-2 md:gap-3 px-2 w-full">
                                        <span className="text-base sm:text-lg md:text-2xl font-black text-black uppercase tracking-wider drop-shadow-sm flex items-center gap-2 truncate">
                                            Start Now
                                        </span>
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors border border-black/5 shrink-0">
                                            <iconify-icon icon="solar:rocket-2-bold-duotone" class="text-lg md:text-2xl text-black group-hover:animate-pulse"></iconify-icon>
                                        </div>
                                    </div>
                                </div>

                                {/* Ambient Glow */}
                                <div className="absolute -inset-1 bg-brand-yellow rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Enterprise / White Label Tier */}
            <div className="max-w-[1200px] mx-auto bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-wider mb-4">
                            <iconify-icon icon="solar:crown-star-bold" class="text-white"></iconify-icon> Enterprise & White Label
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h3>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Full white-label dashboards for agencies, dedicated API access, custom integrations, and SLA support.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <ul className="text-left space-y-3 mr-0 md:mr-8 hidden md:block">
                            <li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                                <iconify-icon icon="solar:check-read-bold" class="text-white"></iconify-icon> White-label Dashboard (Your Domain)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                                <iconify-icon icon="solar:check-read-bold" class="text-white"></iconify-icon> Full API Access
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                                <iconify-icon icon="solar:check-read-bold" class="text-white"></iconify-icon> Custom Payment Gateways
                            </li>
                        </ul>

                        <Button
                            onClick={onBookDemo}
                            asBookingButton
                            variant="outline"
                            size="lg"
                            className="bg-transparent border-white/20 hover:bg-white text-white hover:text-black min-w-[200px]"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center pb-8">
                <p className="text-gray-500 text-sm">
                    Prices are in USD. Payment is secure and encrypted. Cancel anytime.<br />
                    Need help choosing? <button onClick={onBookDemo} className="text-brand-yellow hover:underline font-bold transition-colors">Talk to an expert</button>.
                </p>
            </div>

            <style>{`
        .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0) rotate(6deg); }
            50% { transform: translateY(-4px) rotate(6deg); }
        }
        @keyframes shine {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-shine {
            animation: shine 2s infinite;
        }
      `}</style>

        </div>
    );
};

export default PricingPage;