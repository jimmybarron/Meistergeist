const GuessAttempts = ({
  guesses,
  numAndPosMatch,
  numMatch,
  setNumAndPosMatch,
  setNumMatch,
  ...props
}) => {
  // Create a visual representation of the guessesAttempt styled using the passed in state
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

  console.log(guesses);

  const pastGuessAttempts = guesses.map((guess, index) => {
    <div
      key={index}
      style={
        numMatch > 0
          ? numMatchStyle
          : numAndPosMatch
          ? numAndPosMatchStyle
          : noMatchStyle
      }
    >
      {guess}
    </div>;
  });

  return pastGuessAttempts;
};

export default GuessAttempts;
