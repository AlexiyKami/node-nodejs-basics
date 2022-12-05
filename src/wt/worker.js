import worker_threads from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    worker_threads.parentPort.postMessage({value: nthFibonacci(worker_threads.workerData)});
};

sendResult();