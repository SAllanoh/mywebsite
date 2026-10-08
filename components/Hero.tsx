import React, { useState } from 'react';
import { ArrowRight, Check, Send, Smartphone, Shield, Building2, Terminal, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'realestate' | 'whatsapp' | 'safety'>('realestate');
  const [selectedPropertyFilter, setSelectedPropertyFilter] = useState<'All' | 'Kilimani' | 'Westlands' | 'Runda'>('All');
  const [simulatedChatStep, setSimulatedChatStep] = useState(2);

  const scrollToInquiry = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-canvas">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      {/* Atmospheric ambient illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Kicker (Clean unboxed metadata) */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
          <span className="text-accent-glow font-semibold">MediaDev Studio</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Web Engineering & Automation Architecture</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Kenya</span>
        </div>

        {/* Marquee Headline */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            We engineer bespoke web applications & high-throughput automations.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            MediaDev replaces fragile, manual processes with custom digital platforms — from conversion-focused web architecture to automated 24/7 WhatsApp pipelines and M-Pesa financial integrations.
          </p>
        </div>

        {/* Single Primary Action + Secondary Restraint */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={scrollToInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm shadow-xl shadow-blue-900/40 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>Schedule Project Consultation</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-canvas-card border border-canvas-border hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>View Client Case Studies</span>
          </button>
        </div>

        {/* Quantified Rigor Proof Row */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 px-4 rounded-2xl bg-canvas-card/60 border border-canvas-border backdrop-blur-sm mb-16">
          <div className="text-center p-2">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-white tabular-nums">&lt; 200ms</div>
            <div className="text-xs text-slate-400 mt-1">Target Page Latency</div>
          </div>
          <div className="text-center p-2 border-l border-canvas-border">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-accent-glow tabular-nums">24 / 7</div>
            <div className="text-xs text-slate-400 mt-1">WhatsApp Pipeline Uptime</div>
          </div>
          <div className="text-center p-2 border-l border-canvas-border">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-white tabular-nums">4 Platforms</div>
            <div className="text-xs text-slate-400 mt-1">Live Flagship Deployments</div>
          </div>
          <div className="text-center p-2 border-l border-canvas-border">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-emerald-400 tabular-nums">100%</div>
            <div className="text-xs text-slate-400 mt-1">Direct Engineering Access</div>
          </div>
        </div>

        {/* Interactive Visual Anchor: Live Engineered Platform Simulator */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-canvas-deep border border-canvas-border shadow-2xl overflow-hidden">
          
          {/* Top Browser / Console Bar */}
          <div className="px-5 py-3.5 bg-canvas-surface/80 border-b border-canvas-border flex flex-wrap items-center justify-between gap-4">
            
            {/* Terminal Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-700/80" />
              <span className="w-3 h-3 rounded-full bg-slate-700/80" />
              <span className="w-3 h-3 rounded-full bg-slate-700/80" />
              <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline">
                engineering-preview :: live-architecture
              </span>
            </div>

            {/* Interactive Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 bg-canvas-deep rounded-xl border border-canvas-border">
              <button
                onClick={() => setActiveTab('realestate')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'realestate'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 size={13} />
                <span>Flo Realtors Platform</span>
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'whatsapp'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone size={13} />
                <span>WhatsApp Engine</span>
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'safety'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield size={13} />
                <span>Engineering Safety</span>
              </button>
            </div>

          </div>

          {/* Interactive Simulator Body */}
          <div className="p-6 sm:p-8 min-h-[420px] bg-gradient-to-b from-canvas-card/40 to-canvas-deep">
            
            {/* TAB 1: Real Estate Platform Simulator */}
            {activeTab === 'realestate' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-canvas-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-lg">Flo Realtors Digital Portal</span>
                      <a 
                        href="https://florealtors.co.ke" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-accent-glow hover:underline inline-flex items-center gap-1"
                      >
                        florealtors.co.ke <ExternalLink size={11} />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">High-conversion property discovery engine engineered by MediaDev</p>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-canvas-surface rounded-lg border border-canvas-border self-start sm:self-auto">
                    {(['All', 'Kilimani', 'Westlands', 'Runda'] as const).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setSelectedPropertyFilter(loc)}
                        className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                          selectedPropertyFilter === loc
                            ? 'bg-slate-800 text-white font-medium border border-slate-700'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Matrix Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: 'Executive Duplex Apartment',
                      location: 'Kilimani, Nairobi',
                      beds: '3 Bed · 3 Bath',
                      price: 'KES 24.5M',
                      status: 'Verified Listing',
                      tag: 'Residential Investment'
                    },
                    {
                      name: 'Contemporary Glass Penthouse',
                      location: 'Westlands, Nairobi',
                      beds: '4 Bed · Panoramic Deck',
                      price: 'KES 48.0M',
                      status: 'Exclusive Sole Agent',
                      tag: 'Luxury Tier'
                    },
                    {
                      name: 'Private Acreage Villa',
                      location: 'Runda, Nairobi',
                      beds: '5 Bed · Private Pool',
                      price: 'KES 95.0M',
                      status: 'Immediate Conveyance',
                      tag: 'Prime Estate'
                    }
                  ]
                  .filter(p => selectedPropertyFilter === 'All' || p.location.includes(selectedPropertyFilter))
                  .map((property, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-xl bg-canvas-surface border border-canvas-border hover:border-slate-600 transition-all group"
                    >
                      <div className="h-28 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 p-3 flex flex-col justify-between mb-3">
                        <div className="flex justify-between items-center text-[11px]">
                          <span className="font-mono text-cyan-400">{property.tag}</span>
                          <span className="text-emerald-400 font-mono">{property.status}</span>
                        </div>
                        <div className="font-mono text-lg font-bold text-white">{property.price}</div>
                      </div>
                      <h4 className="font-semibold text-white text-sm group-hover:text-accent-glow transition-colors">
                        {property.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{property.location} · {property.beds}</p>
                      <div className="mt-3 pt-3 border-t border-canvas-subtle flex items-center justify-between text-xs">
                        <span className="text-slate-400">Automated WhatsApp Tour Routing</span>
                        <span className="text-accent-glow font-medium group-hover:translate-x-0.5 transition-transform">Inquire →</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-canvas-surface/60 border border-canvas-border flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Real-time database sync: Automated inquiry dispatch to Flo Realtors sales agents</span>
                  </div>
                  <span className="font-mono text-slate-400 hidden sm:inline">Stack: React · Tailwind · Webhooks</span>
                </div>
              </div>
            )}

            {/* TAB 2: WhatsApp Automation Simulator */}
            {activeTab === 'whatsapp' && (
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      WA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">MediaDev Inbound Auto-Triage</div>
                      <div className="text-xs text-emerald-400 font-mono">Status: Connected to n8n + Safaricom API</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSimulatedChatStep(prev => (prev >= 3 ? 1 : prev + 1))}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 rounded border border-slate-700 cursor-pointer"
                    >
                      Trigger Next Node ({simulatedChatStep}/3)
                    </button>
                  </div>
                </div>

                {/* Simulated Conversation Feed */}
                <div className="space-y-3 font-sans text-xs sm:text-sm">
                  {/* Lead Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-950/70 border border-emerald-700/50 text-emerald-100 p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                      <p>Hi, I need to book a safety engineering audit for our plant in Athi River. What are the available dates this week?</p>
                      <span className="block text-[10px] text-emerald-400/80 mt-1 text-right font-mono">10:42 AM · Read</span>
                    </div>
                  </div>

                  {/* Bot Instant Node */}
                  <div className="flex justify-start">
                    <div className="bg-canvas-surface border border-canvas-border text-slate-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] mb-1">
                        <Terminal size={12} />
                        <span>Node 1: Instant Client Intake & Availability Check</span>
                      </div>
                      <p>Hello! Welcome to Engineering Safety. We currently have inspection slots available on <strong>Thursday, Oct 10</strong> and <strong>Friday, Oct 11</strong>.</p>
                      <p className="mt-2 text-slate-300">Would you like to reserve the 10:00 AM slot on Thursday? Reply <strong>1</strong> for Yes or <strong>2</strong> for a custom date.</p>
                      <span className="block text-[10px] text-slate-500 mt-1 font-mono">10:42 AM (0.8s response time)</span>
                    </div>
                  </div>

                  {simulatedChatStep >= 2 && (
                    <div className="flex justify-end animate-fade-in">
                      <div className="bg-emerald-950/70 border border-emerald-700/50 text-emerald-100 p-2.5 rounded-2xl rounded-tr-sm">
                        <p>1</p>
                        <span className="block text-[10px] text-emerald-400/80 mt-1 text-right font-mono">10:43 AM</span>
                      </div>
                    </div>
                  )}

                  {simulatedChatStep >= 2 && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-canvas-surface border border-canvas-border text-slate-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] mb-1">
                          <Check size={12} />
                          <span>Node 2: Automated Calendar Booking + Notification</span>
                        </div>
                        <p>Confirmed! Your Athi River Safety Audit is scheduled for Thursday, 10:00 AM.</p>
                        <p className="mt-1.5 text-slate-300">We have synced this to our lead calendar and dispatched the pre-audit checklist to your email.</p>
                        <span className="block text-[10px] text-slate-500 mt-1 font-mono">10:43 AM · Webhook dispatched to CRM</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-canvas-surface/60 border border-canvas-border text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>Engine: Meta Cloud API + n8n Workflow + Webhooks</span>
                  <span className="text-emerald-400">Zero human intervention required</span>
                </div>
              </div>
            )}

            {/* TAB 3: Industrial Compliance Simulator */}
            {activeTab === 'safety' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-canvas-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-lg">Engineering Safety Portal</span>
                      <a 
                        href="https://engineeringsafety.co.ke" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-accent-glow hover:underline inline-flex items-center gap-1"
                      >
                        engineeringsafety.co.ke <ExternalLink size={11} />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Industrial compliance & structural audit platform engineered by MediaDev</p>
                  </div>
                  <span className="px-3 py-1 bg-slate-800 text-cyan-300 font-mono text-xs rounded-full border border-slate-700">
                    DOSHS / OSHA Compliant Matrix
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-canvas-surface border border-canvas-border">
                    <div className="text-xs font-mono text-slate-400">Annual Safety Audits</div>
                    <div className="text-xl font-bold text-white mt-1">100% Digital</div>
                    <p className="text-xs text-slate-400 mt-2">Eliminated paper filing with automated report generation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-canvas-surface border border-canvas-border">
                    <div className="text-xs font-mono text-slate-400">Risk Assessment Engine</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">Sub-Minute Dispatch</div>
                    <p className="text-xs text-slate-400 mt-2">Hazard evaluation delivered directly to client safety heads.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-canvas-surface border border-canvas-border">
                    <div className="text-xs font-mono text-slate-400">Statutory Compliance</div>
                    <div className="text-xl font-bold text-white mt-1">Kenyan Regulatory</div>
                    <p className="text-xs text-slate-400 mt-2">Designed specifically for manufacturing & construction sectors.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
                  <span>Architecture: Static Next/React Client · Low-Bandwidth Optimized for Remote Industrial Sites</span>
                  <span className="text-accent-glow">99.98% Uptime</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
