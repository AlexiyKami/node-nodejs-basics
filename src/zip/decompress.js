import fs from 'fs';
import stream from 'stream';
import zlib from 'zlib';

const decompress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const archivePath = 'src/zip/files/archive.gz'
    stream.pipeline(fs.createReadStream(archivePath),
                    zlib.createUnzip(),
                    fs.createWriteStream(filePath),
                    (err) => { if (err) throw err; }
    );
};

await decompress();