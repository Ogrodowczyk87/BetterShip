// Import React library
import React from "react";

// Define the Testimonial component
export default function Testimonial() {
  return (
    // Section for testimonials with padding and background styling
    <section className="py-16 bg-[#f8f5f2]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading for the testimonial section */}
        <h2 className="text-5xl font-semibold mb-6">Client feedback</h2>
        <div className="bg-white/85 border border-slate-200 p-6 rounded-lg shadow-sm">
          <p className="text-lg text-slate-700">
            Real testimonials and case studies will appear here once new projects
            ship. In the meantime, check the portfolio section for selected work.
          </p>
        </div>
      </div>
    </section>
  );
}
