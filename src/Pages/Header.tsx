import React from 'react'

export default function Header() {
  return (
    <header className="bg-secondary shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">BETTERSHIP</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="md:hidden">☰</div>
      </div>
    </header>
  )
}
