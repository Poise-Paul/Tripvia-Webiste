import React from "react";
import img4 from "../public/image 4.png";
import img5 from "../public/image 5.png";
import img6 from "../public/Group 9.png";
import Image from "next/image";

const features = [
  {
    img: img4,
    heading: "Search & Compare Flights",
    text: "Real-time results across airlines",
  },
  {
    img: img5,
    heading: "Booking & Customization",
    text: "Bookings Seats, meals, baggage, and more",
  },
  {
    img: img6,
    heading: "Payments & Wallet",
    text: "Multiple methods including local options",
  },
];

function KeyFeatures() {
  return (
    <section className="px-8 bg-white mt-12 py-6" id="features">
      <h1
        className="text-center text-3xl capitalize md:text-4xl text-black font-semibold
      "
      >
        Key <span className="text-[#E85D04]">Features</span>
      </h1>
      <p className="mt-2 text-black text-center w-full md:w-[600px] mx-auto text-sm">
        Tripvia offers everything you need to book flights with ease—from
        powerful search and customization tools to secure payments and
        post-booking support. Designed for speed, simplicity, and control, every
        feature puts the traveler first.
      </p>

      <div
        className="my-10 flex flex-col md:flex-row flex-wrap justify-around
              gap-4"
      >
        {features.map((sec, index) => (
          <div
            key={index}
            className="flex flex-col gap-2.5
                    justify-center text-center items-center w-full md:w-[350px]"
          >
            <Image src={sec.img} alt="" className="w-[80%]" />
            <h1 className="text-xl font-semibold text-black">{sec.heading}</h1>
            <p className="text-black font-400 text-[15px]">{sec.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="bg-[#E85D04]
                  text-white px-6 py-2 mx-auto text-sm rounded-[25px] shadow-md"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default KeyFeatures;
