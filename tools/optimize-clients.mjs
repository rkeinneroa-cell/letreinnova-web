import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("tools/images/clients-input");
const outputDir = path.resolve("public/images/clients");

const validExtensions = [".jpg", ".jpeg", ".jfif", ".png", ".webp"];

await fs.mkdir(outputDir, { recursive: true });

const files = await fs.readdir(inputDir);

for (const file of files) {
  const extension = path.extname(file).toLowerCase();

  if (!validExtensions.includes(extension)) continue;

  const inputPath = path.join(inputDir, file);
  const fileName = path.parse(file).name;
  const outputPath = path.join(outputDir, `${fileName}.webp`);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 600,
      height: 300,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 90,
      alphaQuality: 100,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`✓ ${file} -> ${fileName}.webp`);
}

console.log("✓ Logos de clientes optimizados.");
