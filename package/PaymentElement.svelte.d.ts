/** @typedef {typeof __propDef.props}  PaymentElementProps */
/** @typedef {typeof __propDef.events}  PaymentElementEvents */
/** @typedef {typeof __propDef.slots}  PaymentElementSlots */
export default class PaymentElement extends SvelteComponentTyped<{
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    options?: import("@stripe/stripe-js").StripePaymentElementOptions | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type PaymentElementProps = typeof __propDef.props;
export type PaymentElementEvents = typeof __propDef.events;
export type PaymentElementSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        options?: import("@stripe/stripe-js").StripePaymentElementOptions | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
