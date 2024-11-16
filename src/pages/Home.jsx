import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
      }}
      className="h-screen w-full text-4xl font-bold flex justify-center items-center"
    >
      Home
    </motion.div>
  );
};

export default Home;
