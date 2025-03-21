"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ThemeProvider } from "./theme";
import { useEffect, useState } from "react";
import Technologies from "./components/Technologies";

export default function Home() {

  //DarkMode
  // const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);
   // Update the HTML class and localStorage whenever isDarkMode changes
   useEffect(() => {
    if (isDarkMode) {
      // console.log("Enabling dark mode");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // console.log("Disabling dark mode");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  //system prefrenece
  // On mount, determine the theme from localStorage or system preference
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");

  //   if (storedTheme === "dark") {
  //     setIsDarkMode(true);
  //   } else if (storedTheme === "light") {
  //     setIsDarkMode(false);
  //   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     // No stored theme so use system preference
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);

  return (
    <>
      <Navbar isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
      <div className="min-h-screen pt-20  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Header  isDarkMode={isDarkMode}  />
      <About  isDarkMode={isDarkMode}  />
      <Experiences  isDarkMode={isDarkMode}  />
      <Technologies  isDarkMode={isDarkMode}  />
      <Projects  isDarkMode={isDarkMode}  />
      <Contact  isDarkMode={isDarkMode}  />
      <Footer  isDarkMode={isDarkMode}  />

      </div>
    </>
  );
}
