"use client"; // for using ref in client side

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {

    // check for useState option 
    //const [isOpen,setIsOpen] =useState(false)

    const [isScroll, setIsScroll] = useState(false)
    const sideMenu = useRef();

    const openMenu = () =>  {
        sideMenu.current.style.transform = "translateX(-16rem)";
    };
    const closeMenu = () => {
        sideMenu.current.style.transform = "translateX(16rem)";
    };

    //when windows scroll the  content abive should be blur
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }
            else{
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
            flex items-center justify-between z-50 font-Ovo ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <h1 className=" w-28 cursor-pointer mr-14">Ajay.</h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li>
                        <a href="#Home" className="font-Ovo">Home</a>
                    </li>
                    <li>
                        <a href="#About" className="font-Ovo">About me</a>
                    </li>
                    <li>
                        <a href="#Experience" className="font-Ovo">Experience</a>
                    </li>
                    <li>
                        <a href="#Projects" className="font-Ovo">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact" className="font-Ovo">Contact me</a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Image src={assets.moon_icon} alt="" className="w-6" />
                    </button>

                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4"
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="" className="w-3" />{" "}
                    </a>

                    <button onClick={openMenu} className="block md:hidden ml-3">
                        <Image src={assets.menu_black} alt="" className="w-6" />
                    </button>
                </div>

                {/*----------- Mobile Menu----------- */}

                <ul
                    ref={sideMenu}
                    className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
                >
                    <div onClick={closeMenu} className="absolute right-6 top-6">
                        <Image
                            src={assets.close_black}
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
                        <a href="#Experience" onClick={closeMenu}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={closeMenu}>
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
