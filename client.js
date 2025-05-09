// Client đơn giản để test kết nối với server
const https = require('https');

// URL của server trên Glitch
const SERVER_URL = 'https://salty-boiling-ulna.glitch.me';

console.log('Đang kết nối tới server...');

// Gửi request đến endpoint /random
https.get(`${SERVER_URL}/random`, (res) => {
  let data = '';
  
  // Nhận dữ liệu
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // Khi kết thúc response
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      console.log(`Đã nhận số ngẫu nhiên từ server: ${result.number}`);
    } catch (error) {
      console.error('Lỗi khi xử lý dữ liệu:', error.message);
    }
  });
}).on('error', (error) => {
  console.error('Lỗi kết nối tới server:', error.message);
}); 