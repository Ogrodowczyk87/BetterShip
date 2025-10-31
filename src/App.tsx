import React from "react";
import Hero from "./Pages/Hero";
import Services from "./Pages/Services";
import Features from "./Pages/Features";
import Testimonial from './Pages/Testimonial'
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import LightRays from "./components/LightRays";

export default function App() {
  return (
    <div className="relative overflow-hidden py-5 bg-black">
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
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <Testimonial />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
