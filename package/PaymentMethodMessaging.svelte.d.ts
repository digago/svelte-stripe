/** @typedef {typeof __propDef.props}  PaymentMethodMessagingProps */
/** @typedef {typeof __propDef.events}  PaymentMethodMessagingEvents */
/** @typedef {typeof __propDef.slots}  PaymentMethodMessagingSlots */
export default class PaymentMethodMessaging extends SvelteComponentTyped<{
    amount: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["amount"];
    currency: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["currency"];
    paymentMethodTypes: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["paymentMethodTypes"];
    countryCode: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["countryCode"];
    logoColor?: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["logoColor"] | null;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
    metadata?: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["metadata"] | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaymentMethodMessagingProps = typeof __propDef.props;
export type PaymentMethodMessagingEvents = typeof __propDef.events;
export type PaymentMethodMessagingSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        amount: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["amount"];
        currency: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["currency"];
        paymentMethodTypes: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["paymentMethodTypes"];
        countryCode: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["countryCode"];
        logoColor?: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["logoColor"] | null;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
        metadata?: import("@stripe/stripe-js").StripePaymentMethodMessagingElementOptions["metadata"] | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
