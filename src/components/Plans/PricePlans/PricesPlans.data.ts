import { PricesPlansData } from "./PricesPlans.types";

export const pricesPlansData: PricesPlansData = [
  {
    id: 1,
    name: "Basic Photography",
    description:
      "Perfect for small events or personal sessions. Includes a short photoshoot and edited images.",
    primary: false,
    prices: [
      { id: 1, name: "/Monthly", price: "$199" },
      { id: 2, name: "/Yearly", price: "$1,999" },
    ],
    features: [
      { id: 1, name: "2-hour session", active: true },
      { id: 2, name: "15 edited photos", active: true },
      { id: 3, name: "1 location", active: false },
      { id: 4, name: "Online gallery delivery", active: false },
    ],
  },
  {
    id: 2,
    name: "Premium Photography",
    description:
      "Ideal for weddings, corporate events, or brand shoots. Extended coverage with more edits.",
    primary: true,
    prices: [
      { id: 1, name: "/Monthly", price: "$499" },
      { id: 2, name: "/Yearly", price: "$4,999" },
    ],
    features: [
      { id: 1, name: "6-hour session", active: true },
      { id: 2, name: "50 edited photos", active: true },
      { id: 3, name: "Up to 3 locations", active: true },
      { id: 4, name: "USB + online gallery delivery", active: false },
    ],
  },
  {
    id: 3,
    name: "Full Marketing Package",
    description:
      "Comprehensive marketing support including photography, content creation, and ad management.",
    primary: false,
    prices: [
      { id: 1, name: "/Monthly", price: "$899" },
      { id: 2, name: "/Yearly", price: "$8,999" },
    ],
    features: [
      { id: 1, name: "Professional photoshoot (4 hours)", active: true },
      { id: 2, name: "20 custom social media posts", active: true },
      { id: 3, name: "Ad campaign setup & monitoring", active: true },
      { id: 4, name: "Monthly analytics report", active: true },
    ],
  },
];
