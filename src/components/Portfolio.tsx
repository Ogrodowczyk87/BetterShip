import React from 'react'

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">Project {i+1}</div>
              <div className="p-4">
                <h3 className="font-bold">Project {i+1}</h3>
                <p className="text-gray-600">Short description of the project.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
