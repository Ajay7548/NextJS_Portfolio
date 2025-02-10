// import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, assets, infoList } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <div id="About" className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center text-lg mb-2 font-Ovo"
        >
          Introduction
        </motion.h4>
        <div className="flex flex-col items-center justify-between">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className=" text-center text-5xl font-Ovo ">
              About
              <span className="text-neutral-500  font-Ovo"> Me</span>
            </h2>
            {/* <div className="w-28 mt-2 h-1 border-b-4 border-yellow-400 rounded-2xl"></div> */}
          </motion.div>

          {/* old data */}
          {/* <div className="flex flex-wrap  "> */}
          <div
            className="flex w-full flex-col lg:flex-row items-center gap-20 my-20
           "
          >
            {/* <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/2 lg:p-8 "
            > */}
            {/* <div className="flex items-center justify-center"> */}
            <div className="w-64 rounded-3xl max-w-none  ">
              <Image
                src={assets.user_image}
                className=" w-full rounded-3xl "
                alt=""
              />
            </div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="flex-1 "
            >
              <p className="  mb-4 max-w-2xl text-center sm:text-left font-Ovo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vel consequatur explicabo quae nihil reprehenderit architecto
                libero natus. Enim molestiae culpa error placeat quidem atque
                natus beatae doloribus a facere?
                libero natus. Enim molestiae culpa error placeat quidem atque
                natus beatae doloribus a facere?
              </p>
              <ul className="grid grid-cols-2  gap-6 md:pr-16">
                {/* list extra filed about me */}
                {infoList.map(
                  ({ icon, iconDark, title, description }, index) => (
                    <li
                      key={index}
                      className="
                      dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                      border-[1px] border-gray-400 rounded-xl p-4 cursor-pointer hover:shadow-black  hover:bg-lightHover hover:translate-y-1 duration-500"
                    >
                      <Image
                        src={isDarkMode ? iconDark : icon}
                        alt={title}
                        className="w-8 mt-3"
                      />
                      <h3
                        className="
                      dark:text-white
                      my-4 font-semibold text-gray-700"
                      >
                        {title}
                      </h3>
                      <p
                        className="
                      dark:text-white/80
                      text-gray-600 text-sm"
                      >
                        {description}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
