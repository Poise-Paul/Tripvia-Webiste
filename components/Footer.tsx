import React from "react";
import logo from "../public/Tripvia-logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white mt-10">
      <section className="bg-[#D8662A] px-8 md:px-16 py-12 text-white text-sm grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">How It Works</p>
          <p className="cursor-pointer hover:underline">Key Features</p>
          <p className="cursor-pointer hover:underline">FAQ’s</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="cursor-pointer hover:underline">Help Center</p>
          <p className="cursor-pointer hover:underline">Contact Us</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>

        {/* Column 3 - App Downloads */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Get the App</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-black px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M318.7 268.7c-.2-37.9 16.7-66.5 51-87.5-19.2-27.9-48.4-43.6-87.6-47.3-36.7-3.5-77.6 21.6-92 21.6-15.1 0-55.8-20.9-86.4-20.3-63.2 1-129.9 38.3-129.9 114.4 0 26.2 9.6 53.4 28.7 81.6 26.1 37.9 60.9 81.9 111.4 80.2 28.2-1.1 48.1-19.5 84.6-19.5 35.7 0 54.6 19.5 86.4 19 52.6-.8 82.8-45.5 108.1-83.7-64.7-31.1-93.7-99.4-93.3-158.5zM252.4 82.7c26.1-31.6 43.7-75.9 38.9-120.7-37.4 1.5-82.7 25.4-109.8 57-23.9 27.5-44.9 72.1-39.3 114.6 41.9 3.2 84.2-20.4 110.2-51z" />
              </svg>
              <span className="text-xs leading-tight">
                Download on <br />
                <span className="font-semibold text-sm">App Store</span>
              </span>
            </a>

            <a
              href="#"
              className="bg-black px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="30 336.7 120.9 129.2"
                className="w-5 h-5 fill-white"
              >
                <path d="M153.1 366.3L127 352.2c-4.5-2.5-10-1-12.6 3.5L92.2 407l24.6 14.1c5.3 3.1 12 1.3 15.1-4l22.8-39.4c2.6-4.5 1-10-3.6-12.6zm-44.6 81.4l-24.6-14.1-22.7 39.4c-2.6 4.5-1 10 3.6 12.6l26.1 14.1c4.5 2.5 10 1 12.6-3.5l22.8-39.4c3.1-5.3 1.3-12-4-15.1zm0-27.3l-24.6-14.1-24.6 14.1c-5.3 3.1-7 9.9-3.6 14.6l22.8 39.4c2.6 4.5 8.5 6.2 13.8 3.6l26.1-14.1c5.3-3.1 7-9.9 3.6-14.6l-22.8-39.4c-2.6-4.6-8.5-6.2-13.8-3.6z" />
              </svg>
              <span className="text-xs leading-tight">
                Get it on <br />
                <span className="font-semibold text-sm">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 border-t border-gray-200">
        <Image src={logo} alt="Tripvia Logo" className="w-[90px] md:w-[110px]" />
        <p className="text-xs md:text-sm uppercase text-gray-700 font-medium text-center mt-3 md:mt-0">
          TERMS · PRIVACY © TRIPVIA {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
