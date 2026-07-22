import "./globals.css";

export const metadata = {
  title: "서울건마사랑 | 24시 출장마사지",
  description: "서울 전지역 25분 내 방문 홈케어",
  
  // ⭐️ 네이버 서치어드바이저 소유 확인 메타 태그 적용
  verification: {
    other: {
      'naver-site-verification': 'ee17c5aaaff23378add5d10e90a77a12944bc5aa',
    },
  },

  openGraph: {
    title: "서울건마사랑 | 24시 출장마사지",
    description: "서울 전지역 25분 내 방문! 전문 테라피스트가 찾아가는 프리미엄 홈케어 서비스.",
    url: "https://gunmaseoullove.shop", 
    siteName: "서울건마사랑",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
        width: 800,
        height: 600,
        alt: "서울건마사랑 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  keywords: ["서울출장마사지", "서울홈타이", "서울스웨디시", "24시출장마사지", "건마사랑"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0c0c0c]">{children}</body>
    </html>
  );
}