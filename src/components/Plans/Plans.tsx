"use client";

import { useState } from "react";
import { PricePlans } from "./PricePlans";

export default function Plans() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="py-20 md:py-56">
      <h2 className="text-4xl font-bold text-center">
        Here you have all <br />
        <span className="text-emerald-400"> our plans</span>
      </h2>
      <p className="max-w-lg mx-auto mt-10 text-center">
        Discover flexible marketing solutions tailored to your business goals.
        Choose the plan that fits your needs and start growing today.
      </p>

      <div className="grid items-center justify-center max-w-sm grid-cols-3 mx-auto my-10 overflow-hidden">
        <span className="text-xl font-bold text-center">Monthly</span>
        <div className="flex justify-center">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-emerald-500 
             peer-checked:after:translate-x-full peer-checked:after:border-white 
             after:content-[''] after:absolute after:top-0.5 after:left-0.5 
             after:bg-white after:border-gray-400 after:border 
             after:rounded-full after:h-5 after:w-5 after:transition-all 
             peer-checked:bg-emerald-500 cursor-pointer"
            />
          </label>
        </div>
        <span className="text-xl font-bold text-center">Annual</span>
      </div>
      <PricePlans isMonthly={isMonthly} />
    </div>
  );
}
