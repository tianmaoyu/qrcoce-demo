const jsQR = require('jsqr');
const PNG = require('pngjs').PNG;
const fs = require('fs');

const buffer = fs.readFileSync('qrcode.png');
const png = PNG.sync.read(buffer);
const code = jsQR(png.data, png.width, png.height);

console.log(code.data);
