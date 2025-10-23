import React from 'react'

export default function Services(){
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-left">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Design","Development","Marketing"].map((t,i)=> (
            <div key={i} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-2">{t}</h3>
              <p className="text-gray-600">Short description about {t} service.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
