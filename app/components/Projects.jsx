import { PROJECTS } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
    return (
      <div id='Projects' className="px-10 py-10 ">
        <motion.div 
        whileInView={{y:0,opacity:1}}
        initial={{y:-100,opacity:0}}
        transition={{duration:2}}
        className="center">
        <h1
          className="mt-20 text-center text-5xl font-Ovo"
        >
          Projects
        </h1>
        <div className=" my-20 w-36 mt-2 h-1 border-b-4 border-yellow-400 rounded-2xl"></div>

        </motion.div>
        <div>

          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 font-Ovo"
              >
                <Image
                  src={project.image}
                  width={200}
                  height={150}
                  alt={project.title}
                  className="  mb-6 rounded cursor-pointer"
                />
              </motion.div>
              <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl kg:w:w-3/4">
                <h6 className="mb-2 font-semibold font-Ovo">{project.title}</h6>
                <p className="mb-4  font-Ovo">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
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
  
  export default Projects;