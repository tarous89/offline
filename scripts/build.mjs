import { mkdir, rm, copyFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

await Promise.all([
  copyFile("index.html", "dist/index.html"),
  copyFile("hero-kit.png", "dist/hero-kit.png")
]);

console.log("Built 72Offline static assets in dist/");
