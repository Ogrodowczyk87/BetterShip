import React from 'react'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">We Build modern web applications.</h1>
        <p className="text-lg text-gray-600 mb-8">Get a quote, communicate contact, and start your project today.</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Get a quote</a>
          <a href="#portfolio" className="px-6 py-3 border border-gray-200 rounded-md">View Portfolio</a>
        </div>

      {/* miejsce na reactbits component logo loop */}
      </div>
    </section>
  )
}
