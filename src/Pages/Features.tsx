import React from 'react'
import IconSVG from '../Assets/check.svg'

export default function Features(){
  return (
    <section id="features" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'Fast delivery' },
            {title:'Accessibility'},
            {title:'Seo optimization'}
          ].map((f,i)=> (
            <div key={i} className="grid grid-cols-2 p-6 border rounded-lg">
              <img src={IconSVG} alt="Feature Icon" className="w-6 h-6 mb-4" />
              <h3 className="font-bold mb-2">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
