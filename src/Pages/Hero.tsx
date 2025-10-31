// Import necessary libraries and components
import React from "react";
import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Navigation from "../components/Navigation";

// Define an array of technology logos with their respective links
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

// Alternative array with image-based logos
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

// Define the Hero component
export default function Hero() {
  return (
    // Main section for the Hero component
    <section className="relative overflow-hidden py-5">
      {/* Navigation bar */}
      <Navigation />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-left mt-24">
        <header className="flex flex-col items-start md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            {/* Main heading and description */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-12">
              We Build modern web applications.
            </h1>
            <p className="text-3xl text-white mb-12">
              Get a quote, communicate contact, and start your project today.
            </p>
          </div>       
          <aside
            className="hidden md:block terminal pt-4 ml-2 pl-2 bg-slate-500/20 border border-slate-400/30 
          rounded-lg shadow-lg w-[420px] md:w-[670px] h-[300px] md:h-auto"
          >
            {/* Terminal-like UI with a code snippet */}
            <div className="terminal-header pb-4">
              <span className="bg-red-600 h-[12px] w-[12px] rounded-full inline-block ml-2 mr-2"></span>
              <span className="bg-yellow-500 h-[12px] w-[12px] rounded-full inline-block mr-2"></span>
              <span className="bg-green-500 h-[12px] w-[12px] rounded-full inline-block mr-2"></span>
              <span className="ml-4">App.Jox</span>
              <span className="ml-4 text-slate-500">22:10</span>
            </div>
            <div className="grid grid-cols-1 terminal-body pl-2 pr-2 overflow-x-hidden">
              <div>
                <pre>
                  <code className="text-[10px]">
                    {`const `}
                    <span className="text-blue-400">fetchData</span>
                    {` = async () => {
    `}
                    <span className="text-yellow-400">console</span>
                    {`.`}
                    <span className="text-purple-400">log</span>
                    {`("Fetching data from API...");
    const `}
                    <span className="text-green-400">response</span>
                    {` = await `}
                    <span className="text-yellow-400">fetch</span>
                    {`("https://api.BETTERSHIP.com/data");
    const `}
                    <span className="text-green-400">data</span>
                    {` = await `}
                    <span className="text-green-400">response</span>
                    {`.json();
    `}
                    <span className="text-yellow-400">console</span>
                    {`.`}
                    <span className="text-purple-400">log</span>
                    {`("Data received:", `}
                    <span className="text-green-400">data</span>
                    {`);
  };

  `}
                    <span className="text-green-400">fetchData</span>
                    {`();`}
                  </code>
                </pre>
              </div>
            </div>
          </aside>
        </header>

        <nav className="flex justify-left gap-4 mb-28">
          {/* Buttons for navigation */}
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center border border-slate-900 bg-slate-500/20 px-6 py-3 rounded-md text-white hover:bg-slate-500/30 hover:text-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
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
            className="inline-flex items-center border border-slate-900 bg-slate-500/20 px-6 py-3 rounded-md text-white hover:bg-slate-500/30 hover:text-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            View Portfolio
          </button>
        </nav>

        {/* Logo loop showcasing technology partners */}
        <LogoLoop
          className="mt-10"
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
