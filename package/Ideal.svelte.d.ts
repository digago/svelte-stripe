/** @typedef {typeof __propDef.props}  IdealProps */
/** @typedef {typeof __propDef.events}  IdealEvents */
/** @typedef {typeof __propDef.slots}  IdealSlots */
export default class Ideal extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    disabled?: boolean | null;
    hideIcon?: boolean | null;
    value?: string | null;
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
export type IdealProps = typeof __propDef.props;
export type IdealEvents = typeof __propDef.events;
export type IdealSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripeElementStyle;
        disabled?: boolean | null;
        hideIcon?: boolean | null;
        value?: string | null;
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
