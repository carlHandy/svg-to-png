   /**
    * Converts an SVG file to a PNG buffer.
    * @param filePath The path to the SVG file.
    * @returns A promise that resolves with the PNG data URL as a string.
    */
   export function svgFileToPngBuffer(filePath: string): Promise<string>;