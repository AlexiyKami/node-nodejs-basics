import fs from 'node:fs';

const create = async () => {
    const path = 'src/fs/files/fresh.txt';
    fs.readFile(path, (err, data) => {
        if (data) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFile(path, 'I am fresh and young', (err) => { if (err) throw err} );
        }
    });
};

await create();