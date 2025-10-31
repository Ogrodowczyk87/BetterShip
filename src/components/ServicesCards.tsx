// Import necessary libraries and types
import React from "react";
import { ServiceCard } from "../types/types";
import { SiAmp } from "react-icons/si";
import { GiArrowsShield } from "react-icons/gi";
import { GiCharging } from "react-icons/gi";

// Define an array of service cards with their respective icons, titles, and descriptions
export const cards = [
  {
    id: 1,
    Icon: <SiAmp className="w-12 h-12" />,
    title: "MVP",
    description:
      "Development of Minimum Viable Product to validate your idea quickly.",
  },
  {
    id: 2,
    Icon: <GiArrowsShield className="w-12 h-12" />,
    title: "Audi & Consulting",
    description: "Short description about Audi & Consulting service.",
  },
  {
    id: 3,
    Icon: <GiCharging className="w-12 h-12" />,
    title: "Maintenance",
    description: "Short description about Maintenance service.",
  },
];

// Define the ServicesCards component
export const ServicesCards = () => {
  return (
    // Container for the service cards
    <div className="flex flex-wrap justify-center gap-6 items-stretch ">
      {/* Map through the cards array and render each service card */}
      {cards.map((card: ServiceCard) => (
        <div
          key={card.id}
          className="flex flex-row py-6 px-6 bg-slate-900/45 rounded-lg shadow text-center h-82 w-[305px] shrink-0 hover:bg-slate-500/30 hover:text-white"
        >
          {/* Icon section of the card */}
          <div className="flex items-center justify-center mr-[20px]">
            {card.Icon}
          </div>
          {/* Title and description section of the card */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-3xl ">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
