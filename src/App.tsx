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
    <div className="relative overflow-hidden py-5 bg-[#f8f5f2] text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-40">
        <LightRays
          className="w-full h-full opacity-100 mix-blend-screen"
          raysOrigin="top-center"
          raysColor="#93c5fd"
          raysSpeed={1.6}
          lightSpread={2.2}
          rayLength={2.8}
          pulsating
          followMouse
          mouseInfluence={0.18}
          noiseAmount={0.0}
          distortion={0.04}
          fadeDistance={2.2}
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
