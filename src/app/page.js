"use client";
import { useState } from 'react';

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

export default function MainPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // ⭐️ 아까 실수로 빼먹었던 메인 화면의 가게 목록(상품) 데이터를 꽉꽉 채웠습니다!
  const shops = [
    {
      id: 1, category: 'swedish', subTitle: '한국미인홈케어', title: `서울 프리미엄 스웨디시`,
      desc: `최고급 천연 오가닉 오일만을 고집하며, 서울 전역에서 빠르게 만날 수 있는 출장마사지 서비스입니다.`,
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      phone: 'tel:0507-1280-3167', sms: `sms:0507-1280-3167?body=안녕하세요, 서울 출장 예약 문의드립니다.`
    },
    {
      id: 2, category: 'thai', subTitle: '서울사쿠라홈타이', title: '왓포식 정통 타이 출장마사지',
      desc: `최고 수준의 전문 홈타이 테라피스트가 직접 찾아갑니다. 내 집에서 편안하게 받는 정통 스트레칭 출장타이 서비스.`,
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      phone: 'tel:0507-1280-3169', sms: `sms:0507-1280-3169?body=안녕하세요, 서울 홈타이 예약 문의드립니다.`
    },
    {
      id: 3, category: 'aroma', subTitle: 'VIP 에센셜 홈케어', title: `서울 딥아로마 홈케어`,
      desc: `심신 컨디션에 맞춘 1:1 맞춤형 에센셜 블렌딩. 부종과 노폐물 배출에 깊은 도움을 드리는 명품 홈케어 솔루션.`,
      img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
      phone: 'tel:0507-1280-3170', sms: `sms:0507-1280-3170?body=안녕하세요, 서울 아로마 예약 문의드립니다.`
    },
    {
      id: 4, category: 'homecare', subTitle: '한국꿀홈케어', title: 'VIP 감성 슈크림 아로마',
      desc: `최상의 보습을 자랑하는 특제 슈크림 로션과 에센셜 아로마 오일을 혼합한 프리미엄 패키지 서비스.`,
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      phone: 'tel:0507-1280-3171', sms: `sms:0507-1280-3171?body=안녕하세요, 서울 프리미엄 문의드립니다.`
    },
    {
      id: 5, category: 'thai', subTitle: '24시달달한국인홈케어', title: '스포츠 재활 홈타이 & 딥티슈',
      desc: `만성 피로로 인해 심하게 결리고 뭉친 전신 근육을 과학적인 심부근육 테라피 방식으로 해결하는 프로그램.`,
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      phone: 'tel:0507-1280-3172', sms: `sms:0507-1280-3172?body=안녕하세요, 서울 24시 마사지 문의드립니다.`
    }
  ];

  const filteredShops = activeCategory === 'all' 
    ? shops 
    : shops.filter(shop => shop.category === activeCategory);

  const handleDistrictChange = (e) => {
    if (e.target.value) window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      
      {/* 1. 상단 헤더 로고 영역 */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300">
              서울건마사랑
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20 font-medium tracking-tight">
              본점
            </span>
          </a>
        </div>
      </header>

      <main>
        {/* 2. 메인 대문 (배경 이미지 및 지역 검색창) */}
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-12 border-b border-white/5">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-[#0c0c0c]/70"></div>
          
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-amber-400">서울 전지역 24시</span><br />품격 있는 출장마사지
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-8">서울 전지역 어디든 25분 내 빠르게 도착합니다.</p>

            <div className="bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl max-w-sm mx-auto">
              <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                <label className="text-[10px] text-amber-400 font-bold block mb-1 uppercase">우리 동네 구역 선택하기</label>
                <select onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none cursor-pointer" defaultValue="">
                  <option value="" disabled className="bg-[#1e1e1e]">지역을 선택해주세요</option>
                  {Object.keys(seoulDistricts).map((key) => (
                    <option key={key} value={key} className="bg-[#1e1e1e]">{seoulDistricts[key].name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 메뉴 카테고리 탭 영역 */}
        <section className="px-4 py-6 bg-[#101010] border-b border-white/5 sticky top-[73px] md:top-[77px] z-40 backdrop-blur-md">
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

        {/* 4. 가게 목록 카드 영역 (이 부분이 통째로 빠져서 엉망이었습니다!) */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">서울 전지역 추천 출장마사지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <article key={shop.id} className="bg-[#1e1e1e] border border-white/5 hover:border-amber-500/30 rounded-2xl overflow-hidden p-5 shadow-lg transition-colors">
                <img src={shop.img} alt={`서울 출장마사지 - ${shop.title}`} className="w-full h-48 object-cover rounded-xl mb-4" />
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

        {/* 5. 네이버 봇이 읽어갈 25개 구역 링크 영역 */}
        <section className="bg-[#080808] py-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-sm font-bold text-gray-400 mb-4">서울 전지역 출장마사지 바로가기</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(seoulDistricts).map(([id, data]) => (
                <a key={id} href={`/${id}`} className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
                  {data.name}출장마사지
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 6. 푸터(하단) 영역 */}
      <footer className="bg-[#080808] border-t border-white/5 py-12 text-center text-gray-500 text-xs mt-auto">
        COPYRIGHT &copy; 서울건마사랑 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}