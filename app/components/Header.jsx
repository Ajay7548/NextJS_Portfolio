import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 pt-8 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 ">
      <div >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Ajay Mourya{" "}
        <Image
          src={assets.hand_icon}
          alt="" className= "w-7"
        />{" "}
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        FrontEnd Web Developer{" "}
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
          className="px-8 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white">
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a href="/Ajay Full Stack .pdf" 
        download
        className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
