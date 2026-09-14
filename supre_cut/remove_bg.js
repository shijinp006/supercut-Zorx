import { Jimp, intToRGBA, rgbaToInt } from 'jimp';

async function processImage() {
  const inputPath = "c:\\Users\\shiji\\OneDrive\\Desktop\\Super Cut\\supre_cut\\public\\images\\ChatGPT Image Sep 3, 2026, 02_58_39 PM.png";
  const outputPath = "c:\\Users\\shiji\\OneDrive\\Desktop\\Super Cut\\supre_cut\\public\\images\\ChatGPT Image Sep 3, 2026, 02_58_39 PM_nobg.png";
  
  console.log("Loading image...");
  const image = await Jimp.read(inputPath);
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log("Processing...");
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = image.getPixelColor(x, y);
      const { r, g, b, a } = intToRGBA(color);
      
      // If the pixel is light (podium or background), make it transparent
      // We use a threshold of 160 out of 255
      if (r > 160 && g > 160 && b > 160) {
        // Set alpha to 0
        image.setPixelColor(rgbaToInt(r, g, b, 0), x, y);
      } else {
        // Keep the pixel but ensure full opacity
        image.setPixelColor(rgbaToInt(r, g, b, 255), x, y);
      }
    }
  }
  
  console.log("Saving image...");
  await image.write(outputPath);
  console.log("Done!");
}

processImage().catch(console.error);
