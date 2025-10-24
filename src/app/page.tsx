import { Features } from "@/components/Features";
import { Navbar } from "@/components/Navbar/Navbar";
import { Overview } from "@/components/Overview";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
    </main>
  );
}
