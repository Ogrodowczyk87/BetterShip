import React from 'react'
import { ServiceCard } from '../types/types'


export  const cards = [
     {id: 1, title: "Design", description: "Short description about Design service."},
    {id: 2, title: "Development", description: "Short description about Development service."},
    {id: 3, title: "Marketing", description: "Short description about Marketing service."},
   ]

export const ServicesCards = () => {
   
    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{cards.map((card: ServiceCard) => (
        <div key={card.id} className="p-6 bg-slate-800 rounded-lg shadow">
            <h3 className="font-bold mb-2">{card.title}</h3> 
            <p>{card.description}</p>
        </div>
    ))}</div>
  )
}
