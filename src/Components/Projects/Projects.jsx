import React, { useRef } from "react";
import data from "../../utils/Data.json";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section id="projects" className="">
        <h1 className="text-yellow-600 text-center text-5xl my-2">Projects</h1>
        <div className="md:w-10/12 w-10/12 m-auto my-8">
          {data.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-col justify-center my-12 md:rounded-r-3xl md:flex-row md:justify-between border-1 border-blue-600 shadow-lg shadow-blue-950"
              >
                <div className="md:w-5/12 w-full h-full self-center">
                  <img
                    src={items.image}
                    alt="image"
                    className="rounded-lg w-full h-full"
                  />
                </div>
                <motion.div
                  className="md:w-5/12 w-full h-full m-auto p-4"
                  ref={ref}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: isInView ? 0 : -10, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 className="text-lg md:text-xl text-gray-400 my-2">
                    {items.name}
                  </motion.h3>
                  <motion.p className="text-white">
                    {items.description}
                  </motion.p>
                  <motion.button className="py-1 my-3 rounded px-2 hover:bg-yellow-700 bg-yellow-600 shadow-lg shadow-yellow-800 text-black text-xl text-center border-gray-400 border-2 cursor-pointer">
                    <Link
                      to={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project
                    </Link>
                  </motion.button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
