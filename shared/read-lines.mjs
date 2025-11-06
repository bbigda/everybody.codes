import fs from 'fs';
import readline from 'readline';

export const readLines = async (filePath) => {
    console.log(filePath);
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const lines = [];
    for await (const line of rl) {
        lines.push(line);
    }

    if (lines.length === 0) {
        throw new Error(`File ${filePath} is empty`);
    }

    return lines;
}
