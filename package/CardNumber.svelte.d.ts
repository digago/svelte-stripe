/** @typedef {typeof __propDef.props}  CardNumberProps */
/** @typedef {typeof __propDef.events}  CardNumberEvents */
/** @typedef {typeof __propDef.slots}  CardNumberSlots */
export default class CardNumber extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    placeholder?: string;
    disabled?: boolean | null;
    iconStyle?: "default" | "solid";
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
    showIcon?: boolean | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type CardNumberProps = typeof __propDef.props;
export type CardNumberEvents = typeof __propDef.events;
export type CardNumberSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripeElementStyle;
        placeholder?: string;
        disabled?: boolean | null;
        iconStyle?: "default" | "solid";
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
        showIcon?: boolean | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
