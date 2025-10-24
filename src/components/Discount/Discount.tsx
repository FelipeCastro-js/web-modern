import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export function Discount() {
  return (
    <MotionTransition>
      <div className="grid items-center px-5 py-10 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
        <div>
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Grow your business <br /> with powerful marketing
          </h2>
          <p className="my-10 text-white/90">
            We help brands connect with their audience through creative
            campaigns, data-driven strategies, and impactful visuals that drive
            measurable results.
          </p>
          <button className="px-8 py-3 font-semibold text-emerald-500 bg-white rounded-xl hover:bg-emerald-50 transition">
            Get your discount
          </button>
        </div>
        <Image
          src="/assets/discount.png"
          alt="Discount image"
          width={350}
          height={350}
          className="mx-auto"
        />
      </div>
    </MotionTransition>
  );
}
