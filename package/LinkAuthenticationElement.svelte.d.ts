/** @typedef {typeof __propDef.props}  LinkAuthenticationElementProps */
/** @typedef {typeof __propDef.events}  LinkAuthenticationElementEvents */
/** @typedef {typeof __propDef.slots}  LinkAuthenticationElementSlots */
export default class LinkAuthenticationElement extends SvelteComponentTyped<{
    defaultValues?: import("@stripe/stripe-js").StripeLinkAuthenticationElementOptions["defaultValues"] | null;
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type LinkAuthenticationElementProps = typeof __propDef.props;
export type LinkAuthenticationElementEvents = typeof __propDef.events;
export type LinkAuthenticationElementSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        defaultValues?: import("@stripe/stripe-js").StripeLinkAuthenticationElementOptions["defaultValues"] | null;
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
