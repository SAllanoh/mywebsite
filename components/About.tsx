import React from 'react';
import { ArrowRight, Check, Code2, Cpu, Globe, MapPin, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const scrollToInquiry = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="studio" className="py-24 sm:py-32 bg-canvas border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Philosophy Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-glow mb-3">
              <span>Studio Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Engineering Standard</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
              We build software that solves real commercial friction.
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              <p>
                Too many agencies deliver bloated WordPress templates that load sluggishly, break on mobile devices, and require hours of manual administrative upkeep.
              </p>
              <p>
                At <span className="text-white font-medium">MediaDev</span>, we approach client projects as software engineers. We craft bespoke, lightning-fast web applications and connect them directly to automated background workflows — WhatsApp bots, payment listeners, and CRM pipelines that keep your business operating while you sleep.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-slate-300 p-4 rounded-xl bg-canvas-card border border-canvas-border">
              <MapPin size={16} className="text-accent-glow shrink-0" />
              <span>Headquartered at Innovators Apartments, Nyeri · Deploying across Nairobi, Kenya & Global Markets</span>
            </div>
          </div>

          {/* Pillars of Engineering Excellence */}
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                num: '01',
                title: 'Clean Code, Zero Generic Bloat',
                desc: 'Hand-crafted React and TypeScript applications built on modern primitives. No bloated page builders, zero fragile plugins, sub-200ms page load speeds.'
              },
              {
                num: '02',
                title: 'East African Market Native',
                desc: 'Deep architectural fluency in local commercial realities: Safaricom Daraja M-Pesa STK Push, low-data mobile optimization, and WhatsApp-first customer communication.'
              },
              {
                num: '03',
                title: 'Self-Driving Background Pipelines',
                desc: 'Automations built with cryptographic HMAC verification, automatic error retries, and real-time execution logging to prevent dropped leads or missed payments.'
              },
              {
                num: '04',
                title: 'Direct Engineering Partnership',
                desc: 'No middleman account managers or outsourced subcontracting. You work directly with the developers writing your code and architecting your systems.'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-canvas-card/60 border border-canvas-border hover:border-slate-700 transition-all flex items-start gap-4"
              >
                <span className="font-mono text-sm font-bold text-accent-glow pt-0.5 shrink-0">
                  {pillar.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Technical Radar & Stack */}
        <div className="p-8 sm:p-10 rounded-3xl bg-canvas-deep border border-canvas-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-canvas-subtle">
            <div>
              <span className="text-xs font-mono text-accent-glow uppercase tracking-wider block">
                Production Stack & Toolchain
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Technologies we deploy into production
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Modern · Battle-tested · Scalable
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Frontend & UI
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 font-mono">
                <li>· React 19</li>
                <li>· TypeScript</li>
                <li>· Tailwind CSS</li>
                <li>· Vite / Next.js</li>
                <li>· Semantic HTML5 / A11y</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Automations
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 font-mono">
                <li>· Meta WhatsApp Cloud API</li>
                <li>· Self-hosted n8n</li>
                <li>· Make.com / Zapier</li>
                <li>· Custom Webhook Queues</li>
                <li>· Event Schedulers</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Payments & Backend
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 font-mono">
                <li>· Safaricom Daraja API</li>
                <li>· Node.js / Express</li>
                <li>· PostgreSQL / Supabase</li>
                <li>· Stripe Payments</li>
                <li>· REST & GraphQL</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Infrastructure & SLAs
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 font-mono">
                <li>· Edge CDN Distribution</li>
                <li>· SSL & DNS Management</li>
                <li>· Continuous Deployment</li>
                <li>· 24/7 Uptime Health Checks</li>
                <li>· Automated Daily Backups</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
