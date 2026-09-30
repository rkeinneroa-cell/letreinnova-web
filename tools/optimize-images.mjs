import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const inputDir = path.resolve('tools/images/input');

const thumbsDir = path.resolve(
  'public/images/projects/thumbs'
);

const fullDir = path.resolve(
  'public/images/projects/full'
);

await fs.mkdir(thumbsDir, {
  recursive: true
});

await fs.mkdir(fullDir, {
  recursive: true
});

const files = await fs.readdir(inputDir);

const validExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp'
];

for (const file of files) {
  const extension =
    path.extname(file).toLowerCase();

  if (!validExtensions.includes(extension)) {
    continue;
  }

  const inputPath =
    path.join(inputDir, file);

  const name =
    path.parse(file).name;

  const thumbOutput =
    path.join(
      thumbsDir,
      `${name}.webp`
    );

  const fullOutput =
    path.join(
      fullDir,
      `${name}.webp`
    );

  // Miniatura para Bento
  await sharp(inputPath)
    .rotate()
    .resize({
      width: 750,
      height: 750,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({
      quality: 76,
      effort: 6
    })
    .toFile(thumbOutput);

  // Imagen grande para Lightbox
  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1600,
      height: 1600,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({
      quality: 82,
      effort: 6
    })
    .toFile(fullOutput);

  console.log(`✓ ${file}`);
}

console.log('✓ Todas las imágenes fueron optimizadas.');