
//canvas 安装可能失败， Get-ExecutionPolicy windows 获取管理员权限
const qrcode = require('qrcode');
const { createCanvas } = require('canvas');

const canvas = createCanvas(400, 400); // 创建一个 300x300 的画布
const ctx = canvas.getContext('2d');

var data={
  name:"张山",
  phone:"123456789012",
  address:"中国广东省深圳市南山区高新南一道1号科兴科学园6栋5楼",
  id:"522229199003203322"
}
const text = JSON.stringify(data);

qrcode.toCanvas(canvas,text, {
  margin: 10
}, function (error) {
  if (error) {
    console.error(error);
    return;
  }

  // 绘制底部说明
  ctx.font = '16px SimSun';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText('将画布保存为图片文件', canvas.width / 2, canvas.height - 10);

  // 将画布保存为图片文件
  const fs = require('fs');
  const out = fs.createWriteStream('qr.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);
});
