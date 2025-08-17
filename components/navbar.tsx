"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/Tripvia-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  color?: string; // desktop text color
  active?: string; // active link color
  sideBarColor?: string; // mobile sidebar text color
};

function Navbar({
  color = "text-gray-700",
  active = "text-[#D8662A]",
  sideBarColor = "text-gray-700", // default dark text for sidebar
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (path: string, isSidebar = false) =>
    `uppercase transition ${
      pathname === path
        ? `${active} underline underline-offset-4`
        : `${isSidebar ? sideBarColor : color} hover:${
            isSidebar ? sideBarColor : color
          }`
    }`;

  return (
    <>
      {/* Blur overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/30 z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="w-full flex items-center justify-between px-4 lg:px-20 py-4 relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Tripvia logo" width={120} height={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/how-it-works" className={linkClasses("/how-it-works")}>
            How it works
          </Link>
          <Link href="/faq" className={linkClasses("/faq")}>
            Faq
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact us
          </Link>
        </nav>

        {/* Buttons (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <button
            className={`py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] border ${color} border-current`}
          >
            Sign Up
          </button>
          <button className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-white rounded-[25px]">
            Get App
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden mr-4 text-2xl z-30 ${color}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Nav (Slide-in) */}
        <nav
          className={`fixed top-0 right-0 h-full w-full max-w-[280px] bg-white flex flex-col items-center gap-6 pt-24 shadow-lg transform transition-transform duration-300 ease-in-out z-20 
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <Link href="/" className={linkClasses("/", true)}>
            Home
          </Link>
          <Link
            href="/how-it-works"
            className={linkClasses("/how-it-works", true)}
          >
            How it works
          </Link>
          <Link href="/faq" className={linkClasses("/faq", true)}>
            Faq
          </Link>
          <Link href="/contact" className={linkClasses("/contact", true)}>
            Contact us
          </Link>

          <button
            className={`py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] border ${sideBarColor} border-current`}
          >
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
