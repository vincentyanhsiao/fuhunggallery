
import React from 'react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          {/* Left Side: WeChat QR Code */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="bg-white p-2 rounded-sm shadow-2xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fuhung.cn" 
                alt="FUHUNG WeChat QR Code" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              />
            </div>
            <div className="text-center sm:text-left space-y-3">
              <h2 className="text-xl font-bold tracking-[0.1em] uppercase text-white">FUHUNG GALLERY</h2>
              <p className="text-gray-400 text-sm tracking-widest font-light">
                关注官方微信公众平台<br />
                获取最新展览动态与藏品资讯
              </p>
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-[#8C7355]">联系方式 / CONTACT US</h3>
              <div className="text-sm sm:text-base font-light tracking-wider space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-gray-500 text-xs font-bold pt-1 uppercase">ADD.</span>
                  <p className="max-w-xs">上海市闵行区沪青平公路277号</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-500 text-xs font-bold pt-1 uppercase">MAIL.</span>
                  <p>service@fuhung.cn</p>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                  <span className="text-gray-500 text-xs font-bold pt-1 uppercase">OPEN.</span>
                  <p className="text-sm text-gray-400">周一至周五 10:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-gray-500 tracking-[0.2em] font-medium uppercase">
              © 2026 FUHUNG GALLERY.
            </p>
            <button 
              onClick={() => onNavigate('admin')}
              className="text-[10px] text-gray-700 hover:text-[#8C7355] transition-colors uppercase font-bold tracking-widest border border-gray-800 px-2 py-0.5"
            >
              [管理入口]
            </button>
          </div>
          <div className="flex gap-8 text-[10px] text-gray-500 tracking-[0.2em] uppercase font-medium">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">隐私政策</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">服务条款</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
