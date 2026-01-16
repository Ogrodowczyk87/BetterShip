// Import necessary libraries and assets
import React from "react";
import Image from "../Assets/peter.jpg";
import { IoStar } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

// Define the Features component
export default function Features() {
  return (
    // Main section for the Features component
    <section id="features" className="bg-[#f8f5f2] pb-[38px]">
      {/* Section heading */}
      <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
      <div className="grid grid-cols-2 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center pr-3">
          {/* Profile image and details */}
          <img
            src={Image}
            alt="Peter Graff"
            className="w-[90px] h-[90px] mb-6 rounded-full"
          />
          <h4 className="text-2xl">Peter Graff</h4>
          <p className="text-slate-500">CEO & Founder</p>
          {/* Star ratings */}
          <div className="flex mt-2 mb-4 content-center">
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
          {/* Feature cards */}
          {[
            { title: "Fast delivery" },
            { title: "Accessibility" },
            { title: "SEO optimization" },
            { title: "Responsive design" },
            { title: "Customizable" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-1 p-4 border h-[52px] w-[150px] border-slate-200 bg-white/80 px-6 py-3 rounded-md text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-emerald-200 box-content"
            >
              <IoMdCheckmark className="w-5 h-5 mr-1 shrink-0 text-emerald-600" />
              <h3 className="font-semibold leading-none">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
