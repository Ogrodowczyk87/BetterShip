import React from "react";
import { PortfolioCards } from "../components/PortfolioCards";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-4">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-5xl font-semibold mb-6 text-center">Portfolio</h2>
        <div>
          <PortfolioCards />
        </div>
      </div>
    </section>
  );
}
