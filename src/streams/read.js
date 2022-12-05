import fs from 'fs';

const read = async () => {
    const srcPath = 'src/streams/files/fileToRead.txt';
    fs.createReadStream(srcPath).on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();