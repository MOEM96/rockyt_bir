import React from 'react';
import { DemoBookingProps } from '../types/index';
import { EXTERNAL_LINKS } from '../constants/index';
import { openCheckout, DODO_PRODUCTS } from '../utils/dodoCheckout';

const PricingPage: React.FC<DemoBookingProps> = ({ onBookDemo, onGetStarted }) => {
    const [isProcessing, setIsProcessing] = React.useState<string | null>(null);

    const plans = [
        {
            name: "Growth",
            price: 49,
            description: "Multi-channel scaling for growing teams.",
            features: [
                { text: "3 Major Ad Platforms (Meta, Google, TikTok)", icon: "solar:layers-minimalistic-bold" },
                { text: "3 Multi-brand Workspaces", icon: "solar:folder-with-files-bold" },
                { text: "Full AI Creative Suite (UGC & Voice AI)", icon: "solar:magic-stick-3-bold" },
                { text: "Server-side Tracking (10k events)", icon: "solar:server-square-bold", highlight: true },
                { text: "Priority Support", icon: "solar:delivery-bold" },
                { text: "0% Commission Fee", icon: "solar:verified-check-bold", highlight: true }
            ],
            color: "brand-blue",
            accent: "#4450F2",
            cta: "Start with Growth",
            popular: false
        },
        {
            name: "Scale",
            price: 99,
            description: "Total dominance for high-volume brands.",
            features: [
                { text: "All 11+ Ad Platforms", icon: "solar:globe-bold" },
                { text: "Unlimited Workspaces", icon: "solar:infinity-bold" },
                { text: "Proven Winning Ads Library Access", icon: "solar:library-bold" },
                { text: "High-Volume Tracking (500k events)", icon: "solar:server-path-bold", highlight: true },
                { text: "24/7 Dedicated Priority Support", icon: "solar:rocket-2-bold" },
                { text: "0% Commission Fee", icon: "solar:verified-check-bold", highlight: true }
            ],
            color: "brand-pink",
            accent: "#FF21A6",
            cta: "Start Scaling",
            popular: true
        },
        {
            name: "Custom",
            price: null,
            description: "White-label solution for agencies & enterprises.",
            features: [
                { text: "White-label Dashboard (Your Domain)", icon: "solar:monitor-smartphone-bold" },
                { text: "Full API Access", icon: "solar:code-bold" },
                { text: "Custom Payment Gateways", icon: "solar:card-transfer-bold" },
                { text: "Custom Integrations & SLA Support", icon: "solar:settings-bold" },
                { text: "Dedicated Account Manager", icon: "solar:user-id-bold" },
                { text: "0% Commission Fee", icon: "solar:verified-check-bold", highlight: true }
            ],
            color: "white",
            accent: "#FFFFFF",
            cta: "Contact Us",
            popular: false,
            isCustom: true
        }
    ];

    const handlePlanClick = async (plan: typeof plans[number]) => {
        if (plan.isCustom) {
            window.location.href = `mailto:${EXTERNAL_LINKS.supportEmail}?subject=White-Label%20Solution%20Inquiry&body=Hi%20Rockyt%20Team%2C%0A%0AI'm%20interested%20in%20the%20Custom%20%2F%20White-Label%20solution.%0A%0APlease%20share%20more%20details.`;
            return;
        }

        setIsProcessing(plan.name);
        try {
            const productId = plan.name === 'Growth' ? DODO_PRODUCTS.growth : DODO_PRODUCTS.scale;
            await openCheckout(productId);
        } finally {
            setIsProcessing(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#161616] pt-24 pb-20 px-4 md:px-6 font-inter">

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                    Pricing that scales<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-blue animate-gradient-text">with your growth</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                    Stop overpaying for tools. Get everything you need to automate and scale your ads in one simple subscription.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 animate-fade-in-up">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 hover:bg-green-500/20 transition-colors">
                        <iconify-icon icon="solar:card-recieved-bold" class="text-green-400"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-green-400">No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 rounded-full border border-brand-yellow/20 hover:bg-brand-yellow/20 transition-colors">
                        <iconify-icon icon="solar:verified-check-bold" class="text-brand-yellow"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-brand-yellow">0% Commission Fee</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/20 hover:bg-brand-blue/20 transition-colors">
                        <iconify-icon icon="solar:calendar-check-bold" class="text-brand-blue"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-brand-blue">7-Day Free Trial</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                        <iconify-icon icon="solar:shield-check-bold" class="text-gray-300"></iconify-icon>
                        <span className="text-xs md:text-sm font-bold text-gray-200">30-Day Money Back Guarantee</span>
                    </div>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative z-10">
                {plans.map((plan) => {
                    return (
                        <div
                            key={plan.name}
                            className={`
                        relative flex flex-col bg-[#0F0F0F] rounded-[40px] p-8 md:p-10 border transition-all duration-500 group hover:-translate-y-2
                        ${plan.popular
                                    ? 'border-brand-pink shadow-[0_0_80px_-20px_rgba(255,33,166,0.3)] z-10 scale-[1.02] md:scale-105'
                                    : 'border-white/5 hover:border-white/20 hover:shadow-2xl'
                                }
                    `}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(255,33,166,0.5)] flex items-center gap-2">
                                    <iconify-icon icon="solar:fire-bold"></iconify-icon> Most Popular
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-6 text-center md:text-left">
                                <h3 className={`text-3xl font-black mb-3 uppercase tracking-tight ${plan.name === 'Growth' ? 'text-brand-blue' :
                                    plan.name === 'Scale' ? 'text-brand-pink' :
                                        'text-white'
                                    }`}>
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium min-h-[40px]">{plan.description}</p>
                            </div>

                            {/* Price Block */}
                            <div className="mb-8 text-center md:text-left">
                                {plan.price !== null ? (
                                    <>
                                        <div className="flex items-baseline gap-1 justify-center md:justify-start mb-1">
                                            <span className="text-6xl font-black text-white tracking-tighter">${plan.price}</span>
                                            <span className="text-gray-500 text-lg font-medium">/mo</span>
                                        </div>
                                        <p className="text-gray-400 text-sm font-medium">billed monthly · cancel anytime</p>
                                    </>
                                ) : (
                                    <div className="mb-1">
                                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                                            <iconify-icon icon="solar:letter-bold" class="text-3xl text-white"></iconify-icon>
                                            <span className="text-3xl font-black text-white">Let's Talk</span>
                                        </div>
                                        <p className="text-gray-400 text-sm font-medium">Tailored pricing for your needs</p>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => handlePlanClick(plan)}
                                disabled={!!isProcessing}
                                className={`w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 mb-10 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${plan.popular
                                    ? 'bg-brand-pink text-white hover:bg-pink-600 shadow-brand-pink/20'
                                    : plan.isCustom
                                        ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                        : 'bg-white text-black hover:bg-gray-200 shadow-white/10'
                                    } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isProcessing === plan.name ? (
                                    <iconify-icon icon="solar:spinner-bold-duotone" class="text-xl animate-spin"></iconify-icon>
                                ) : plan.isCustom ? (
                                    <iconify-icon icon="solar:letter-bold" class="text-xl"></iconify-icon>
                                ) : null}
                                <span>{isProcessing === plan.name ? 'Processing...' : plan.cta}</span>
                                {!plan.isCustom && !isProcessing && (
                                    <iconify-icon icon="solar:arrow-right-linear" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
                                )}
                            </button>

                            {/* Features List */}
                            <div className="space-y-4 flex-grow">
                                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">Includes</div>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group/feature opacity-100">
                                        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${feature.highlight
                                            ? 'bg-green-500/10 text-green-400 group-hover/feature:bg-green-500 group-hover/feature:text-white'
                                            : plan.popular
                                                ? 'bg-brand-pink/10 text-brand-pink group-hover/feature:bg-brand-pink group-hover/feature:text-white'
                                                : 'bg-white/5 text-gray-400 group-hover/feature:bg-white group-hover/feature:text-black'
                                            }`}>
                                            <iconify-icon icon={feature.icon} width="14"></iconify-icon>
                                        </div>
                                        <span className={`text-[13px] font-semibold transition-colors ${feature.highlight ? 'text-green-400' : 'text-gray-400 group-hover/feature:text-white'
                                            }`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Comparison / Value Highlight Section */}
            <div className="max-w-[1200px] mx-auto mb-24 relative z-10">
                <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-[40px] border border-white/10 p-8 md:p-16 overflow-hidden shadow-2xl">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6 border border-brand-yellow/20">
                            <iconify-icon icon="solar:hand-money-bold"></iconify-icon> Why Rockyt?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Pay For The Tool,<br />
                            <span className="text-brand-yellow">Not Commissions</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Most ad platforms charge 10-20% of your ad spend as commission — that's $500-$1,000/mo on a $5,000 budget.
                            With Rockyt, you pay a flat fee. <span className="text-white font-bold">Zero commission. Ever.</span>
                        </p>

                        {/* Comparison Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 text-center">
                                <div className="text-red-400 text-xs font-black uppercase tracking-wider mb-2">Other Platforms</div>
                                <div className="text-3xl font-black text-red-400 mb-1">$500-$1,000</div>
                                <div className="text-xs text-gray-500">per month in commissions alone</div>
                            </div>
                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5 text-center relative overflow-hidden">
                                <div className="absolute -top-1 -right-1 bg-green-500 text-black text-[9px] font-black px-2 py-0.5 rounded-bl-lg rounded-tr-xl uppercase">You Save</div>
                                <div className="text-green-400 text-xs font-black uppercase tracking-wider mb-2">Rockyt</div>
                                <div className="text-3xl font-black text-green-400 mb-1">$0</div>
                                <div className="text-xs text-gray-500">0% commission, flat monthly fee</div>
                            </div>
                        </div>

                        <button
                            onClick={onGetStarted}
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#FFE241] text-black font-bold text-base uppercase tracking-wide hover:bg-[#ffeb7a] transition-all shadow-[0_0_30px_rgba(255,226,65,0.3)] hover:shadow-[0_0_40px_rgba(255,226,65,0.5)] hover:-translate-y-1 active:translate-y-0 group"
                        >
                            <span>Start Your Free Trial</span>
                            <iconify-icon icon="solar:arrow-right-bold" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center pb-8">
                <p className="text-gray-500 text-sm">
                    Prices are in USD. No credit card required. Cancel anytime.<br />
                    Need help choosing? <button onClick={onBookDemo} className="text-brand-yellow hover:underline font-bold transition-colors">Talk to an expert</button>.
                </p>
            </div>

            <style>{`
        @keyframes gradient-text {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        .animate-gradient-text {
            animation: gradient-text 3s linear infinite;
            background-size: 200% auto;
        }
      `}</style>

        </div>
    );
};

export default PricingPage;