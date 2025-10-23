import React from 'react'

export default function Header() {
  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">BETTERSHIP</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#services" className="text-white">Services</a>
          <a href="#features" className="text-white">Features</a>
          <a href="#portfolio" className="text-white">Portfolio</a>
          <a href="#contact" className="text-white">Contact</a>
        </nav>
        <div className="md:hidden">☰</div>
      </div>
    </header>
  )
}
