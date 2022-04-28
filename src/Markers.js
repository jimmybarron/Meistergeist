import "./Markers.css";

const Markers = ({ numMatch, numAndPosMatch }) => {
  const numMatchGenerator = (numMatch, numAndPosMatch) => {
    let numMatchArr = new Array(numMatch).fill();
    let numAndPosMatchArr = new Array(numAndPosMatch).fill();
    let numMatchJsx = numMatchArr.map(() => {
      return <div className="numMatch"></div>;
    });
    let numAndPosMatchJsx = numAndPosMatchArr.map(() => {
      return <div className="numAndPosMatch"></div>;
    });
    return numMatchJsx.concat(numAndPosMatchJsx);
  };

  return <div>{numMatchGenerator(numMatch, numAndPosMatch)}</div>;
};

export default Markers;
