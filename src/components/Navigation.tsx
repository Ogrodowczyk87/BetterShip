// Import necessary libraries
import React, { useState } from "react";

// Define the Navigation component
export default function Navigation() {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Header section containing the navigation bar
    <header className="shadow-sm mb-5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or brand name */}
        <div className="text-3xl font-bold">BETTERSHIP</div>
        {/* Desktop navigation menu */}
        <nav className="space-x-4 text-2xl hidden md:flex md:mr-8">
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
        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toogle navigation menu"
        >
          ☰
        </button>
      </div>
      {/* Mobile navigation menu */}
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
