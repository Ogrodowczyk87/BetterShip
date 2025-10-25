import React from 'react'
import { ServiceCard } from '../types/types'
import { SiAmp } from "react-icons/si";
import { GiArrowsShield } from "react-icons/gi";
import { GiCharging } from "react-icons/gi";



export  const cards = [
     {id: 1,Icon: <SiAmp className='w-12 h-12' />, title: "MVP", description: "Development of Minimum Viable Product to validate your idea quickly."},
    {id: 2, Icon: <GiArrowsShield className='w-12 h-12' />, title: "Audi & Consulting", description: "Short description about Audi & Consulting service."},
    {id: 3, Icon: <GiCharging className='w-12 h-12' />, title: "Maintenance", description: "Short description about Maintenance service."},
   ]

export const ServicesCards = () => {
   
        return (
            <div className="flex flex-wrap justify-center gap-6 items-stretch ">{cards.map((card: ServiceCard) => (
                <div key={card.id} className="grid grid-cols-2 items-center p-6 bg-gray-900 rounded-lg shadow text-center h-full w-72 shrink-0">
                    <div className="flex items-center justify-center">{card.Icon}</div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-3xl mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.description}</p>
            </div>
            
        </div>
    ))}</div>
  )
}


