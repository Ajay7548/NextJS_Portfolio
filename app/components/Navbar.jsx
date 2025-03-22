"use client"; // Ensuring client-side rendering

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaHandHolding, FaWaveSquare } from "react-icons/fa";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handles scrolling effect for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full  fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 font-Ovo transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <h1 className="text-3xl font-Outfit w-28 cursor-pointer mr-14">Ajay.</h1>
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden sm:flex items-center gap-6 lg:gap-8 px-12 py-3 font-Ovo rounded-full ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {["Home", "About", "Experience", "Technologies", "Projects"].map((item, index) => (
            <li key={index}>
              <a href={`#${item}`} className="hover:text-rose-600 transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6 hover:scale-110 transition-transform"
            />
          </button>

          {/* Contact Button (Desktop Only) */}
          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 dark:border-white/50 rounded-full ml-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
          <span className="text-xl">👋</span>
         Let's Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(true)} className="block md:hidden ml-3">
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/*----------- Mobile Menu ----------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-44 bg-white  dark:bg-neutral-900 text-gray-600 dark:text-gray-300 shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div onClick={() => setMenuOpen(false)} className="flex items-center gap-4 p-6 cursor-pointer">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-4 cursor-pointer"
            />
              <p>Back</p>
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col gap-2 lg:gap-6 p-6">
              {["Home", "About", "Experience", "Technologies", "Projects","Contact"].map((item, index) => (
                <li key={index} onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-rose-600">
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


 {/* <ul
          ref={sideMenu}
          className="md:hidden flex flex-col gap-4 py-20 px-8 fixed -right-64 top-0 bottom-0 w-44 z-50 h-screen bg-rose-50 transition duration-500
          dark:bg-darkHover dark:text-white
          "
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </div>

          <li>
            <a href="#Home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Technologies" className="font-Ovo">
              Technologies
            </a>
          </li>
          <li>
            <a href="#Experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
        </ul> */}
