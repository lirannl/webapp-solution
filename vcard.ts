type VFields = {[name: string]: [any, any] | undefined};

interface VCard extends VFields {
    adr: [{label: string}, string[]];
    email: [{}, string];
    fn: [{}, string];
    kind: [{}, string];
    org: [{}, string];
    tel?: [{type: string[]}, string];
    version: [{}, string];
}

export default VCard;