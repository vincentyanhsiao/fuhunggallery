
import React from 'react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Placeholder for video */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop" 
          alt="Gallery Space" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="fade-in">
          <p className="text-[#F9F8F6] tracking-[0.6em] text-xs sm:text-sm mb-6 font-light">
            传递艺术价值 · 链接收藏生态
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold mb-10 tracking-[0.2em] uppercase">
            FUHUNG
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate('exhibitions')}
              className="px-10 py-3 bg-white text-[#1A1A1A] text-xs tracking-[0.3em] font-semibold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300"
            >
              艺术探索
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="px-10 py-3 border border-white text-white text-xs tracking-[0.3em] font-semibold hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
            >
              私人洽购
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce"></div>
        </div>
        <span className="text-white/50 text-[10px] tracking-[0.3em] font-light uppercase">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
