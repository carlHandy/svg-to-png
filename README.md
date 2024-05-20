# SVG to PNG Buffer

This package provides a simple utility function to convert SVG files to PNG format using Node.js. It utilizes the `canvas` library to handle the image conversion.

## Installation

Before installing, make sure you have Node.js installed on your machine. Then, you can install the package using npm:

```bash
npm install svg-to-png-buffer
```

## Usage

Here's how you can use the `svgFileToPngBuffer` function to convert an SVG file to a PNG buffer:

```javascript
import { svgFileToPngBuffer } from 'svg-to-png-buffer';

async function convertSvgToPng() {
  try {
    const pngBuffer = await svgFileToPngBuffer('path/to/your/file.svg');
    console.log('PNG buffer created:', pngBuffer);
  } catch (error) {
    console.error('Failed to convert SVG to PNG:', error);
  }
}

convertSvgToPng();
```

## Functionality

- **`svgFileToPngBuffer(filePath)`**: This async function takes a file path to an SVG file as input and returns a Promise that resolves to a PNG buffer. It reads the SVG file, converts it to a base64 data URI, loads this into a canvas, and then converts the canvas to a PNG data URL.

## Requirements

- Node.js
- `canvas` npm package

## License

This project is licensed under the MIT License - see the LICENSE file for details.

