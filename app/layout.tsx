import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} | Giải pháp Fulfillment xuyên biên giới`,
  description:
    "VHG Logistics — dịch vụ hoàn tất đơn hàng (Fulfillment) với hệ thống tổng kho tại phía Bắc Việt Nam. Đăng ký tư vấn ngay.",
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: `${COMPANY.name} | Giải pháp Fulfillment xuyên biên giới`,
    description:
      "Giải pháp Fulfillment xuyên biên giới — xử lý chính xác, tối ưu vận hành. Tổng kho phía Bắc Việt Nam.",
    url: COMPANY.website,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
