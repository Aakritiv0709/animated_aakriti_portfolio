import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import { motion, useInView } from "framer-motion";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section id="contact" className="h-screen">
        <div className="w-10/12 m-auto flex justify-center overflow-y-hidden flex-col md:justify-between md:flex-row h-screen items-center">
          <motion.div
            className="md:w-5/12 w-full "
            ref={ref}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: isInView ? 0 : -300, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="md:text-5xl text-3xl mb-5 text-yellow sm:max-h-24 ">
              <h1 className="shadow-sm shadow-yellow-700">
                <span>Let's </span>
                <ReactTyped
                  className="text-yellow-700 "
                  strings={[" Work Together !"]}
                  typeSpeed={150}
                  backSpeed={120}
                  loop
                />
              </h1>
            </div>
            <div className="mb-5">
              <h2 className="md:text-2xl text-xl mb-1">Email</h2>
              <p className="md:text-lg text-sm mb-1">aakritiv0709@gmail.com</p>
            </div>
            <div className="mb-5">
              <h2 className="md:text-2xl text-xl mb-1"> address</h2>
              <p className="md:text-lg text-sm mb-1">
                Vijay nagar, jabalpur, madhya pradesh
              </p>
            </div>
            <div className="mb-5">
              <h2 className="md:text-2xl text-xl mb-1">Contact</h2>
              <p className="md:text-lg text-sm mb-1">91-8305588317</p>
            </div>
          </motion.div>
          <motion.div
            className="md:w-5/12 w-full"
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <form className="flex justify-center flex-col">
              <input
                type="text"
                placeholder="Name"
                className="py-3 my-3 rounded px-3 text-black shadow-sm shadow-gray-400"
              />
              <input
                type="text"
                placeholder="Email"
                className="py-3 my-3 rounded px-3 text-black shadow-sm shadow-gray-400"
              />
              <textarea
                row="6"
                column="25"
                className="py-4 my-3 rounded px-3 text-black shadow-sm shadow-gray-400"
                placeholder="message"
              ></textarea>
              <button
                type="submit"
                className="py-2 my-3 rounded px-3 hover:bg-yellow-700 bg-yellow-600 shadow-lg shadow-yellow-800 text-black text-xl text-center border-gray-400 border-2 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
