import React from "react";
import IconSVG from "../Assets/check.svg";
import Image from "../Assets/peter.jpg";
import { IoStar } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

export default function Features() {
  return (
    <section id="features" className=" bg-black pb-[38px]">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
      <div className="grid grid-cols-2  max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center pr-3">
          <img src={Image} className="w-[90px] h-[90px] mb-6 rounded-full" />
          <h4 className="text-2xl">Peter Graff</h4>
          <p className="text-gray-500">CEO & Founder</p>
          <div className="flex mt-2 mb-4 content-center">
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500 mr-1" />
            <IoStar className="text-yellow-500" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
          {[
            { title: "Fast delivery" },
            { title: "Accessibility" },
            { title: "SEO optimization" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-1 p-4 border rounded-lg h-[52px] w-[150px] bg-transparent"
            >
              <IoMdCheckmark className="w-5 h-5 mr-1 shrink-0 text-blue-500" />
              <h3 className="font-semibold leading-none">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
