import os from 'os';
import worker_threads from 'worker_threads';

const performCalculations = async () => {
    const workerPath = './src/wt/worker.js';
    const cpuCount = os.cpus().length;
    let promises = [];
    for(let i = 10; i < (10 + cpuCount); i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new worker_threads.Worker(workerPath, { workerData: i});
            worker.on('message', (data) => {
                resolve({ status: 'resolved', data: data['value']});
            });
            worker.on('error',(err) => {
                resolve({ status: 'error', data: null});
            });
        })
        promises.push(promise);
    }
    console.log(await Promise.all(promises));
    
};

await performCalculations();