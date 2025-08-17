import Navbar from "@/components/navbar";
import React from "react";

type HeroProps = {
  text: string;
};

function Hero({ text }: HeroProps) {
  return (
    <section className="relative min-h-[30vh] bg-[#D8662A] overflow-hidden">
      <Navbar
        color="text-white"
        active="text-gray-500"
        sideBarColor="text-gray-700"
      />

      <div className="flex items-center justify-center">
        <h1 className="text-white mt-5 text-3xl font-semibold ">{text}</h1>
      </div>
    </section>
  );
}

export default Hero;
