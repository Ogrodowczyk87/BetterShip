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

// Define the Hero component
export default function Hero() {
  return (
    // Main section for the Hero component
    <section className="relative overflow-hidden py-5 bg-transparent text-slate-900">
      {/* Navigation bar */}
      <Navigation />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-left mt-24">
        <header className="flex flex-col items-start md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            {/* Main heading and description */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-12">
              We <span className="text-blue-400">Build</span> modern web <span className="text-blue-400">applications</span>.
            </h1>
            <p className="text-3xl text-slate-600 mb-12">
              Get a quote, communicate contact, and start your project today.
            </p>
          </div>       
          <aside
            className="hidden md:block terminal pt-4 ml-2 pl-2 bg-slate-900 border border-slate-800
          rounded-lg w-[420px] md:w-[670px] h-[300px] md:h-auto text-slate-100"
          >
            {/* Terminal-like UI with a code snippet */}
            <div className="terminal-header pb-4 text-slate-300">
              <span className="bg-red-500/80 h-[10px] w-[10px] rounded-full inline-block ml-2 mr-2"></span>
              <span className="bg-amber-400/80 h-[10px] w-[10px] rounded-full inline-block mr-2"></span>
              <span className="bg-emerald-400/80 h-[10px] w-[10px] rounded-full inline-block mr-2"></span>
              <span className="ml-4 text-sm">App.Jox</span>
              <span className="ml-4 text-slate-500 text-sm">22:10</span>
            </div>
            <div className="grid grid-cols-1 terminal-body pl-2 pr-2 overflow-x-hidden font-mono">
              <div>
                <pre>
                  <code className="text-[10px] text-slate-200">
                    {`const `}
                    <span className="text-sky-300">fetchData</span>
                    {` = async () => {
    `}
                    <span className="text-amber-300">console</span>
                    {`.`}
                    <span className="text-rose-300">log</span>
                    {`("Fetching data from API...");
    const `}
                    <span className="text-emerald-300">response</span>
                    {` = await `}
                    <span className="text-amber-300">fetch</span>
                    {`("https://api.BETTERSHIP.com/data");
    const `}
                    <span className="text-emerald-300">data</span>
                    {` = await `}
                    <span className="text-emerald-300">response</span>
                    {`.json();
    `}
                    <span className="text-amber-300">console</span>
                    {`.`}
                    <span className="text-rose-300">log</span>
                    {`("Data received:", `}
                    <span className="text-emerald-300">data</span>
                    {`);
  };

  `}
                    <span className="text-emerald-300">fetchData</span>
                    {`();`}
                  </code>
                </pre>
              </div>
            </div>
          </aside>
        </header>

        <nav className="flex justify-start gap-4 mb-28">
          {/* Buttons for navigation */}
          <a
            href="#contact"
            className="inline-flex items-center border border-blue-600 bg-blue-600 px-6 py-3 rounded-md text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200/70
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Get a quote
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center border border-blue-600 bg-white px-6 py-3 rounded-md text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-200/70
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            View Case Studies
          </a>
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
