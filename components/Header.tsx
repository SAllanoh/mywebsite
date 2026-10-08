import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
  isPrivacyPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, isPrivacyPage = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    if (isPrivacyPage && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateHome) {
      onNavigateHome();
    }
  };

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-canvas-deep/90 backdrop-blur-md border-b border-canvas-border shadow-2xl py-3.5' 
          : 'bg-transparent border-b border-canvas-subtle py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark (Single clean text element, no pill clutter) */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-accent-glow transition-colors">
              MediaDev
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" aria-hidden="true" />
          </button>

          {/* Zone 2: Navigation Links (Clean unboxed text links) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button 
              onClick={() => handleNavClick('capabilities')} 
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Capabilities
            </button>
            <button 
              onClick={() => handleNavClick('work')} 
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Selected Work
            </button>
            <button 
              onClick={() => handleNavClick('automations')} 
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Automation Studio
            </button>
            <button 
              onClick={() => handleNavClick('studio')} 
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Studio
            </button>
            <button 
              onClick={() => handleNavClick('inquiry')} 
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('inquiry')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-accent hover:bg-accent-light rounded-lg shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle (Within 15% sticky cap) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('inquiry')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-accent rounded-lg"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-canvas-card border border-canvas-border"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-deep/98 border-b border-canvas-border px-6 py-6 space-y-4 backdrop-blur-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('capabilities')}
              className="text-left py-2 hover:text-white border-b border-canvas-subtle"
            >
              Capabilities & Services
            </button>
            <button 
              onClick={() => handleNavClick('work')}
              className="text-left py-2 hover:text-white border-b border-canvas-subtle"
            >
              Selected Client Work
            </button>
            <button 
              onClick={() => handleNavClick('automations')}
              className="text-left py-2 hover:text-white border-b border-canvas-subtle"
            >
              Automation Studio & ROI
            </button>
            <button 
              onClick={() => handleNavClick('studio')}
              className="text-left py-2 hover:text-white border-b border-canvas-subtle"
            >
              About MediaDev
            </button>
            <button 
              onClick={() => handleNavClick('inquiry')}
              className="text-left py-2 text-accent-glow font-semibold"
            >
              Start Project Inquiry →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
