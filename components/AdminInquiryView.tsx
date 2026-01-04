
import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';

const AdminInquiryView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('fuhung_inquiries');
    if (saved) {
      setInquiries(JSON.parse(saved));
    }
  }, []);

  const clearData = () => {
    if (window.confirm('确定要清除所有演示数据吗？')) {
      localStorage.removeItem('fuhung_inquiries');
      setInquiries([]);
    }
  };

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-32 pb-24 px-6 fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="flex justify-between items-end border-b border-gray-200 pb-8">
          <div className="space-y-4">
            <button 
              onClick={onBack}
              className="text-xs tracking-[0.3em] font-bold text-[#8C7355] flex items-center gap-2 hover:gap-4 transition-all uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              返回首页
            </button>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">咨询管理后台 (演示)</h1>
            <p className="text-xs tracking-[0.2em] text-gray-400 font-bold uppercase">Inquiry Management Dashboard</p>
          </div>
          <button 
            onClick={clearData}
            className="text-[10px] tracking-widest text-red-400 border border-red-400/30 px-4 py-2 hover:bg-red-400 hover:text-white transition-all uppercase font-bold"
          >
            清除数据
          </button>
        </header>

        {inquiries.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-gray-400 tracking-widest text-sm">目前暂无网民提交咨询信息</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((item) => (
              <div key={item.id} className="bg-white p-8 shadow-sm border-l-4 border-[#8C7355] flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{item.name}</h3>
                    <span className="text-[10px] bg-gray-100 px-2 py-0.5 text-gray-400 font-bold uppercase tracking-wider">{item.timestamp}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">联系方式</p>
                      <p className="text-sm text-[#666]">{item.contact}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">需求意向</p>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map(s => (
                          <span key={s} className="text-[10px] border border-gray-200 px-2 py-0.5 rounded-full text-gray-500 font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-[10px] font-bold tracking-widest text-[#8C7355] border border-[#8C7355] px-6 py-3 hover:bg-[#8C7355] hover:text-white transition-all uppercase">
                    标记已跟进
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInquiryView;
