import fs from 'fs';
import stream from 'stream';
import zlib from 'zlib';

const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const archivePath = 'src/zip/files/archive.gz'
    stream.pipeline(fs.createReadStream(filePath),
                    zlib.createGzip(),
                    fs.createWriteStream(archivePath),
                    (err) => { if (err) throw err; }
    );
};

await compress();