import React from 'react'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
// import Partners from './Pages/Partners'
import Services from './Pages/Services'
import Features from './Pages/Features'
// import Testimonial from './Pages/Testimonial'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import LightRays from './components/LightRays'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>

       <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        {/* <Partners /> */}
        <Features />
        {/* <Testimonial /> */}
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
