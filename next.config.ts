import type { NextConfig } from "next";

const extraOrigins =
  process.env.ALLOWED_DEV_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  // Truy cập dev từ điện thoại / IP LAN. Thêm IP máy trong .env.local nếu cần:
  // ALLOWED_DEV_ORIGINS=192.168.24.116
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.24.116",
    ...extraOrigins,
  ],
};

export default nextConfig;
