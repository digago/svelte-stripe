/** @typedef {typeof __propDef.props}  IbanProps */
/** @typedef {typeof __propDef.events}  IbanEvents */
/** @typedef {typeof __propDef.slots}  IbanSlots */
export default class Iban extends SvelteComponentTyped<{
    classes?: import("@stripe/stripe-js").StripeElementClasses;
    style?: import("@stripe/stripe-js").StripeElementStyle;
    disabled?: boolean | null;
    iconStyle?: "default" | "solid";
    hideIcon?: boolean | null;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
    supportedCountries?: string[] | null;
    placeholderCountry?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type IbanProps = typeof __propDef.props;
export type IbanEvents = typeof __propDef.events;
export type IbanSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: import("@stripe/stripe-js").StripeElementClasses;
        style?: import("@stripe/stripe-js").StripeElementStyle;
        disabled?: boolean | null;
        iconStyle?: "default" | "solid";
        hideIcon?: boolean | null;
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
        supportedCountries?: string[] | null;
        placeholderCountry?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
