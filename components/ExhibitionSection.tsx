
import React from 'react';
import { EXHIBITIONS } from '../constants';

const ExhibitionSection: React.FC = () => {
  return (
    <section id="exhibitions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-xs tracking-[0.5em] text-[#8C7355] font-bold uppercase">CURATED EXHIBITIONS</h2>
            <h3 className="text-4xl font-bold tracking-tight">近期展览</h3>
          </div>
          {/* “查看历史回顾”按钮已移除 */}
        </div>

        <div className="space-y-24">
          {EXHIBITIONS.map((ex, idx) => (
            <div key={ex.id} className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-8 overflow-hidden group relative cursor-pointer ${idx % 2 !== 0 ? 'order-last' : ''}`}>
                <img 
                  src={ex.image} 
                  alt={ex.title} 
                  className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 text-xs tracking-widest uppercase font-bold ${
                    ex.status === 'current' ? 'bg-[#8C7355] text-white' : 'bg-white/80 text-[#1A1A1A]'
                  }`}>
                    {ex.status === 'current' ? '正在展出' : '即将开启'}
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <p className="text-sm text-[#8C7355] tracking-widest font-bold mb-2">{ex.subtitle}</p>
                  <h4 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">{ex.title}</h4>
                </div>
                <div className="text-base font-light text-[#666]">
                  <div className="mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#8C7355]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {ex.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#8C7355]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    复泓画廊 · 上海空间
                  </div>
                </div>
                <button className="text-xs tracking-[0.3em] font-bold flex items-center gap-2 group uppercase">
                  预约观展
                  <span className="w-12 h-[1px] bg-[#1A1A1A] group-hover:w-16 transition-all"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;
