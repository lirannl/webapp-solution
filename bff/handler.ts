import axios from 'axios';
import { Request, Response } from 'express';
import { isIP } from 'node:net';

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

const handler = async (req: Request, res: Response) => {
    // Validate IP address
    try { validateIP(req.query.ip); }
    catch (e) {
        res.status(400).send(e);
        return;
    }
    const { ip } = req.query;
    const { data } = await axios(`https://rdap.apnic.net/ip/${ip}`);
    res.send(`Recieved!`);
}

export default handler;