import fs from 'node:fs';

const read = async () => {
    const srcPath = 'src/fs/files/fileToRead.txt';
    fs.readFile(srcPath, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data);
    })
};

await read();