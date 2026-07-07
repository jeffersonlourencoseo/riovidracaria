const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '../public/images/servicos');
const MAX_WIDTH = 1280;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

async function optimize() {
  const files = fs.readdirSync(INPUT_DIR).filter((f) => /\.jpg$/i.test(f));

  console.log(`Otimizando ${files.length} imagens...\n`);

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const tempJpg = path.join(INPUT_DIR, `${baseName}.tmp.jpg`);
    const jpgOutput = path.join(INPUT_DIR, `${baseName}.jpg`);
    const webpOutput = path.join(INPUT_DIR, `${baseName}.webp`);

    const originalSize = fs.statSync(inputPath).size;

    const pipeline = sharp(inputPath)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: 'inside' })
      .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });

    await pipeline.toFile(tempJpg);

    const webpPipeline = sharp(tempJpg).webp({ quality: WEBP_QUALITY, effort: 6 });

    await webpPipeline.toFile(webpOutput);

    fs.renameSync(tempJpg, jpgOutput);

    const newJpgSize = fs.statSync(jpgOutput).size;
    const webpSize = fs.statSync(webpOutput).size;

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(1)} KB → JPG ${(
        newJpgSize / 1024
      ).toFixed(1)} KB, WebP ${(webpSize / 1024).toFixed(1)} KB`,
    );
  }

  console.log('\nOtimização concluída.');
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
