const { createCanvas, loadImage } = require('canvas');
const fs = require('fs').promises;

async function loadSVG(filePath) {
  return fs.readFile(filePath, 'utf8');
}

async function renderToCanvas(svg, width, height) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const image = await loadImage(`data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`);
  ctx.drawImage(image, 0, 0);
  return canvas;
}

async function svgFileToPngBuffer(filePath, width = 1200, height = 630) {
  try {
    const svg = await loadSVG(filePath);
    const canvas = await renderToCanvas(svg, width, height);
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
    throw error;
  }
}

module.exports = svgFileToPngBuffer;