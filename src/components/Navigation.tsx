import React, { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" shadow-sm mb-5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">BETTERSHIP</div>
        <nav className="space-x-4 hidden md:flex md:mr-8">
          <a href="#services" className="text-white ">
            Services
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#portfolio" className="text-white">
            Portfolio
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </nav>
        <button
         className="md:hidden text-white text-3xl"
         onClick={() => setIsOpen(!isOpen)}
         aria-label="Toogle navigation menu"
       >
         ☰
       </button>
      </div>
{isOpen && (
    <nav className="md:hidden bg-black text-white text-3xl space-y-2 px-6 py-4 flex flex-col items-center justify-center">
      <a href="#services" className="block text-white">
        Services
      </a>
      <a href="#features" className="block text-white">
        Features
      </a>
      <a href="#portfolio" className="block text-white">
        Portfolio
      </a>
      <a href="#contact" className="block text-white">
        Contact
      </a>
    </nav>
)}  


    </header>
  );
}
