# Simple HTTP Server Demo

Đây là một server HTTP đơn giản để test, tạo số ngẫu nhiên khi được yêu cầu.

## Tính năng

- HTTP server đơn giản
- Trả về số ngẫu nhiên qua HTTP request
- Trang giao diện người dùng đơn giản

## Hướng dẫn sử dụng

### Cài đặt

```bash
# Clone repository
git clone https://github.com/quang22ba13263/test.git

# Di chuyển vào thư mục
cd test

# Cài đặt dependencies
npm install
```

### Chạy server

```bash
npm start
```

Server sẽ chạy tại `http://localhost:3000`

### Triển khai trên Glitch

Trang demo đã được triển khai tại [https://salty-boiling-ulna.glitch.me](https://salty-boiling-ulna.glitch.me)

### Cách sử dụng API

- `GET /` - Trang chủ với giao diện người dùng
- `GET /random` - Trả về một số ngẫu nhiên từ 1-100 dưới dạng JSON 