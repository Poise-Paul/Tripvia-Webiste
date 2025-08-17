import Image from "next/image";
import hero from "../public/beautiful-collage-travel-concept.png"
import img from "../public/align-line.png"

// Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen   bg-[#FBF5B1]
     flex  items-center">
      <div className="container mx-auto flex flex-col
       md:flex-row items-center justify-around mt-20 md:mt-0  px-8">
        {/* Left side text */}
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-7xl tracking-[3px] font-bold mb-4">Switch to flight mode</h1>
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-6">
            Track, book and save your trips, effortlessly.
          </p>
          <button className="bg-[#E85D04]
           text-white px-6 py-2 text-sm rounded-[25px] shadow-md">
            Join Us Today
          </button>
        </div>

        {/* Right side image */}
        <div className="mt-10 z-10 md:mt-0">
          <Image src={hero} alt="Suitcase" className="w-[400px]" />
        </div>
      </div>
      <Image
  src={img}
  alt="decorative line"
  className="absolute right-0 bottom-0 w-[650px] z-0"
/>

    </section>
  );
}
