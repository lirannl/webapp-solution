import VCard from '../vcard';

interface res {
    abuseContact: VCard;
    technicalContact: VCard;
    name: string;
    country?: string;
    startAddress: string;
    endAddress: string;
    handle: string;
}

export default res;