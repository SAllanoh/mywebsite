import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-slate-100 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas-card border border-canvas-border hover:border-slate-600 text-slate-300 hover:text-white transition-all cursor-pointer mb-8 text-xs font-mono"
        >
          <ArrowLeft size={16} />
          <span>Return to MediaDev Home</span>
        </button>

        {/* Header */}
        <div className="relative mb-12 p-8 sm:p-10 rounded-3xl bg-canvas-card border border-canvas-border overflow-hidden">
          <div className="relative flex items-start gap-5">
            <div className="p-3.5 bg-canvas-deep rounded-2xl text-accent-glow border border-canvas-border shrink-0">
              <Shield size={32} />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent-glow mb-1">
                Legal & Data Governance
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-400 text-xs font-mono mt-1">
                Last updated: October 2026 · MediaDev Digital Engineering
              </p>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                We prioritize user privacy, confidential commercial data security, and transparent data processing across all web applications and background automation workflows we build.
              </p>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10 bg-canvas-card/60 border border-canvas-border rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Globe size={18} className="text-accent-glow" />
              <h2>1. Introduction</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              At <span className="text-white font-medium">MediaDev</span> (headquartered at Innovators Apartments, Nyeri, Kenya), we engineer custom web applications, API integrations, and business automation workflows. We respect your personal and business data and are committed to protecting it in compliance with applicable data protection laws.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              This Privacy Policy explains how we collect, store, process, and protect your information when you visit our website (including www.mediadev.co.ke) or engage our engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Eye size={18} className="text-accent-glow" />
              <h2>2. Information We Collect</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Depending on how you interact with our studio and interactive tools, we may collect:
            </p>
            <ul className="space-y-2.5 pl-4 list-disc text-slate-300 text-sm">
              <li>
                <strong className="text-white">Project Inquiry Information:</strong> Your name, company, email address, WhatsApp/phone number, and project brief when you submit an inquiry.
              </li>
              <li>
                <strong className="text-white">Automation Specification Data:</strong> Information you voluntarily input into our Automation Studio to configure workflows, architecture blueprints, or request quotes.
              </li>
              <li>
                <strong className="text-white">Technical Usage Data:</strong> Anonymized analytical data including browser type, screen viewport, IP address, and page interaction times gathered to ensure responsive performance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <FileText size={18} className="text-accent-glow" />
              <h2>3. How We Use Your Information</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We process your data strictly to:
            </p>
            <ul className="space-y-2.5 pl-4 list-disc text-slate-300 text-sm">
              <li>Respond to technical project inquiries and prepare detailed proposals.</li>
              <li>Deliver tailored automation blueprints and ROI calculations.</li>
              <li>Monitor web application security, prevent malicious attacks, and ensure sub-second latency.</li>
              <li>Communicate project milestones and service level agreements (SLAs).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Lock size={18} className="text-accent-glow" />
              <h2>4. Confidentiality & Security Measures</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We employ strict industry-standard technical measures: encrypted HTTPS transport (TLS 1.3), HMAC signature verification for webhook payloads, hashed database storage, and restricted production server credentials. We treat all client business processes with strict NDA-grade confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Shield size={18} className="text-accent-glow" />
              <h2>5. Zero Selling of Data</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white">MediaDev never sells, rents, monetizes, or trades your personal or corporate data with third-party advertisers.</strong> Data is only shared with verified infrastructure providers (e.g. cloud host, SSL providers) strictly necessary to deliver services.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <CheckCircle2 size={18} className="text-accent-glow" />
              <h2>6. Your Data Rights</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              You retain full control over your information. You may request access to, correction of, or permanent deletion of your project records from our systems at any time by emailing our team.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Globe size={18} className="text-accent-glow" />
              <h2>7. Direct Contact</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              For questions regarding our privacy practices or data governance, contact us directly:
            </p>
            <div className="p-4 bg-canvas-deep border border-canvas-border rounded-xl text-xs font-mono space-y-1">
              <div className="text-white font-bold">MediaDev Digital Engineering</div>
              <div className="text-slate-400">Email: allanshukoki21@gmail.com</div>
              <div className="text-slate-400">Phone: +254 740 845 203</div>
              <div className="text-slate-400">Office: Innovators Apartments, Nyeri, Kenya</div>
            </div>
          </section>

        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-xs transition-all cursor-pointer shadow-lg shadow-blue-950/40"
          >
            <ArrowLeft size={16} />
            <span>Return to MediaDev Main Website</span>
          </button>
        </div>

      </div>
    </div>
  );
};
