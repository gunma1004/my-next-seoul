// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "서울건마사랑 | 24시 출장마사지",
  description: "서울 전지역 25분 내 방문 홈케어",
  // ⭐️ 오픈 그래프 설정을 여기에 추가했습니다.
  openGraph: {
    title: "서울건마사랑 | 24시 출장마사지",
    description: "서울 전지역 25분 내 방문 홈케어! 전문 테라피스트의 품격 있는 서비스를 지금 만나보세요.",
    url: "https://gunmalove-seoul.netlify.app", 
    siteName: "서울건마사랑",
    locale: "ko_KR",
    type: "website",
  },
  // 검색 엔진이 사이트를 더 잘 이해하도록 키워드도 넣어줍니다.
  keywords: ["서울출장마사지", "서울홈타이", "서울스웨디시", "24시출장마사지", "건마사랑"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0c0c0c]">{children}</body>
    </html>
  );
}