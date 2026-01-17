import React from "react";
import Home from "./Pages/Home";
import LightRays from "./components/LightRays";

export default function App() {
  return (
    <div className="relative overflow-hidden py-5 bg-[#f8f5f2] text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0">
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
      <Home />
    </div>
  );
}
