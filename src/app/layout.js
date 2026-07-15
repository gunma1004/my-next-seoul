import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⭐️ 사이트 전체에 공통으로 적용되는 글로벌 메타데이터
export const metadata = {
  title: {
    template: '%s | 서울건마사랑', // 개별 페이지 타이틀 뒤에 자동으로 브랜드명이 붙습니다. (예: 강남구 출장마사지 | 서울건마사랑)
    default: '서울출장마사지 No.1 서울건마사랑 | 24시 홈타이·스웨디시', // 메인 페이지 기본 타이틀
  },
  description: "서울 전지역 25분 내 도착! 검증된 전문 테라피스트의 명품 출장마사지, 홈타이, 스웨디시 전문 플랫폼 서울건마사랑입니다.",
  keywords: ["출장마사지", "서울출장마사지", "홈타이", "스웨디시", "서울건마사랑", "24시마사지"],
  openGraph: {
    title: '서울출장마사지 No.1 서울건마사랑',
    description: '서울 전지역 25분 내 도착! 명품 출장마사지 서비스를 홈케어로 편안하게 경험해 보세요.',
    siteName: '서울건마사랑',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  // 💡 팁: 네이버 서치어드바이저 '사이트 소유권 확인' 시 HTML 태그 방식을 선택했다면 아래 주석을 풀고 코드를 넣으시면 됩니다.
  // verification: {
  //   other: {
  //     'naver-site-verification': ['네이버가_발급한_고유코드_문자열'],
  //   },
  // },
};

export default function RootLayout({ children }) {
  return (
    // ⭐️ 언어를 영어(en)에서 한국어(ko)로 변경했습니다.
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* ⭐️ 배경색과 글자색이 깨지지 않도록 메인 페이지와 동일한 어두운 톤 속성을 추가했습니다. */}
      <body className="min-h-full flex flex-col bg-[#0c0c0c] text-gray-200">
        {children}
      </body>
    </html>
  );
}