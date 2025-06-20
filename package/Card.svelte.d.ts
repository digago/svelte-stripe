/** @typedef {typeof __propDef.props}  CardProps */
/** @typedef {typeof __propDef.events}  CardEvents */
/** @typedef {typeof __propDef.slots}  CardSlots */
export default class Card extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    disabled?: boolean | null;
    iconStyle?: "default" | "solid";
    hideIcon?: boolean | null;
    value?: import("@stripe/stripe-js").StripeCardElementOptions["value"] | null;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    hidePostalCode?: boolean | null;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripeElementStyle;
        disabled?: boolean | null;
        iconStyle?: "default" | "solid";
        hideIcon?: boolean | null;
        value?: import("@stripe/stripe-js").StripeCardElementOptions["value"] | null;
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        hidePostalCode?: boolean | null;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
