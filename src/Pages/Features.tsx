import React from 'react'

export default function Features(){
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'Fast', desc:'Blazing fast performance.'},
            {title:'Reliable', desc:'99.99% uptime.'},
            {title:'Secure', desc:'Security-first design.'}
          ].map((f,i)=> (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
