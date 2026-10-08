import React from 'react';

export interface AutomationPlan {
  title: string;
  summary: string;
  steps: string[];
  tools: string[];
  estimatedSavings: string;
  complexity: 'Low' | 'Medium' | 'High';
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string[];
  highlightMetric: string;
  category: 'web' | 'automation' | 'ecosystem';
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  domain: string;
  url: string;
  displayUrl: string;
  summary: string;
  role: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  keyFeatures: string[];
  category: 'Commercial Real Estate' | 'Industrial Compliance' | 'Accessibility & Social Tech' | 'Purpose & Global Impact';
}

export interface AutomationBlueprint {
  id: string;
  name: string;
  trigger: string;
  nodes: {
    step: number;
    title: string;
    tool: string;
    description: string;
  }[];
  hoursSavedMonthly: string;
  turnaroundDays: string;
  roiSummary: string;
}
