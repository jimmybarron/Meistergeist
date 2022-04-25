const GuessInput = ({
  secretCode,
  setNumAndPosMatch,
  setNumMatch,
  guesses,
  setGuesses,
  setGuessCount,
  ...props
}) => {
  // Iterate through guess. Check for matching character, and matching position.
  // If number is contained in guess, log 'numMatch' and 'numAndPosMatch' for both, to guessSummary object
  const checkGuess = (secretCode, guesses) => {
    for (let i = 0; i < guesses[0].length; i++) {
      for (let j = 0; j < secretCode.length; j++) {
        if (i === j && guesses[0].charAt(i) === secretCode.charAt(j)) {
          setNumAndPosMatch((prevState) => {
            return prevState + 1;
          });
        } else if (guesses[0].charAt(i) === secretCode.charAt(j)) {
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
            // Log guess
            setGuesses((prevState) => {
              prevState.unshift(document.getElementById("guess").value);
              return prevState;
            });
            checkGuess(secretCode, guesses);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GuessInput;
