# Socket.IO Game Demo

Đây là một ứng dụng demo đơn giản sử dụng Socket.IO để xây dựng game multiplayer trực tuyến.

## Tính năng

- **Demo cơ bản**: Server gửi một số ngẫu nhiên cho client khi kết nối
- **Demo game multiplayer**: Cho phép nhiều người chơi kết nối và di chuyển nhân vật trên cùng một màn hình

## Hướng dẫn sử dụng

### 1. Cài đặt

```bash
# Clone repository
git clone https://github.com/quang22ba13263/test.git

# Di chuyển vào thư mục
cd test

# Cài đặt dependencies
npm install
```

### 2. Chạy server

```bash
npm start
```

Server sẽ chạy tại `http://localhost:3000`

### 3. Kết nối

- Truy cập `http://localhost:3000` để xem demo cơ bản
- Truy cập `http://localhost:3000/game` để chơi demo game

### 4. Cách chơi demo game

- Sử dụng các nút điều hướng hoặc phím mũi tên để di chuyển
- Mỗi người chơi kết nối sẽ được biểu diễn bằng một điểm màu
- Người chơi hiện tại sẽ có màu xanh, các người chơi khác có màu đỏ

## Triển khai

Ứng dụng này đã được triển khai lên Glitch tại: [https://salty-boiling-ulna.glitch.me](https://salty-boiling-ulna.glitch.me)

## Cấu trúc dự án

- `server.js`: File chính của server
- `index.html`: Demo cơ bản kết nối Socket.IO
- `game_client.html`: Demo game multiplayer
- `package.json`: Cấu hình dự án

## Xây dựng game của riêng bạn

Bạn có thể mở rộng dự án này để tạo game riêng bằng cách:

1. Thêm logic game của bạn vào server
2. Tùy chỉnh giao diện trên client
3. Thêm các sự kiện và chức năng khác để tương tác giữa người chơi 