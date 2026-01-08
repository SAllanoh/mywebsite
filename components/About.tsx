import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-base font-semibold text-brand-400 tracking-wide uppercase mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Bridging the Gap Between <br />
              <span className="text-brand-500">Design & Automation</span>
            </h3>
            
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                At MediaDev, we are more than just developers; we are your strategic partners in the digital age. We specialize in crafting robust digital ecosystems that empower businesses to scale.
              </p>
              <p>
                Our mission is simple: to eliminate inefficiency and enhance digital presence. Whether it's through a stunning custom website or a complex background automation that saves you hours of manual work, we are dedicated to driving your growth through technology.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-dark-800 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                <p className="text-sm text-gray-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                <p className="text-sm text-gray-500 font-medium">Support System</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                <p className="text-sm text-gray-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-brand-900/30 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Precision-Driven</h4>
              <p className="text-gray-400">
                We don't just guess; we analyze. Every design choice and automation step is calculated to maximize impact and efficiency for your specific business model.
              </p>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovative Solutions</h4>
              <p className="text-gray-400">
                We stay ahead of the curve, utilizing the latest frameworks and AI tools like n8n and Gemini to ensure your business remains competitive.
              </p>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Client-Centric</h4>
              <p className="text-gray-400">
                Your vision is our blueprint. We work closely with you from concept to deployment, ensuring the final product perfectly aligns with your goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};