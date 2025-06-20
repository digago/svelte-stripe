/** @typedef {typeof __propDef.props}  PaymentRequestButtonProps */
/** @typedef {typeof __propDef.events}  PaymentRequestButtonEvents */
/** @typedef {typeof __propDef.slots}  PaymentRequestButtonSlots */
export default class PaymentRequestButton extends SvelteComponentTyped<{
    paymentRequest: import("@stripe/stripe-js").PaymentRequestOptions;
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripePaymentRequestButtonElementOptions["style"]["paymentRequestButton"];
    element?: import("@stripe/stripe-js").StripeElementBase | null;
    canMakePayment?: boolean | null;
}, {
    token: CustomEvent<any>;
    cancel: CustomEvent<any>;
    paymentmethod: CustomEvent<any>;
    shippingaddresschange: CustomEvent<any>;
    shippingoptionchange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaymentRequestButtonProps = typeof __propDef.props;
export type PaymentRequestButtonEvents = typeof __propDef.events;
export type PaymentRequestButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        paymentRequest: import("@stripe/stripe-js").PaymentRequestOptions;
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripePaymentRequestButtonElementOptions["style"]["paymentRequestButton"];
        element?: import("@stripe/stripe-js").StripeElementBase | null;
        canMakePayment?: boolean | null;
    };
    events: {
        token: CustomEvent<any>;
        cancel: CustomEvent<any>;
        paymentmethod: CustomEvent<any>;
        shippingaddresschange: CustomEvent<any>;
        shippingoptionchange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
