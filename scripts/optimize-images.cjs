const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Image Optimization Script...');

// Check if sharp is installed
try {
    require.resolve('sharp');
} catch (e) {
    console.log('📦 Sharp is not installed. Attempting to install for this script...');
    try {
        execSync('npm install sharp --no-save', { stdio: 'inherit' });
    } catch (err) {
        console.error('❌ Failed to install sharp. Please run "npm install sharp" manually and try again.');
        process.exit(1);
    }
}

const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../src/assets');

if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Assets directory not found at ${ASSETS_DIR}`);
    process.exit(1);
}

const processImages = async () => {
    const files = fs.readdirSync(ASSETS_DIR);

    for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i)) {
            const filePath = path.join(ASSETS_DIR, file);
            const fileName = path.parse(file).name;
            const ext = path.parse(file).ext;

            console.log(`📸 Processing ${file}...`);

            try {
                // 1. Generate WebP version
                const webpPath = path.join(ASSETS_DIR, `${fileName}.webp`);
                await sharp(filePath)
                    .webp({ quality: 80, effort: 6 }) // Effort 6 for better compression vs speed
                    .toFile(webpPath);

                console.log(`   ✅ Generated ${fileName}.webp`);

                // 2. Resize and optimize original (optional, if we want to overwrite)
                // Note: We are strictly creating WebP variants. 
                // To use them, you would need to update imports.
                // However, optimizing the original file is safer for existing code.

                // Backup original
                const backupPath = path.join(ASSETS_DIR, `${fileName}_backup${ext}`);
                if (!fs.existsSync(backupPath)) {
                    fs.copyFileSync(filePath, backupPath);
                }

                // Optimize original in place (resize if massive, compress)
                const metadata = await sharp(filePath).metadata();

                if (metadata.width > 1920) {
                    console.log(`   ⚠️ Resizing massive image (${metadata.width}px wide) -> 1920px`);
                    const buffer = await sharp(filePath)
                        .resize({ width: 1920, withoutEnlargement: true })
                        .toBuffer();

                    fs.writeFileSync(filePath, buffer);
                }

            } catch (err) {
                console.error(`   ❌ Error processing ${file}:`, err.message);
            }
        }
    }

    console.log('✨ Optimization complete! WebP variants generated and originals optimized.');
    console.log('📝 Note: To use WebP files, update your import statements in .jsx files (e.g. import img from "../assets/img.webp")');
};

processImages();
