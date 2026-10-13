import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("tools/images/hero-input");
const outputDir = path.resolve("public/images/hero");

const validExtensions = [".jpg", ".jpeg", ".jfif", ".png", ".webp"];

await fs.mkdir(outputDir, { recursive: true });

const files = await fs.readdir(inputDir);

console.log(`Encontrados ${files.length} archivos en hero-input`);

for (const file of files) {
  const extension = path.extname(file).toLowerCase();

  if (!validExtensions.includes(extension)) {
    console.log(`Ignorado: ${file}`);
    continue;
  }

  const inputPath = path.join(inputDir, file);
  const fileName = path.parse(file).name;
  const outputPath = path.join(outputDir, `${fileName}.webp`);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 2400,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 84,
      effort: 6,
    })
    .toFile(outputPath);

  const info = await sharp(outputPath).metadata();

  console.log(`✓ ${file} -> ${fileName}.webp (${info.width}x${info.height})`);
}

console.log("✓ Imágenes del Hero optimizadas.");
