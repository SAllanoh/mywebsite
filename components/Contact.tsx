import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Get in Touch with MediaDev
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your online presence or automate your workflows? Reach out through any of the channels below to discuss how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-dark-800 p-8 rounded-3xl border border-dark-700 shadow-xl flex flex-col items-center text-center group hover:border-brand-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-brand-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-brand-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4">Our team is available to answer your technical queries via email.</p>
            <span className="text-brand-400 font-medium text-lg">admin@mediadev.co.ke</span>
          </div>

          {/* Phone Card */}
          <div className="bg-dark-800 p-8 rounded-3xl border border-dark-700 shadow-xl flex flex-col items-center text-center group hover:border-brand-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4">Reach out directly for urgent consultations or support.</p>
            <span className="text-blue-400 font-medium text-lg">0740845203</span>
          </div>

          {/* Location Card */}
          <div className="bg-dark-800 p-8 rounded-3xl border border-dark-700 shadow-xl flex flex-col items-center text-center group hover:border-brand-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400 mb-4">Find us at our main headquarters for in-person meetings.</p>
            <span className="text-purple-400 font-medium text-lg">Innovators Apartments, Nyeri</span>
          </div>
        </div>
      </div>
    </section>
  );
};