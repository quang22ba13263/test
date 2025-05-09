#!/usr/bin/env bash

# Đảm bảo sử dụng phiên bản Node.js đúng
export NODE_VERSION=16.x
export PATH="/opt/nvm/versions/node/$NODE_VERSION/bin:$PATH"

# Cài đặt dependencies
npm install

# Khởi động ứng dụng
node server.js 