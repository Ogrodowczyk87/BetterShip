import React from "react";
import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Navigation from "../components/Navigation";
import Image from "../Assets/Portfolio2.jpg";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-5 ">
      <Navigation />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-left mt-24">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-12">
              We Build modern web applications.
            </h1>
            <p className="text-lg text-white mb-12">
              Get a quote, communicate contact, and start your project today.
            </p>
          </div>
          <div>
            <img src={Image} className="hidden md:block w-148 mb-6" />
          </div>
        </div>
        <div className="flex justify-left gap-4 mb-28">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center border border-white-1 px-6 py-3 rounded-md text-white hover:opacity-90 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            "
          >
            Get a quote
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center border border-white-1 px-6 py-3 rounded-md text-white hover:opacity-90 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          "
          >
            View Portfolio
          </button>
        </div>

        <LogoLoop
          className="mt-10"
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#FF0000"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
