
import React from 'react';

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A]">隐私政策</h1>
          <p className="text-xs tracking-[0.2em] text-gray-400 font-bold uppercase">FUHUNG GALLERY PRIVACY POLICY</p>
        </header>

        <section className="prose prose-sm max-w-none text-[#666] leading-relaxed font-light space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">1. 序言与合规声明</h2>
            <p>复泓画廊（以下简称“本画廊”或“我们”）高度重视藏家及用户的个人隐私保护。本政策根据《中华人民共和国个人信息保护法》、《中华人民共和国数据安全法》及相关法律法规制定，旨在向您说明我们如何处理您的个人信息。访问本网站即表示您确认已阅读并理解本政策。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">2. 信息收集之合法性与范围</h2>
            <p>我们在提供艺术顾问、私人洽购、委托销售等服务过程中，遵循“最小必要”原则收集以下信息：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>身份识别信息：</strong>姓名、尊称、联系电话、电子邮箱、微信号，用于身份验证及专家一对一联络。</li>
              <li><strong>收藏偏好信息：</strong>感兴趣的艺术家、流派、预算区间及历史收藏记录，用于为您精准匹配私人洽购方案。</li>
              <li><strong>自动采集信息：</strong>IP地址、浏览器类型、访问时长及页面交互记录，用于优化网站性能及防止恶意攻击。</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">3. 信息的处理方式与特定用途</h2>
            <p>我们收集的信息将严格用于以下经授权的用途：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>服务履约：</strong>处理您的展览预约、藏品收购申请及拍卖协商委托；</li>
              <li><strong>个性化顾问：</strong>根据您的收藏偏好，由专属顾问发送具有针对性的艺术资产配置建议；</li>
              <li><strong>合规审查：</strong>在进行高价值艺术品交易前，根据反洗钱（AML）及“了解您的客户”（KYC）原则进行必要合规核查。</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">4. 敏感个人信息保护</h2>
            <p>针对涉及收藏记录、大额交易意向等敏感个人信息，我们采取加密存储与权限隔离措施。除法律强制要求或为您办理跨境物流/保险所必需外，我们不会对外公开披露您的敏感个人信息。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">5. 您的权利保障</h2>
            <p>根据相关法律，您对自己的个人信息享有查阅、复制、更正、删除、撤回同意以及要求解释本政策的权利。您可以通过 service@fuhung.cn 行使上述权利，我们将在十五个工作日内予以答复并处理。</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">6. 政策变更与适用</h2>
            <p>本政策可能随法律环境或业务调整而更新。任何重大变更将通过本页面显著位置公示。本政策受中华人民共和国法律管辖。</p>
          </div>

          <div className="pt-12 border-t border-gray-100 italic text-xs text-gray-400">
            最后修订日期：2025年12月
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
