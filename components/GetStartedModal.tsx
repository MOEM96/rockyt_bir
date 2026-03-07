import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { EXTERNAL_LINKS, ONBOARDING_PLANS } from '../constants/index';
import { openCheckout, DODO_PRODUCTS } from '../utils/dodoCheckout';
import { cn } from '../utils/helpers';

interface GetStartedModalProps {
    isOpen: boolean;
    onClose: () => void;
    onTrialClick?: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

    // Listen for Cal.com booking success to advance to pricing
    useEffect(() => {
        const handleCalEvent = (e: MessageEvent) => {
            if (!e.data) return;
            let eventData = e.data;
            if (typeof eventData === 'string') {
                try { eventData = JSON.parse(eventData); } catch (err) { return; }
            }
            const type = eventData.type || eventData.action || eventData.event;
            console.log('Cal event received:', type);
            if (type === 'cal:bookingSuccessful' || type === 'bookingSuccessful') {
                setStep(3);
            }
        };

        window.addEventListener('message', handleCalEvent);
        return () => window.removeEventListener('message', handleCalEvent);
    }, []);

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setStep(1);
            setExpandedPlan(null);
        }, 300);
    };

    const handlePlanSelect = async (plan: typeof ONBOARDING_PLANS[number]) => {
        if ((plan as any).isCustom) {
            window.location.href = `mailto:${EXTERNAL_LINKS.supportEmail}?subject=White-Label%20Solution%20Inquiry&body=Hi%20Rockyt%20Team%2C%0A%0AI'm%20interested%20in%20the%20Custom%20%2F%20White-Label%20solution.%0A%0APlease%20share%20more%20details.`;
            return;
        }

        setIsProcessing(true);
        try {
            const productId = plan.name === 'Growth' ? DODO_PRODUCTS.growth : DODO_PRODUCTS.scale;
            await openCheckout(productId);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            size={step === 1 ? "md" : "xl"}
            className={cn(
                "transition-all duration-500 flex flex-col overflow-hidden p-0",
                step === 1 ? "h-auto" : "h-[90vh] md:h-[90vh]"
            )}
            showCloseButton={true}
        >
            {/* Modal Content */}
            <div className="flex flex-col flex-grow overflow-hidden relative">

                {/* ===== STEP 1: The Choice (Decision) ===== */}
                {step === 1 && (
                    <div className="p-6 md:p-12 bg-[#0F0F0F] relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center mb-8 md:mb-10">
                            <h2 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">How would you like<br /><span className="text-brand-yellow">to begin?</span></h2>
                            <p className="text-gray-400 text-xs md:text-sm max-w-xs mx-auto">Choose your preferred path to start scaling your ads with AI.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 md:gap-4 relative z-10">
                            {/* Option: Guided */}
                            <button
                                onClick={() => setStep(2)}
                                className="group relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 hover:border-brand-yellow/30 transition-all duration-300 text-left"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:user-speak-bold" width="28"></iconify-icon>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-white font-bold text-base md:text-lg">Guided Onboarding</h4>
                                    <p className="text-gray-400 text-[10px] md:text-xs">Personalized demo & setup assist.</p>
                                </div>
                                <iconify-icon icon="solar:arrow-right-linear" class="text-gray-500 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all"></iconify-icon>
                            </button>

                            {/* Option: Start Trial */}
                            <button
                                onClick={() => setStep(3)}
                                className="group relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-brand-pink/5 border border-brand-pink/10 rounded-2xl md:rounded-3xl hover:bg-brand-pink/10 hover:border-brand-pink/30 transition-all duration-300 text-left"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0 group-hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:rocket-bold" width="28"></iconify-icon>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-white font-bold text-base md:text-lg">Start Free Trial</h4>
                                    <p className="text-gray-400 text-[10px] md:text-xs">Jump in and explore by yourself.</p>
                                </div>
                                <iconify-icon icon="solar:arrow-right-linear" class="text-gray-500 group-hover:text-brand-pink group-hover:translate-x-1 transition-all"></iconify-icon>
                            </button>
                        </div>
                    </div>
                )}

                {/* ===== STEP 2: Guided Onboarding (Cal) ===== */}
                {step === 2 && (
                    <div className="flex flex-col flex-grow overflow-hidden bg-[#161616]">
                        {/* Compact Header for Step 2/3 */}
                        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-[#121212]">
                            <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider">
                                <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                            </button>
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(255,226,65,0.5)]"></div>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Book</span>
                                </div>
                                <div className="w-4 md:w-8 h-px bg-white/10"></div>
                                <div className="flex items-center gap-2 opacity-30">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Pricing</span>
                                </div>
                            </div>
                            <div className="w-8 md:w-10"></div> {/* Spacer */}
                        </div>

                        <div className="flex-grow relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                                <span className="animate-pulse text-xs">Loading calendar...</span>
                            </div>
                            <iframe
                                src="https://app.cal.com/rock-yt-admanager/15min?theme=dark&embed=true"
                                className="w-full h-full border-none relative z-10"
                                title="Book a webinar slot"
                                allow="camera; microphone; autoplay; fullscreen"
                                data-cal-namespace="15min"
                                data-cal-link="rock-yt-admanager/15min"
                                data-cal-config='{"theme":"dark"}'
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* ===== STEP 3: Pricing Paywall (Minimal) ===== */}
                {step === 3 && (
                    <div className="flex flex-col flex-grow overflow-hidden bg-[#0A0A0A]">
                        {/* Compact Header */}
                        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-[#121212]">
                            <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider">
                                <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                            </button>
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-1 md:gap-2 opacity-50">
                                    <iconify-icon icon="solar:check-read-bold" class="text-green-500 text-sm md:text-base"></iconify-icon>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest hidden md:inline">Onboarding</span>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest md:hidden">Step 1</span>
                                </div>
                                <div className="w-4 md:w-8 h-px bg-green-500/30"></div>
                                <div className="flex items-center gap-1 md:gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(255,226,65,0.5)]"></div>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Pricing</span>
                                </div>
                            </div>
                            <div className="w-8 md:w-10"></div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 md:p-10 scrollbar-thin">
                            {/* Trust Badge - Compact */}
                            <div className="flex justify-center mb-6 md:mb-8">
                                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-brand-yellow/10 rounded-full border border-brand-yellow/20">
                                    <iconify-icon icon="solar:shield-check-bold" class="text-brand-yellow text-base md:text-lg"></iconify-icon>
                                    <span className="text-[9px] md:text-xs font-black text-brand-yellow uppercase tracking-widest">30-Day Money Back Guarantee</span>
                                </div>
                            </div>

                            <div className="text-center mb-6 md:mb-8">
                                <h2 className="text-xl md:text-4xl font-black text-white mb-2 tracking-tight">Simple, Clear Pricing</h2>
                                <p className="text-xs md:text-sm text-gray-400">Unlock full access and start your 7-day free trial.</p>
                            </div>

                            {/* Minimal Grid */}
                            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {ONBOARDING_PLANS.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className={`relative flex flex-col bg-[#111111] rounded-[24px] md:rounded-[32px] p-5 md:p-6 border transition-all duration-300 group
                                            ${plan.popular
                                                ? 'border-brand-pink ring-1 ring-brand-pink/50 shadow-[0_0_40px_rgba(255,33,166,0.15)] bg-[#141414]'
                                                : 'border-white/5 hover:border-white/10'
                                            }`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                                                Best Value
                                            </div>
                                        )}

                                        <div className="mb-4 md:mb-6">
                                            <h3 className={`text-base md:text-lg font-black uppercase tracking-wider mb-1 ${plan.name === 'Growth' ? 'text-brand-blue' :
                                                plan.name === 'Scale' ? 'text-brand-pink' : 'text-white'
                                                }`}>{plan.name}</h3>
                                            <div className="flex items-baseline gap-1">
                                                {plan.price !== null ? (
                                                    <>
                                                        <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">${plan.price}</span>
                                                        <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase">/mo</span>
                                                    </>
                                                ) : (
                                                    <span className="text-2xl md:text-3xl font-black text-white tracking-tight">Enterprise</span>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handlePlanSelect(plan)}
                                            disabled={isProcessing}
                                            className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[9px] md:text-[10px] transition-all duration-300 mb-4 md:mb-6 flex items-center justify-center gap-2
                                                ${plan.popular
                                                    ? 'bg-brand-pink text-white hover:bg-white hover:text-black shadow-lg shadow-brand-pink/20'
                                                    : (plan as any).isCustom
                                                        ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                                        : 'bg-white text-black hover:bg-brand-yellow hover:text-black font-black'
                                                } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isProcessing ? 'Processing' : plan.cta}
                                            {!isProcessing && <iconify-icon icon="solar:arrow-right-linear" class="text-sm group-hover:translate-x-1 transition-transform"></iconify-icon>}
                                        </button>

                                        <div className="space-y-2.5 md:space-y-3">
                                            {plan.features.slice(0, 4).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2 group/feat">
                                                    <iconify-icon icon="solar:check-circle-bold" class={`text-sm mt-0.5 ${plan.popular ? 'text-brand-pink' : 'text-gray-600'}`}></iconify-icon>
                                                    <span className="text-[10px] md:text-[11px] font-semibold text-gray-400 group-hover/feat:text-white transition-colors leading-tight">{feature}</span>
                                                </div>
                                            ))}

                                            {plan.features.length > 4 && (
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                                                        className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase pt-1 hover:text-white transition-colors flex items-center gap-1 group/more"
                                                    >
                                                        {expandedPlan === plan.name ? 'Show Less' : `+ ${plan.features.length - 4} more features`}
                                                        <iconify-icon
                                                            icon="solar:alt-arrow-down-linear"
                                                            class={`transition-transform duration-300 ${expandedPlan === plan.name ? 'rotate-180' : ''}`}
                                                        ></iconify-icon>
                                                    </button>

                                                    {/* Expandable Box */}
                                                    <div className={cn(
                                                        "overflow-hidden transition-all duration-300 ease-in-out bg-white/[0.03] rounded-xl mt-2",
                                                        expandedPlan === plan.name ? "max-h-[300px] opacity-100 p-3" : "max-h-0 opacity-0 p-0"
                                                    )}>
                                                        <div className="space-y-2.5">
                                                            {plan.features.slice(4).map((feature, i) => (
                                                                <div key={i} className="flex items-start gap-2">
                                                                    <iconify-icon icon="solar:check-circle-bold" class={`text-sm mt-0.5 ${plan.popular ? 'text-brand-pink/50' : 'text-gray-700'}`}></iconify-icon>
                                                                    <span className="text-[10px] font-medium text-gray-400">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-[9px] md:text-[10px] text-gray-600 mt-8 md:mt-10 font-medium tracking-wide">
                                7-DAY FREE TRIAL • 100% SECURE CHECKOUT • CANCEL ANYTIME
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default GetStartedModal;
