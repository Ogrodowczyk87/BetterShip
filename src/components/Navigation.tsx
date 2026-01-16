// Import necessary libraries
import React, { useState } from "react";

// Define the Navigation component
export default function Navigation() {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Header section containing the navigation bar
    <header className="bg-white/70 backdrop-blur border-b border-slate-200 mb-5">
      <div className="max-w-6xl text-2xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or brand name */}
        <div className="text-3xl font-bold">BETTERSHIP</div>
        {/* Desktop navigation menu */}
        <nav className="space-x-4 text-2xl hidden md:flex md:mr-8">
          <a href="#services" className="text-slate-700 hover:text-amber-600">
            Services
          </a>
          <a href="#features" className="text-slate-700 hover:text-amber-600">
            Features
          </a>
          <a href="#portfolio" className="text-slate-700 hover:text-amber-600">
            Portfolio
          </a>
          <a href="#contact" className="text-slate-700 hover:text-amber-600">
            Contact
          </a>
        </nav>
        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-slate-900 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          ☰
        </button>
      </div>
      {/* Mobile navigation menu */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden bg-[#f8f5f2] text-slate-900 text-3xl space-y-2 px-6 py-4 flex flex-col items-center justify-center border-t border-slate-200"
        >
          <a href="#services" className="block text-slate-900">
            Services
          </a>
          <a href="#features" className="block text-slate-900">
            Features
          </a>
          <a href="#portfolio" className="block text-slate-900">
            Portfolio
          </a>
          <a href="#contact" className="block text-slate-900">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
