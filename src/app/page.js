"use client";

import { useState } from 'react';
import "./globals.css";

// (이전 코드와 데이터는 동일하게 유지합니다)
const seoulDistricts = { /* ... (기존 데이터 그대로 사용) ... */ };

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('gangnam');

  const shops = [
    { id: 1, title: '한국미인홈케어', desc: '최고급 천연 오가닉 오일 사용', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80', phone: 'tel:0507-1280-3324' },
    { id: 2, title: '서울사쿠라홈타이', desc: '태국 명문 왓포식 정통 홈타이', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&q=80', phone: 'tel:0507-1280-3326' },
    { id: 3, title: '임산부 딥아로마', desc: '1:1 맞춤형 에센셜 블렌딩', img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=400&q=80', phone: 'tel:0507-1280-3325' }
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white p-4">
      <header className="py-6 border-b border-white/10 text-center">
        <h1 className="text-3xl font-bold text-amber-500">서울건마사랑</h1>
      </header>

      <main className="max-w-4xl mx-auto mt-6">
        <div className="grid gap-6">
          {shops.map(shop => (
            <article key={shop.id} className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 flex flex-col sm:flex-row">
              {/* 이미지 영역 보완: w-full에 높이를 강제 지정 */}
              <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                <img 
                  src={shop.img} 
                  alt={shop.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/400'}
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-amber-400">{shop.title}</h2>
                <p className="text-gray-400 mt-2">{shop.desc}</p>
                <div className="mt-4 flex gap-2">
                  <a href={shop.phone} className="bg-amber-600 px-4 py-2 rounded-lg text-sm font-bold">전화 상담</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}