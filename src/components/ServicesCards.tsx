// Import necessary libraries and types
import React from "react";
import type { ServiceCard } from "../types/types";
import { serviceCards } from "../data/services";

// Define the ServicesCards component
export const ServicesCards = () => {
  return (
    // Container for the service cards
    <div className="flex flex-wrap justify-center gap-6 items-stretch ">
      {/* Map through the cards array and render each service card */}
      {serviceCards.map((card: ServiceCard) => (
        <div
          key={card.id}
          className="flex flex-row py-6 px-6 bg-white/85 border border-slate-200 rounded-lg shadow text-center h-82 w-[305px] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:border-blue-200"
        >
          {/* Icon section of the card */}
          <div className="flex items-center justify-center mr-[20px]">
            {card.Icon}
          </div>
          {/* Title and description section of the card */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-3xl ">{card.title}</h3>
            <p className="text-sm text-slate-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
