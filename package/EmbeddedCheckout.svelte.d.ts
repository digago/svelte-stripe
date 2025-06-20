/** @typedef {typeof __propDef.props}  EmbeddedCheckoutProps */
/** @typedef {typeof __propDef.events}  EmbeddedCheckoutEvents */
/** @typedef {typeof __propDef.slots}  EmbeddedCheckoutSlots */
export default class EmbeddedCheckout extends SvelteComponentTyped<{
    stripe: import("@stripe/stripe-js").Stripe | null;
    clientSecret: string | null;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmbeddedCheckoutProps = typeof __propDef.props;
export type EmbeddedCheckoutEvents = typeof __propDef.events;
export type EmbeddedCheckoutSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        stripe: import("@stripe/stripe-js").Stripe | null;
        clientSecret: string | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
