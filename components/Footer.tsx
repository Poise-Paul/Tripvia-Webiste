"use client";
import React, { useEffect } from "react";
import logo from "../public/Tripvia-logo.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import appleStore from "../public/apple-store.png";
import googlePlay from "../public/google-play.png";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-white mt-10">
      <section
        className="bg-[#D8662A] 
        px-8 md:px-16 py-12 text-white text-sm grid grid-cols-1 md:grid-cols-3 gap-10"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-2" data-aos="fade-right">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">How It Works</p>
          <p className="cursor-pointer hover:underline">Key Features</p>
          <p className="cursor-pointer hover:underline">FAQ’s</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2" data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="cursor-pointer hover:underline">Help Center</p>
          <p className="cursor-pointer hover:underline">Contact Us</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>

        {/* Column 3 - App Downloads */}
        <div className="flex flex-col gap-4" data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">Get the App</h3>
          <div className="flex flex-col gap-3">
            <Image
              src={appleStore}
              alt=""
              className="w-[150px] rounded-[10px]"
            />
            <Image
              src={googlePlay}
              alt=""
              className="w-[150px] rounded-[10px]"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 border-t border-gray-200"
        data-aos="fade-up"
      >
        <Image
          src={logo}
          alt="Tripvia Logo"
          className="w-[90px] md:w-[110px]"
        />
        <p className="text-xs md:text-sm uppercase text-gray-700 font-medium text-center mt-3 md:mt-0">
          TERMS · PRIVACY © TRIPVIA {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
