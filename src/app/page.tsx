import Gallery from "./Gallery";
import Hero from "./Hero";
import Porsche from "./CarsSection/Porsche";
import Subaru from "./CarsSection/Subaru";

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