import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

function Cards() {
  return (
    <motion.div
      key={""}
      className=""
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      // transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <motion.div>
        <Card />
      </motion.div>
    </motion.div>
  );
}

export default Cards;
