/** @typedef {typeof __propDef.props}  CardExpiryProps */
/** @typedef {typeof __propDef.events}  CardExpiryEvents */
/** @typedef {typeof __propDef.slots}  CardExpirySlots */
export default class CardExpiry extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    placeholder?: string;
    disabled?: boolean | null;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type CardExpiryProps = typeof __propDef.props;
export type CardExpiryEvents = typeof __propDef.events;
export type CardExpirySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripeElementStyle;
        placeholder?: string;
        disabled?: boolean | null;
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
