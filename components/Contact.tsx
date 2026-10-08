import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState('High-Performance Web Platform');
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (2–4 weeks)');
  const [selectedBudget, setSelectedBudget] = useState('KES 50K – 150K');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a WhatsApp or contact number';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe your project goals';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello MediaDev! My name is ${formData.name || 'there'}.\n\n` +
      `*Project Inquiry:*\n` +
      `• Service: ${selectedService}\n` +
      `• Timeline: ${selectedTimeline}\n` +
      `• Budget: ${selectedBudget}\n` +
      `• Brief: ${formData.details || 'I would like to discuss a project.'}\n\n` +
      `My Email: ${formData.email || 'N/A'}`
    );
    return `https://wa.me/254740845203?text=${text}`;
  };

  return (
    <section id="inquiry" className="py-24 sm:py-32 bg-canvas-deep border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-glow mb-3">
            <span>Project Consultation</span>
            <span aria-hidden="true">·</span>
            <span>Direct Engineering Engagement</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
            Ready to engineer your next digital advantage?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Tell us about your project specifications. We respond within 24 hours with architectural recommendations and a clear proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-canvas-card border border-canvas-border rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    We have captured your project specifications. Our lead engineering team will review your requirements and reach out via email and WhatsApp.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-canvas-deep border border-canvas-border text-left max-w-md mx-auto text-xs space-y-2 font-mono">
                  <div><span className="text-slate-500">Service:</span> <span className="text-white">{selectedService}</span></div>
                  <div><span className="text-slate-500">Timeline:</span> <span className="text-white">{selectedTimeline}</span></div>
                  <div><span className="text-slate-500">Budget:</span> <span className="text-white">{selectedBudget}</span></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={generateWhatsAppInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp Directly</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', details: '' });
                    }}
                    className="px-5 py-3 rounded-xl bg-canvas-surface hover:bg-canvas-deep border border-canvas-border text-slate-300 text-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Service Interest */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5">
                    1. Primary Solution Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'High-Performance Web Platform',
                      'WhatsApp Inbound Sales Bot',
                      'Business Automation Pipeline',
                      'East African Payment Integration',
                      'Complete Digital Ecosystem'
                    ].map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`text-left p-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          selectedService === service
                            ? 'bg-accent/20 border-accent text-white shadow-sm'
                            : 'bg-canvas-deep border-canvas-border text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Timeline & Budget Segmented Selectors */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      2. Desired Timeline
                    </label>
                    <div className="space-y-1.5">
                      {['Urgent (< 2 weeks)', 'Standard (2–4 weeks)', 'Flexible Planning'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTimeline(t)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs border transition-colors cursor-pointer ${
                            selectedTimeline === t
                              ? 'bg-slate-800 text-white border-slate-600 font-medium'
                              : 'bg-canvas-deep text-slate-400 border-canvas-border hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      3. Target Budget Scope
                    </label>
                    <div className="space-y-1.5">
                      {['KES 35K – 75K', 'KES 75K – 150K', 'KES 150K – 350K+'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs border transition-colors cursor-pointer ${
                            selectedBudget === b
                              ? 'bg-slate-800 text-white border-slate-600 font-medium'
                              : 'bg-canvas-deep text-slate-400 border-canvas-border hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3: Contact Details */}
                <div className="space-y-4 pt-2 border-t border-canvas-subtle">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Allan Shukoki"
                        className={`w-full px-4 py-2.5 rounded-xl bg-canvas-deep border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent ${
                          errors.name ? 'border-red-500' : 'border-canvas-border'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., allan@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-canvas-deep border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent ${
                          errors.email ? 'border-red-500' : 'border-canvas-border'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +254 740 845 203"
                      className={`w-full px-4 py-2.5 rounded-xl bg-canvas-deep border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent ${
                        errors.phone ? 'border-red-500' : 'border-canvas-border'
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us what you want to build or automate, current pain points, and specific timeline..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-canvas-deep border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent resize-none ${
                        errors.details ? 'border-red-500' : 'border-canvas-border'
                      }`}
                    />
                    {errors.details && <span className="text-[11px] text-red-400 mt-1 block">{errors.details}</span>}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm shadow-xl shadow-blue-950/40 transition-all cursor-pointer"
                  >
                    <span>Transmit Project Specification</span>
                    <Send size={15} />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    We maintain strict NDA confidentiality over all client operational architectures.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Studio Presence (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Direct Engineering Channels
              </div>

              {/* Email Card */}
              <a
                href="mailto:allanshukoki21@gmail.com"
                className="p-6 rounded-2xl bg-canvas-card border border-canvas-border hover:border-accent transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-canvas-deep border border-canvas-border flex items-center justify-center text-accent-glow group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Dispatch</div>
                    <div className="text-base font-semibold text-white group-hover:text-accent-glow transition-colors">
                      allanshukoki21@gmail.com
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Average reply time &lt; 2 hrs</div>
                  </div>
                </div>
              </a>

              {/* Phone / WhatsApp Card */}
              <a
                href="https://wa.me/254740845203"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-canvas-card border border-canvas-border hover:border-emerald-500/60 transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Voice & WhatsApp</div>
                    <div className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      +254 740 845 203 (0740845203)
                    </div>
                    <div className="text-xs text-emerald-400 mt-0.5">Available for instant WhatsApp brief</div>
                  </div>
                </div>
              </a>

              {/* Physical Studio Headquarters Card */}
              <div className="p-6 rounded-2xl bg-canvas-card border border-canvas-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-canvas-deep border border-canvas-border flex items-center justify-center text-amber-400">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Engineering Office</div>
                    <div className="text-base font-semibold text-white">
                      Innovators Apartments, Nyeri
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Kenya · Serving clients internationally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Commitment Box */}
            <div className="p-6 rounded-2xl bg-canvas-deep border border-canvas-border font-mono text-xs text-slate-300 space-y-2">
              <div className="text-accent-glow font-bold uppercase tracking-wider">
                Engineering Commitment
              </div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Every project begins with a clear technical architectural proposal, fixed milestones, transparent pricing, and direct Git repository access.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
