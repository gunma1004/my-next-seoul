import DistrictClientPage from './DistrictClientPage';

// 서울시 25개 구 데이터
const seoulDistricts = {
  gangnam: { name: '강남구' }, seocho: { name: '서초구' }, songpa: { name: '송파구' },
  gangdong: { name: '강동구' }, gwangjin: { name: '광진구' }, seongdong: { name: '성동구' },
  yongsan: { name: '용산구' }, junggu: { name: '중구' }, jongno: { name: '종로구' },
  dongdaemun: { name: '동대문구' }, jungnang: { name: '중랑구' }, sungbuk: { name: '성북구' },
  gangbuk: { name: '강북구' }, dobong: { name: '도봉구' }, nowon: { name: '노원구' },
  eunpyeong: { name: '은평구' }, seodaemun: { name: '서대문구' }, mapo: { name: '마포구' },
  yangcheon: { name: '양천구' }, gangseo: { name: '강서구' }, guro: { name: '구로구' },
  geumcheon: { name: '금천구' }, yeongdeungpo: { name: '영등포구' }, dongjak: { name: '동작구' },
  gwanak: { name: '관악구' }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const districtKey = resolvedParams.district;
  const currentDistrictName = seoulDistricts[districtKey]?.name || '서울시';

  return {
    title: `${currentDistrictName} 출장마사지 No.1 | 24시 홈타이·스웨디시`,
    description: `${currentDistrictName} 전지역 25분 홈케어 매칭! 전문 한국인 테라피스트가 방문하는 프리미엄 출장마사지.`,
    keywords: [`${currentDistrictName}출장마사지`, `${currentDistrictName}홈타이`, `${currentDistrictName}스웨디시`, "24시출장마사지", "서울건마사랑"],
  };
}

export default async function DistrictPage({ params }) {
  const resolvedParams = await params;
  return <DistrictClientPage districtKey={resolvedParams.district} />;
}