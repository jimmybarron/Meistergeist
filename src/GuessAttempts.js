const GuessAttempts = ({
  guess,
  numAndPosMatch,
  numMatch,
  setNumAndPosMatch,
  setNumMatch,
  ...props
}) => {
  // Create a visual representation of the guessAttempt styled using the passed in state
  const noMatchStyle = {
    fontSize: "2rem",
    textAlign: "center",
    margin: "2rem 1rem",
    color: "black",
  };

  const numMatchStyle = {
    fontSize: "2rem",
    textAlign: "center",
    margin: "2rem 1rem",
    color: "red",
  };

  const numAndPosMatchStyle = {
    fontSize: "2rem",
    textAlign: "center",
    margin: "2rem 1rem",
    color: "blue",
  };

  return (
    <div
      style={
        numMatch > 0
          ? numMatchStyle
          : numAndPosMatch
          ? numAndPosMatchStyle
          : noMatchStyle
      }
    >
      {guess}
    </div>
  );
};

export default GuessAttempts;
