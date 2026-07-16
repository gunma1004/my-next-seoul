"use client";

import { useState, use } from 'react';

// 1. 서울시 25개 구 데이터
const seoulDistricts = {
  gangnam: { name: '강남구', dongs: ['역삼동', '논현동', '청담동', '신사동', '압구정동', '삼성동', '대치동'] },
  seocho: { name: '서초구', dongs: ['서초동', '반포동', '방배동', '양재동', '잠원동'] },
  songpa: { name: '송파구', dongs: ['잠실동', '가락동', '문정동', '방이동', '신천동'] },
  gangdong: { name: '강동구', dongs: ['천호동', '길동', '둔촌동', '암사동', '성내동'] },
  gwangjin: { name: '광진구', dongs: ['구의동', '화양동', '자양동', '중곡동', '군자동'] },
  seongdong: { name: '성동구', dongs: ['성수동', '왕십리동', '행당동', '옥수동', '마장동'] },
  yongsan: { name: '용산구', dongs: ['이태원동', '한남동', '원효로동', '이촌동', '후암동'] },
  junggu: { name: '중구', dongs: ['명동', '신당동', '을지로동', '회현동', '필동'] },
  jongno: { name: '종로구', dongs: ['종로동', '혜화동', '평창동', '부암동', '사직동'] },
  dongdaemun: { name: '동대문구', dongs: ['장안동', '청량리동', '회기동', '제기동', '이문동'] },
  jungnang: { name: '중랑구', dongs: ['면목동', '상봉동', '망우동', '묵동', '신내동'] },
  sungbuk: { name: '성북구', dongs: ['안암동', '길음동', '종암동', '성북동', '석관동'] },
  gangbuk: { name: '강북구', dongs: ['미아동', '수유동', '번동', '우이동'] },
  dobong: { name: '도봉구', dongs: ['방학동', '창동', '쌍문동', '도봉동'] },
  nowon: { name: '노원구', dongs: ['상계동', '중계동', '하계동', '공릉동', '월계동'] },
  eunpyeong: { name: '은평구', dongs: ['불광동', '연신내동', '응암동', '구산동', '대조동'] },
  seodaemun: { name: '서대문구', dongs: ['신촌동', '홍제동', '연희동', '남가좌동', '북가좌동'] },
  mapo: { name: '마포구', dongs: ['서교동', '합정동', '공덕동', '망원동', '상암동', '연남동'] },
  yangcheon: { name: '양천구', dongs: ['목동', '신정동', '신월동'] },
  gangseo: { name: '강서구', dongs: ['화곡동', '발산동', '마곡동', '가양동', '방화동'] },
  guro: { name: '구로구', dongs: ['구로동', '신도림동', '개봉동', '오류동', '가리봉동'] },
  geumcheon: { name: '금천구', dongs: ['가산동', '독산동', '시흥동'] },
  yeongdeungpo: { name: '영등포구', dongs: ['여의도동', '당산동', '문래동', '신길동', '영등포동'] },
  dongjak: { name: '동작구', dongs: ['사당동', '상도동', '대방동', '신대방동', '흑석동'] },
  gwanak: { name: '관악구', dongs: ['신림동', '봉천동', '낙성대동', '대학동'] }
};

export default function DistrictPage({ params }) {
  const resolvedParams = use(params);
  const districtKey = resolvedParams.district;
  const districtInfo = seoulDistricts[districtKey];

  if (!districtInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">404</h1>
          <p>존재하지 않는 서비스 지역입니다.</p>
          <a href="/" className="mt-4 inline-block px-6 py-2 bg-amber-500 text-black rounded-full">메인으로 돌아가기</a>
        </div>
      </div>
    );
  }

  const currentDistrictName = districtInfo.name;

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDong, setSelectedDong] = useState('전체');

  // ⭐️ 메인 페이지의 5개 상품을 지역구 이름이 자동 적용되도록 반영했습니다.
  const shops = [
    {
      id: 1,
      category: 'swedish',
      tag: '스웨디시 베스트',
      tagBg: 'bg-gold-500 text-black',
      eta: `${currentDistrictName} 전지역 20분내 출발`,
      subTitle: '한국미인홈케어 (Minseo Healing Lab)',
      title: `${currentDistrictName} 프리미엄 스웨디시`,
      rating: '4.96',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      desc: `최고급 천연 오가닉 오일만을 고집하며, ${currentDistrictName} 전역에서 빠르게 만날 수 있는 출장마사지 서비스입니다. 림프 순환을 돕는 깊고 정교한 스웨디시 감성 케어로 피로를 풀어보세요.`,
      hours: '연중무휴 (24h 운영)',
      price: '110,000원 ~',
      phone: 'tel:0507-1280-3324',
      sms: `sms:0507-1280-3324?body=안녕하세요, ${currentDistrictName} 출장마사지 예약 문의드립니다.`
    },
    {
      id: 2,
      category: 'thai',
      tag: '전통 타이마사지',
      tagBg: 'bg-emerald-600 text-white',
      eta: `${currentDistrictName} 25분내 도착`,
      subTitle: '기쁨조홈타이',
      title: '왓포식 정통 타이 출장마사지',
      rating: '4.91',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      desc: `태국 현지 명문 왓포 스쿨을 수료한 최고 수준의 전문 홈타이 테라피스트가 직접 찾아갑니다. 내 집에서 편안하게 받는 정통 스트레칭 출장타이 서비스를 느껴보세요.`,
      hours: '운영: 11:00 ~ 익일 05:00',
      price: '60,000원 ~',
      phone: 'tel:0507-1280-3325',
      sms: `sms:0507-1280-3325?body=안녕하세요, ${currentDistrictName} 홈타이 예약 문의드립니다.`
    },
    {
      id: 3,
      category: 'aroma',
      tag: '아로마 최우수',
      tagBg: 'bg-purple-700 text-white',
      eta: '신속 비대면 홈매칭 지원',
      subTitle: '미인클럽홈타이',
      title: `${currentDistrictName} 미인클럽홈타이`,
      rating: '4.95',
      img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
      desc: `심신 컨디션에 맞춘 1:1 맞춤형 에센셜 블렌딩 아로마 오일 테라피. 부종과 노폐물 배출에 깊은 도움을 드리는 명품 홈케어 출장마사지 솔루션입니다.`,
      hours: '운영: 13:00 ~ 익일 06:00',
      price: '60,000원 ~',
      phone: 'tel:0507-1280-3327',
      sms: `sms:0507-1280-3327?body=안녕하세요, ${currentDistrictName} 아로마 예약 문의드립니다.`
    },
    {
      id: 4,
      category: 'homecare',
      tag: '1:1 프리미엄 홈시그니처',
      tagBg: 'bg-orange-600 text-white',
      eta: `${currentDistrictName} 전지역 즉시 발송`,
      subTitle: '한국꿀홈케어',
      title: 'VIP 감성 슈크림 아로마 스웨디시 출장',
      rating: '4.98',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      desc: `최상의 보습을 자랑하는 특제 슈크림 로션과 에센셜 아로마 오일을 혼합한 프리미엄 패키지. 정성스러운 손길로 완성되는 품격 있는 ${currentDistrictName} 출장 홈케어 서비스입니다.`,
      hours: '연중무휴 (24h 운영)',
      price: '60,000원 ~',
      phone: 'tel:0507-1280-3328',
      sms: `sms:0507-1280-3328?body=안녕하세요, ${currentDistrictName} 프리미엄 홈케어 문의드립니다.`
    },
    {
      id: 5,
      category: 'thai',
      tag: '스포티 & 재활 마사지',
      tagBg: 'bg-blue-700 text-white',
      eta: `${currentDistrictName} 관제 매칭`,
      subTitle: '24시달달한국인홈케어 (Namu Recovery)',
      title: '스포츠 재활 홈타이 & 딥티슈 스트레칭',
      rating: '4.94',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      desc: `만성 피로로 인해 심하게 결리고 뭉친 전신 근육을 과학적인 심부근육 테라피 방식으로 해결하는 홈케어 전용 출장마사지 프로그램입니다.`,
      hours: '운영: 10:00 ~ 익일 04:00',
      price: '60,000원 ~',
      phone: 'tel:0507-1280-3330',
      sms: `sms:0507-1280-3330?body=안녕하세요, ${currentDistrictName} 24시 마사지 문의드립니다.`
    }
  ];

  const filteredShops = activeCategory === 'all' 
    ? shops 
    : shops.filter(shop => shop.category === activeCategory);

  const handleDistrictChange = (e) => {
    window.location.href = `/${e.target.value}`;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${currentDistrictName} 출장마사지 서울건마사랑`,
    "image": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    "telephone": "010-8379-9746",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seoul",
      "addressRegion": currentDistrictName,
      "addressCountry": "KR"
    },
    "description": `${currentDistrictName} 24시 홈타이, 스웨디시 출장마사지 매칭 플랫폼.`
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      
      <title>{`${currentDistrictName} 출장마사지 No.1 | 24시 홈타이·스웨디시 서울건마사랑`}</title>
      <meta name="description" content={`${currentDistrictName} 전지역 25분 홈케어 매칭! 전문 한국인 테라피스트가 방문하는 프리미엄 출장마사지.`} />
      <meta name="keywords" content={`${currentDistrictName}출장마사지, ${currentDistrictName}홈타이, ${currentDistrictName}스웨디시, 24시출장마사지, 서울건마사랑`} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300">
              서울건마사랑
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20 font-medium tracking-tight">
              {currentDistrictName} 지점
            </span>
          </a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400 transition-colors font-semibold">메인으로 가기 &gt;</a>
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-12 border-b border-white/5">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-[#0c0c0c]/70"></div>
          
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-amber-400">{currentDistrictName} 전지역 24시</span><br />품격 있는 출장마사지
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-8">{currentDistrictName} 내 어디든 25분 내 빠르게 도착합니다.</p>

            {/* 검색 박스 */}
            <div className="bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                  <label className="text-[10px] text-amber-400 font-bold block mb-1 uppercase">다른 지역 이동하기</label>
                  <select 
                    value={districtKey}
                    onChange={handleDistrictChange}
                    className="bg-transparent text-sm text-white w-full outline-none cursor-pointer"
                  >
                    {Object.keys(seoulDistricts).map((key) => (
                      <option key={key} value={key} className="bg-[#1e1e1e]">{seoulDistricts[key].name}</option>
                    ))}
                  </select>
                </div>
                <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                  <label className="text-[10px] text-amber-400 font-bold block mb-1 uppercase">상세 동 선택</label>
                  <select 
                    value={selectedDong}
                    onChange={(e) => setSelectedDong(e.target.value)}
                    className="bg-transparent text-sm text-white w-full outline-none cursor-pointer"
                  >
                    <option value="전체" className="bg-[#1e1e1e]">전체 보기</option>
                    {districtInfo.dongs.map((dong) => (
                      <option key={dong} value={dong} className="bg-[#1e1e1e]">{dong}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section id="categories" className="px-4 py-6 bg-[#101010] border-b border-white/5 sticky top-[73px] md:top-[77px] z-40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'all', label: '전체보기' },
                { id: 'swedish', label: '👑 감성 스웨디시' },
                { id: 'thai', label: '🧘 홈타이 마사지' },
                { id: 'aroma', label: '🌸 아로마 홈케어' },
                { id: 'homecare', label: '🏠 24시 출장 전문' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm transition-all duration-300 font-medium ${
                    activeCategory === tab.id
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'border border-white/10 bg-white/5 text-gray-300 hover:text-amber-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Shop List */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">{currentDistrictName} {selectedDong !== '전체' ? selectedDong : ''} 추천 출장마사지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <article key={shop.id} className="bg-[#1e1e1e] border border-white/5 hover:border-amber-500/30 rounded-2xl overflow-hidden p-5 shadow-lg transition-colors">
                <img src={shop.img} alt={`${currentDistrictName} 출장마사지 - ${shop.title}`} className="w-full h-48 object-cover rounded-xl mb-4" />
                <span className="text-[10px] text-amber-500 font-bold tracking-wider uppercase block mb-1">{shop.subTitle}</span>
                <h3 className="text-lg font-bold text-white mb-2">{shop.title}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{shop.desc}</p>
                <div className="flex gap-2">
                  <a href={shop.phone} className="flex-1 text-center py-2.5 border border-white/10 hover:bg-white/5 text-white rounded-lg text-xs font-semibold transition-colors">
                    전화 예약
                  </a>
                  <a href={shop.sms} className="flex-1 text-center py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg text-xs font-bold">
                    문자 예약
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
<section className="bg-[#080808] py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-sm font-bold text-gray-400 mb-4">서울 전지역 출장마사지 바로가기</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'gangnam', name: '강남구' }, { id: 'seocho', name: '서초구' }, { id: 'songpa', name: '송파구' },
              { id: 'mapo', name: '마포구' }, { id: 'yongsan', name: '용산구' }, { id: 'junggu', name: '중구' },
              { id: 'jongno', name: '종로구' }, { id: 'dongdaemun', name: '동대문구' }, { id: 'seongdong', name: '성동구' },
              { id: 'gwangjin', name: '광진구' }, { id: 'gangdong', name: '강동구' }, { id: 'jungnang', name: '중랑구' },
              { id: 'sungbuk', name: '성북구' }, { id: 'gangbuk', name: '강북구' }, { id: 'dobong', name: '도봉구' },
              { id: 'nowon', name: '노원구' }, { id: 'eunpyeong', name: '은평구' }, { id: 'seodaemun', name: '서대문구' },
              { id: 'yangcheon', name: '양천구' }, { id: 'gangseo', name: '강서구' }, { id: 'guro', name: '구로구' },
              { id: 'geumcheon', name: '금천구' }, { id: 'yeongdeungpo', name: '영등포구' }, { id: 'dongjak', name: '동작구' },
              { id: 'gwanak', name: '관악구' }
            ].map((area) => (
              <a 
                key={area.id} 
                href={`/${area.id}`} 
                className="text-xs text-gray-500 hover:text-amber-500 transition-colors"
              >
                {area.name}출장마사지
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/5 py-12 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 서울건마사랑 {currentDistrictName} 지점 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}