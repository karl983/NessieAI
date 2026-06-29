import sharp from "sharp";
import fs from "fs";

const source = "public/images/nessie-mascot.png";

if (!fs.existsSync(source)) {
  console.error("Mascot not found at public/images/nessie-mascot.png");
  process.exit(1);
}

async function makePng(size, output) {
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(output);
}

await makePng(16, "public/favicon-16x16.png");
await makePng(32, "public/favicon-32x32.png");
await makePng(48, "public/favicon.ico");
await makePng(180, "public/apple-touch-icon.png");
await makePng(192, "public/android-chrome-192x192.png");
await makePng(512, "public/android-chrome-512x512.png");

fs.writeFileSync("public/site.webmanifest", JSON.stringify({
  name: "Nessie AI",
  short_name: "Nessie AI",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
  ],
  theme_color: "#090613",
  background_color: "#090613",
  display: "standalone"
}, null, 2));

console.log("Favicons created.");
