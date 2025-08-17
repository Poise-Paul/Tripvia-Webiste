"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Form() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <form
      className="px-6 md:px-20 lg:px-28 bg-white my-20 py-12"
      data-aos="fade-up"
    >
      <div className="rounded-[12px] bg-[hsl(0,0%,95%)] shadow-lg p-8 md:p-10 max-w-3xl mx-auto">
        {/* Title */}
        <h1
          className="text-3xl font-bold text-black text-center mb-2"
          data-aos="fade-up"
        >
          Contact Us
        </h1>
        <p
          className="text-sm text-gray-600 text-center mb-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We’d love to hear from you. Fill out the form below and we’ll get back
          to you shortly.
        </p>

        {/* Inputs */}
        <div
          className="flex flex-col md:flex-row gap-4 mb-4"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <input
            type="text"
            className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D04] border border-gray-200 bg-white w-full text-gray-700 placeholder-gray-400 shadow-sm"
            placeholder="Name"
          />
          <input
            type="email"
            className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D04] border border-gray-200 bg-white w-full text-gray-700 placeholder-gray-400 shadow-sm"
            placeholder="Email"
          />
        </div>

        {/* Textarea */}
        <div className="mb-6" data-aos="fade-up" data-aos-delay="350">
          <textarea
            className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D04] border border-gray-200 bg-white text-gray-700 placeholder-gray-400 shadow-sm h-40 resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="450"
        >
          <button
            type="submit"
            className="px-8 py-3 bg-[#E85D04] text-white font-semibold rounded-full shadow-md hover:bg-[#d24f00] transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
