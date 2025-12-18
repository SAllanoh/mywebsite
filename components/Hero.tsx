import React from 'react';
import { Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Zap size={14} className="mr-2" />
          <span>Transforming Businesses Digitally</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Web Design & Automations That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-blue-500">
            Drive Growth
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          We build stunning websites and intelligent automation workflows that handle your operations, marketing, and support, so you can focus on what matters.
        </p>
      </div>
    </section>
  );
};