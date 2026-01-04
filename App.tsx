
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExhibitionSection from './components/ExhibitionSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AdminInquiryView from './components/AdminInquiryView';
import AboutPage from './components/AboutPage';
import { SectionId, ViewMode, Inquiry } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [currentView, setCurrentView] = useState<ViewMode>('main');

  // Form states
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNavigate = (section: SectionId) => {
    if (section === 'privacy') {
      setCurrentView('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'terms') {
      setCurrentView('terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'admin') {
      setCurrentView('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'about-page') {
      setCurrentView('about-page');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(section);
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert('请完整填写姓名和联系方式。');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newInquiry: Inquiry = {
      id: Date.now().toString(),
      name: formData.name,
      contact: formData.contact,
      services: selectedServices,
      timestamp: new Date().toLocaleString('zh-CN')
    };

    // Save to localStorage for demo purposes
    const existing = JSON.parse(localStorage.getItem('fuhung_inquiries') || '[]');
    localStorage.setItem('fuhung_inquiries', JSON.stringify([newInquiry, ...existing]));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', contact: '' });
    setSelectedServices([]);

    // Auto reset success message after 5s
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  useEffect(() => {
    if (currentView !== 'main') return;

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'services', 'exhibitions', 'artists', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentView]);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'main' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            
            <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
              <div className="whitespace-nowrap flex gap-20 animate-[scroll_40s_linear_infinite]">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-xs tracking-[0.5em] text-gray-300 font-bold uppercase">
                    Art Representation · Private Sales · Consignment · Acquisition · Collection Planning
                  </span>
                ))}
              </div>
            </section>

            <AboutSection onNavigate={handleNavigate} />
            <ExhibitionSection />
            <ServicesSection onNavigate={handleNavigate} />

            {/* Art Ecosystem Section */}
            <section id="artists" className="py-24 px-6 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-xs tracking-[0.5em] text-[#8C7355] font-bold mb-2 uppercase">ART ECOSYSTEM</h2>
                  <h3 className="text-4xl font-bold tracking-tight">艺术生态</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: '学术研究', type: 'ACADEMIC RESEARCH', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop' },
                    { name: '艺术衍生', type: 'ART DERIVATIVES', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop' },
                    { name: '艺术空间', type: 'ART SPACE', img: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop' },
                    { name: '艺术基金', type: 'ART FUND', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop' }
                  ].map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="aspect-[2/3] overflow-hidden mb-4 bg-gray-50">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <h4 className="text-sm tracking-widest font-bold group-hover:text-[#8C7355] transition-colors uppercase">{item.name}</h4>
                      <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-1 font-bold">{item.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="py-24 px-6 bg-[#F9F8F6]">
              <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">开启您的艺术收藏之旅</h2>
                  <p className="text-base text-[#666] font-light max-w-xl mx-auto leading-relaxed">
                    无论是寻求私人洽购的稀缺精品，还是计划委托销售您的珍贵藏品，复泓专家团队都将为您提供极致专业的顾问服务。
                  </p>
                </div>
                
                {isSubmitted ? (
                  <div className="bg-white p-12 shadow-sm fade-in border border-[#8C7355]/20">
                    <div className="w-16 h-16 bg-[#8C7355] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-[#1A1A1A] mb-2 tracking-tight">咨询已提交</h4>
                    <p className="text-gray-500 font-light tracking-widest text-sm mb-6">复泓专家团队将在24小时内与您取得联系</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] tracking-[0.3em] font-bold text-[#8C7355] uppercase hover:opacity-70 transition-opacity"
                    >
                      再次提交
                    </button>
                  </div>
                ) : (
                  <form className="grid sm:grid-cols-2 gap-6 text-left" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase text-gray-500 font-bold">姓名</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="请输入您的尊称"
                        className="w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:border-[#1A1A1A] transition-colors outline-none font-light" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase text-gray-500 font-bold">联系方式</label>
                      <input 
                        type="text" 
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        placeholder="手机号码或电子邮箱"
                        className="w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:border-[#1A1A1A] transition-colors outline-none font-light" 
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2 pt-4">
                      <label className="text-xs tracking-widest uppercase text-gray-500 font-bold">服务需求</label>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {['私人洽购', '委托销售', '艺术代理', '艺术收购', '拍卖协商', '收藏规划', '观展预约'].map(item => (
                          <label key={item} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              className="hidden" 
                              checked={selectedServices.includes(item)}
                              onChange={() => toggleService(item)}
                            />
                            <div className={`w-5 h-5 border rounded-full flex items-center justify-center transition-all ${selectedServices.includes(item) ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-gray-300 group-hover:border-[#1A1A1A]'}`}>
                              <div className={`w-2.5 h-2.5 bg-white rounded-full transition-opacity ${selectedServices.includes(item) ? 'opacity-100' : 'opacity-0'}`}></div>
                            </div>
                            <span className={`text-sm tracking-widest transition-colors ${selectedServices.includes(item) ? 'text-[#1A1A1A] font-bold' : 'text-[#666] group-hover:text-[#1A1A1A] font-medium'}`}>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2 pt-8">
                      <button 
                        disabled={isSubmitting}
                        className={`w-full py-4 bg-[#1A1A1A] text-white text-xs tracking-[0.4em] uppercase transition-all font-bold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#8C7355]'}`}
                      >
                        {isSubmitting ? '提交中...' : '提交咨询'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>
          </>
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy onBack={() => handleNavigate('home')} />
        ) : currentView === 'terms' ? (
          <TermsOfService onBack={() => handleNavigate('home')} />
        ) : currentView === 'about-page' ? (
          <AboutPage onBack={() => handleNavigate('home')} />
        ) : (
          <AdminInquiryView onBack={() => handleNavigate('home')} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;
