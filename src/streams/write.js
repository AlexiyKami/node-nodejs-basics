import fs from 'fs';

const write = async () => {
    const srcPath = 'src/streams/files/fileToWrite.txt';
    process.stdin.pipe(fs.createWriteStream(srcPath));
};

await write();