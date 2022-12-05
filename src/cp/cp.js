import child_process from 'child_process';

const spawnChildProcess = async (...args) => {
    const filePath = 'src/cp/files/script.js';
    const child = child_process.fork(filePath, args);
    child.send(process.stdin.read());
};

spawnChildProcess();