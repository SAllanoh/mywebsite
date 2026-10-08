import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Code2, Cpu, Database, Layers, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const capabilities: ServiceItem[] = [
  {
    id: 'web-engineering',
    code: '01',
    title: 'High-Performance Web Engineering',
    summary: 'We build bespoke, ultra-fast websites and web applications tailored to your business model. No generic WordPress templates or sluggish page builders — strictly hand-crafted, responsive code optimized for conversion and search dominance.',
    deliverables: [
      'Tailored UI/UX design crafted for conversion & brand distinction',
      'Production React / TypeScript frontend with sub-second page loads',
      'Mobile-first responsive architecture tested across all viewports',
      'Technical SEO, OpenGraph cards, structured schema, and analytics',
      'Continuous SSL, domain provisioning, and CDN edge distribution'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    highlightMetric: '<200ms Median Load Time',
    category: 'web'
  },
  {
    id: 'whatsapp-automation',
    code: '02',
    title: 'Conversational WhatsApp & Inbound Bots',
    summary: 'Turn your WhatsApp into a 24/7 automated sales and customer support engine. We engineer intelligent chatbot flows that answer inquiries, qualify leads, send catalog documents, and route warm buyers to human agents.',
    deliverables: [
      'Official Meta WhatsApp Cloud API integration & webhook infrastructure',
      'Automated FAQ handling, dynamic business hours, and instant greeting flows',
      'Interactive button menus, catalog dispatch, and PDF quote delivery',
      'Multi-agent handoff triggers and notification pings to your phone/Slack',
      'Full conversation logging and customer contact storage'
    ],
    stack: ['Meta Cloud API', 'n8n', 'Webhooks', 'REST API', 'Node.js'],
    highlightMetric: '85% First-Contact Auto-Resolution',
    category: 'automation'
  },
  {
    id: 'workflow-pipelines',
    code: '03',
    title: 'Business Process & CRM Automation Pipelines',
    summary: 'Eliminate repetitive manual data entry. We connect your website forms, social ad leads, spreadsheets, and databases into self-driving pipelines that operate without human error.',
    deliverables: [
      'Multi-app workflow orchestration using self-hosted n8n or Make',
      'Automated lead ingestion from Facebook/Instagram Ads into your CRM',
      'Dynamic document generation (PDF invoices, proposal agreements)',
      'Instant SMS and email alerts triggered by business events',
      'Error monitoring, retry fallbacks, and real-time execution logs'
    ],
    stack: ['n8n', 'Zapier', 'Google Cloud', 'PostgreSQL', 'Airtable'],
    highlightMetric: '15+ Hours Saved Weekly',
    category: 'automation'
  },
  {
    id: 'payment-integrations',
    code: '04',
    title: 'East African Payment & Financial Integrations',
    summary: 'Seamless financial checkout pipelines engineered for the Kenyan and regional market. We integrate Safaricom Daraja M-Pesa STK Push alongside international cards to give your customers friction-free payment.',
    deliverables: [
      'Daraja M-Pesa STK Push with instant mobile PIN prompt',
      'Automated payment confirmation, transaction receipt SMS, and ledger reconciliation',
      'Global card processing via Stripe or Flutterwave for international buyers',
      'Cryptographically verified webhook validation to prevent fraud',
      'Customer order status dashboard and instant fulfillment triggers'
    ],
    stack: ['Safaricom Daraja API', 'M-Pesa STK', 'Stripe', 'HMAC Security'],
    highlightMetric: '99.9% Automated Reconciliation',
    category: 'ecosystem'
  },
  {
    id: 'devops-maintenance',
    code: '05',
    title: 'Continuous Systems Maintenance & DevOps',
    summary: 'Reliable engineering guardianship for your digital infrastructure. We monitor uptime, execute security updates, optimize database queries, and provide rapid bug-fix guarantees.',
    deliverables: [
      '24/7 automated uptime, health-check, and latency monitoring',
      'Regular security audits, vulnerability patch deployments, and library updates',
      'Automated cloud backups with zero-data-loss rollback capability',
      'Dedicated engineering priority for urgent feature requests',
      'Clear, predictable monthly service level agreements (SLAs)'
    ],
    stack: ['Cloud Monitoring', 'Docker', 'Vercel / Cloud Run', 'GitHub Actions'],
    highlightMetric: '99.95% Guaranteed Uptime',
    category: 'ecosystem'
  }
];

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('web-engineering');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const scrollToInquiry = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-canvas-deep border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-glow mb-3">
            <span>Capabilities & Deliverables</span>
            <span aria-hidden="true">·</span>
            <span>Production Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
            Engineering capabilities built for operational velocity.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Every solution we deploy is engineered from clean primitives — robust architectures, automated event pipelines, and zero-maintenance resilience.
          </p>
        </div>

        {/* Bento Grid & Asymmetric Numbered Capabilities */}
        <div className="space-y-6">
          {capabilities.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div
                key={cap.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-canvas-card border-slate-600/80 shadow-2xl'
                    : 'bg-canvas-card/40 border-canvas-border hover:border-slate-700 hover:bg-canvas-card/70'
                }`}
              >
                <div 
                  onClick={() => toggleExpand(cap.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-2xl font-bold text-slate-500 tabular-nums select-none pt-0.5">
                      {cap.code}.
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {cap.title}
                        </h3>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                          {cap.highlightMetric}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
                        {cap.summary}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <div className="hidden lg:flex items-center gap-2">
                      {cap.stack.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="text-xs font-mono text-slate-400 px-2 py-0.5 bg-canvas-deep rounded border border-canvas-border">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-canvas-deep border border-canvas-border flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Technical Specs & Inclusions */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-canvas-subtle pt-6 bg-canvas-deep/40">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      
                      {/* Detailed Deliverables List */}
                      <div className="lg:col-span-2 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Core Architectural Deliverables
                        </div>
                        <div className="grid sm:grid-cols-1 gap-2.5">
                          {cap.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                              <CheckCircle2 size={16} className="text-accent-glow shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Stack & Action */}
                      <div className="p-5 rounded-xl bg-canvas-surface border border-canvas-border flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                            Production Tooling & APIs
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {cap.stack.map((item, idx) => (
                              <span key={idx} className="px-2.5 py-1 text-xs font-mono text-slate-200 bg-canvas-deep border border-canvas-border rounded">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={scrollToInquiry}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-light text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <span>Request Spec for {cap.title.split(' ')[0]}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
