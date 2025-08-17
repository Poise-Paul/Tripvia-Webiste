"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/Tripvia-logo.png";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Blur overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/30 z-10"
          onClick={() => setMenuOpen(false)} // close menu when clicking outside
        />
      )}

      <header className=" w-full flex items-center justify-between px-4 py-4 relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Tripvia logo" width={120} height={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-blue-500 uppercase">
            Home
          </Link>
          <Link href="#features" className="hover:text-blue-500 uppercase">
            How it works
          </Link>
          <Link href="#faq" className="hover:text-blue-500 uppercase">
            Faq
          </Link>
          <Link href="#footer" className="hover:text-blue-500 uppercase">
            Contact us
          </Link>
        </nav>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <button className="py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] text-black border border-black">
            Sign Up
          </button>
          <button className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-[white] rounded-[25px]">
            Get App
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden mr-4 text-2xl text-gray-700 z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Nav (Slide-in) */}
        <nav
          className={`fixed top-0 right-0 h-full w-full max-w-[280px] bg-white flex flex-col items-center gap-6 pt-24 shadow-lg transform transition-transform duration-300 ease-in-out z-20 
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <Link href="/" className="hover:text-blue-500 uppercase">
            Home
          </Link>
          <Link href="#features" className="hover:text-blue-500 uppercase">
            How it works
          </Link>
          <Link href="#faq" className="hover:text-blue-500 uppercase">
            Faq
          </Link>
          <Link href="#footer" className="hover:text-blue-500 uppercase">
            Contact us
          </Link>

          <button className="py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] text-black border border-black">
            Sign Up
          </button>
          <button className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-white rounded-[25px]">
            Get App
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
