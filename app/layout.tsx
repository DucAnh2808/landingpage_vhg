import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} | Giải pháp logistics quốc tế`,
  description:
    "VHG Logistics — vận chuyển Trung – Việt, Nga – Việt, đa phương thức, door-to-door, hải quan. Đăng ký tư vấn ngay.",
  openGraph: {
    title: `${COMPANY.name} | Giải pháp logistics quốc tế`,
    description:
      "Thuộc hệ sinh thái VHG HOLDING. Tuyến chủ lực Trung Quốc – Việt Nam, Nga – Việt Nam.",
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
