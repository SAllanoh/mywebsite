import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe, CheckCircle } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 hover:border-brand-500/50 hover:bg-dark-700 text-gray-300 hover:text-white transition-all cursor-pointer mb-8"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="relative mb-12 p-8 rounded-3xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 overflow-hidden">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl"></div>
          <div className="relative flex items-start gap-4">
            <div className="p-4 bg-brand-500/10 rounded-2xl text-brand-400">
              <Shield size={36} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-sm">
                Last updated: July 7, 2026
              </p>
              <p className="mt-2 text-brand-300 text-sm font-medium">
                Your privacy and data security are core to our digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10 bg-dark-800/40 border border-dark-700/60 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Globe size={20} />
              <h2>1. Introduction</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At <span className="text-white font-medium">MediaDev</span>, we design, develop, and deploy premium websites and custom automation workflows. We respect your privacy and are committed to protecting the personal data of our clients, website visitors, and partners. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (including any content or services offered here) or work with us on digital projects.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Eye size={20} />
              <h2>2. Information We Collect</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Depending on how you interact with us, we may collect the following types of information:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-gray-300">
              <li>
                <strong className="text-white">Contact Information:</strong> Your name, email address, phone number, and company name when you fill out our contact form or query our services.
              </li>
              <li>
                <strong className="text-white">Automation Input Data:</strong> Information you voluntarily input into our interactive tools (such as the Automation Planner) to generate plans or custom proposals. This data is processed to deliver tailored recommendations.
              </li>
              <li>
                <strong className="text-white">Usage & Analytical Data:</strong> Information about your device, browser, IP address, geographical location, and how you browse our site, gathered via cookies or similar logging technologies.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <FileText size={20} />
              <h2>3. How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We process and utilize your information to serve you better, specifically to:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-gray-300">
              <li>Respond to inquiries, provide customized project quotes, and coordinate consulting services.</li>
              <li>Power our digital tools and render customized automation suggestions in real time.</li>
              <li>Improve, secure, optimize, and personalize our website's performance and responsiveness.</li>
              <li>Deliver news, service updates, educational insights, or marketing communications (which you may opt out of at any time).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Lock size={20} />
              <h2>4. Data Storage and Security</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The security of your information is extremely important to us. We implement industry-standard physical, technical, and administrative security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please note, however, that no method of electronic transmission or cloud storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Shield size={20} />
              <h2>5. Sharing Your Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We respect your trust. <strong className="text-white">We do not sell, rent, trade, or share your personal information</strong> with third-party marketers. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may only disclose your data if required by law, to protect our legal rights, or to reliable, GDPR-compliant infrastructure hosts and processors that assist us in keeping our operations online.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <CheckCircle size={20} />
              <h2>6. Your Privacy Rights</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              You retain full control over your data. You have the right to:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-gray-300">
              <li>Request access to the personal data we store about you.</li>
              <li>Request correction or rectification of incomplete or inaccurate information.</li>
              <li>Request complete erasure and deletion of your contact files and analytical data from our systems.</li>
              <li>Opt out of any direct emails or updates by clicking unsubscribe or messaging us directly.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Lock size={20} />
              <h2>7. Cookies and Tracking</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Our website utilizes cookies and local browser storage to enhance page loading times, persist interactive preferences, and analyze generic visitor patterns. You can choose to configure your browser to reject cookies, though some interactive elements of our platform may function with limited capabilities as a result.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-lg">
              <Globe size={20} />
              <h2>8. Contact Us</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our treatment of your personal data, please contact us:
            </p>
            <div className="p-4 bg-dark-900 border border-dark-700 rounded-2xl inline-block">
              <p className="text-white font-semibold">MediaDev Digital Solutions</p>
              <p className="text-gray-400 text-sm mt-1">Email: contact@mediadev.tech</p>
              <p className="text-gray-400 text-sm">Website: www.mediadev.tech</p>
            </div>
          </section>

        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium shadow-lg shadow-brand-900/40 hover:shadow-brand-900/60 transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </div>
  );
};
