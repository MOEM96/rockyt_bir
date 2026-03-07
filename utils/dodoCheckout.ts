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
                    // Fire tracking pixels on successful payment
                    onTrialClick?.();

                    // Redirect to the app after a brief delay
                    setTimeout(() => {
                        window.location.href = EXTERNAL_LINKS.getStarted;
                    }, 500);
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
            },
            feature_flags: {
                redirect_immediately: true,
            },
            return_url: EXTERNAL_LINKS.getStarted,
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
 * Open the Dodo Payments checkout overlay for a given product.
 * Shows a loading state while the session is being created.
 */
export async function openCheckout(productId: string): Promise<void> {
    try {
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
