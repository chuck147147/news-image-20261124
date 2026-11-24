import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
await copyFile(src, join(outDir, "entry.png"));
console.log("entry.png written to", outDir);
