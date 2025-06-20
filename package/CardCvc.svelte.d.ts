/** @typedef {typeof __propDef.props}  CardCvcProps */
/** @typedef {typeof __propDef.events}  CardCvcEvents */
/** @typedef {typeof __propDef.slots}  CardCvcSlots */
export default class CardCvc extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    placeholder?: string;
    disabled?: boolean | null;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    element?: import("@stripe/stripe-js").StripeElementBase;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type CardCvcProps = typeof __propDef.props;
export type CardCvcEvents = typeof __propDef.events;
export type CardCvcSlots = typeof __propDef.slots;
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
        element?: import("@stripe/stripe-js").StripeElementBase;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
