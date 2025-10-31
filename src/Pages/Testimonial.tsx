// Import React library
import React from "react";
import { IoStar } from "react-icons/io5";

// Define the Testimonial component
export default function Testimonial() {
  return (
    // Section for testimonials with padding and background styling
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading for the testimonial section */}
        <h2 className="text-5xl font-semibold mb-6">What clients say</h2>
        {/* Blockquote for the client testimonial */}
        <blockquote className="bg-slate-900/45 p-6 mb-4 rounded-lg shadow">
          "This product changed our business." — Client
          <div className="flex mt-2 mb-4 content-center">
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500" />
                    </div>
        </blockquote>
          <blockquote className="bg-slate-900/45 p-6 mb-4 rounded-lg shadow">
          "Amazing service!" — Client
          <div className="flex mt-2 mb-4 content-center">
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500 mr-1" />
                      <IoStar className="text-yellow-500" />
                    </div>
        </blockquote>
        <blockquote className="bg-slate-900/45 p-6 mb-4 rounded-lg shadow">
          "Exceptional quality!" — Client
          <div className="flex mt-2 mb-4 content-center">
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500" />
          </div>
        </blockquote>
        <blockquote className="bg-slate-900/45 p-6 rounded-lg shadow">
          "Highly recommend to everyone!" — Client
          <div className="flex mt-2 mb-4 content-center">
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500" />
          </div>
        </blockquote>
      </div>
    </section>
  );
}
