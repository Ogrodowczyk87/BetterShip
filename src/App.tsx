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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
