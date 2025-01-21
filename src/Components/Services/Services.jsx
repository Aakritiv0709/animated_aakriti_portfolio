import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="services" className="h-screen">
      <div className="h-screen w-10/12 md:w-10/12 overflow-hidden my-3 m-auto flex md:flex-row items-center justify-center flex-col md:justify-between ">
        <div className="md:w-5/12 w-full">
          <p className="text-xl my-3 md:block hidden">Technical Skills</p>
          <motion.div
            className="mb-2"
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              Reactjs
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              HTML 5
            </span>{" "}
            <span className="text-blue-300 leading-[1.8] inline-block text-centertext-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              CSS 3
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              Javascript
            </span>{" "}
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              NodeJs
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle  rounded-full px-3 border-1 border-gray bg-blue-950">
              MongoDB
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              ExpressJs
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              BootStrap 5
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              TailwindCSS
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm first-line:my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              MySQL
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-centertext-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              C
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              C++
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              GIT (Version Control System)
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              PostMan (API Tool)
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center my-2 text-sm h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              OOPS
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              DBMS
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              Operating System
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              WeWeb (No code/Low code)
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-center text-sm my-2 h-8 mr-2 py-1 align-middle rounded-full px-3 border-1 border-gray bg-blue-950">
              JAVA
            </span>
          </motion.div>
        </div>
        <div className="md:w-5/12 w-full">
          <h1 className="text-gray-200 text-lg md:text-xl md:block hidden mb-1">
            Experience
          </h1>
          <p className="text-gray-500 text-xs md:text-sm mb-1">July-Aug,2023</p>
          <h3 className="text-white text-sm">3 Bit Digital</h3>
          <h3 className="text-gray-500 text-lg md:text-sm">
            Frontend Developer
          </h3>
          <p className="text-gray-300 text-sm md:text-sm mb-1">
            Engineered and maintained highly responsive, user-focused web
            applications, ensuring seamless performance across multiple browsers
            and devices. Collaborated effectively with backend engineers,
            designers, and project managers to deliver high-quality projects
            within deadlines and in alignment with specifications.
          </p>
          <p className="mb-3">
            <span className="text-blue-300 leading-[1.8] inline-block text-sm text-center my-1 h-6 mr-2 align-middle  rounded-full px-3 border-1 border-gray bg-blue-950">
              ReactJs
            </span>
            <span className="text-blue-300 leading-[1.8] inline-block text-sm text-center my-1 h-6 mr-2 align-middle  rounded-full px-3 border-1 border-gray bg-blue-950">
              Taailwind CSS
            </span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm mb-1">
            Nov,2024 - Jan,2025
          </p>
          <h3 className="text-white text-sm">ProDT Consultancy Pvt Ltd</h3>
          <h3 className="text-gray-500 text-lg md:text-sm">
            Software Developer Trainee
          </h3>
          <p className="text-gray-300 text-sm md:text-sm mb-1">
            Designed and implemented responsive, user-centric web applications,
            optimizing performance for diverse browsers and devices. Partnered
            effectively with backend developers, designers, and project managers
            to ensure timely delivery and adherence to project requirements.
          </p>
          <p>
            <span className="text-blue-300 leading-[1.8] inline-block text-sm text-center my-1 h-6 mr-2 align-middle  rounded-full px-3 border-1 border-gray bg-blue-950">
              WeWeb (Nocode/Lowcode)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
