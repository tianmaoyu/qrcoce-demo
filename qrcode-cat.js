const qrcode = require('qrcode');
const { createCanvas } = require('canvas');

const canvas = createCanvas(400, 400);
const ctx = canvas.getContext('2d');



var text='利四	123456789012	522229199503203000	中国广东省深圳市南山区高新南一道1号科兴科学园6栋5楼'
// var data={
//     name:"张山",
//     phone:"123456789012",
//     address:"中国广东省深圳市南山区高新南一道1号科兴科学园6栋5楼",
//     id:"522229199503203322"
//   }
// const text = JSON.stringify(data);

qrcode.toCanvas(canvas, text, {
  margin: 4
}, function (error) {
  if (error) {
    console.error(error);
    return;
  }

  // Draw a rounded rectangle with cat ears
  const borderWidth = 10;
  const borderRadius = 20;
  const borderColor = '#4CAF50';
  const earWidth = 30;
  const earHeight = 60;
  const x = borderWidth / 2;
  const y = borderWidth / 2;
  const width = canvas.width - borderWidth;
  const height = canvas.height - borderWidth;
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.beginPath();
  ctx.moveTo(x + borderRadius + earWidth, y);
  ctx.lineTo(x + width - borderRadius - earWidth, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius + earWidth, y);
  ctx.closePath();
  ctx.stroke();

  // Draw cat ears
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + borderRadius + earWidth / 2, y - earHeight);
  ctx.lineTo(x + borderRadius + earWidth, y);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + width - borderRadius, y);
  ctx.lineTo(x + width - borderRadius - earWidth / 2, y - earHeight);
  ctx.lineTo(x + width - borderRadius - earWidth, y);
  ctx.closePath();
  ctx.fill();

  // 绘制底部说明 加粗 16px  宋体
  ctx.font = 'bold 16px SimSun';
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText('田*宇的个人信息', canvas.width / 2, canvas.height);

  // Save the canvas as a PNG image file
  const fs = require('fs');
  const out = fs.createWriteStream('qr-cat.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);
});
