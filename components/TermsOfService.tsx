
import React from 'react';

const TermsOfService: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 fade-in">
      <div className="max-w-3xl mx-auto space-y-16">
        <header className="space-y-4 border-b border-gray-100 pb-12">
          <button 
            onClick={onBack}
            className="text-xs tracking-[0.3em] font-bold text-[#8C7355] flex items-center gap-2 hover:gap-4 transition-all uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            返回画廊首页
          </button>
          <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A]">服务条款</h1>
          <p className="text-xs tracking-[0.2em] text-gray-400 font-bold uppercase">FUHUNG GALLERY TERMS OF SERVICE</p>
        </header>

        <section className="prose prose-sm max-w-none text-[#666] leading-relaxed font-light space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">1. 协议确认与接受</h2>
            <p>本服务条款（下称“本协议”）是您与复泓画廊之间关于访问、浏览及使用本官方网站服务的法律契约。访问本站或使用任何相关服务，即视为您无条件接受本协议之全部条款。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">2. 艺术品信息免责声明（重要）</h2>
            <p>本网站所列之艺术品影像、尺寸、年代、背景描述及学术评论仅供参考，不构成任何形式的要约、保证或承诺。鉴于艺术品的唯一性与特殊性：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>状况风险：</strong>网站图片可能因光线或显示设备差异与实物存在色差。作品物理状况应以本画廊出具的官方《状况报告》（Condition Report）及实物预展为准。</li>
              <li><strong>库存动态：</strong>所有作品的“收藏状态”均处于动态变更中。我们不保证特定作品在您发起咨询时仍处于待售或可获取状态。</li>
              <li><strong>学术意见：</strong>网站发表的艺术分析属于学术性意见，不应作为购藏的唯一决策依据。</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">3. 知识产权与艺术家权利</h2>
            <p>本网站的所有原创内容（含文字、视觉设计、Logo）均属于复泓画廊所有。本站展示的艺术品著作权归属相关艺术家或其合法继受人。未经书面许可，严禁任何形式的截屏商业传播、深度链接（Deep Linking）或利用 AI 模型进行图像训练。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">4. 私人洽购与第三方服务链接</h2>
            <p>本站提供的“私人洽购”等咨询服务仅为初步意向沟通，正式交易将受限于双方签署的线下《艺术品销售协议》。网站中包含的第三方链接（如“艺术品交易指数”）由第三方独立运营，复泓不对该等外部内容的准确性、合法性承担责任。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">5. 用户行为规范</h2>
            <p>您在使用在线咨询、预约或数据提交功能时，须确保信息的真实性。禁止利用本站进行洗钱、敲诈勒索或其他损害艺术市场秩序的行为。复泓保留对违规用户中断服务并追究法律责任的权利。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">6. 争议管辖</h2>
            <p>本协议的签订地为上海市黄浦区。因本协议或使用本网站产生的任何纠纷，各方应友好协商；协商不成时，应提交至上海仲裁委员会按其届时有效的仲裁规则进行仲裁。仲裁裁决是终局的，对双方均有约束力。</p>
          </div>

          <div className="pt-12 border-t border-gray-100 italic text-xs text-gray-400">
            最后修订日期：2025年12月
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
