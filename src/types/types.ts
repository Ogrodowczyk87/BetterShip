import type { ComponentType } from "react";

export type ServiceCard = {
  id: number;
  title: string;
  description: string;
  Icon: JSX.Element;
};

export type PortfolioCard = {
  id: number;
  title: string;
  tag: string;
  result: string;
  Icon: ComponentType<{ className?: string }>;
  accent: string;
};

export type CaseStudy = {
  id: number;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  process: string;
  result: string;
  metrics: {
    label: string;
    value: string;
  }[];
};

export type FooterLink = {
  id: number;
  title: string;
  href: string;
  external?: boolean;
};
