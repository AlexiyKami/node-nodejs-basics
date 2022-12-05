import fs from 'node:fs';

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt';
    fs.unlink(filePath, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await remove();