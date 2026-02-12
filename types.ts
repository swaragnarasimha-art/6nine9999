
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ResultStat {
  label: string;
  value: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
