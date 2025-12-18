import React from 'react';

export interface AutomationPlan {
  title: string;
  summary: string;
  steps: string[];
  tools: string[];
  estimatedSavings: string;
  complexity: 'Low' | 'Medium' | 'High';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}