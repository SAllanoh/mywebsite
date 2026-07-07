import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [path, setPath] = React.useState<string>(() => {
    const cleanPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    return cleanPath || '/';
  });

  React.useEffect(() => {
    const handleLocationChange = () => {
      const cleanPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      setPath(cleanPath || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    // Listen to custom pushstate triggers
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isPrivacyPage = path === '/privacy-policy';

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500 selection:text-white">
      <Header onLogoClick={() => navigate('/')} />
      {!isPrivacyPage ? (
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
      ) : (
        <PrivacyPolicy onBack={() => navigate('/')} />
      )}
      <footer className="py-12 text-center text-dark-700 text-sm border-t border-dark-800 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 text-gray-500">Transforming local businesses into digital powerhouses.</p>
          <p className="font-medium mb-4">&copy; {new Date().getFullYear()} MediaDev. All rights reserved.</p>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
            <button 
              onClick={() => navigate('/')} 
              className="hover:text-brand-400 transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <span className="text-dark-800">|</span>
            <button 
              onClick={() => navigate('/privacy-policy')} 
              className="hover:text-brand-400 transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;