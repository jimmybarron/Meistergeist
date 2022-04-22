const GuessInput = ({
  secretCode,
  setNumAndPosMatch,
  setNumMatch,
  guess,
  setGuess,
  ...props
}) => {
  // Iterate through guess. Check for matching character, and matching position.
  // If number is contained in guess, log 'numMatch' and 'numAndPosMatch' for both, to guessSummary object
  const checkGuess = (secretCode, guess) => {
    for (let i = 0; i < guess.length; i++) {
      for (let j = 0; j < secretCode.length; j++) {
        if (i === j && guess.charAt(i) === secretCode.charAt(j)) {
          setNumAndPosMatch((prevState) => {
            return prevState + 1;
          });
        } else if (guess.charAt(i) === secretCode.charAt(j)) {
          setNumMatch((prevState) => {
            return prevState + 1;
          });
        }
      }
    }
    document.getElementById("guess").value = "";
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label for="guess">Enter a guess</label>
        <input
          id="guess"
          type="tel"
          maxLength="4"
          autoFocus="true"
          style={{
            width: "10rem",
            height: "3rem",
            textAlign: "center",
            fontSize: "2rem",
          }}
        ></input>

        <button
          name="submitGuess"
          style={{ width: "10rem", marginTop: "1rem", fontSize: "1rem" }}
          onClick={() => {
            setGuess(document.getElementById("guess").value);
            checkGuess(secretCode, guess);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GuessInput;
