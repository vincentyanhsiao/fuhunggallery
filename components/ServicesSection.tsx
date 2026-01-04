
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';

interface ServicesSectionProps {
  onNavigate: (section: SectionId) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm tracking-[0.5em] text-[#8C7355] font-bold uppercase">CORE CAPABILITIES</h2>
          <h3 className="text-4xl font-bold tracking-tight">全维度专业服务体系</h3>
          <p className="max-w-2xl mx-auto text-[#666] font-light text-base">
            复泓致力于打造集“品牌展示、服务落地、艺术交流”于一体的高端艺术架构，每一项服务均符合国际顶级画廊及拍卖行标准。
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Tabs */}
          <div className="lg:col-span-3 flex lg:flex-col gap-1 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex-shrink-0 group flex items-center justify-between p-5 transition-all duration-300 ${
                  activeTab === s.id 
                    ? 'bg-white shadow-sm border-l-2 lg:border-l-2 border-[#8C7355]' 
                    : 'hover:bg-gray-100 border-l-2 border-transparent'
                }`}
              >
                <div className="text-left">
                  <span className={`block text-xs tracking-widest mb-1 font-bold ${activeTab === s.id ? 'text-[#8C7355]' : 'text-gray-400'}`}>
                    {s.subtitle}
                  </span>
                  <span className={`text-sm sm:text-base font-bold whitespace-nowrap ${activeTab === s.id ? 'text-[#1A1A1A]' : 'text-gray-600'}`}>
                    {s.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Service Detail Display */}
          <div className="lg:col-span-9 bg-white p-8 sm:p-12 shadow-sm min-h-[520px] fade-in relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
              <div className="space-y-8">
                <div>
                  <h4 className="text-3xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{activeService.title}</h4>
                  <p className="text-base text-[#666] leading-relaxed font-light">{activeService.description}</p>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs tracking-[0.2em] font-bold text-[#8C7355] uppercase">服务流程 / STANDARD WORKFLOW</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {activeService.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="text-sm text-[#8C7355] font-bold pt-0.5">0{idx + 1}</span>
                        <span className="text-sm text-[#1A1A1A] font-medium leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="px-10 py-3 bg-[#1A1A1A] text-white text-xs tracking-[0.3em] font-bold hover:bg-[#8C7355] transition-all uppercase"
                  >
                    联系我们
                  </button>
                </div>
              </div>

              {/* Fixed Aspect Ratio Container to unify image sizes */}
              <div className="relative group overflow-hidden bg-[#F1F1F1] aspect-[4/5] w-full">
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </div>
            {/* Watermark Logo */}
            <div className="absolute bottom-[-20%] right-[-5%] text-[120px] font-bold text-gray-50/50 pointer-events-none select-none uppercase tracking-tighter opacity-10">
              FUHUNG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
