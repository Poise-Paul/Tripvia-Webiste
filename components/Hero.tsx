"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import hero from "../public/beautiful-collage-travel-concept.png";
import img from "../public/align-line.png";
import Navbar from "./navbar";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FBF5B1] overflow-hidden">
      <Navbar />

      {/* Main content wrapper */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row 
        items-center justify-center gap-12 px-6 md:px-12 lg:px-14 min-h-[calc(100vh-80px)]"
      >
        {/* Left side text */}
        <div
          className="flex-1 max-w-xl text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-black">Switch to</span>
            Flight Mode
          </h1>

          <p
            className="text-lg md:text-2xl text-gray-800 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Track, book, and save your trips —{" "}
            <br className="hidden md:block" /> effortlessly.
          </p>

          <button
            className="bg-[#E85D04] hover:bg-[#d24f00] text-white px-8 py-3 text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Join Us Today
          </button>
        </div>

        {/* Right side image */}
        <div
          className="flex-1 relative flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <Image
            src={hero}
            alt="Suitcase"
            className="w-[280px]
             sm:w-[350px] md:w-[480px] lg:w-[480px] drop-shadow-2xl transform md:hover:scale-105 transition duration-500"
          />
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#E85D04]/30 to-[#FFB703]/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Decorative line */}
      <Image
        src={img}
        alt="decorative line"
        className="absolute right-0 bottom-0 w-[650px] opacity-70 pointer-events-none"
        data-aos="fade-up"
        data-aos-delay="600"
      />
    </section>
  );
}
