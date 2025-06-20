/** @typedef {typeof __propDef.props}  ExpressCheckoutProps */
/** @typedef {typeof __propDef.events}  ExpressCheckoutEvents */
/** @typedef {typeof __propDef.slots}  ExpressCheckoutSlots */
export default class ExpressCheckout extends SvelteComponentTyped<{
    paymentMethodOrder?: string[];
    wallets?: import("@stripe/stripe-js").ExpressCheckoutWalletsOption;
    layout?: import("@stripe/stripe-js").LayoutOption;
    buttonHeight?: number;
    buttonTheme?: import("@stripe/stripe-js").ButtonThemeOption;
    buttonType?: import("@stripe/stripe-js").ButtonTypeOption;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
    element?: import("@stripe/stripe-js").StripeElementBase | null;
}, {
    click: CustomEvent<any>;
    cancel: CustomEvent<any>;
    confirm: CustomEvent<any>;
    shippingaddresschange: CustomEvent<any>;
    shippingratechange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type ExpressCheckoutProps = typeof __propDef.props;
export type ExpressCheckoutEvents = typeof __propDef.events;
export type ExpressCheckoutSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        paymentMethodOrder?: string[];
        wallets?: import("@stripe/stripe-js").ExpressCheckoutWalletsOption;
        layout?: import("@stripe/stripe-js").LayoutOption;
        buttonHeight?: number;
        buttonTheme?: import("@stripe/stripe-js").ButtonThemeOption;
        buttonType?: import("@stripe/stripe-js").ButtonTypeOption;
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
        element?: import("@stripe/stripe-js").StripeElementBase | null;
    };
    events: {
        click: CustomEvent<any>;
        cancel: CustomEvent<any>;
        confirm: CustomEvent<any>;
        shippingaddresschange: CustomEvent<any>;
        shippingratechange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
