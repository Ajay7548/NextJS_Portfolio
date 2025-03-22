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
          className="text-center text-md lg:text-lg mb-2 font-Ovo"
        >
          Introduction
        </motion.h4>
        <div className="flex flex-col items-center justify-between">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className=" text-center text-4xl lg:text-5xl font-Ovo ">
              About
              <span className="text-neutral-500  font-Ovo"> Me</span>
            </h2>
            {/* <div className="w-28 mt-2 h-1 border-b-4 border-yellow-400 rounded-2xl"></div> */}
          </motion.div>

          {/* old data */}
          {/* <div className="flex flex-wrap  "> */}
          <div
            className="flex w-full  flex-col lg:flex-row items-center gap-2 lg:gap-20 my-10 lg:my-20
           "
          >
            <div className="w-52  lg:w-64 rounded-3xl max-w-none  ">
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
              <p className="  mb-4 mt-4   max-w-2xl  sm:text-left font-Ovo">
                Full-Stack Developer | MERN Stack | Passionate About Building
                Scalable & Innovative Web Applications As a dedicated full-stack
                developer with expertise in the MERN stack (MongoDB, Express.js,
                React.js, and Node.js), My passion lies
                in building dynamic, responsive, and high-performance web
                applications that enhance user experience and drive business
                growth.
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
