"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from "../public/businessman-with-phone-trolley-bag-standing-airport-terminal.jpg";
import img2 from "../public/young-tourists-couple-with-equipment.jpg";
import img3 from "../public/man-running-with-brown-suitcase.jpg";
import img4 from "../public/beautiful-collage-travel-concept.png";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="px-6 md:px-12 bg-white mt-12 py-10">
      <h1 className="text-center text-3xl md:text-4xl text-black font-semibold">
        Who <span className="text-[#E85D04]">TripVia</span> is For
      </h1>
      <p className="mt-2 text-black text-center w-full md:w-[600px] mx-auto text-sm">
        Whether you're flying for work or chasing adventure, Tripvia is built
        for:
      </p>

      {/* Carousel Section */}
      <div className="mt-10">
        <Slider {...settings}>
          {tripvia.map((item, index) => (
            <div key={index} className="px-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                {/* Background Image */}
                <Image
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-[350px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 p-4 text-white">
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
      <div className='text-center mt-10'>
                <button className="bg-[#E85D04]
                  text-white px-6 py-2 mx-auto text-sm rounded-[25px] shadow-md">
                   Learn More
                 </button>
             </div>
    </section>
  );
}

export default TripVia;
