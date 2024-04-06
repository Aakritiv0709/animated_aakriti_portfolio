import React from "react";
import { HashLink } from "react-router-hash-link";
import { ReactTyped } from "react-typed";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const HeroSection = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-50%",

      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <section id="hero" className="">
        <div className="flex h-hei flex-col justify-center m-auto md:w-10/12 w-10/12">
          <motion.div
            ref={ref}
            className="text-3xl xl md:text-5xl text-purple-700 md:mb-3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>AAKRITI PANDEY</h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl text-white my-4 md:my-5 h-44 md:h-36"
          >
            <ReactTyped
              strings={["I'm a FullStack Developer"]}
              typeSpeed={150}
              backSpeed={120}
              loop
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HashLink to="/#contact">
              <button className="hover:text-black hover:bg-white duration-200 cursor-pointer md:px-3 md:py-2 px-5 py-3 md:text-xl font-medium rounded-lg border-2 border-gray-500 mr-4 ">
                Contact
              </button>
            </HashLink>
            <HashLink to="/#about">
              <button className="hover:text-black hover:bg-white cursor-pointer md:px-3 md:py-2 px-5 py-3 md:text-xl font-medium rounded-lg border-2 border-gray-500 mr-2 ">
                About Me
              </button>
            </HashLink>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-4 w-2/3 md:max-w-full text-lightblue text-3xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          FullStack Developer
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
