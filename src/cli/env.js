const parseEnv = () => {
    for(let variable in process.env) {
        console.log(`RSS_${variable}=${process.env[variable]};`);
    }
};

parseEnv();