// Import React library
import React from "react";
// Import the CaseStudies component
import { CaseStudies } from "../components/CaseStudies";

// Define the Portfolio component
export default function Portfolio() {
  return (
    // Section for displaying case studies with padding and background styling
    <section id="portfolio" className="bg-white py-10 mb-[68px]">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading for the case studies section */}
        <div className="text-center mb-[42px]">
          <h2 className="text-5xl font-semibold">Case Studies</h2>
          <p className="mt-3 text-lg text-slate-600">
            Problem, process, and outcomes from recent client engagements.
          </p>
        </div>
        <div>
          {/* Render the CaseStudies component */}
          <CaseStudies />
        </div>
      </div>
    </section>
  );
}
