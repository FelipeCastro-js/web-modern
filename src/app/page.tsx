import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Navbar } from "@/components/Navbar/Navbar";
import { Overview } from "@/components/Overview";
import Plans from "@/components/Plans/Plans";
import { Practice } from "@/components/Practice";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
      <div className="max-w-6xl mx-auto">
        <About />
        <Practice />
        <Plans />
      </div>
    </main>
  );
}
