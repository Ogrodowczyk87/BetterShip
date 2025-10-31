// Import necessary libraries and assets
import React from "react";
import { PortfolioCard } from "../types/types";
import portfolioImage from "../Assets/portfolio.jpg";
import Portfolio from "../Assets/Portfolio1.jpg";
import Portfolio2 from "../Assets/Portfolio2.jpg";
import Portfolio3 from "../Assets/Portfolio3.jpg";
import Portfolio4 from "../Assets/Portfolio4.jpg";

// Define an array of portfolio cards with their respective images and descriptions
export const cards = [
  { id: 1, image: Portfolio, description: "E‑commerce redesign" },
  { id: 2, image: Portfolio2, description: "SaaS dashboard UI" },
  { id: 3, image: Portfolio3, description: "Mobile app landing" },
  { id: 4, image: Portfolio4, description: "Core Web Vitals" },
];

// Define the PortfolioCards component
export const PortfolioCards = () => {
  return (
    // Container for the portfolio cards
    <div className="flex flex-wrap justify-center gap-3 items-stretch mx-auto">
      {/* Map through the cards array and render each portfolio card */}
      {cards.map((card: PortfolioCard) => (
        <div
          key={card.id}
          className="p-2 bg-slate-900/45 rounded-lg shadow text-center h-82 w-[250px] shrink-0 hover:bg-slate-500/30 hover:text-white"
        >
          {/* Image section of the card */}
          <img
            className="h-[100px] w-[100px] mx-auto object-cover rounded-md"
            src={card.image}
            alt={card.description}
          />
          {/* Description section of the card */}
          <p className="pt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};
