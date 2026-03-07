import React, { useState } from 'react';
import Modal from './Modal';
import { EXTERNAL_LINKS, WEBINAR_BENEFITS, ONBOARDING_PLANS } from '../constants/index';
import { openCheckout, DODO_PRODUCTS } from '../utils/dodoCheckout';

interface GetStartedModalProps {
    isOpen: boolean;
    onClose: () => void;
    onTrialClick?: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleClose = () => {
        onClose();
        // Reset step after close animation
        setTimeout(() => setStep(1), 300);
    };

    const handleSkipToPricing = () => {
        setStep(2);
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
            size="xl"
            className="h-[85vh] md:h-[90vh] flex flex-col overflow-hidden p-0"
            showCloseButton={true}
        >
            {/* Header */}
            <div className="bg-[#121212] border-b border-white/10 px-3 py-3 md:px-6 md:py-5 shrink-0 relative z-20">
                <div className="max-w-3xl mx-auto flex flex-row items-center justify-center gap-2 md:gap-8">

                    {/* Step 1: Webinar */}
                    <button
                        onClick={() => setStep(1)}
                        className={`flex items-center gap-2 md:gap-3 transition-all duration-300 cursor-pointer group ${step === 1 ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black transition-all duration-300 ${step === 1 ? 'bg-brand-yellow text-black shadow-[0_0_15px_rgba(255,226,65,0.4)]' : step === 2 ? 'bg-green-500 text-white' : 'bg-white/10 text-white border border-white/10'}`}>
                            {step === 2 ? <iconify-icon icon="solar:check-read-bold"></iconify-icon> : '1'}
                        </div>
                        <span className="text-white font-bold text-[10px] md:text-sm tracking-wide uppercase whitespace-nowrap">Webinar</span>
                    </button>

                    {/* Connector */}
                    <div className="w-4 h-px bg-white/10 md:w-12"></div>

                    {/* Step 2: Choose Plan */}
                    <div className={`flex items-center gap-2 md:gap-3 transition-opacity duration-300 ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
                        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs border transition-all duration-300 ${step === 2 ? 'bg-brand-yellow text-black border-brand-yellow shadow-[0_0_15px_rgba(255,226,65,0.4)] font-black' : 'bg-white/10 text-white border-white/10 font-bold'}`}>
                            2
                        </div>
                        <span className={`${step === 2 ? 'text-white' : 'text-gray-300'} font-medium text-[10px] md:text-sm tracking-wide uppercase transition-colors whitespace-nowrap`}>Choose Plan</span>
                    </div>

                    {/* Step 3: Create Account (desktop only) */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="w-12 h-px bg-white/10"></div>
                        <div className="flex items-center gap-3 opacity-40">
                            <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-xs border border-white/10">3</div>
                            <span className="text-gray-300 font-medium text-sm tracking-wide uppercase">Create Account</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col flex-grow overflow-hidden relative">

                {/* ===== STEP 1: Webinar Invitation ===== */}
                {step === 1 && (
                    <div className="flex flex-col md:flex-row flex-grow overflow-hidden">

                        {/* Sidebar — Benefits */}
                        <div className="w-full md:w-[320px] bg-[#0F0F0F] border-b md:border-b-0 md:border-r border-white/10 p-5 md:p-6 flex flex-col shrink-0 overflow-y-auto">
                            <div className="mb-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-[10px] font-bold uppercase tracking-wider mb-3 border border-brand-yellow/20">
                                    <iconify-icon icon="solar:calendar-bold"></iconify-icon> Optional
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">Join Our Next Webinar</h3>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                    Discuss the latest updates, new features & meet the founder. Completely optional — skip anytime.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mb-6">
                                {WEBINAR_BENEFITS.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-brand-yellow group-hover:bg-brand-yellow/10 transition-colors">
                                            <iconify-icon icon={benefit.icon} width="16"></iconify-icon>
                                        </div>
                                        <span className="text-xs md:text-sm text-gray-300 font-medium pt-1.5 leading-tight">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Skip CTA */}
                            <div className="mt-auto pt-4">
                                <button
                                    onClick={handleSkipToPricing}
                                    className="w-full py-3 rounded-full bg-[#FFE241] text-black font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#ffeb7a] transition-all shadow-[0_0_15px_rgba(255,226,65,0.3)] hover:shadow-[0_0_25px_rgba(255,226,65,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
                                >
                                    <span>Skip → Create Account</span>
                                    <iconify-icon icon="solar:arrow-right-bold" class="text-sm group-hover:translate-x-1 transition-transform"></iconify-icon>
                                </button>
                                <p className="text-[10px] text-gray-500 text-center mt-2">No obligation. No credit card needed.</p>
                            </div>
                        </div>

                        {/* Calendar Embed */}
                        <div className="flex-grow w-full relative bg-[#161616]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                                <span className="animate-pulse">Loading calendar...</span>
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

                {/* ===== STEP 2: Pricing Paywall ===== */}
                {step === 2 && (
                    <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-[#161616]">

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 animate-fade-in">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
                                <iconify-icon icon="solar:card-recieved-bold" class="text-green-400 text-sm"></iconify-icon>
                                <span className="text-[10px] md:text-xs font-bold text-green-400 uppercase tracking-wider">No Credit Card</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-yellow/10 rounded-full border border-brand-yellow/20">
                                <iconify-icon icon="solar:verified-check-bold" class="text-brand-yellow text-sm"></iconify-icon>
                                <span className="text-[10px] md:text-xs font-bold text-brand-yellow uppercase tracking-wider">0% Commission</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/10 rounded-full border border-brand-blue/20">
                                <iconify-icon icon="solar:calendar-check-bold" class="text-brand-blue text-sm"></iconify-icon>
                                <span className="text-[10px] md:text-xs font-bold text-brand-blue uppercase tracking-wider">7-Day Free Trial</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Choose Your Plan</h2>
                            <p className="text-sm text-gray-400 max-w-lg mx-auto">Start scaling your ads today. Upgrade, downgrade, or cancel anytime.</p>
                        </div>

                        {/* Plans Grid */}
                        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {ONBOARDING_PLANS.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative flex flex-col bg-[#0F0F0F] rounded-[24px] p-5 md:p-6 border transition-all duration-500 hover:-translate-y-1 group
                    ${plan.popular
                                            ? 'border-brand-pink shadow-[0_0_40px_-10px_rgba(255,33,166,0.3)] scale-[1.02]'
                                            : 'border-white/5 hover:border-white/20 hover:shadow-xl'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_4px_15px_rgba(255,33,166,0.4)] flex items-center gap-1.5">
                                            <iconify-icon icon="solar:fire-bold"></iconify-icon> Most Popular
                                        </div>
                                    )}

                                    {/* Plan Header */}
                                    <div className="mb-4 text-center">
                                        <h3 className={`text-xl font-black mb-1 uppercase tracking-tight ${plan.name === 'Growth' ? 'text-brand-blue' :
                                            plan.name === 'Scale' ? 'text-brand-pink' :
                                                'text-white'
                                            }`}>
                                            {plan.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs leading-relaxed">{plan.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-5">
                                        {plan.price !== null ? (
                                            <>
                                                <div className="flex items-baseline justify-center gap-1">
                                                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">${plan.price}</span>
                                                    <span className="text-gray-500 text-sm font-medium">/mo</span>
                                                </div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-1">billed monthly</p>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2 py-2">
                                                <iconify-icon icon="solar:letter-bold" class="text-2xl text-white"></iconify-icon>
                                                <span className="text-lg font-bold text-white">Let's Talk</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => handlePlanSelect(plan)}
                                        disabled={isProcessing}
                                        className={`w-full py-3 rounded-full font-bold uppercase tracking-wide text-xs transition-all duration-300 mb-5 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0
                      ${plan.popular
                                                ? 'bg-brand-pink text-white hover:bg-pink-600 shadow-brand-pink/20'
                                                : (plan as any).isCustom
                                                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                                    : 'bg-white text-black hover:bg-gray-200 shadow-white/10'
                                            } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {(plan as any).isCustom ? (
                                            <iconify-icon icon="solar:letter-bold" class="text-sm"></iconify-icon>
                                        ) : isProcessing ? (
                                            <iconify-icon icon="solar:spinner-bold-duotone" class="text-sm animate-spin"></iconify-icon>
                                        ) : null}
                                        <span>{isProcessing ? 'Processing...' : plan.cta}</span>
                                        {!(plan as any).isCustom && !isProcessing && (
                                            <iconify-icon icon="solar:arrow-right-linear" class="text-sm group-hover:translate-x-1 transition-transform"></iconify-icon>
                                        )}
                                    </button>

                                    {/* Features */}
                                    <div className="space-y-2.5 flex-grow">
                                        <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 border-b border-white/5 pb-1.5">Includes</div>
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2 group/f">
                                                <iconify-icon
                                                    icon="solar:check-circle-bold"
                                                    class={`text-sm mt-0.5 shrink-0 ${feature === '0% Commission Fee' ? 'text-green-400' :
                                                        plan.popular ? 'text-brand-pink' : 'text-gray-500'
                                                        }`}
                                                ></iconify-icon>
                                                <span className={`text-[11px] md:text-xs font-medium ${feature === '0% Commission Fee' ? 'text-green-400 font-bold' : 'text-gray-400 group-hover/f:text-white transition-colors'
                                                    }`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom note */}
                        <p className="text-center text-[10px] md:text-xs text-gray-500 mt-6 md:mt-8">
                            No credit card required to start. Prices in USD. Cancel anytime.
                        </p>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default GetStartedModal;
