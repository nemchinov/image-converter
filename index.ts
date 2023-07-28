import * as fs from 'fs';
import dotenv from 'dotenv';
import sharp from 'sharp';

dotenv.config();

class Converter {
    async start(): Promise<void> {
        console.log('started');

        const files = fs.readdirSync(this.filesDir);

        fs.mkdirSync(`${this.filesDir}/result`);

        for (const file of (files || [])) {
            const name = `${this.filesDir}/${file}`;
            console.log(name);
            await sharp(name).jpeg().toFile(`${this.filesDir}/result/${file}.jpg`);
        }

        console.log('finished');
    }

    public get filesDir(): string {
        if (!process.env.FILES_PATH) {
            throw new Error('Please, specify FILES_PATH argument');
        }

        return process.env.FILES_PATH;
    }
}

const generator = new Converter();

generator.start();
