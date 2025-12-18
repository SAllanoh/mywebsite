import React from 'react';
import { Workflow, MessageSquare, ShoppingCart, ShieldCheck, LayoutTemplate, Code2 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Website Design',
    description: 'We create beautiful, modern, and user-friendly website designs that reflect your brand and engage your audience. Every layout is crafted to be clean, responsive, and optimized for a great user experience on all devices.',
    icon: <LayoutTemplate className="w-8 h-8 text-brand-400" />,
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'We build fast, secure, and scalable websites using the latest technologies. Whether you need a business site, custom system, or advanced functionality, we deliver high-quality development tailored to your needs.',
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
  },
  {
    id: '3',
    title: 'Customer Relations Chatbots',
    description: 'Automate customer support with intelligent chatbots for WhatsApp, websites, and social platforms. Our bots handle FAQs, bookings, orders, and follow-ups—saving you time while improving customer satisfaction.',
    icon: <MessageSquare className="w-8 h-8 text-green-400" />,
  },
  {
    id: '4',
    title: 'Workflow Automations',
    description: 'We streamline your business processes using automation tools like n8n, Zapier, and custom integrations. Reduce manual work, eliminate errors, and let your business run efficiently on autopilot.',
    icon: <Workflow className="w-8 h-8 text-brand-400" />,
  },
  {
    id: '5',
    title: 'eCommerce Integrations',
    description: 'We integrate secure payment systems, product management tools, and order automation into your online store. From MPESA/Daraja to global gateways, we ensure your eCommerce operations run smoothly end-to-end.',
    icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: '6',
    title: 'Websites & Automations Maintenance',
    description: 'We provide ongoing support, updates, monitoring, and optimization to keep your website and automation systems running flawlessly. Stay secure, fast, and up-to-date without any stress.',
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-400 tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
             Expert Services for Your Business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            From stunning designs to intelligent automation, we provide the digital tools you need to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-dark-700/50 p-8 rounded-2xl border border-dark-600 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20 group"
            >
              <div className="bg-dark-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};