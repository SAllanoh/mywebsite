import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Cpu, DollarSign, Layers, Play, Settings2, Sparkles, Terminal, Wrench, Zap } from 'lucide-react';
import { AutomationBlueprint } from '../types';

const blueprints: AutomationBlueprint[] = [
  {
    id: 'mpesa-reconciliation',
    name: 'M-Pesa STK Push & Auto-Reconciliation',
    trigger: 'Customer clicks "Pay via M-Pesa" on checkout',
    nodes: [
      { step: 1, title: 'STK Push Trigger', tool: 'Safaricom Daraja API', description: 'Prompts PIN on user phone automatically within 1.5s.' },
      { step: 2, title: 'Callback Verification', tool: 'Encrypted Webhook Node', description: 'Validates HMAC signature and confirms receipt of funds.' },
      { step: 3, title: 'Database Ledger Write', tool: 'PostgreSQL / Supabase', description: 'Records transaction code, amount, and updates order status to "Paid".' },
      { step: 4, title: 'Customer Receipt & Alert', tool: 'SMS Gateway + Email', description: 'Dispatches instant confirmation to buyer and alerts management via Telegram/Slack.' }
    ],
    hoursSavedMonthly: '20+ Hours',
    turnaroundDays: '3–5 Days Deployment',
    roiSummary: 'Eliminates fake payment screenshots and manual statement checking.'
  },
  {
    id: 'whatsapp-triage',
    name: '24/7 WhatsApp Lead Triage & Routing',
    trigger: 'Customer sends inbound message on WhatsApp',
    nodes: [
      { step: 1, title: 'Inbound Webhook Catch', tool: 'Meta Cloud API', description: 'Captures sender phone, name, and initial inquiry intent.' },
      { step: 2, title: 'Intent Classification', tool: 'n8n Logic / Classifier', description: 'Categorizes request into Pricing, Booking, Support, or Consultation.' },
      { step: 3, title: 'Instant Asset Delivery', tool: 'Cloud Storage API', description: 'Sends PDF catalog, pricing matrix, or FAQs in under 3 seconds.' },
      { step: 4, title: 'Agent Assignment', tool: 'CRM / Slack Handoff', description: 'Routes warm buyer details to available sales rep with conversation history.' }
    ],
    hoursSavedMonthly: '35+ Hours',
    turnaroundDays: '4–7 Days Deployment',
    roiSummary: 'Guarantees sub-10 second first response rate around the clock.'
  },
  {
    id: 'lead-pipeline',
    name: 'Ad Leads to CRM & Instant Sales Alert',
    trigger: 'New lead form submitted on Facebook / Google Ads',
    nodes: [
      { step: 1, title: 'Instant Lead Ingestion', tool: 'Meta Graph Webhook', description: 'Catches form response seconds after submission.' },
      { step: 2, title: 'Data Cleaning & Deduplication', tool: 'n8n Data Parser', description: 'Formats phone to +254 Kenyan standard and checks for existing record.' },
      { step: 3, title: 'CRM Opportunity Creation', tool: 'HubSpot / Airtable', description: 'Creates deal record and tags specific ad campaign source.' },
      { step: 4, title: 'Direct WhatsApp Ping', tool: 'Twilio / WhatsApp API', description: 'Sends automated welcome text to lead and notifies business owner via SMS.' }
    ],
    hoursSavedMonthly: '25+ Hours',
    turnaroundDays: '3–5 Days Deployment',
    roiSummary: 'Reduces lead response delay from 8 hours to 30 seconds, doubling conversion.'
  },
  {
    id: 'invoice-contract',
    name: 'Client Onboarding & Contract Dispatch',
    trigger: 'Sales team moves deal to "Closed Won"',
    nodes: [
      { step: 1, title: 'Deal Won Event', tool: 'CRM Webhook', description: 'Triggers when project status changes.' },
      { step: 2, title: 'PDF Contract Generation', tool: 'HTML-to-PDF Engine', description: 'Populates client legal name, project scope, and payment schedule.' },
      { step: 3, title: 'E-Signature Dispatch', tool: 'Sign Request API', description: 'Emails signing link directly to client executive.' },
      { step: 4, title: 'Project Workspace Boot', tool: 'Slack / Drive Automator', description: 'Creates shared Google Drive folder and internal Slack channel automatically.' }
    ],
    hoursSavedMonthly: '18+ Hours',
    turnaroundDays: '5–8 Days Deployment',
    roiSummary: 'Ensures pristine, professional onboarding without clerical oversight.'
  }
];

export const AutomationPlanner: React.FC = () => {
  const [selectedBlueprint, setSelectedBlueprint] = useState<AutomationBlueprint>(blueprints[0]);
  const [weeklyTasks, setWeeklyTasks] = useState<number>(45);
  const [customWorkflowText, setCustomWorkflowText] = useState('');
  const [customGeneratedPlan, setCustomGeneratedPlan] = useState<{
    title: string;
    trigger: string;
    stack: string[];
    steps: string[];
    estimatedSavings: string;
  } | null>(null);

  // Dynamic ROI calculation
  const hoursSavedPerWeek = Math.round((weeklyTasks * 18) / 60);
  const hoursSavedPerMonth = hoursSavedPerWeek * 4;
  const estimatedKESValue = hoursSavedPerMonth * 1250; // KES 1,250/hr conservative engineering & admin value

  const handleGenerateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customWorkflowText.trim()) return;

    // Instant deterministic domain blueprint logic
    const input = customWorkflowText.toLowerCase();
    let title = "Custom Automated Operations Pipeline";
    let trigger = "Inbound business event or form submission";
    let stack = ["n8n", "Webhooks", "PostgreSQL", "Cloud APIs"];
    let steps = [
      "Step 1: Capture inbound data payload via encrypted REST endpoint",
      "Step 2: Clean, validate, and enrich customer record",
      "Step 3: Update central database and dispatch real-time notifications",
      "Step 4: Execute downstream fulfillment or document delivery"
    ];

    if (input.includes("whatsapp") || input.includes("chat") || input.includes("message")) {
      title = "Intelligent WhatsApp Inbound & Triage Engine";
      trigger = "Customer messages your official WhatsApp number";
      stack = ["Meta Cloud API", "n8n", "PostgreSQL", "Slack"];
      steps = [
        "Step 1: Inbound message parsed and matched against business catalog & intent",
        "Step 2: Automated response delivers quotes, operating hours, or booking calendar",
        "Step 3: Lead contact stored in CRM with source attribution tags",
        "Step 4: Hot leads escalated directly to agent phone with full transcript"
      ];
    } else if (input.includes("payment") || input.includes("mpesa") || input.includes("pesa") || input.includes("invoice")) {
      title = "Automated M-Pesa Payment & Ledger Pipeline";
      trigger = "Payment initiated or invoice due date reached";
      stack = ["Safaricom Daraja API", "Webhook Node", "PostgreSQL", "SMS API"];
      steps = [
        "Step 1: Daraja STK Push prompt sent to customer phone",
        "Step 2: Instant callback validates transaction code and amount",
        "Step 3: Transaction auto-reconciled against invoice ID in database",
        "Step 4: Branded receipt dispatched to customer via SMS and email"
      ];
    } else if (input.includes("lead") || input.includes("crm") || input.includes("sheet") || input.includes("facebook") || input.includes("ad")) {
      title = "Multi-Channel Lead Sync & CRM Acceleration Engine";
      trigger = "Lead submitted across Facebook, Website, or Google";
      stack = ["Meta Graph API", "Google Sheets API", "HubSpot", "Twilio"];
      steps = [
        "Step 1: Instant webhook catches lead data within 2 seconds of submit",
        "Step 2: Deduplication check and phone formatting to +254 international standard",
        "Step 3: Lead inserted into CRM and synced with central backup spreadsheet",
        "Step 4: Instant notification dispatched to sales manager phone"
      ];
    }

    setCustomGeneratedPlan({
      title,
      trigger,
      stack,
      steps,
      estimatedSavings: `${hoursSavedPerMonth || 24} Hours / month`
    });
  };

  const scrollToInquiryWithPlan = () => {
    const contactSection = document.getElementById('inquiry');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="automations" className="py-24 sm:py-32 bg-canvas-deep border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-glow mb-3">
            <span>Automation Studio</span>
            <span aria-hidden="true">·</span>
            <span>Self-Driving Operations</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
            Replace manual bottlenecks with reliable software pipelines.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Every minute your team spends copying data between sheets, chasing payments, or manually answering repetitive WhatsApp messages is lost revenue. Explore our production automation blueprints below.
          </p>
        </div>

        {/* Blueprint Selector + Node Visualizer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Blueprint Selector (4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Select Production Blueprint
            </div>
            {blueprints.map((bp) => {
              const isSelected = selectedBlueprint.id === bp.id;
              return (
                <button
                  key={bp.id}
                  onClick={() => setSelectedBlueprint(bp)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-canvas-card border-accent shadow-xl shadow-blue-950/20'
                      : 'bg-canvas-card/40 border-canvas-border hover:border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-display font-bold text-base text-white">
                      {bp.name}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      {bp.hoursSavedMonthly}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {bp.roiSummary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Node Flow Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-canvas-card border border-canvas-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-canvas-subtle">
                <div>
                  <span className="text-xs font-mono text-accent-glow uppercase tracking-wider block">
                    Active Architecture Map
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {selectedBlueprint.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm text-emerald-400 font-bold">
                    {selectedBlueprint.hoursSavedMonthly} Saved
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {selectedBlueprint.turnaroundDays}
                  </div>
                </div>
              </div>

              {/* Trigger pill */}
              <div className="mb-6 p-3 rounded-xl bg-canvas-deep border border-canvas-border flex items-center gap-3 text-xs text-slate-300">
                <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-mono text-[11px] uppercase">
                  Event Trigger
                </span>
                <span className="font-medium text-white">{selectedBlueprint.trigger}</span>
              </div>

              {/* Node Sequence List */}
              <div className="space-y-3.5 relative">
                {selectedBlueprint.nodes.map((node, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-canvas-surface border border-canvas-border flex items-start gap-4 transition-all hover:border-slate-600"
                  >
                    <div className="w-7 h-7 rounded-lg bg-canvas-deep border border-canvas-border flex items-center justify-center font-mono text-xs font-bold text-accent-glow shrink-0">
                      {node.step}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm text-white">{node.title}</span>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                          {node.tool}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Built and maintained end-to-end by MediaDev.
              </span>
              <button
                onClick={scrollToInquiryWithPlan}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Deploy This Blueprint</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-canvas-card to-canvas-surface border border-canvas-border mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider control */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-accent-glow uppercase tracking-wider block mb-1">
                  Interactive Operational Efficiency Estimator
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  How much manual time can your team reclaim?
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Adjust the slider below to reflect your weekly volume of manual inquiries, customer entries, or payment verifications.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="text-slate-300 font-medium">Weekly Manual Transactions / Inquiries:</span>
                  <span className="font-mono font-bold text-lg text-accent-glow tabular-nums">
                    {weeklyTasks} tasks / week
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={weeklyTasks}
                  onChange={(e) => setWeeklyTasks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
                  <span>10 / week</span>
                  <span>100 / week</span>
                  <span>250+ / week</span>
                </div>
              </div>
            </div>

            {/* Calculated Metrics Display */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-canvas-deep border border-canvas-border text-center">
                <div className="text-xs font-mono text-slate-400 mb-1">Monthly Hours Reclaimed</div>
                <div className="font-mono font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                  ~{hoursSavedPerMonth} hrs
                </div>
                <div className="text-[11px] text-emerald-400 mt-1">Direct labor reclaimed</div>
              </div>

              <div className="p-5 rounded-2xl bg-canvas-deep border border-canvas-border text-center">
                <div className="text-xs font-mono text-slate-400 mb-1">Estimated Monthly Value</div>
                <div className="font-mono font-extrabold text-3xl sm:text-4xl text-accent-glow tabular-nums">
                  KES {estimatedKESValue.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Based on Kenyan market benchmark</div>
              </div>
            </div>

          </div>
        </div>

        {/* Custom Workflow Architect Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-canvas-card border border-canvas-border">
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-xs text-accent-glow uppercase tracking-wider block mb-1">
              Custom Architectural Inquiries
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Have a custom process you want automated?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Describe what repetitive manual task you or your staff currently performs. We will map the software architecture for you.
            </p>
          </div>

          <form onSubmit={handleGenerateCustom} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customWorkflowText}
                onChange={(e) => setCustomWorkflowText(e.target.value)}
                placeholder="e.g., Every time an M-Pesa payment comes in, we want to auto-generate a PDF receipt and send it on WhatsApp..."
                className="flex-grow px-4 py-3.5 rounded-xl bg-canvas-deep border border-canvas-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Architect Pipeline</span>
              </button>
            </div>
          </form>

          {customGeneratedPlan && (
            <div className="mt-6 p-6 rounded-2xl bg-canvas-deep border border-accent/40 animate-fade-in space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-canvas-border">
                <h4 className="font-display font-bold text-white text-lg">
                  {customGeneratedPlan.title}
                </h4>
                <span className="text-xs font-mono text-emerald-400">
                  Est. Savings: {customGeneratedPlan.estimatedSavings}
                </span>
              </div>

              <div className="text-xs text-slate-300">
                <span className="text-slate-400 font-mono">Trigger:</span> {customGeneratedPlan.trigger}
              </div>

              <div className="grid sm:grid-cols-2 gap-2 pt-2">
                {customGeneratedPlan.steps.map((st, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-canvas-surface border border-canvas-border text-xs text-slate-200 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent-glow shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {customGeneratedPlan.stack.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-canvas-card border border-canvas-border rounded text-[11px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToInquiryWithPlan}
                  className="text-xs font-semibold text-accent-glow hover:underline cursor-pointer"
                >
                  Send this specification to MediaDev for quote →
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
