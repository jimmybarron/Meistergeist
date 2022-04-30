import "./Markers.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const markersAnim = {
  initial: { scale: 0 },
  pop: {
    scale: 1,
    transition: { ease: "easeOut", duration: 0.2, delay: 0.5 },
  },
};

const item = { hidden: { x: -10, opacity: 0 } };

const Markers = ({ numMatch, numAndPosMatch }) => {
  // Create random number for shifting of markers
  let [rand, setRand] = useState();
  useEffect(() => {
    setRand(Math.floor(Math.random() * 10));
  }, []);

  const numMatchGenerator = (numMatch, numAndPosMatch) => {
    let numMatchArr = new Array(numMatch).fill();
    let numAndPosMatchArr = new Array(numAndPosMatch).fill();
    let numMatchJsx = numMatchArr.map((el, index) => {
      return (
        <motion.div
          variants={markersAnim}
          initial="initial"
          animate="pop"
          key={index}
          className="numMatch"
        ></motion.div>
      );
    });
    let numAndPosMatchJsx = numAndPosMatchArr.map((el, index) => {
      return (
        <motion.div
          variants={markersAnim}
          initial="initial"
          animate="pop"
          key={index + 4}
          className="numAndPosMatch"
        ></motion.div>
      );
    });
    let jsxArr = numMatchJsx.concat(numAndPosMatchJsx);
    return jsxArr;
  };

  // Shift around markers
  const shiftArrayRandom = (jsxArr) => {
    if (jsxArr.length > 1) {
      for (let i = rand; i > 0; i--) {
        let toFront = jsxArr.pop();
        jsxArr.unshift(toFront);
      }
    }
    return jsxArr;
  };

  return (
    <div className="markersContain">
      {shiftArrayRandom(numMatchGenerator(numMatch, numAndPosMatch))}
    </div>
  );
};

export default Markers;
