
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: SectionId; label: string; en: string }[] = [
    { id: 'about', label: '关于复泓', en: 'ABOUT' },
    { id: 'exhibitions', label: '艺术展览', en: 'EXHIBITIONS' },
    { id: 'services', label: '专业服务', en: 'SERVICES' },
    { id: 'artists', label: '艺术生态', en: 'ECOSYSTEM' },
    { id: 'contact', label: '联系我们', en: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Reduced tracking from 0.3em to 0.1em */}
        <div 
          className="cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <span className="text-xl sm:text-2xl font-bold tracking-[0.1em] text-[#1A1A1A] uppercase">FUHUNG GALLERY</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs sm:text-[13px] tracking-[0.2em] font-bold transition-all duration-300 relative group ${
                activeSection === item.id ? 'text-[#8C7355]' : 'text-[#1A1A1A] hover:text-[#8C7355]'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#8C7355] transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          {/* Updated CTA Button to Link */}
          <a 
            href="https://index.fuhung.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2.5 bg-[#1A1A1A] text-white text-xs tracking-[0.2em] font-bold hover:bg-[#8C7355] transition-all inline-block text-center"
          >
            艺术品交易指数
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1A1A1A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`w-full h-[2px] bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-full h-[2px] bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[2px] bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6 text-center">
          <div className="mb-8">
            <span className="text-3xl font-bold tracking-[0.1em] text-[#1A1A1A]">FUHUNG GALLERY</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold text-[#1A1A1A] tracking-widest hover:text-[#8C7355] transition-colors"
            >
              {item.label}
              <div className="text-xs tracking-[0.3em] text-gray-400 mt-2">{item.en}</div>
            </button>
          ))}
          <a 
            href="https://index.fuhung.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xl font-bold text-[#8C7355] tracking-widest"
          >
            艺术品交易指数
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-12 py-4 bg-[#1A1A1A] text-white text-sm tracking-widest font-bold"
          >
            关闭菜单
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
