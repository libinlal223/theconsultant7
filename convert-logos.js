import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    'vedike_logo.png',
    'anc_logo.png',
    'hrpm_logo.png',
    'cgic_logo.png'
];

const assetsDir = path.join(__dirname, 'src', 'assets');

async function convertImages() {
    console.log('Starting conversion...');

    for (const image of images) {
        const inputPath = path.join(assetsDir, image);
        const outputPath = path.join(assetsDir, image.replace('.png', '.webp'));

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .webp({ quality: 60 })
                    .toFile(outputPath);
                console.log(`Converted: ${image} -> ${path.basename(outputPath)}`);
            } catch (error) {
                console.error(`Error converting ${image}:`, error);
            }
        } else {
            console.warn(`File not found: ${inputPath}`);
        }
    }
}

convertImages();
