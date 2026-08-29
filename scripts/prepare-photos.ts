import path from 'node:path'
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

import { bentoItems } from '@/content/bento'
import { heroSlides } from '@/content/hero'
import { getShoots } from '@/content'

const ROOT = path.join(__dirname, '..')
const RAW_DIR = path.join(ROOT, 'raw')
const PUBLIC_DIR = path.join(ROOT, 'public')
const OUT_DIR = path.join(PUBLIC_DIR, 'photos')
const IMAGES_DIR = path.join(ROOT, 'src', 'images')
const MANIFEST_PATH = path.join(ROOT, 'src', 'content', 'photos.generated.ts')

const STATIC_IMPORT_DIR = 'about'

const MAX_SIDE = 3000
const QUALITY = 80
const JPEG = /\.jpe?g$/i

const FORCE = process.argv.includes('--force')

const mb = (bytes: number) => (bytes / 1024 / 1024).toFixed(2)

async function statOrNull(file: string) {
  try {
    return await stat(file)
  } catch (e) {
    if (e instanceof Error && 'code' in e && e.code === 'ENOENT') return null
    throw e
  }
}

async function listJpegs(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { recursive: true })
  return entries.filter((file) => JPEG.test(file)).sort()
}

function toSrc(relPath: string): string {
  return path.posix.join('/photos', ...relPath.split(path.sep))
}

type ProcessResult = { processed: number; skipped: number; failed: number }

function outPathFor(relPath: string): string {
  const normalized = relPath.replace(/\.jpeg$/i, '.jpg')

  if (relPath.startsWith(STATIC_IMPORT_DIR + path.sep)) {
    return path.join(IMAGES_DIR, path.basename(normalized))
  }
  return path.join(OUT_DIR, normalized)
}

async function processRaw(): Promise<ProcessResult> {
  const result: ProcessResult = { processed: 0, skipped: 0, failed: 0 }
  const files = await listJpegs(RAW_DIR)

  for (const file of files) {
    const inPath = path.join(RAW_DIR, file)
    const outPath = outPathFor(file)

    try {
      const inStat = await stat(inPath)
      const outStat = await statOrNull(outPath)

      if (!FORCE && outStat && outStat.mtimeMs > inStat.mtimeMs) {
        result.skipped++
        continue
      }

      await mkdir(path.dirname(outPath), { recursive: true })

      const after = await sharp(inPath)
        .rotate()
        .toColorspace('srgb')
        .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outPath)

      result.processed++
      console.log(`✓ ${file}: ${mb(inStat.size)} MB → ${after.width}×${after.height}, ${mb(after.size)} MB`)
    } catch (e) {
      result.failed++
      console.error(`✗ ${file}: ${e instanceof Error ? e.message : e}`)
    }
  }

  return result
}

function contentSrcs(): string[] {
  const all = [
    ...getShoots().flatMap((shoot) => [shoot.cover, ...shoot.photos]),
    ...bentoItems.map((item) => item.photo),
    ...heroSlides,
  ]
  return [...new Set(all.map((photo) => photo.src))].sort()
}

async function checkContent(): Promise<string[]> {
  const missing: string[] = []

  for (const src of contentSrcs()) {
    const file = path.join(PUBLIC_DIR, src)
    if (!(await statOrNull(file))) missing.push(src)
  }

  return missing
}

async function writeManifest() {
  const files = await listJpegs(OUT_DIR)
  const manifest: Record<string, { width: number; height: number }> = {}

  for (const file of files) {
    const { width, height } = await sharp(path.join(OUT_DIR, file)).metadata()
    const key = toSrc(file)
    manifest[key] = { width, height }
  }

  const source =
    '// Сгенерировано scripts/prepare-photos.ts\n' +
    `export const photoDimensions = ${JSON.stringify(manifest, null, 2)} as const\n`

  await writeFile(MANIFEST_PATH, source)
}

async function main() {
  const { processed, skipped, failed } = await processRaw()
  await writeManifest()
  const missing = await checkContent()

  console.log('')
  console.log(`processed ${processed}, skipped ${skipped}, failed ${failed}${FORCE ? ' (--force)' : ''}`)

  if (missing.length > 0) {
    console.error(`missing ${missing.length} file(s) declared in content:`)
    for (const src of missing) console.error(`  ${src}`)
  } else {
    console.log(`content: all ${contentSrcs().length} paths exist`)
  }

  if (failed > 0 || missing.length > 0) process.exitCode = 1
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
