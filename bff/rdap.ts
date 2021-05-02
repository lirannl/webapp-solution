namespace RDAP_RES {

    export interface Link {
        value: string;
        rel: string;
        href: string;
        type: string;
    }

    export interface Notice {
        title: string;
        description: string[];
        links: Link[];
    }

    export interface Event {
        eventAction: string;
        eventDate: Date;
    }

    export interface Remark {
        description: string[];
        title: string;
    }

    export interface Link2 {
        value: string;
        rel: string;
        href: string;
        type: string;
    }

    export interface Event2 {
        eventAction: string;
        eventDate: Date;
    }

    export interface Link3 {
        value: string;
        rel: string;
        href: string;
        type: string;
    }

    export interface Remark2 {
        description: string[];
        title: string;
    }

    export interface Entity {
        roles: string[];
        events: Event2[];
        links: Link3[];
        vcardArray: any[];
        objectClassName: string;
        handle: string;
        remarks: Remark2[];
    }

    export interface Cidr0Cidrs {
        v4prefix: string;
        length: number;
    }

    export interface Response {
        rdapConformance: string[];
        notices: Notice[];
        country: string;
        events: Event[];
        name: string;
        remarks: Remark[];
        links: Link2[];
        type: string;
        endAddress: string;
        ipVersion: string;
        startAddress: string;
        objectClassName: string;
        handle: string;
        entities: Entity[];
        cidr0_cidrs: Cidr0Cidrs[];
        port43: string;
    }

}
export default RDAP_RES;