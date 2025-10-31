// Import React library
import React from "react";

// Define the Testimonial component
export default function Testimonial() {
  return (
    // Section for testimonials with padding and background styling
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading for the testimonial section */}
        <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
        {/* Blockquote for the client testimonial */}
        <blockquote className="bg-white p-6 rounded-lg shadow">
          "This product changed our business." — Client
        </blockquote>
      </div>
    </section>
  );
}
