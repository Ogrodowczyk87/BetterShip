import React from 'react'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Build better products faster</h1>
        <p className="text-lg text-gray-600 mb-8">A minimal starter template with React, TypeScript and Tailwind CSS.</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Get started</a>
          <a href="#portfolio" className="px-6 py-3 border border-gray-200 rounded-md">See portfolio</a>
        </div>
      </div>
    </section>
  )
}
