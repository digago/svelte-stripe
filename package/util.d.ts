/**
 * @param {HTMLElement} node
 * @param {import('@stripe/stripe-js').StripeElementType} type
 * @param {import('@stripe/stripe-js').StripeElements} elements
 * @param {<EventKey extends string>(type: EventKey, detail?: any) => void} dispatch
 * @param {import('@stripe/stripe-js').StripeElementsOptions} options
 *
 * @returns {import('@stripe/stripe-js').StripeElementBase}
 */
export function mount(node: HTMLElement, type: import("@stripe/stripe-js").StripeElementType, elements: import("@stripe/stripe-js").StripeElements, dispatch: <EventKey extends string>(type: EventKey, detail?: any) => void, options?: import("@stripe/stripe-js").StripeElementsOptions): import("@stripe/stripe-js").StripeElementBase;
/**
 * @param {import('@stripe/stripe-js').Stripe} stripe
 * @returns {void}
 */
export function register(stripe: import("@stripe/stripe-js").Stripe): void;
export const isServer: boolean;
