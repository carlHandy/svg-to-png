const { createCanvas, loadImage } = require('canvas');
const fs = require('fs').promises;

async function svgFileToPngBuffer(filePath) {
  try {
    const svg = await fs.readFile(filePath, 'utf8');
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');
    const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    const image = await loadImage(dataUri);
    ctx.drawImage(image, 0, 0);
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
    throw error;
  }
}

module.exports = svgFileToPngBuffer;