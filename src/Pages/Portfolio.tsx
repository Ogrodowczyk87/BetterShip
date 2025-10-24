import React from 'react'
import { PortfolioCards } from '../components/PortfolioCards'

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-left">Portfolio</h2>
       <div>
        <PortfolioCards/> 
       </div>
        
      </div>
    </section>
  )
}
