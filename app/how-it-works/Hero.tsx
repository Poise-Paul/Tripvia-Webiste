import Navbar from "@/components/navbar";
import React from "react";
import logo from "../../public/Tripvia Logo 2.png";

type HeroProps = {
  text: string;
  subtext?: string;
};

function Hero({ text, subtext }: HeroProps) {
  return (
    <section className="relative min-h-[30vh] bg-[#D8662A] overflow-hidden">
      <Navbar color="text-white" sideBarColor="text-gray-700" logoImg={logo} />

      <div className="flex items-center flex-col gap-2.5 justify-center">
        <h1 className="text-white mt-5 text-5xl md:text-6xl font-semibold ">
          {text}
        </h1>
        <p className="text-[14px] w-full md:w-[600px] mb-3 mx-auto text-center text-white font-400 ">
          {subtext}
        </p>
      </div>
    </section>
  );
}

export default Hero;
