const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = '';
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            result += `${args[i]} is `;
        } else {
            result += `${args[i]}, `;
        }
    }
    console.log(result.slice(0, result.length - 2));
};

parseArgs();