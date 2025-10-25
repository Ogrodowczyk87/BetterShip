import React from 'react'
import LogoLoop from '../components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Navigation from '../components/Navigation';
import LightRays from '../components/LightRays';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];



export default function Hero() {
  
  return (
<section className="relative overflow-hidden py-20">
  <div className="pointer-events-none absolute inset-0 z-0">
    <LightRays
      className="w-full h-full"
      raysOrigin="top-center"
      raysColor="#00ffff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
    />
  </div>
  <Navigation />
 
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">We Build modern web applications.</h1>
        <p className="text-lg text-white mb-8">Get a quote, communicate contact, and start your project today.</p>
        <div className="flex justify-left gap-4">
          <a href="#contact" className="px-6 py-3 bg-secondary text-white rounded-md">Get a quote</a>
          <a href="#portfolio" className="px-6 py-3 bg-secondary border border-gray-200 rounded-md">View Portfolio</a>
        </div>

      {/* miejsce na reactbits component logo loop */}
      <LogoLoop className='mt-10'       
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        // fadeOut
        // fadeOutColor="#FF0000"
        ariaLabel="Technology partners"
      />
      {/* miejsce na reactbits component logo loop */}
      </div>
    
    </section>
  )
}

