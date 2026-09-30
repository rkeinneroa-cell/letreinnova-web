import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("tools/images/services-input");
const outputDir = path.resolve("public/images/services");

await fs.mkdir(outputDir, { recursive: true });

const files = await fs.readdir(inputDir);

const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

for (const file of files) {
  const extension = path.extname(file).toLowerCase();

  if (!validExtensions.includes(extension)) continue;

  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;
  const outputPath = path.join(outputDir, `${name}.webp`);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1200,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`✓ ${file} -> ${name}.webp`);
}

console.log("✓ Imágenes de servicios optimizadas.");
