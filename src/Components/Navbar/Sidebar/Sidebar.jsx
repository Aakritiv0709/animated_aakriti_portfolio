import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },

    closed: {
      zIndex: 0,
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="sidebar flex items-center z-50 h-full w-full flex-col justify-center bg-white text-black  "
      animate={open ? "open" : "closed"}
    >
      {open && (
        <motion.div
          className="bg Z-40 fixed top-0 bottom-0 bg-white w-full "
          variants={variants}
        >
          <Links />
        </motion.div>
      )}

      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
