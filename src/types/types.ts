import type { ComponentType } from "react";

export type ServiceCard = {
  id: number;
  title: string;
  description: string;
  Icon: JSX.Element;
};
export type ServicesCards = {
  cards: ServiceCard[];
};

export type PortfolioCard = {
  id: number;
  title: string;
  tag: string;
  result: string;
  Icon: ComponentType<{ className?: string }>;
  accent: string;
};
export type PortfolioCards = {
  cards: PortfolioCard[];
};
