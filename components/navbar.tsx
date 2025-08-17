"use client"
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
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-10" />
      )}

      <header className="bg-white w-full
       flex items-center justify-between px-4 py-4 relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Tripvia logo" width={120} height={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-blue-500 uppercase">Home</Link>
          <Link href="#features" className="hover:text-blue-500 uppercase">How it works</Link>
          <Link href="#faq" className="hover:text-blue-500 uppercase">Faq</Link>
          <Link href="#footer" className="hover:text-blue-500 uppercase">Contact us</Link>
        </nav>

        <nav className="hidden md:flex gap-6 text-gray-700">
           <button className="py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] text-black border border-black ">
             Sign Up
           </button>
           <button className="py-2  w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-[white] rounded-[25px]">
             Get App 
           </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden mr-8 text-gray-700 z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-20">
            <Link href="/" className="hover:text-blue-500 uppercase">Home</Link>
          <Link href="#features" className="hover:text-blue-500 uppercase">How it works</Link>
          <Link href="#faq" className="hover:text-blue-500 uppercase">Faq</Link>
          <Link href="#footer" className="hover:text-blue-500 uppercase">Contact us</Link>
           <button className="py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] text-black border border-black ">
             Sign Up
           </button>
           <button className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-[white] rounded-[25px]">
             Get App 
           </button>
        </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
