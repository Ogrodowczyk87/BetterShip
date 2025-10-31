// Import React library
import React from "react";
// Import the ServicesCards component
import { ServicesCards } from "../components/ServicesCards";

// Define the Services component
export default function Services() {
  return (
    // Section for displaying services with padding and background styling
    <section id="services" className="bg-black pt-20 pb-28">
      <div className="max-w-6xl  mx-auto px-6 ">
        {/* Heading for the services section */}
        <h2 className="text-4xl font-semibold mb-8 text-left ">Our Services</h2>
        <div>
          {/* Render the ServicesCards component */}
          <ServicesCards />
        </div>
      </div>
    </section>
  );
}
