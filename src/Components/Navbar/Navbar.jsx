import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import { useRef } from "react";
const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div className="flex justify-between w-full m-auto h-20 items-center xs:mb-4 md:mb-0 ">
        <motion.div
          ref={ref}
          className="md:w-3/12 w-1/3 text-center text-white text-2xl md:text-2xl lg:text-3xl pl-2 md:pl-0"
          initial={{ y: -10 }}
          animate={{ y: isInView ? 0 : -10 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.ul
          className="md:flex md:w-6/12 text-center md:text-xl lg:text-lg justify-evenly md:mr-2 hidden"
          initial={{ y: -10 }}
          animate={{ y: isInView ? 0 : -10 }}
          transition={{ type: "spring", stiffness: 200, transition: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/#home"
              className="px-2 py-1 hover:bg-white hover:text-black rounded-full duration-200"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layout="underline"
          >
            <Link
              to="/#about"
              className="px-2 py-1 hover:bg-white hover:text-black rounded-full duration-200"
            >
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/#services"
              className="px-2 py-1 hover:bg-white hover:text-black rounded-full duration-200"
            >
              Services
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/#projects"
              className="px-2 py-1 hover:bg-white hover:text-black rounded-full duration-200"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/#contact"
              className="px-2 py-1 hover:bg-white hover:text-black rounded-full duration-200"
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>

        <div className="block md:hidden w-2/3">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
};

export default Navbar;
