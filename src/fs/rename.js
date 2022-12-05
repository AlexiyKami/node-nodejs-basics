import fs from 'node:fs';
import path from 'node:path';

const rename = async () => {
    const srcPath = 'src/fs/files';
    const oldFilename = 'wrongFilename.txt';
    const newFilename = 'properFilename.md';
    fs.rename(path.join(srcPath, oldFilename), path.join(srcPath, newFilename), (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await rename();