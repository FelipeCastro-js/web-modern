import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export function About() {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 lg:py-56">
      <MotionTransition>
        <Image
          src="/assets/about.png"
          alt="About Image"
          width="600"
          height="400"
        />
      </MotionTransition>
      <div className="md:pr-20">
        <h2 className="mb-10 text-4xl font-bold">
          We have been <br />{" "}
          <span className="text-emerald-400">improving our products</span>
          <br /> for years
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          eligendi molestiae cupiditate molestias
        </p>
        <button className="px-8 py-3 bg-emerald-400 rounded-xl text-white">
          Start now
        </button>
      </div>
    </div>
  );
}
