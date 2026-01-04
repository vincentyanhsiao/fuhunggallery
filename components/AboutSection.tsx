
import React from 'react';
import { SectionId } from '../types';

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs tracking-[0.4em] text-[#8C7355] font-bold uppercase">ABOUT FUHUNG</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
              传递艺术价值<br />
              链接收藏生态
            </h3>
          </div>
          
          <div className="space-y-6 text-[#666666] leading-relaxed font-light text-base">
            <p className="font-medium text-[#1A1A1A]">
              复泓画廊，作为高端艺术资产管理的先行者，致力于在全球视野下构建专业的艺术交流平台。
            </p>
            <p>
              我们深耕当代艺术资源，凭借资深的学术顾问团队与深厚的行业背景，为藏家提供从“鉴定评估”到“价值增值”的全闭环专业化服务。复泓不仅是艺术品的展示场所，更是艺术资产管理与文化传承的坚实后盾。
            </p>
            <p>
              通过与知名拍卖行及全球重要艺术机构的紧密协作，我们成功搭建了艺术与收藏之间的信任桥梁，确保每一件艺术珍品都能在学术价值与经济价值上实现最优配置。
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-[#1A1A1A] tracking-tighter">GLOBAL</p>
                <p className="text-xs tracking-wider text-[#999] font-bold mt-1 uppercase">全球视野资源</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A1A1A] tracking-tighter">PRECISE</p>
                <p className="text-xs tracking-wider text-[#999] font-bold mt-1 uppercase">精准价值评估</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate('about-page')}
            className="group flex items-center gap-3 text-xs tracking-widest font-bold text-[#1A1A1A] hover:text-[#8C7355] transition-colors uppercase"
          >
            探索我们的核心理念
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543857182-68106299b6b2?q=80&w=1964&auto=format&fit=crop" 
              alt="Fuhung Gallery Space" 
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[4/3] bg-[#1A1A1A] p-1 shadow-2xl hidden lg:block overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518998053502-51dd0c61ee07?q=80&w=1974&auto=format&fit=crop" 
              alt="Curatorial Team" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
