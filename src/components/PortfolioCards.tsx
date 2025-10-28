import React from "react";
import { PortfolioCard } from "../types/types";
import portfolioImage from "../Assets/portfolio.jpg";
import Portfolio from "../Assets/Portfolio1.jpg";
import Portfolio2 from "../Assets/Portfolio2.jpg";
import Portfolio3 from "../Assets/Portfolio3.jpg";
import Portfolio4 from "../Assets/Portfolio4.jpg";

export const cards = [
  { id: 1, image: Portfolio, description: "E‑commerce redesign" },
  { id: 2, image: Portfolio2, description: "SaaS dashboard UI" },
  { id: 3, image: Portfolio3, description: "Mobile app landing" },
  { id: 4, image: Portfolio4, description: "Core Web Vitals" },
];

export const PortfolioCards = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-3 items-stretch mx-auto">
      {cards.map((card: PortfolioCard) => (
        <div
          key={card.id}
          className="p-2 bg-slate-900/45 rounded-lg shadow text-center h-82 w-[250px] shrink-0"
        >
          <img
            className="h-[100px] w-[100px]  mx-auto object-cover rounded-md"
            src={card.image}
            alt={card.description}
          />
          <p className="pt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};
