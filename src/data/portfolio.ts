import {
  RiShoppingBag3Line,
  RiDashboardLine,
  RiSmartphoneLine,
  RiSpeedUpLine,
} from "react-icons/ri";
import type { PortfolioCard } from "../types/types";

export const portfolioCards: PortfolioCard[] = [
  {
    id: 1,
    title: "E-commerce redesign",
    tag: "Retail",
    result: "+32% conversion",
    Icon: RiShoppingBag3Line,
    accent: "from-amber-100 to-orange-200 text-orange-700",
  },
  {
    id: 2,
    title: "SaaS dashboard UI",
    tag: "B2B SaaS",
    result: "-41% support tickets",
    Icon: RiDashboardLine,
    accent: "from-sky-100 to-blue-200 text-blue-700",
  },
  {
    id: 3,
    title: "Mobile app landing",
    tag: "Product",
    result: "+2.1x trial starts",
    Icon: RiSmartphoneLine,
    accent: "from-emerald-100 to-lime-200 text-emerald-700",
  },
  {
    id: 4,
    title: "Core Web Vitals",
    tag: "Performance",
    result: "95+ Lighthouse",
    Icon: RiSpeedUpLine,
    accent: "from-fuchsia-100 to-pink-200 text-pink-700",
  },
];
