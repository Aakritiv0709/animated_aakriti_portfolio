import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section id="about" className="">
        <div className="h-screen w-10/12 md:w-10/12 m-auto flex md:flex-row content-center justify-center flex-col md:justify-between ">
          <motion.div
            ref={ref}
            initial={{ scale: 0.5 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="md:w-5/12 w-full rounded-full self-center"
          >
            <img
              src="/portfolio.webp"
              className="w-full h-8/12 md:h-10/12 rounded-full "
            ></img>
          </motion.div>
          <div className="md:w-5/12 w-full content-center">
            <h1 className="text-yellow-700 text-xl md:text-4xl mb-3">
              <ReactTyped
                strings={[" Who I Am?"]}
                typeSpeed={150}
                backSpeed={120}
                loop
              />
            </h1>
            <p className="text-sm md:text-xl">
              Greetings!, I'm a B.Tech under graduate From Gyan Ganga Institute
              of Technology. I've done few project's as a individual in
              fullstack, I'm adding and working on new skills and technologies
              into my skill sets, able to create highly optimized web
              application. I want to achieve a challenging position in software
              Development in a result-oriented company, where I can utilize my
              acquired skills and education towards continued growth and
              advancement.
            </p>
            <Link to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">
              <button className="cursor-pointer border-2 shadow-gray-700 mt-4 font-semibold bg-yellow-600 hover:bg-yellow-700 text-black py-2 px-3 rounded border-gray shadow-lg">
                Linkedin
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
