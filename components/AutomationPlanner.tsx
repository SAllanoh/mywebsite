import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Clock, Wrench } from 'lucide-react';
import { generateAutomationPlan } from '../services/geminiService';
import { AutomationPlan } from '../types';

export const AutomationPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<AutomationPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleManualTrigger = async () => {
    if (!input.trim() || isLoading) return;
    setIsLoading(true);
    setError(null);
    setPlan(null);
    try {
      const result = await generateAutomationPlan(input);
      setPlan(result);
    } catch (err) {
      setError("Failed to generate plan. Please try again or check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="planner" className="py-24 relative overflow-hidden">
        {/* Decorative background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-brand-900/10 to-dark-900 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-dark-800 border border-dark-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Input Side */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-dark-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Automation Architect</h3>
              </div>
              
              <p className="text-gray-400 mb-8">
                Describe a repetitive manual task you or your team does. We can design an automation workflow for it.
              </p>

              <div>
                <label htmlFor="process" className="block text-sm font-medium text-gray-300 mb-2">
                  What do you want to automate?
                </label>
                <textarea
                  id="process"
                  rows={6}
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  placeholder="e.g., Every time I get a new lead in Facebook Ads, I manually copy their details into a Google Sheet..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                
                {error && (
                  <div className="mt-4 p-4 bg-red-900/20 border border-red-800 rounded-lg flex items-center gap-3 text-red-200 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Result Side */}
            <div className="p-8 lg:p-12 bg-dark-900/50 min-h-[500px] flex flex-col justify-center">
              {!plan && !isLoading && (
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 border-2 border-dashed border-dark-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench size={24} />
                  </div>
                  <p>Your custom automation plan will appear here.</p>
                </div>
              )}

              {isLoading && (
                 <div className="space-y-6 animate-pulse">
                    <div className="h-8 bg-dark-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-dark-700 rounded w-full"></div>
                    <div className="h-4 bg-dark-700 rounded w-5/6"></div>
                    <div className="space-y-3 mt-8">
                        <div className="h-12 bg-dark-700 rounded w-full"></div>
                        <div className="h-12 bg-dark-700 rounded w-full"></div>
                    </div>
                 </div>
              )}

              {plan && (
                <div className="animate-fade-in-up">
                  <div className="flex justify-between items-start mb-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border 
                        ${plan.complexity === 'High' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                          plan.complexity === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 
                          'bg-green-500/10 text-green-400 border-green-500/20'}`}>
                        {plan.complexity} Complexity
                     </span>
                     <span className="flex items-center text-brand-400 text-sm font-medium">
                        <Clock size={14} className="mr-1" /> {plan.estimatedSavings}
                     </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">{plan.title}</h4>
                  <p className="text-gray-400 text-sm mb-6">{plan.summary}</p>

                  <div className="space-y-4 mb-8">
                    <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Implementation Steps</h5>
                    <ul className="space-y-3">
                      {plan.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                          <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Recommended Stack</h5>
                    <div className="flex flex-wrap gap-2">
                        {plan.tools.map((tool, idx) => (
                            <span key={idx} className="px-3 py-1 bg-dark-700 text-gray-200 rounded-md text-xs font-medium border border-dark-600">
                                {tool}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};