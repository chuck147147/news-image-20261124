import { copyFile, mkdir, stat } from "node:fs/promises";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
await copyFile(src, dest);
const { size } = await stat(dest);
console.log(`entry.png written to ${outDir} (${size} bytes)`);
