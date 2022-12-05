import { pipeline, Transform } from 'stream';

const transform = async () => {
    pipeline(process.stdin,
            new Transform({
                transform(chunk, enc, cb) {
                    cb(null, chunk.toString().split('').reverse().join(''));
                },
            }),
            process.stdout,
            (err) => { if (err) throw err; });
};

await transform();