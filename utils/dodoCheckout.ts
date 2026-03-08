import { DodoPayments } from 'dodopayments-checkout';
import { EXTERNAL_LINKS } from '../constants/index';

// Dodo Payments Configuration
const DODO_CONFIG = {
    apiKey: import.meta.env.VITE_DODO_API_KEY || '',
    mode: (import.meta.env.VITE_DODO_MODE || 'live') as 'test' | 'live',
    get baseUrl() {
        return this.mode === 'live'
            ? 'https://live.dodopayments.com'
            : 'https://test.dodopayments.com';
    }
};

// Product IDs for Dodo Payments
export const DODO_PRODUCTS = {
    growth: 'pdt_0NWDjeAeatQKryEvRe4eb',
    scale: 'pdt_0NWDjzl0TS6LNFrVdFZYQ',
} as const;

let isInitialized = false;

const productDataCache: Record<string, { value: number; currency: string; content_name: string; content_ids: string[]; content_type: string; num_items: number }> = {};
let currentCheckoutEventId: string | null = null;

/**
 * Initialize the Dodo Payments SDK (call once on app mount).
 */
export function initDodoPayments(onTrialClick?: () => void) {
    if (isInitialized) return;

    DodoPayments.Initialize({
        mode: DODO_CONFIG.mode,
        displayType: 'overlay',
        onEvent: (event) => {
            console.log('Dodo Checkout event:', event.event_type, event);

            if (event.event_type === 'checkout.status') {
                const status = (event.data as any)?.message?.status;
                if (status === 'succeeded') {
                    console.log('Payment succeeded! Firing Meta Purchase Pixel...');

                    const payload = currentCheckoutEventId && productDataCache[currentCheckoutEventId]
                        ? productDataCache[currentCheckoutEventId]
                        : { value: 0.00, currency: 'USD' }; // Fallback

                    // Fire tracking pixels on successful payment
                    if (typeof (window as any).fbq === 'function') {
                        (window as any).fbq('track', 'Purchase', payload, { eventID: currentCheckoutEventId });
                    }
                    if (typeof (window as any).cbq === 'function') {
                        (window as any).cbq('track', 'Purchase', payload, { eventID: currentCheckoutEventId });
                    }
                    onTrialClick?.();

                    // Redirect to the app after a brief delay (increased to 1.5s to ensure pixel fires)
                    setTimeout(() => {
                        window.location.href = EXTERNAL_LINKS.getStarted;
                    }, 1500);
                }
            }

            if (event.event_type === 'checkout.error') {
                console.error('Dodo Checkout error:', (event.data as any)?.message);
            }
        },
    });

    isInitialized = true;
}

/**
 * Create a checkout session via Dodo Payments API.
 * Returns the checkout URL.
 */
async function createCheckoutSession(productId: string): Promise<string> {
    const response = await fetch(`${DODO_CONFIG.baseUrl}/checkouts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${DODO_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
            product_cart: [
                {
                    product_id: productId,
                    quantity: 1,
                },
            ],
            customization: {
                theme: 'dark',
            }
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Dodo checkout session error:', response.status, errorText);
        throw new Error(`Failed to create checkout session: ${response.status}`);
    }

    const data = await response.json();

    if (!data.checkout_url) {
        throw new Error('No checkout_url returned from Dodo Payments');
    }

    return data.checkout_url;
}

/**
 * Generate full product data based on Dodo ID
 */
function getProductPayload(productId: string) {
    if (productId === DODO_PRODUCTS.growth) {
        return { value: 49.00, currency: 'USD', content_name: 'Growth', content_ids: [DODO_PRODUCTS.growth], content_type: 'product', num_items: 1 };
    } else if (productId === DODO_PRODUCTS.scale) {
        return { value: 99.00, currency: 'USD', content_name: 'Scale', content_ids: [DODO_PRODUCTS.scale], content_type: 'product', num_items: 1 };
    }
    return { value: 0.00, currency: 'USD', content_name: 'Custom', content_ids: [productId], content_type: 'product', num_items: 1 };
}

/**
 * Open the Dodo Payments checkout overlay for a given product.
 * Shows a loading state while the session is being created.
 */
export async function openCheckout(productId: string): Promise<void> {
    try {
        // Generate a deduplication ID for this entire flow (Initiate -> Purchase)
        currentCheckoutEventId = 'chk_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();

        const payload = getProductPayload(productId);
        productDataCache[currentCheckoutEventId] = payload;

        if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'InitiateCheckout', payload, { eventID: currentCheckoutEventId });
            (window as any).fbq('track', 'StartTrial', {
                value: payload.value,
                currency: 'USD',
                predicted_ltv: payload.value * 6 // Estimate 6 months
            }, { eventID: currentCheckoutEventId });
        }
        if (typeof (window as any).cbq === 'function') {
            (window as any).cbq('track', 'InitiateCheckout', payload, { eventID: currentCheckoutEventId });
            (window as any).cbq('track', 'StartTrial', {
                value: payload.value,
                currency: 'USD',
                predicted_ltv: payload.value * 6
            }, { eventID: currentCheckoutEventId });
        }

        const checkoutUrl = await createCheckoutSession(productId);

        DodoPayments.Checkout.open({
            checkoutUrl,
            options: {
                showTimer: true,
                showSecurityBadge: true,
            },
        });
    } catch (error) {
        console.error('Failed to open Dodo checkout:', error);
        // Fallback: redirect to the generic signup page in same tab
        window.location.href = EXTERNAL_LINKS.getStarted;
    }
}
