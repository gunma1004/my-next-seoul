"use client";

import "../../globals.css";

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

export default function DistrictClientPage({ districtKey }) {
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

  const shops = [
    {
      id: 1, category: 'swedish', tag: '스웨디시 베스트', tagBg: 'bg-gold-500 text-black',
      eta: `${currentDistrictName} 전지역 20분내 출발`, subTitle: '한국미인홈케어',
      title: `${currentDistrictName} 프리미엄 스웨디시`, rating: '4.96',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      desc: `최고급 천연 오가닉 오일만을 고집하며, ${currentDistrictName} 전역에서 빠르게 만날 수 있는 출장마사지 서비스입니다.`,
      hours: '연중무휴 (24h 운영)', price: '110,000원 ~', phone: 'tel:0507-1280-3324',
      sms: `sms:0507-1280-3324?body=안녕하세요, ${currentDistrictName} 출장마사지 예약 문의드립니다.`
    },
    {
      id: 2, category: 'thai', tag: '전통 타이마사지', tagBg: 'bg-emerald-600 text-white',
      eta: `${currentDistrictName} 25분내 도착`, subTitle: '기쁨조홈타이',
      title: '왓포식 정통 타이 출장마사지', rating: '4.91',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      desc: `태국 현지 명문 왓포 스쿨을 수료한 최고 수준의 전문 홈타이 테라피스트가 직접 찾아갑니다.`,
      hours: '운영: 11:00 ~ 익일 05:00', price: '60,000원 ~', phone: 'tel:0507-1280-3325',
      sms: `sms:0507-1280-3325?body=안녕하세요, ${currentDistrictName} 홈타이 예약 문의드립니다.`
    }
  ];

  const filteredShops = activeCategory === 'all' ? shops : shops.filter(shop => shop.category === activeCategory);

  const handleDistrictChange = (e) => {
    window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300">
              서울건마사랑
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20 font-medium">
              {currentDistrictName} 지점
            </span>
          </a>
          <a href="/" className="text-xs text-gray-400 hover:text-amber-400 font-semibold">메인으로 가기 &gt;</a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-12 border-b border-white/5">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-[#0c0c0c]/70"></div>
          
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-amber-400">{currentDistrictName} 전지역 24시</span><br />출장마사지
            </h1>
            
            <div className="bg-[#1e1e1e]/85 border border-white/10 p-4 rounded-2xl mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                  <label className="text-[10px] text-amber-400 font-bold block mb-1">다른 지역 이동하기</label>
                  <select value={districtKey} onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none">
                    {Object.keys(seoulDistricts).map((key) => (
                      <option key={key} value={key} className="bg-[#1e1e1e]">{seoulDistricts[key].name}</option>
                    ))}
                  </select>
                </div>
                <div className="text-left bg-white/5 p-3 rounded-xl border border-white/5">
                  <label className="text-[10px] text-amber-400 font-bold block mb-1">상세 동 선택</label>
                  <select value={selectedDong} onChange={(e) => setSelectedDong(e.target.value)} className="bg-transparent text-sm text-white w-full outline-none">
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

        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">{currentDistrictName} 추천 출장마사지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <article key={shop.id} className="bg-[#1e1e1e] border border-white/5 p-5 rounded-2xl">
                <img src={shop.img} className="w-full h-48 object-cover rounded-xl mb-4" />
                <span className="text-[10px] text-amber-500 font-bold block mb-1">{shop.subTitle}</span>
                <h3 className="text-lg font-bold text-white mb-2">{shop.title}</h3>
                <div className="flex gap-2 mt-4">
                  <a href={shop.phone} className="flex-1 text-center py-2.5 border border-white/10 text-white rounded-lg text-xs font-semibold">전화 예약</a>
                  <a href={shop.sms} className="flex-1 text-center py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg text-xs font-bold">문자 예약</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}