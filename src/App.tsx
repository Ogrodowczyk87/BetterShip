import React from 'react'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import Partners from './components/Partners'
import Services from './Pages/Services'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Partners />
        <Features />
        <Testimonial />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
