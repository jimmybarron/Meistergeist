import "./Markers.css";
import { useEffect, useState } from "react";

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
      return <div key={index} className="numMatch"></div>;
    });
    let numAndPosMatchJsx = numAndPosMatchArr.map((el, index) => {
      return <div key={index + 4} className="numAndPosMatch"></div>;
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
