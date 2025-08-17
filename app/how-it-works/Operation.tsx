"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const operations = [
  {
    number: 1,
    heading: "Start at the airport",
    text: "Simply search from your nearest airport and we’ll handle the rest. No complicated filters — just enter your destination or let us surprise you.",
  },
  {
    number: 2,
    heading: "Watch the deals roll in",
    text: "Our smart system scans hundreds of airlines and booking sites to deliver the best flight options, personalized for your travel style.",
  },
  {
    number: 3,
    heading: "Then book it",
    text: "Found the perfect deal? Book instantly with a single tap and get ready to pack your bags. Saving money on flights has never been this easy.",
  },
];

function Operation() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="px-6 md:px-20 lg:px-28 bg-white my-20 py-12"
      data-aos="fade-up"
    >
      {/* Title */}
      <h1
        className="text-center text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mb-12 leading-snug"
        data-aos="fade-up"
      >
        Let the best flights find you
      </h1>

      {/* Operations grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {operations.map((operation, index) => (
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-2xl bg-[#FFF8F0] shadow-sm hover:shadow-lg transition-all duration-300"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Number bubble */}
            <p className="bg-[#E85D04] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold shadow-md">
              {operation.number}
            </p>

            {/* Heading */}
            <h3 className="text-black font-semibold text-xl md:text-2xl">
              {operation.heading}
            </h3>

            {/* Text */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {operation.text}
            </p>
          </div>
        ))}
      </div>
      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <button className="bg-[#E85D04] text-white px-6 py-2 mx-auto text-sm rounded-[25px] shadow-md">
          Join Us Today
        </button>
      </div>
    </section>
  );
}

export default Operation;
