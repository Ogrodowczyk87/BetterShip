import React from 'react'
import { ServicesCards } from '../components/ServicesCards'

export default function Services(){
  return (
    <section id="services" className='bg-black'>
      <div className="max-w-6xl  mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-left">Our Services</h2>
       <div >
        <ServicesCards/>
        </div>
      </div>
    </section>
  )
}
