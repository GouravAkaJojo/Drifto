import Porsche from "./components/CarsSection/Porsche";
import Subaru from "./components/CarsSection/Subaru";
import Gallery from "./components/CarsSection/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Subaru />
      <Porsche />
      <Gallery />
      <div className="h-screen mix-blend-difference bg-white" />
    </div >
  );
}