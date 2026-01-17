import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <Testimonial />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
