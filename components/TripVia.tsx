"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import img1 from "../public/businessman-with-phone-trolley-bag-standing-airport-terminal.jpg";
import img2 from "../public/young-tourists-couple-with-equipment.jpg";
import img3 from "../public/man-running-with-brown-suitcase.jpg";
import img4 from "../public/beautiful-collage-travel-concept.png";

// TripVia Data
const tripvia = [
  {
    img: img1,
    heading: "Business Travellers",
    text: "Speed, reliability, and customization",
  },
  {
    img: img2,
    heading: "Adventure Seekers",
    text: "Explore new places effortlessly",
  },
  {
    img: img3,
    heading: "Frequent Flyers",
    text: "Track and manage every trip with ease",
  },
  {
    img: img4,
    heading: "Vacation Lovers",
    text: "Plan, book, and relax — we’ve got you covered",
  },
];

function TripVia() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
    autoplay: true, // autoplay on
    autoplaySpeed: 3000,
  };

  return (
    <section className="px-4 md:px-12 bg-white mt-12 py-12 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">
          Who <span className="text-[#E85D04]">TripVia</span> is For
        </h1>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Whether you're flying for work or chasing adventure, Tripvia is built
          for:
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-12">
        <Slider {...settings}>
          {tripvia.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[350px]">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h2 className="text-lg md:text-xl font-semibold">
                    {item.heading}
                  </h2>
                  <p className="text-sm opacity-90">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-[#E85D04] text-white px-8 py-3 text-sm md:text-base font-medium rounded-full shadow-md hover:bg-[#d24f00] transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default TripVia;
