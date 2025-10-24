import React from 'react'
import { ServicesCards } from '../components/ServicesCards'

export default function Services(){
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl  mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-left">Our Services</h2>
       <div >
        <ServicesCards/>
        </div>
      </div>
    </section>
  )
}
// feat: Update card layout and improve responsiveness

// - Adjusted card layout to display in a single row using Tailwind CSS.
// - Added responsive design to ensure cards stack on smaller screens.
// - Refactored `ServicesCards` component for better readability and maintainability.
// - Fixed TypeScript issues by adding proper type declarations.
// - Added missing type definitions for `Utils.js` to resolve implicit `any` errors.
// - Improved overall styling and alignment of cards.