import { createHash } from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    const file = fs.readFile('src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data).digest('hex'));
    });
};

await calculateHash();