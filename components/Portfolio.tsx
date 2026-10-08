import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Check, X, Shield, Building, HeartHandshake, Eye } from 'lucide-react';
import { CaseStudy } from '../types';

const clientProjects: CaseStudy[] = [
  {
    id: 'flo-realtors',
    title: 'Flo Realtors',
    client: 'Flo Realtors Ltd.',
    domain: 'Commercial Real Estate Discovery',
    url: 'https://florealtors.co.ke',
    displayUrl: 'florealtors.co.ke',
    summary: 'A bespoke, conversion-optimized digital real estate portal facilitating property discovery, verified listings, dynamic neighborhood search, and direct WhatsApp tour coordination.',
    role: 'Full-Stack Web Engineering, UI/UX Architecture & WhatsApp Inquiry Routing',
    impactMetrics: [
      { label: 'Lead Capture Velocity', value: '+180%' },
      { label: 'Mobile Page Load', value: '1.2s' },
      { label: 'Agent Routing Delay', value: '<5s' }
    ],
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Automated Lead Routing'],
    keyFeatures: [
      'Verified property catalog with multi-attribute filtering (location, bedrooms, price tier)',
      'Sub-second image optimization & responsive gallery carousels',
      'One-tap WhatsApp tour scheduler linking potential buyers directly to assigned agents',
      'SEO-structured metadata for high local discovery in Nairobi and surrounding counties'
    ],
    category: 'Commercial Real Estate'
  },
  {
    id: 'engineering-safety',
    title: 'Engineering Safety',
    client: 'Engineering Safety Consultants',
    domain: 'Industrial Compliance & Technical Audits',
    url: 'https://engineeringsafety.co.ke',
    displayUrl: 'engineeringsafety.co.ke',
    summary: 'A high-authority corporate portal built for industrial engineering safety, statutory DOSHS/OSHA audit compliance, hazard identification, and corporate consultation.',
    role: 'B2B Web Architecture, Technical Copy Structuring & Consultation Funnel',
    impactMetrics: [
      { label: 'Corporate Inquiries', value: '+140%' },
      { label: 'Compliance Audit Requests', value: '3x Growth' },
      { label: 'Site Uptime', value: '99.98%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Form Validation Pipeline'],
    keyFeatures: [
      'Comprehensive statutory compliance service matrix for manufacturing and construction',
      'Low-bandwidth optimization enabling rapid field access on industrial sites',
      'Direct audit consultation intake engine with automated email dispatch',
      'High-contrast industrial typography reflecting regulatory rigor and engineering integrity'
    ],
    category: 'Industrial Compliance'
  },
  {
    id: 'ability-innovations',
    title: 'Ability Innovations',
    client: 'Ability Innovations Initiative',
    domain: 'Accessibility & Assistive Tech',
    url: 'https://abilityinnovations.co.ke',
    displayUrl: 'abilityinnovations.co.ke',
    summary: 'A progressive platform championing digital accessibility, assistive technology innovation, and inclusive tech education for individuals with disabilities.',
    role: 'Accessible UI/UX Design System, Front-End Development & Community Showcase',
    impactMetrics: [
      { label: 'WCAG Compliance Score', value: 'AAA Grade' },
      { label: 'Screen Reader Parity', value: '100%' },
      { label: 'Community Engagement', value: '+220%' }
    ],
    techStack: ['React', 'Semantic HTML5', 'A11y Standards', 'Tailwind'],
    keyFeatures: [
      'Strict adherence to WCAG 2.2 accessibility standards with high-contrast text hierarchies',
      'Full keyboard-navigable interactive architecture and screen-reader semantic landmarks',
      'Showcase of community assistive hardware and digital literacy initiatives',
      'Zero-barrier inquiry and partnership contribution funnels'
    ],
    category: 'Accessibility & Social Tech'
  },
  {
    id: 'emerge-for-purpose',
    title: 'Emerge for Purpose',
    client: 'Emerge for Purpose International',
    domain: 'Social Impact & Purpose Ecosystem',
    url: 'https://emergeforpurpose.org',
    displayUrl: 'emergeforpurpose.org',
    summary: 'An editorial-grade digital home for purposeful community growth, social impact initiatives, youth mentorship, and sustainable grassroots development.',
    role: 'Editorial Brand Experience, Web Architecture & Stakeholder Engagement',
    impactMetrics: [
      { label: 'Global Visitor Reach', value: '12+ Countries' },
      { label: 'Impact Story Reads', value: '45K+' },
      { label: 'Mobile Bounce Rate', value: '<28%' }
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Content Architecture'],
    keyFeatures: [
      'Editorial narrative layout pacing readers through grassroots case stories',
      'Interactive campaign milestones and community impact trackers',
      'Responsive donor and volunteer onboarding workflows',
      'Fast CDN distribution with global asset caching for international audiences'
    ],
    category: 'Purpose & Global Impact'
  }
];

export const Portfolio: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-canvas border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-glow mb-3">
              <span>Selected Work</span>
              <span aria-hidden="true">·</span>
              <span>Production Deployments</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
              Proof of engineering impact.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore digital platforms and web applications engineered by MediaDev, currently serving businesses in Kenya and beyond.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 self-start md:self-end">
            <span>4 / 4 Live Systems Inspected</span>
          </div>
        </div>

        {/* 2x2 Rich Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-canvas-card border border-canvas-border hover:border-slate-600/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Card Top: Browser Viewport Mockup */}
              <div className="p-6 sm:p-8 bg-canvas-deep/80 border-b border-canvas-border">
                
                {/* Mockup Top Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-canvas-subtle">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="font-mono text-xs text-slate-400 ml-2">
                      https://{project.displayUrl}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-accent-glow hover:text-white bg-blue-950/40 hover:bg-blue-900/60 rounded-md border border-blue-800/40 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Styled Domain UI Visualization */}
                <div className="p-5 rounded-2xl bg-canvas-surface border border-canvas-border min-h-[170px] flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h4 className="font-display text-2xl font-bold text-white mt-1 group-hover:text-accent-glow transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-canvas-deep border border-canvas-border flex items-center justify-center text-slate-300">
                      {project.id === 'flo-realtors' && <Building size={20} className="text-cyan-400" />}
                      {project.id === 'engineering-safety' && <Shield size={20} className="text-amber-400" />}
                      {project.id === 'ability-innovations' && <Eye size={20} className="text-emerald-400" />}
                      {project.id === 'emerge-for-purpose' && <HeartHandshake size={20} className="text-blue-400" />}
                    </div>
                  </div>

                  {/* Quantitative Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-canvas-subtle">
                    {project.impactMetrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="font-mono text-lg font-bold text-white tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Bottom: Editorial Information & Actions */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-canvas-deep border border-canvas-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-canvas-subtle">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inspect Architectural Scope</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent-glow hover:underline"
                  >
                    {project.displayUrl} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architectural Scope Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas-deep/80 backdrop-blur-md animate-fade-in">
          <div className="max-w-2xl w-full bg-canvas-card border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-canvas-deep text-slate-400 hover:text-white border border-canvas-border transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <span className="font-mono text-xs text-accent-glow uppercase tracking-wider">
                Case Study Architectural Audit
              </span>
              <h3 className="font-display text-3xl font-bold text-white mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">
                Role: {activeModalProject.role}
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  System Overview
                </h4>
                <p className="leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Features & Modules
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Quantified Impact
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-canvas-deep border border-canvas-border text-center">
                      <div className="font-mono font-bold text-xl text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-canvas-border flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>

              <a
                href={activeModalProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-light rounded-xl transition-colors"
              >
                <span>Launch Live Site</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
