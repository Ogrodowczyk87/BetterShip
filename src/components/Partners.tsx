import React from 'react'

export default function Partners(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="p-4 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400">Logo {i+1}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
