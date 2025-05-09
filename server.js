const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

// Xác định port từ biến môi trường (Glitch yêu cầu)
const PORT = process.env.PORT || 3000;

// In môi trường để debug
console.log('=== DEBUG INFO ===');
console.log('Node version:', process.version);
console.log('Current directory:', __dirname);
console.log('Files in directory:', fs.readdirSync(__dirname));
console.log('=== END DEBUG ===');

// Tạo ứng dụng Express
const app = express();
const server = http.createServer(app);

// Cấu hình Socket.IO với CORS rộng hơn
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Tạo thư mục public nếu chưa tồn tại
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'game_client.html'));
});

// Thêm route debug
app.get('/debug', (req, res) => {
  const debugInfo = {
    nodeVersion: process.version,
    directory: __dirname,
    files: fs.readdirSync(__dirname),
    env: process.env.NODE_ENV
  };
  res.json(debugInfo);
});

// Quản lý game state
const players = {};
let nextPlayerId = 1;

// Xử lý kết nối Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  
  // Xử lý Basic Demo - gửi số ngẫu nhiên
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  socket.emit('random_number', { number: randomNumber });
  
  // Xử lý Game Multiplayer
  socket.on('new_player', () => {
    const playerId = nextPlayerId++;
    
    // Tạo người chơi mới với vị trí ngẫu nhiên
    players[playerId] = {
      x: Math.floor(Math.random() * 570),
      y: Math.floor(Math.random() * 370)
    };
    
    // Lưu ID người chơi vào socket
    socket.playerId = playerId;
    
    // Gửi ID cho người chơi
    socket.emit('player_id', { id: playerId });
    
    // Gửi danh sách tất cả người chơi
    io.emit('players', players);
    
    console.log(`Player ${playerId} joined. Total players: ${Object.keys(players).length}`);
  });
  
  // Xử lý khi người chơi di chuyển
  socket.on('move', (data) => {
    const playerId = socket.playerId;
    
    if (playerId && players[playerId]) {
      // Cập nhật vị trí
      players[playerId].x = data.x;
      players[playerId].y = data.y;
      
      // Thông báo cho tất cả người chơi khác
      socket.broadcast.emit('player_moved', {
        id: playerId,
        x: data.x,
        y: data.y
      });
    }
  });
  
  // Xử lý khi người chơi ngắt kết nối
  socket.on('disconnect', () => {
    const playerId = socket.playerId;
    
    if (playerId && players[playerId]) {
      // Xóa người chơi khỏi danh sách
      delete players[playerId];
      
      // Thông báo cho tất cả người chơi còn lại
      io.emit('players', players);
      
      console.log(`Player ${playerId} disconnected. Total players: ${Object.keys(players).length}`);
    }
    
    console.log('User disconnected:', socket.id);
  });
});

// Khởi động server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 