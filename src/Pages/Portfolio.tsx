// Import React library
import React from "react";
// Import the PortfolioCards component
import { PortfolioCards } from "../components/PortfolioCards";

// Define the Portfolio component
export default function Portfolio() {
  return (
    // Section for displaying portfolio items with padding and background styling
    <section id="portfolio" className="bg-[#f8f5f2] py-10 mb-[68px]">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading for the portfolio section */}
        <div className="text-center mb-[42px]">
          <h2 className="text-5xl font-semibold">Selected Work</h2>
          <p className="mt-3 text-lg text-slate-600">
            A few recent builds focused on conversion, speed, and clarity.
          </p>
        </div>
        <div>
          {/* Render the PortfolioCards component */}
          <PortfolioCards />
        </div>
      </div>
    </section>
  );
}
