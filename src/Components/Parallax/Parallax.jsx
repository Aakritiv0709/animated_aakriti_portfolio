import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="">
      <div
        className="h-screen content-center overflow-hidden relative flex justify-center items-center"
        ref={ref}
        style={{
          background:
            type === "whoami"
              ? "linear-gradient(180deg,#111132,#0c0c1d)"
              : "linear-gradient(180deg,#111132,#505064)",
        }}
      >
        <motion.h1 style={{ y: yText }} className="text-2xl">
          {type === "whoami" ? "Who I Am?" : "My Experience"}
        </motion.h1>
        <motion.div
          style={{ backgroundImage: 'url("/mountains.png")' }}
          className="absolute w-full h-full z-0 bg-bottom md:bg-cover bg-contain bg-no-repeat"
        ></motion.div>
        <motion.div
          className="absolute w-full h-full z-0 bg-bottom md:bg-cover bg-contain bg-no-repeat"
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "whoami" ? "/planets.png" : "/sun.png"
            })`,
          }}
        ></motion.div>
        <motion.div
          style={{ x: yBg, backgroundImage: 'url("/stars.png")' }}
          className="absolute z-0 w-full h-full bg-bottom bg-cover"
        ></motion.div>
      </div>
    </section>
  );
};

export default Parallax;
