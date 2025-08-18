"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/Tripvia-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";

type NavbarProps = {
  color?: string; // desktop text color
  active?: string; // active link color
  sideBarColor?: string; // mobile sidebar text color
  logoImg?: StaticImageData;
};

function Navbar({
  color = "text-gray-700",
  active = "text-[#f5c144]",
  sideBarColor = "text-gray-700",
  logoImg,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const pathname = usePathname();

  // New useEffect hook to handle body overflow
  useEffect(() => {
    if (menuOpen || popupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, popupOpen]);

  const linkClasses = (path: string, isSidebar = false) =>
    `uppercase transition ${
      pathname === path
        ? `${active} underline underline-offset-4 font-bold`
        : `${isSidebar ? sideBarColor : color} hover:${
            isSidebar ? sideBarColor : color
          }`
    }`;

  return (
    <>
      {/* Blur overlay when mobile menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/30 z-20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header
        className="w-full flex
      overflow-x-hidden items-center justify-between px-4 lg:px-20 py-4 relative z-20"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoImg || logo}
            alt="Tripvia logo"
            width={120}
            height={40}
          />
        </Link>

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
          <button
            onClick={() => setPopupOpen(true)}
            className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-white rounded-[25px]"
          >
            Get App
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden mr-4 text-2xl z-30 text-white"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        {/* Mobile Nav (Slide-in) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 left-0 w-full bg-white shadow-lg z-40 flex flex-col items-center gap-6 pt-24 pb-10"
            >
              <div className="absolute top-4 right-6">
                <button
                  className="text-3xl text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <Link
                href="/"
                className={linkClasses("/", true)}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className={linkClasses("/how-it-works", true)}
                onClick={() => setMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/faq"
                className={linkClasses("/faq", true)}
                onClick={() => setMenuOpen(false)}
              >
                Faq
              </Link>
              <Link
                href="/contact"
                className={linkClasses("/contact", true)}
                onClick={() => setMenuOpen(false)}
              >
                Contact us
              </Link>

              <button
                className={`py-2 w-[120px] text-sm px-4 uppercase bg-inherit rounded-[25px] border ${sideBarColor} border-current`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setPopupOpen(true)}
                className="py-2 w-[120px] text-sm px-4 uppercase bg-[#E85D04] text-white rounded-[25px] transition"
              >
                Get App
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {popupOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupOpen(false)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  🚀 We’re working on our app!
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Our mobile app is coming soon. Stay tuned!
                </p>
                <button
                  onClick={() => setPopupOpen(false)}
                  className="mt-4 px-6 py-2 rounded-[25px] bg-[#E85D04] text-white text-sm"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
