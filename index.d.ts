// Type definitions for index.js

/**
 * Reads an SVG file and returns its content as a string.
 * @param filePath The path to the SVG file.
 * @returns A promise that resolves to the SVG content as a string.
 */
export function loadSVG(filePath: string): Promise<string>;

/**
 * Renders SVG content to a canvas and returns the canvas.
 * @param svg The SVG content as a string.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 * @returns A promise that resolves to the canvas.
 */
export function renderToCanvas(svg: string, width: number, height: number): Promise<Canvas>;

/**
 * Converts an SVG file to a PNG buffer.
 * @param filePath The path to the SVG file.
 * @param width Optional width for the PNG, default is 1200.
 * @param height Optional height for the PNG, default is 630.
 * @returns A promise that resolves to a data URL representing the PNG image.
 */
export function svgFileToPngBuffer(filePath: string, width?: number, height?: number): Promise<string>;