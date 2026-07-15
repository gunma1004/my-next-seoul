export default function sitemap() {
  // 본인의 실제 넷플리파이 주소 (나중에 유료 도메인을 사면 여기를 바꿔주세요)
  const baseUrl = 'https://gunmalove-seoul.netlify.app';

  // 25개 구 영문 주소 목록
  const districts = [
    'gangnam', 'seocho', 'songpa', 'gangdong', 'gwangjin', 'seongdong',
    'yongsan', 'junggu', 'jongno', 'dongdaemun', 'jungnang', 'sungbuk',
    'gangbuk', 'dobong', 'nowon', 'eunpyeong', 'seodaemun', 'mapo',
    'yangcheon', 'gangseo', 'guro', 'geumcheon', 'yeongdeungpo',
    'dongjak', 'gwanak'
  ];

  // 1. 메인 페이지 사이트맵 정보 (가장 중요도 높음)
  const mainPage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily', // 매일 업데이트됨을 네이버 봇에 알림
    priority: 1.0,            // 중요도 100%
  };

  // 2. 25개 구 개별 페이지 사이트맵 정보 자동 생성
  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/${district}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,            // 서브 페이지 중요도 80%
  }));

  // 메인 페이지와 25개 구 페이지를 합쳐서 네이버에 제출할 형태로 반환
  return [mainPage, ...districtPages];
}