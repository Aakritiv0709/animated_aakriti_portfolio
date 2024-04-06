import React from "react";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const items = [
    {
      id: 1,
      title: "Home",
      url: "hero",
    },
    {
      id: 2,
      title: "About",
      url: "about",
    },
    {
      id: 3,
      title: "Services",
      url: "services",
    },
    {
      id: 4,
      title: "Projects",
      url: "projects",
    },
    {
      id: 5,
      title: "Contact",
      url: "contact",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="links absolute w-full h-screen content-center"
      variants={variants}
    >
      {items.map((item) => (
        <motion.div
          className="flex flex-col items-center justify-center text-black bg-white "
          key={item.id}
          variants={itemVariants}
          initial={{ x: 200 }}
          animate={{ x: isInView ? 0 : 200 }}
          transition={{ duration: 0.9 }}
        >
          <HashLink
            to={`/#${item.url}`}
            className="my-3 text-2xl sm:text-xl font-medium"
          >
            {item.title}
          </HashLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
