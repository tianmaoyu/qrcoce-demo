const qrcode = require('qrcode');
const { json } = require('stream/consumers');

var data={
    name:"张山",
    phone:"123456789012",
    address:"中国广东省深圳市南山区高新南一道1号科兴科学园6栋5楼",
    id:"522229199003203322"
}
const text = JSON.stringify(data);
const options = {
  // errorCorrectionLevel: 'H',
  // type: 'image/png',
  // quality: 0.92,
  // margin: 1,
  // scale: 8,
  footer: 'Scan this code to learn more'
};

qrcode.toFile('qrcode.png', text, options, (err) => {
  if (err) throw err;
  console.log('QR code saved!');
});
