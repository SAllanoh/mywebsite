import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { AutomationPlanner } from './components/AutomationPlanner';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const raw = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    return raw || '/';
  });

  useEffect(() => {
    const syncRoute = () => {
      const raw = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      setCurrentPath(raw || '/');
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('pushstate', syncRoute);

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('pushstate', syncRoute);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isPrivacyPage = currentPath === '/privacy-policy';

  const scrollToSection = (id: string) => {
    if (isPrivacyPage) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <Header 
        onNavigateHome={() => navigate('/')} 
        isPrivacyPage={isPrivacyPage}
      />

      {!isPrivacyPage ? (
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <AutomationPlanner />
          <About />
          <Contact />
        </main>
      ) : (
        <PrivacyPolicy onBack={() => navigate('/')} />
      )}

      {/* Elevated Studio Footer */}
      <footer className="py-16 bg-canvas-deep border-t border-canvas-border text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-canvas-subtle">
            
            {/* Brand column (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <button 
                onClick={() => navigate('/')}
                className="font-display font-extrabold text-2xl text-white tracking-tight text-left cursor-pointer focus:outline-none flex items-center gap-1.5"
              >
                <span>MediaDev</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-glow" aria-hidden="true" />
              </button>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Bespoke web applications, high-converting platforms, and self-driving business automations engineered for operational velocity.
              </p>
              <div className="font-mono text-xs text-slate-500">
                Innovators Apartments, Nyeri, Kenya
              </div>
            </div>

            {/* Quick Links (4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <div className="font-mono uppercase tracking-wider text-slate-300 text-xs font-semibold">
                Navigation
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-400 text-xs">
                <button 
                  onClick={() => scrollToSection('capabilities')} 
                  className="text-left hover:text-white transition-colors cursor-pointer py-1"
                >
                  Capabilities
                </button>
                <button 
                  onClick={() => scrollToSection('work')} 
                  className="text-left hover:text-white transition-colors cursor-pointer py-1"
                >
                  Selected Work
                </button>
                <button 
                  onClick={() => scrollToSection('automations')} 
                  className="text-left hover:text-white transition-colors cursor-pointer py-1"
                >
                  Automation Studio
                </button>
                <button 
                  onClick={() => scrollToSection('studio')} 
                  className="text-left hover:text-white transition-colors cursor-pointer py-1"
                >
                  Studio Standards
                </button>
                <button 
                  onClick={() => scrollToSection('inquiry')} 
                  className="text-left hover:text-white transition-colors cursor-pointer py-1"
                >
                  Project Consultation
                </button>
                <button 
                  onClick={() => navigate('/privacy-policy')} 
                  className="text-left hover:text-accent-glow transition-colors cursor-pointer py-1 font-medium"
                >
                  Privacy Policy
                </button>
              </div>
            </div>

            {/* Live Client Deployments (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-mono uppercase tracking-wider text-slate-300 text-xs font-semibold">
                Client Platforms
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div>
                  <a href="https://florealtors.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-accent-glow inline-flex items-center gap-1 text-slate-400">
                    florealtors.co.ke <ArrowUpRight size={11} />
                  </a>
                </div>
                <div>
                  <a href="https://engineeringsafety.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-accent-glow inline-flex items-center gap-1 text-slate-400">
                    engineeringsafety.co.ke <ArrowUpRight size={11} />
                  </a>
                </div>
                <div>
                  <a href="https://abilityinnovations.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-accent-glow inline-flex items-center gap-1 text-slate-400">
                    abilityinnovations.co.ke <ArrowUpRight size={11} />
                  </a>
                </div>
                <div>
                  <a href="https://emergeforpurpose.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent-glow inline-flex items-center gap-1 text-slate-400">
                    emergeforpurpose.org <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
            <div>
              &copy; {new Date().getFullYear()} MediaDev Digital Engineering. All rights reserved.
            </div>

            <div className="flex items-center gap-6 font-mono text-[11px]">
              <button 
                onClick={() => navigate('/privacy-policy')} 
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Privacy & Data Policy
              </button>
              <span>·</span>
              <span className="text-slate-400">Direct Engineering: allanshukoki21@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
