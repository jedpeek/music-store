import Featured from "./components/featured";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12 m-4">
      <Hero />
      <Featured />
    </div>
  );
}
