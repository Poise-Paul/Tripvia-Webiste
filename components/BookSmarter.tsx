"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mockUp from "../public/phone-02.png";
import bgImage from "../public/place-flying-sunset-sky.jpg";
import Image from "next/image";

function BookSmarter() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="px-4 md:px-22 flex flex-col lg:flex-row items-stretch
       bg-white mt-10   overflow-hidden max-w-full"
      data-aos="fade-up"
    >
      {/* Left side with background + mockup */}
      <div
        className="w-full lg:w-1/2 flex justify-center items-center py-12"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-right"
      >
        <Image
          src={mockUp}
          alt="App Mockup"
          className="w-[180px] md:w-[220px] lg:w-[260px] drop-shadow-2xl"
        />
      </div>

      {/* Right side with text + button */}
      <div
        className="w-full lg:w-1/2 bg-[#D8662A] p-8 md:p-12 text-white flex flex-col justify-center gap-6"
        data-aos="fade-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Book Smarter. <br /> Fly Better.
        </h1>
        <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-md">
          Track, book and save your trips, effortlessly.
        </p>
        <div>
          <button className="bg-white text-[#D8662A] px-6 py-3 text-sm md:text-base rounded-full shadow-md hover:bg-[#f8f8f8] transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookSmarter;
