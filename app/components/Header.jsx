import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    //id will scorll to that page
    <div id="Home" className=" max-w-3xl px-4 scroll-mt-16  text-center mx-auto  flex flex-col items-center justify-center gap-2 ">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: [1, 0.5, 1], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-24 lg:w-32" />
      </motion.div>
      <motion.h3
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 1 }}
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
      </motion.h3>

      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-6xl lg:text-[56px] font-Ovo">
        Full Stack Developer{" "}
      </motion.h1>

      <motion.p
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto font-Ovo">
MERN Stack enthusiast with expertise in MongoDB, Express.js, React.js, and Node.js. Passionate about simplifying complexity to build efficient and scalable web applications         </motion.p>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#Contact"
          className="cursor-pointer px-6 py-2   lg:px-8 lg:py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent">
          Contact me
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a href="/Ajay Full Stack .pdf"
          download
          className="dark:text-black  bg-white
        px-6 py-2   lg:px-8 lg:py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
