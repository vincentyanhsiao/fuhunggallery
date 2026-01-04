
import React from 'react';

const AboutPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-32 pb-24 px-6 fade-in">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Header */}
        <header className="space-y-6">
          <button 
            onClick={onBack}
            className="text-xs tracking-[0.3em] font-bold text-[#8C7355] flex items-center gap-2 hover:gap-4 transition-all uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            返回首页
          </button>
          <div className="grid md:grid-cols-2 gap-8 items-end border-b border-gray-200 pb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A]">关于复泓<br />ABOUT US</h1>
            <p className="text-sm tracking-[0.2em] text-[#8C7355] font-bold uppercase pb-2">传递艺术价值 · 链接收藏生态</p>
          </div>
        </header>

        {/* Philosophy Section */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-xs tracking-[0.5em] text-gray-400 font-bold uppercase">Our Philosophy</h2>
            <h3 className="text-3xl font-bold leading-tight">深耕优质艺术资源<br />搭建艺术与收藏的桥梁</h3>
            <p className="text-[#666] leading-relaxed font-light">
              复泓画廊成立于艺术市场深度变革之际，我们深知收藏不仅是对物质的占有，更是对人类文明精神碎片的传承。我们的核心理念在于通过严谨的学术梳理，挖掘具有长期生命力的艺术价值，并将其精准对接至匹配的收藏体系。
            </p>
          </div>
          <div className="md:col-span-7 aspect-[16/10] bg-gray-200 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2038&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
              alt="Art valuation scene"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white p-12 md:p-20 shadow-sm space-y-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-8 relative z-10">
            <h2 className="text-xs tracking-[0.5em] text-[#8C7355] font-bold uppercase">Vision & Mission</h2>
            <div className="space-y-6 text-xl font-light text-[#1A1A1A] leading-relaxed">
              <p>“复”——代表着对经典价值的复归与重新审视；</p>
              <p>“泓”——寓意着如深水般厚重的文化沉淀与广阔的流通生态。</p>
            </div>
            <p className="text-[#666] leading-relaxed font-light">
              我们的目标是超越传统画廊的买卖中介角色，演化为艺术资产的价值管理专家。通过建立透明、专业、学术导向的交易环境，为全球藏家提供极具公信力的顾问支持。
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-12 pt-12 border-t border-gray-100 relative z-10">
            <div>
              <p className="text-4xl font-bold mb-2">150+</p>
              <p className="text-xs tracking-widest text-gray-400 font-bold uppercase">合作当代艺术家</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">20k+</p>
              <p className="text-xs tracking-widest text-gray-400 font-bold uppercase">全球机构及个人藏家</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-xs tracking-widest text-gray-400 font-bold uppercase">年度精品策划展览</p>
            </div>
          </div>
        </section>

        {/* Academic Empowerment Section (New) */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square bg-white shadow-inner p-8 flex items-center justify-center relative">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-90" 
              alt="Academic Library"
            />
            <div className="absolute inset-0 border-[20px] border-[#F9F8F6]"></div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-xs tracking-[0.5em] text-[#8C7355] font-bold uppercase">Academic Empowerment</h2>
            <h3 className="text-3xl font-bold leading-tight">学术赋能与价值发现</h3>
            <div className="space-y-6 text-[#666] font-light leading-relaxed">
              <p>
                复泓建立了一套严苛的藏品准入与学术评估体系。我们坚信，每一件伟大的艺术品都应具备清晰的学术脉络。通过与国内外顶尖艺术史学家、策展人深度协作，我们为代理作品建立多维度的学术档案。
              </p>
              <p>
                这种学术驱动的模式，使我们能够先于市场发现价值洼地，不仅为艺术家提供长线的职业规划，更确保藏家的每一笔投入都建立在深厚的文化价值基础之上。
              </p>
            </div>
            <ul className="space-y-4 pt-4 border-t border-gray-200">
              {['藏品来源溯源研究', '艺术家学术个案梳理', '艺术市场趋势前瞻报告'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]">
                  <span className="w-1.5 h-1.5 bg-[#8C7355] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Global Strategic Ecosystem Section (New) */}
        <section className="bg-[#1A1A1A] text-white p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Strategic background"
            />
          </div>
          
          <div className="max-w-3xl space-y-12 relative z-10">
            <div className="space-y-4">
              <h2 className="text-xs tracking-[0.5em] text-[#8C7355] font-bold uppercase">Global Strategic Ecosystem</h2>
              <h3 className="text-4xl font-bold tracking-tight">全球艺术战略生态</h3>
            </div>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              复泓的版图超越物理空间。我们通过与全球顶级拍卖行、私人博物馆及艺术基金会建立战略伙伴关系，构建了一个覆盖一级市场与二级市场的全球化流通生态链。
            </p>

            <div className="grid sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h4 className="text-[#8C7355] font-bold tracking-widest text-xs uppercase">机构协作 / Institutional</h4>
                <p className="text-sm font-light text-gray-300">深度参与全球重要艺博会及双年展，为代理艺术家争取最高级别的学术展示平台。</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#8C7355] font-bold tracking-widest text-xs uppercase">资本对接 / Financial</h4>
                <p className="text-sm font-light text-gray-300">为家族办公室及企业提供定制化艺术基金配置建议，实现艺术资产的风险隔离与稳定增值。</p>
              </div>
            </div>

            <button 
              onClick={() => onBack()}
              className="mt-8 px-12 py-4 border border-white/20 hover:border-[#8C7355] hover:text-[#8C7355] transition-all text-xs tracking-[0.4em] font-bold uppercase"
            >
              了解更多合作机遇
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
