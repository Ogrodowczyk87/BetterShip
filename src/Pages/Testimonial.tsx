import React from "react";

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
        <blockquote className="bg-white p-6 rounded-lg shadow">
          "This product changed our business." — Client
        </blockquote>
      </div>
    </section>
  );
}
