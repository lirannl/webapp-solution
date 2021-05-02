import axios from 'axios';
import { Request, Response } from 'express';
import { isIP } from 'node:net';
import RDAP_RES from './rdap';
import VCard from '../vcard';

/**
 * Given a possible IP+range string, validate it (or throw an error if invalid)
 * @param ip possible IP+range string
 */
const validateIP = (ip: any) => {
    if (typeof ip != "string") throw "Invalid request. Query doesn't contain an ip field";
    const [address, rangeStr] = ip.split('/');
    const v = isIP(address);
    if (v == 0) throw `Invalid request. \"ip\" field doesn't contain a valid IP address`;
    const range = parseInt(rangeStr);
    if (
        // Range exists
        rangeStr
        &&
        // Range not a number
        isNaN(range)
        ||
        // Range too low
        range < 1
        ||
        // Range too high for ipv4
        (v == 4 && range > 32)
        ||
        // Range too high for ipv6
        (v == 6 && range > 128)
    ) throw "IP range out of bounds";
}

const getVCardForRole = (entities: RDAP_RES.Entity[], role: string) => {
    const [entity] = entities.filter(entity => entity.roles.includes(role));
    type field = [string, any, "text", any];
    if (!entity) return;
    const vcardFields: field[] = entity.vcardArray[1];
    return vcardFields.reduce(
        (acc, [name, data0, _, data1]) =>
            ({ ...acc, [name]: [data0, data1] }),
        {}
    ) as VCard;
}

const handler = async (req: Request, res: Response) => {
    // Validate IP address
    try { validateIP(req.query.ip); }
    catch (e) {
        res.status(400).send(e);
        return;
    }
    const { ip } = req.query;
    const { startAddress, endAddress, entities, name, country }: RDAP_RES.Response =
        (await axios(`https://rdap.apnic.net/ip/${ip}`)).data;
    const technicalContact = getVCardForRole(entities, "technical");
    const abuseContact = getVCardForRole(entities, "abuse");
    res.send({startAddress, endAddress, technicalContact, abuseContact, name, country});
}

export default handler;