import fs from 'node:fs';
import path from 'node:path';

const list = async () => {
    const srcPath = 'src/fs/files';
    fs.readdir(srcPath, {}, (err, files) => {
        if (err) throw new Error('FS operation failed');
        for (let file of files) {
            const filePath = path.join(srcPath, file);
            console.log(path.basename(filePath, path.extname(filePath)));
        }
        
    })
};

await list();