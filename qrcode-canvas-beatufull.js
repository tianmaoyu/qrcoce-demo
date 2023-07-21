const qrcode = require('qrcode');
const { createCanvas } = require('canvas');

const canvas = createCanvas(300, 300);
const ctx = canvas.getContext('2d');

var data={
    name:"张山",
    phone:"123456789012",
    address:"中国广东省深圳市南山区高新南一道1号科兴科学园6栋5楼",
    id:"522229199003203322"
  }
const text = JSON.stringify(data);

qrcode.toCanvas(canvas, text, {
  margin: 4
}, function (error) {
  if (error) {
    console.error(error);
    return;
  }

  // 绘制圆角矩形边框
  const borderWidth = 10;
  const borderRadius = 20;
  const borderColor = '#000000';
  const x = borderWidth / 2;
  const y = borderWidth / 2;
  const width = canvas.width - borderWidth;
  const height = canvas.height - borderWidth;
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius, y);
  ctx.closePath();
  ctx.stroke();




  // 将画布保存为图片文件
  const fs = require('fs');
  const out = fs.createWriteStream('qr-beautify.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);
});
