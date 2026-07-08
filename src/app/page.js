'use client';

import { useState } from 'react';

// 1. 서울시 25개 구 및 주요 동 데이터 정의
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

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('gangnam');
  const [selectedDong, setSelectedDong] = useState('전체');

  // 서울 전역 커버 가능하도록 고정 매칭 데이터 다듬기
  const shops = [
    {
      id: 1,
      category: 'swedish',
      tag: '스웨디시 베스트',
      tagBg: 'bg-gold-500 text-black',
      eta: '서울 전지역 20분내 출발',
      subTitle: '한국미인홈케어 (Minseo Healing Lab)',
      title: '한국미인홈케어',
      rating: '4.96',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      desc: '최고급 천연 오가닉 오일만을 고집하며, 몸의 림프 순환을 극대화하는 깊고 정교한 스웨디시 감성 케어입니다. 피로와 불면증 완화에 탁월합니다.',
      hours: '연중무휴 (24h 운영)',
      price: '90,000원 ~',
      phone: 'tel:0507-1280-3167',
      sms: 'sms:0507-1280-3167?body=안녕하세요, 마사지 예약 문의드립니다.'
    },
    {
      id: 2,
      category: 'thai',
      tag: '전통 타이마사지',
      tagBg: 'bg-emerald-600 text-white',
      eta: '서울 전지역 25분내 도착',
      subTitle: '서울사쿠라홈타이',
      title: '왓포식 정통 타이 테라피',
      rating: '4.91',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      desc: '태국 현지 명문 왓포 스쿨을 수료한 최고 수준의 전문 테라피스트가 직접 근육의 긴장을 풀고 신체 에너지를 순환시켜 주는 고전 스트레칭 케어입니다.',
      hours: '운영: 11:00 ~ 익일 05:00',
      price: '70,000원 ~',
      phone: 'tel:0507-1280-3169',
      sms: 'sms:0507-1280-3169?body=안녕하세요, 마사지 예약 문의드립니다.'
    },
    {
      id: 3,
      category: 'aroma',
      tag: '아로마 최우수',
      tagBg: 'bg-purple-700 text-white',
      eta: '신속 비대면 홈매칭 지원',
      subTitle: 'VIP 에센셜 홈케어',
      title: '임산부 & 딥아로마 림프 순환',
      rating: '4.95',
      img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
      desc: '개개인의 심신 컨디션에 맞춘 맞춤형 에센셜 블렌딩 아로마 오일을 사용하여 굳어진 근막을 부드럽게 릴렉싱하고 부종과 노폐물 배출에 깊은 도움을 드립니다.',
      hours: '운영: 13:00 ~ 익일 06:00',
      price: '100,000원 ~',
      phone: 'tel:0507-1280-3170',
      sms: 'sms:0507-1280-3170?body=안녕하세요, 마사지 예약 문의드립니다.'
    },
    {
      id: 4,
      category: 'homecare',
      tag: '1:1 프리미엄 홈시그니처',
      tagBg: 'bg-orange-600 text-white',
      eta: '서울 전지역 즉시 발송',
      subTitle: '한국꿀홈케어',
      title: 'VIP 감성 슈크림 아로마스웨디시',
      rating: '4.98',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      desc: '최상의 보습을 자랑하는 특제 슈크림 로션과 에센셜 아로마 오일을 혼합하여 정성스러운 림프 마사지를 제공하는 프리미엄 홈 마사지의 완성형 패키지입니다.',
      hours: '연중무휴 (24h 운영)',
      price: '120,000원 ~',
      phone: 'tel:0507-1280-3171',
      sms: 'sms:0507-1280-3171?body=안녕하세요, 마사지 예약 문의드립니다.'
    },
    {
      id: 5,
      category: 'thai',
      tag: '스포티 & 재활 마사지',
      tagBg: 'bg-blue-700 text-white',
      eta: '수도권 고속 관제 매칭',
      subTitle: '24시달달한국인홈케어 (Namu Recovery)',
      title: '스포츠 재활 & 딥티슈 스트레칭',
      rating: '4.94',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      desc: '강도 높은 스포츠 활동이나 만성 피로로 인해 심하게 뭉치고 굳은 전신 근육을 과학적인 심부근육 테라피 방식으로 깊숙하게 풀어주는 회복형 프로그램입니다.',
      hours: '운영: 10:00 ~ 익일 04:00',
      price: '80,000원 ~',
      phone: 'tel:0507-1280-3172',
      sms: 'sms:0507-1280-3172?body=안녕하세요, 마사지 예약 문의드립니다.'
    }
  ];

  // 카테고리 필터링 규칙 계산
  const filteredShops = activeCategory === 'all' 
    ? shops 
    : shops.filter(shop => shop.category === activeCategory);

  // 구가 변경될 때 동 선택을 초기화하기 위한 리스너
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedDong('전체');
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300">
              SEOULPALM
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20 font-medium tracking-tight">
              {seoulDistricts[selectedDistrict]?.name || '서울시'}
            </span>
          </a>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-amber-300 font-medium">
            <span>서울 &gt; {seoulDistricts[selectedDistrict]?.name} {selectedDong !== '전체' && `> ${selectedDong}`}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">플랫폼 소개</a>
            <a href="#categories" className="hover:text-amber-400 transition-colors">테마 카테고리</a>
            <a href="#therapist-list" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">추천 테라피스트</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">이용자 생생후기</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center px-4 py-12 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-400 tracking-wider uppercase mb-6">
            Premium VIP Home Care Specialist
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-wide leading-tight">
            내 공간에서 만나는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-extrabold">최상의 힐링 리츄얼</span>
          </h1>
          
          <p className="mt-4 text-xs md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            서울 {seoulDistricts[selectedDistrict]?.name} 최고 수준의 프리미엄 테라피스트들이 신속하게 이동합니다.
          </p>

          {/* Quick Search Box (행정구/행정동 2단 셀렉터 자동 연동) */}
          <div className="mt-8 md:mt-10 max-w-2xl mx-auto bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* 자치구 선택 */}
              <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider mb-1">지역 (구 선택)</span>
                <select 
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="bg-transparent text-sm text-white font-medium w-full outline-none cursor-pointer border-none"
                >
                  {Object.keys(seoulDistricts).map((key) => (
                    <option key={key} value={key} className="bg-[#1e1e1e]">
                      {seoulDistricts[key].name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 해당 자치구의 동 선택 */}
              <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider mb-1">상세 (동 선택)</span>
                <select 
                  value={selectedDong}
                  onChange={(e) => setSelectedDong(e.target.value)}
                  className="bg-transparent text-sm text-white font-medium w-full outline-none cursor-pointer border-none"
                >
                  <option value="전체" className="bg-[#1e1e1e]">구 전체 보기</option>
                  {seoulDistricts[selectedDistrict]?.dongs.map((dong) => (
                    <option key={dong} value={dong} className="bg-[#1e1e1e]">
                      {dong}
                    </option>
                  ))}
                </select>
              </div>

              {/* 테마 지정 선택 */}
              <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider mb-1">프로그램 테마</span>
                <select 
                  value={activeCategory} 
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="bg-transparent text-sm text-white font-medium w-full outline-none cursor-pointer border-none"
                >
                  <option value="all" className="bg-[#1e1e1e]">모든 프로그램</option>
                  <option value="swedish" className="bg-[#1e1e1e]">스웨디시 (Swedish)</option>
                  <option value="thai" className="bg-[#1e1e1e]">타이 마사지 (Thai)</option>
                  <option value="aroma" className="bg-[#1e1e1e]">아로마 테라피 (Aroma)</option>
                  <option value="homecare" className="bg-[#1e1e1e]">홈 스페셜 케어 (Homecare)</option>
                </select>
              </div>

            </div>
            <a href="#therapist-list" className="mt-4 w-full inline-flex items-center justify-center py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl text-sm shadow-md">
              {seoulDistricts[selectedDistrict]?.name} {selectedDong !== '전체' ? selectedDong : ''} 매칭 대기원 조회하기
            </a>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section id="categories" className="px-4 py-6 bg-[#101010] border-b border-white/5 sticky top-[73px] md:top-[77px] z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: '전체보기' },
              { id: 'swedish', label: '👑 스웨디시' },
              { id: 'thai', label: '🧘 타이마사지' },
              { id: 'aroma', label: '🌸 아로마 테라피' },
              { id: 'homecare', label: '🏠 홈케어 전용' }
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

      {/* 4. Shop / Service List Section */}
      <main id="therapist-list" className="max-w-7xl mx-auto px-4 py-12 md:px-8 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block mb-1">RECOMMENDED THERAPISTS</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
              {seoulDistricts[selectedDistrict]?.name} 추천 테라피스트 & 샵
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-gray-400">
            {selectedDistrict ? seoulDistricts[selectedDistrict].name : '서울'} 인근지 기준 완료 계정 <span className="text-amber-400 font-bold">{filteredShops.length}</span>개 노출 중
          </div>
        </div>

        {/* 숍 리스트 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map(shop => (
            <div key={shop.id} className="bg-[#1e1e1e] border border-white/5 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300 group shadow-lg">
              <div className="relative h-56 overflow-hidden bg-zinc-800">
                <img src={shop.img} alt={shop.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <span className={`absolute top-4 left-4 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider ${shop.tagBg}`}>
                  {shop.tag}
                </span>
                <span className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-xs text-amber-400 px-3 py-1 rounded-full border border-white/10">
                  {seoulDistricts[selectedDistrict]?.name} 즉시 매칭
                </span>
              </div>
              <div className="p-5 md:p-6">
                <span className="text-xs text-amber-500 font-bold tracking-wider uppercase block mb-1">{shop.subTitle}</span>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{shop.title}</h3>
                  <div className="flex items-center gap-1 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded text-xs text-amber-400">
                    <span>★ {shop.rating}</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-400 font-light line-clamp-2 leading-relaxed mb-4">{shop.desc}</p>
                <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-white/5 mb-4 text-xs text-gray-400">
                  <div>⏱ {shop.hours}</div>
                  <div className="text-right text-white font-semibold">💰 {shop.price}</div>
                </div>
                <div className="flex gap-2">
                  <a href={shop.phone} className="flex-1 inline-flex items-center justify-center py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-semibold border border-white/10">
                    전화문의
                  </a>
                  <a href={shop.sms} className="flex-1 inline-flex items-center justify-center py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg text-xs font-bold">
                    문자예약
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 5. Brand Features Intro */}
      <section id="about" className="bg-[#101010] py-16 px-4 md:px-8 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block mb-2">WHY SEOULPALM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">우리가 제공하는 압도적인 약속</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">100% 신원 보증 테라피스트</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">철저한 이력 검증과 실무 테스트를 통과한 전문 자격 소지 테라피스트만을 매칭합니다.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">서울 전지역 25분 관제 배송</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">구/동 필터 연동 기반으로 가장 가까운 최적 동선의 관리팀이 신속히 배정됩니다.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">최상급 최고급 천연 오일</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">화학 성분이 배제된 순수 에센셜 테라피 유기농 오일만을 사용해 피부 케어까지 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reviews Section */}
      <section id="reviews" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs text-amber-500 font-bold uppercase tracking-widest block mb-2">CUSTOMER REVIEWS</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide">실제 이용 고객 리얼 후기</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-4">"업무 때문에 출장이 잦은데, 번거롭게 멀리 나갈 필요 없이 숙소에서 순환 마사지를 바로 받을 수 있어서 진짜 편리하고 감동했습니다."</p>
              <div className="text-[11px] text-gray-400">서울 이용자 김** 고객님 · 2일 전</div>
            </div>
            <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-4">"요즘 목이랑 허리가 너무 무겁고 결려서 잠도 유독 잘 못 잤는데, 신청하고 집에서 전통 타이를 집중적으로 받고 아주 날아갈 것 같아요."</p>
              <div className="text-[11px] text-gray-400">서울 이용자 이** 고객님 · 5일 전</div>
            </div>
            <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-4">"지인 적극 추천으로 서울팜 이용해봤는데 매너 관리사분들 라인업도 탄탄하고 시스템이 체계적입니다. 정기 홈케어로 재이용 의사 무조건 있습니다."</p>
              <div className="text-[11px] text-gray-400">서울 이용자 최** 고객님 · 1주 전</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/5 pt-12 pb-24 md:pb-12 px-4 md:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <span className="text-xl font-bold text-amber-400 block mb-2">SEOULPALM</span>
            <p className="max-w-md font-light">서울 25개 자치구 전역 1:1 안심 예약 매칭 프리미엄 홈케어 플랫폼 건마천사입니다.</p>
          </div>
          <div className="text-left md:text-right text-gray-400">
            고객센터: 24시간 연중무휴 / <a href="tel:010-1234-5678" className="text-amber-400 font-semibold">010-1234-5678</a><br />
            COPYRIGHT &copy; SEOULPALM ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* 모바일 하단 고정 액션바 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0c0c0c]/95 backdrop-blur-md border-t border-white/10 px-4 py-3.5 flex gap-3">
        <a href="tel:010-8379-9746" className="flex-1 inline-flex items-center justify-center py-4 bg-zinc-800 text-white font-extrabold rounded-xl text-sm border border-white/10">
          전화하기 <span className="text-gray-400 text-xs font-normal ml-1">(Call)</span>
        </a>
        <a href="sms:010-8379-9746?body=안녕하세요, 서울 마사지 예약 문의드립니다." className="flex-1 inline-flex items-center justify-center py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-gold-500 text-black font-extrabold rounded-xl text-sm">
          문자하기 <span className="text-zinc-900 text-xs font-normal ml-1">(SMS)</span>
        </a>
      </div>

    </div>
  );
}