import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    //id will scorll to that page
    <div id="Home" className="w-11/12 pt-8 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 ">
      
      
      
      <motion.div 
       initial={{ scale: 0.8, opacity: 0 }}
       whileInView={{ scale: [1, 0.5, 1], opacity: 1 }}
       transition={{ duration: 1 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
       whileInView={{y:0, opacity: 1}}
       initial={{y:-20,opacity:0}}
       transition={{duration:1}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi!  I'm Ajay Mourya{" "}
        <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{
          rotate: [0, 15, -15, 10, -10, 5, -5, 0],
          opacity: 1,
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Image src={assets.hand_icon} alt="" className="w-7" />
      </motion.div>
      
        {/* <Image
          src={assets.hand_icon}
          alt="" className= "w-7"
        />{" "} */}
      </motion.h3>

      <motion.h1
      whileInView={{x:0,opacity:1}}
      initial={{x:-100,opacity:0}}
      transition={{duration:1}}
      className="text-3xl sm:text-6xl lg:text-[56px] font-Ovo">
        FrontEnd Web Developer{" "}
      </motion.h1>

      <motion.p 
      whileInView={{x:0,opacity:1}}
      initial={{x:100,opacity:1}}
      transition={{duration:1}}
      className="max-w-2xl mx-auto font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi.
      </motion.p>
      <motion.div 
      whileInView={{y:0,opacity:1}}
      initial={{y:100,opacity:0}}
      transition={{duration:1}}
      className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
          className="cursor-pointer  px-8 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent">
          Contact me
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a href="/Ajay Full Stack .pdf" 
        download
        className="dark:text-black bg-white
        px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image
            src={ assets.download_icon}
            alt=""
            className="w-4"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
