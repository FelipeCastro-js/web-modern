import { dataSocialNetwork } from "@/data/dataSocialNetwork";
import Image from "next/image";
import Link from "next/link";

export function Overview() {
  return (
    <div
      id="overview"
      className="p-5 mt-3 bg-linear-to-r from-green-500 via-emerald-500 to-teal-400 md:px-24 md:py-52"
    >
      <div className="items-center md:grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl">
            Develop your skills <br /> for the future
          </h1>
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            molestiae, sed harum cum aspernatur ipsum?
          </p>
          <div className="flex justify-start gap-4 my-10">
            {dataSocialNetwork.map(({ id, icon, name, link }) => (
              <Link href={link} key={id} target="_blank" rel="noreferrer">
                <Image
                  src={`/svg/${icon}.svg`}
                  alt={name}
                  width="40"
                  height="40"
                />
              </Link>
            ))}
          </div>
          <div>
            <button className="px-8 py-3 mr-10 mb-5 text-white font-semibold rounded-xl bg-linear-to-r from-green-500 via-emerald-500 to-teal-400 hover:opacity-90 transition">
              Start now
            </button>
            <button className="px-8 py-3 mr-10 mb-5 text-emerald-600 font-semibold rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition">
              I have a coupon
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/overview2.png"
            alt="overview"
            width="350"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
