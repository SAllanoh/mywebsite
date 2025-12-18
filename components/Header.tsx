import React from 'react';
import { Cpu } from 'lucide-react';

export const Header: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Logo - Centered for a clean, minimalist look */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Cpu size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white uppercase tracking-widest">MediaDev</span>
          </div>
        </div>
      </div>
    </header>
  );
};