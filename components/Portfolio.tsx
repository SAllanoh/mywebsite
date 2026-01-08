import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Emerge for Purpose',
    url: 'https://emergeforpurpose.org',
    displayUrl: 'emergeforpurpose.org',
    description: 'A platform dedicated to purposeful growth and social impact initiatives.',
  },
  {
    title: 'Engineering Safety',
    url: 'https://engineeringsafety.co.ke',
    displayUrl: 'engineeringsafety.co.ke',
    description: 'Expert safety consulting and engineering solutions for industrial compliance.',
  },
  {
    title: 'Ability Innovations',
    url: 'https://abilityinnovations.co.ke',
    displayUrl: 'abilityinnovations.co.ke',
    description: 'Driving inclusivity and innovative accessibility solutions in the tech space.',
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-400 tracking-wide uppercase">Our Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Recent Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Explore some of the digital ecosystems we've built for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-brand-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-brand-500/10 rounded-lg text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <Globe size={24} />
                  </div>
                  <ExternalLink size={20} className="text-dark-600 group-hover:text-brand-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="inline-flex items-center text-brand-400 font-medium text-sm border-b border-transparent group-hover:border-brand-500 transition-all">
                  {project.displayUrl}
                </div>
              </div>
              
              {/* Animated hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};