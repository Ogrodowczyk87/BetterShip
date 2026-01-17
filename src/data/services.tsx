import React from "react";
import { SiAmp } from "react-icons/si";
import { GiArrowsShield, GiCharging } from "react-icons/gi";
import type { ServiceCard } from "../types/types";

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    Icon: <SiAmp className="w-12 h-12" />,
    title: "MVP",
    description:
      "Development of Minimum Viable Product to validate your idea quickly.",
  },
  {
    id: 2,
    Icon: <GiArrowsShield className="w-12 h-12" />,
    title: "Audi & Consulting",
    description: "Short description about Audi & Consulting service.",
  },
  {
    id: 3,
    Icon: <GiCharging className="w-12 h-12" />,
    title: "Maintenance",
    description: "Short description about Maintenance service.",
  },
];
