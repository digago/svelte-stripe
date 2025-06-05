/** @typedef {typeof __propDef.props}  AddressProps */
/** @typedef {typeof __propDef.events}  AddressEvents */
/** @typedef {typeof __propDef.slots}  AddressSlots */
export default class Address extends SvelteComponentTyped<{
    mode: import("@stripe/stripe-js").AddressMode;
    allowedCountries?: string[];
    blockPoBox?: boolean;
    defaultValues?: {
        name?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        address?: {
            line1?: string | null;
            line2?: string | null;
            city?: string | null;
            state?: string | null;
            postal_code?: string | null;
            country: string;
        };
        phone?: string | null;
    };
    fields?: {
        phone?: "always" | "never" | "auto";
    };
    validation?: {
        phone?: {
            required: "always" | "never" | "auto";
        };
    };
    autocomplete?: {
        mode: "automatic";
    } | {
        mode: "disabled";
    } | {
        mode: "google_maps_api";
        apiKey: string;
    };
    contacts?: import("@stripe/stripe-js").ContactOption[];
    display?: {
        name?: "full" | "split" | "organization";
    };
    focus?: () => void;
    blur?: () => void;
    clear?: () => void;
    destroy?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get blur(): () => void;
    get clear(): () => void;
    get destroy(): () => void;
    get focus(): () => void;
}
export type AddressProps = typeof __propDef.props;
export type AddressEvents = typeof __propDef.events;
export type AddressSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        mode: import("@stripe/stripe-js").AddressMode;
        allowedCountries?: string[];
        blockPoBox?: boolean;
        defaultValues?: {
            name?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            address?: {
                line1?: string | null;
                line2?: string | null;
                city?: string | null;
                state?: string | null;
                postal_code?: string | null;
                country: string;
            };
            phone?: string | null;
        };
        fields?: {
            phone?: "always" | "never" | "auto";
        };
        validation?: {
            phone?: {
                required: "always" | "never" | "auto";
            };
        };
        autocomplete?: {
            mode: "automatic";
        } | {
            mode: "disabled";
        } | {
            mode: "google_maps_api";
            apiKey: string;
        };
        contacts?: import("@stripe/stripe-js").ContactOption[];
        display?: {
            name?: "full" | "split" | "organization";
        };
        focus?: () => void;
        blur?: () => void;
        clear?: () => void;
        destroy?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
