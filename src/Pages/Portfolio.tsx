// Import React library
import React from "react";
// Import the PortfolioCards component
import { PortfolioCards } from "../components/PortfolioCards";

// Define the Portfolio component
export default function Portfolio() {
  return (
    // Section for displaying portfolio items with padding and background styling
    <section id="portfolio" className="bg-black py-4 mb-[68px]">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading for the portfolio section */}
        <h2 className="text-5xl font-semibold mb-[42px] text-center">
          Portfolio
        </h2>
        <div>
          {/* Render the PortfolioCards component */}
          <PortfolioCards />
        </div>
      </div>
    </section>
  );
}
