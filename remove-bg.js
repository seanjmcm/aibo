const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function main() {
    console.log('Starting background removal on lighting image...');
    try {
        const blob = await removeBackground('sean-mcmahon-lighting.png');
        console.log('Background removed. Converting blob to buffer...');
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync('sean-mcmahon-lighting-bg-removed.png', buffer);
        console.log('Successfully saved to sean-mcmahon-lighting-bg-removed.png');
    } catch (e) {
        console.error('Error:', e);
    }
}

main();
