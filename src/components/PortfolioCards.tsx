// Import necessary libraries and assets
import React from "react";
import { PortfolioCard } from "../types/types";
import {
  RiShoppingBag3Line,
  RiDashboardLine,
  RiSmartphoneLine,
  RiSpeedUpLine,
} from "react-icons/ri";

// Define an array of portfolio cards with their respective images and descriptions
export const cards = [
  {
    id: 1,
    title: "E-commerce redesign",
    tag: "Retail",
    result: "+32% conversion",
    Icon: RiShoppingBag3Line,
    accent: "from-amber-100 to-orange-200 text-orange-700",
  },
  {
    id: 2,
    title: "SaaS dashboard UI",
    tag: "B2B SaaS",
    result: "-41% support tickets",
    Icon: RiDashboardLine,
    accent: "from-sky-100 to-blue-200 text-blue-700",
  },
  {
    id: 3,
    title: "Mobile app landing",
    tag: "Product",
    result: "+2.1x trial starts",
    Icon: RiSmartphoneLine,
    accent: "from-emerald-100 to-lime-200 text-emerald-700",
  },
  {
    id: 4,
    title: "Core Web Vitals",
    tag: "Performance",
    result: "95+ Lighthouse",
    Icon: RiSpeedUpLine,
    accent: "from-fuchsia-100 to-pink-200 text-pink-700",
  },
];

// Define the PortfolioCards component
export const PortfolioCards = () => {
  return (
    // Container for the portfolio cards
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mx-auto">
      {/* Map through the cards array and render each portfolio card */}
      {cards.map((card: PortfolioCard) => {
        const Icon = card.Icon;
        return (
        <div
          key={card.id}
          className="group p-4 bg-white/85 border border-slate-200 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
        >
          {/* Image section of the card */}
          <div className="relative overflow-hidden rounded-lg border border-white">
            <div
              className={`h-40 w-full bg-gradient-to-br ${card.accent} flex items-center justify-center`}
            >
              <Icon className="h-14 w-14 drop-shadow-sm" />
            </div>
            <div className="absolute top-3 right-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              {card.tag}
            </div>
          </div>
          {/* Description section of the card */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{card.result}</p>
          </div>
        </div>
      );
      })}
    </div>
  );
};
