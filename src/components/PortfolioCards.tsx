// Import necessary libraries and assets
import React from "react";
import type { PortfolioCard } from "../types/types";
import { portfolioCards } from "../data/portfolio";

// Define the PortfolioCards component
export const PortfolioCards = () => {
  return (
    // Container for the portfolio cards
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mx-auto">
      {/* Map through the cards array and render each portfolio card */}
      {portfolioCards.map((card: PortfolioCard) => {
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
