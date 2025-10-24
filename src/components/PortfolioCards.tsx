import React from 'react'
import { PortfolioCard } from '../types/types'
import portfolioImage from '../Assets/portfolio.jpg'


export const cards = [
    {id: 1, image: portfolioImage, description: "Case study"},
    {id: 2, image: portfolioImage, description: "Case study"},
    {id: 3, image: portfolioImage, description: "Case study."},
    {id: 4, image: portfolioImage, description: "Case study."},
   ]

export const PortfolioCards = () => {
   return (
    <div >{cards.map((card: PortfolioCard  ) => (
        <div key={card.id} className="p-6 mb-2 bg-slate-800 rounded-lg shadow">
            <img className='h-[100px] w-[100px]' src={portfolioImage} alt="Portfolio Image" />
            <p>{card.description}</p>
        </div>
    ))}</div>
    

    )
}

