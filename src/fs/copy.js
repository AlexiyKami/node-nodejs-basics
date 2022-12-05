import fs from 'node:fs';
import path from 'node:path';

const copy = async () => {
    const srcPath = 'src/fs/files';
    const copyPath = 'src/fs/files-copy';
    const files = await fs.promises.readdir(srcPath, (err, files) => {
        if (err) throw new Error('FS operation failed');
    });

    fs.mkdir(copyPath, {}, (err) => {
        if (err) throw new Error('FS operation failed');
    });

    for(let file of files) {
        fs.copyFile(path.join(srcPath, file), path.join(copyPath, file), (err) => { if (err) throw err });
    }
};

copy();