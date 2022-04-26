import React from "react";

const ResetButton = ({ handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "10rem",
          marginTop: "1rem",
          fontSize: "1rem",
          textAlign: "center",
        }}
        onClick={handleClick}
      >
        Play Again?
      </button>
    </div>
  );
};

export default ResetButton;
