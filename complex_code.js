/* filename: complex_code.js */

// This code demonstrates a complex algorithm for generating a fractal image using the Mandelbrot set.

// Define the dimensions of the canvas
const WIDTH = 800;
const HEIGHT = 800;

// Set up the canvas
const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Define the parameters for the fractal
const MAX_ITERATIONS = 200;
const ZOOM = 200; // Higher values zoom in more

// Define the color scheme
const COLORS = [
  [0, 7, 100],
  [32, 107, 203],
  [237, 255, 255],
  [255, 170, 0],
  [0, 2, 0]
];

// Define a function to map a value from one range to another
function mapRange(value, minIn, maxIn, minOut, maxOut) {
  return ((value - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
}

// Define a function to calculate the Mandelbrot set at a given point
function mandelbrot(x, y) {
  let real = x;
  let imaginary = y;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const tempReal = real * real - imaginary * imaginary + x;
    const tempImaginary = 2 * real * imaginary + y;

    real = tempReal;
    imaginary = tempImaginary;

    if (real * imaginary > 5) {
      return i;
    }
  }

  return MAX_ITERATIONS;
}

// Loop through each pixel and calculate its color based on the Mandelbrot set
for (let x = 0; x < WIDTH; x++) {
  for (let y = 0; y < HEIGHT; y++) {
    const mappedX = mapRange(x, 0, WIDTH, -2 / ZOOM, 1 / ZOOM);
    const mappedY = mapRange(y, 0, HEIGHT, -1 / ZOOM, 1 / ZOOM);

    const iterations = mandelbrot(mappedX, mappedY);
    const colorIndex = mapRange(iterations, 0, MAX_ITERATIONS, 0, COLORS.length - 1);
    const color = COLORS[Math.floor(colorIndex)];

    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(x, y, 1, 1);
  }
}
Code Explanation:

This code generates a fractal image using the Mandelbrot set. It defines the canvas dimensions and sets up the canvas element. The MAX_ITERATIONS constant determines the maximum number of iterations for the Mandelbrot calculation, while the ZOOM constant controls the zoom level. The COLORS array defines the color scheme used for the visualization.

The mapRange function is a helper function that maps a value from one range to another. The mandelbrot function performs the actual Mandelbrot set calculation for a given point (x, y) in the complex plane.

The code then loops through the pixels of the canvas and calculates the color for each pixel based on the Mandelbrot set. The mappedX and mappedY variables calculate the corresponding point in the complex plane based on the pixel coordinates. The iterations variable stores the number of iterations taken for the point to escape the Mandelbrot set.

The colorIndex variable maps the number of iterations to an index in the COLORS array. Finally, the color for each pixel is set and filled on the canvas using the fillStyle and fillRect methods.

This code creates a complex and visually appealing fractal image and demonstrates the usage of complex algorithms, graphics manipulation, and mathematical mappings in JavaScript.