import { PROJECTS } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div id='Projects' className="px-6 lg:px-10 py-4 ">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 2 }}
        className="center">
        <h1
          className="mt-20 text-center text-4xl lg:text-5xl font-Ovo"
        >
          Projects
        </h1>
        <div className=" my-10 w-24 lg:w-28 mt-2 h-1 border-b-4 border-yellow-400 rounded-2xl"></div>

      </motion.div>
      <div>

        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8  flex  flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full   lg:w-1/4 font-Ovo"
            >
              <Image
                src={project.image}
                width={200}
                height={150}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <div className="flex flex-wrap gap-2 items-center"><h6 className=" font-semibold font-Ovo">{project.title}</h6>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className=" text-sm font-semibold text-purple-700 hover:text-purple-500">
                  -Live Preview
                </a></div>
              <p className="mb-4  font-Ovo">{project.description}</p>

              <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;