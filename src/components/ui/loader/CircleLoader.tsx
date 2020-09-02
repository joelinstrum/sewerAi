import React from "react";
import { CircleLoaderContainer } from "./Elements";
import { motion } from "framer-motion";

export default () => {
  const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear",
  };
  return (
    <motion.div animate={{ rotate: 360 }} transition={spinTransition}>
      <CircleLoaderContainer />
    </motion.div>
  );
};
