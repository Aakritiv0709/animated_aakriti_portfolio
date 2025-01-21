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
              I am Aakriti Pandey, a B.Tech graduate in Computer Science from
              Gyan Ganga Institute of Technology (Class of 2024). As a
              passionate full-stack developer, I have independently completed
              several projects and am actively expanding my skill set with the
              latest technologies to build robust and optimized web
              applications. I am seeking a challenging role in software
              development within a dynamic, results-driven organization. My goal
              is to leverage my technical expertise and education to contribute
              meaningfully to innovative projects, driving both organizational
              success and personal growth.
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
