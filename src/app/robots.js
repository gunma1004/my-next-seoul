export default function robots() {
  return {
    rules: {
      userAgent: '*', // 모든 검색 로봇의 접근을 허용합니다.
      allow: '/',     // 사이트의 모든 페이지 수집을 허용합니다.
    },
    sitemap: 'https://gunmaseoullove.shop/sitemap.xml', // 사이트맵 주소도 함께 적어주면 SEO에 아주 좋습니다.
  }
}