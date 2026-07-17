import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const masters = {
  hero: 'artwork/masters/open-micro-hero-master.png',
  exploded: 'artwork/masters/open-micro-exploded-master.png',
}
const socialMaster = 'artwork/masters/open-micro-social-master.png'
const widths = [1536, 1024, 640]
const outputDirectory = 'src/assets/product/generated'

await mkdir(outputDirectory, { recursive: true })
await mkdir('public', { recursive: true })

await Promise.all(
  Object.entries(masters).flatMap(([name, input]) =>
    widths.flatMap((width) => [
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 55 })
        .toFile(`${outputDirectory}/${name}-${width}.avif`),
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(`${outputDirectory}/${name}-${width}.webp`),
    ]),
  ),
)

await sharp(socialMaster)
  .resize(1200, 630, { fit: 'contain', background: { r: 244, g: 240, b: 235 } })
  .png({ compressionLevel: 9 })
  .toFile('public/open-micro-social.png')

console.log('Optimized Open Micro product imagery.')
