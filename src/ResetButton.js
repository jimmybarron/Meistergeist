import React from "react";
import "./btn.css";

const ResetButton = ({ handleClick }) => {
  return (
    <div className="btnContain">
      <button className="btn" onClick={handleClick}>
        Play Again?
      </button>
    </div>
  );
};

export default ResetButton;
