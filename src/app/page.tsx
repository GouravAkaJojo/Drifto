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
      <Porsche />
      <Subaru />
      <Gallery />
      <div className="relative">
        <div className="h-screen w-screen bg-transparent" />
        <div className="h-screen absolute top-0 left-0 w-screen z-[-50] mix-blend-difference bg-black text-white flex justify-center items-center text-[15vw]">
          DRIFTO
        </div>
      </div>
    </div >
  );
}