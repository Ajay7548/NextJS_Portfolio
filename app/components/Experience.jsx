import { EXPERIENCES } from "@/assets/assets";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div id="Experience"
     className=" pb-2 px-10 scroll-mt-20 py-10 ">
      <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }} //y-100 for top to bottom
      transition={{ duration: 1 }}
      className="flex flex-col items-center  justify-center">
      <h1
        
        className=" text-center text-5xl font-Ovo"
      >
        Experiences
      </h1>
      <div className="my-14 w-48 mt-2 h-1 border-b-4 border-yellow-400 rounded-2xl"></div>

      </motion.div>

      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap  lg:justify-center">
            <div className="w-44 mt-[6px] ">
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="  mb-2 text-sm  font-Ovo"
              >
                {experience.year}
              </motion.p>
            </div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="  w-full  max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold font-Ovo">
                {experience.role} -{""}
                <span className="text-sm text-purple-700">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4  font-Ovo">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
