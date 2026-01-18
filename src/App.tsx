import React from "react";
import Home from "./Pages/Home";
import LightRays from "./components/LightRays";

export default function App() {
  return (
    <div className="relative overflow-hidden py-5 bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0">
        <LightRays
          className="w-full h-full opacity-15 mix-blend-multiply"
          raysOrigin="top-center"
          raysColor="#bfdbfe"
          raysSpeed={0.45}
          lightSpread={1.6}
          rayLength={2.2}
          followMouse
          mouseInfluence={0.12}
          noiseAmount={0.0}
          distortion={0.03}
          fadeDistance={2.6}
        />
      </div>
      <Home />
    </div>
  );
}
