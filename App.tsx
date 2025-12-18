import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AutomationPlanner } from './components/AutomationPlanner';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AutomationPlanner />
        <Contact />
      </main>
      <footer className="py-12 text-center text-dark-700 text-sm border-t border-dark-800 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 text-gray-500">Transforming local businesses into digital powerhouses.</p>
          <p className="font-medium">&copy; {new Date().getFullYear()} MediaDev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;