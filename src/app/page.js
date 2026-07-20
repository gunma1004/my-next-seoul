// src/app/page.js
"use client";
import { useState } from 'react';

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
  const handleDistrictChange = (e) => {
    if (e.target.value) window.location.href = `/${e.target.value}`;
  };

  return (
    <div className="text-gray-200 min-h-screen flex flex-col pb-24 md:pb-0 bg-[#0c0c0c]">
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-500">서울건마사랑</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-950/20">본점</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-12">
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-amber-400">서울 전지역 24시</span><br />품격 있는 출장마사지
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-8">서울 전지역 어디든 25분 내 빠르게 도착합니다.</p>
            
            <div className="bg-[#1e1e1e]/85 border border-white/10 p-4 rounded-2xl max-w-sm mx-auto">
              <select onChange={handleDistrictChange} className="bg-transparent text-sm text-white w-full outline-none" defaultValue="">
                <option value="" disabled className="bg-[#1e1e1e]">원하시는 지역을 선택해주세요</option>
                {Object.keys(seoulDistricts).map((key) => (
                  <option key={key} value={key} className="bg-[#1e1e1e]">{seoulDistricts[key].name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* SEO 링크 구역 */}
        <section className="bg-[#080808] py-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3">
            {Object.entries(seoulDistricts).map(([id, data]) => (
              <a key={id} href={`/${id}`} className="text-xs text-gray-500 hover:text-amber-500">
                {data.name}출장마사지
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}