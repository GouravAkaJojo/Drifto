import Porsche from "./components/CarsSection/Porsche";
import Subaru from "./components/CarsSection/Subaru";
import Gallery from "./components/CarsSection/Gallery";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <div className="">
      <Hero />
      <Subaru />
      <Porsche />
      <Gallery />
      <div className="h-screen" />
    </div >
  );
}