// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "서울건마사랑 | 24시 출장마사지",
  description: "서울 전지역 25분 내 방문 홈케어",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0c0c0c]">{children}</body>
    </html>
  );
}