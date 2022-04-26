import "./GuessInput.css";

const GuessInput = ({ secretCode, guesses, setGuesses, setWin, ...props }) => {
  // Iterate through guess. Check for matching character, and matching position.
  // If number is contained in guess, log 'numMatch' and 'numAndPosMatch' for both, to guessSummary object
  const checkGuess = (secretCode, guess) => {
    // Track number of digits that are in the answer, and also in the right position as well
    let numAndPosMatch = 0;
    let numMatch = 0;

    for (let i = 0; i < guess.length; i++) {
      for (let j = 0; j < secretCode.length; j++) {
        if (i === j && guess.charAt(i) === secretCode.charAt(j)) {
          numAndPosMatch++;
        } else if (guess.charAt(i) === secretCode.charAt(j)) {
          numMatch++;
        }
      }
    }
    // Check for winning conditions
    if (numAndPosMatch === 4) {
      setWin(true);
    }

    // Create JSX of Guess Attempt
    let guessAttempt = {
      guessNum: guess,
      numMatch: numMatch,
      numAndPosMatch: numAndPosMatch,
    };

    // Add attemped to guess array
    setGuesses((prevState) => {
      return [...prevState, guessAttempt];
    });
  };

  const validate = (event) => {
    // console.log(event.target.value.length)
    if (event.target.value.length > 3) {
      event.target.form[0].checkValidity();
      event.target.form[0].reportValidity();
    }
  };

  const submitGuess = (event) => {
    event.target.form[0].checkValidity();
    event.preventDefault();
    let guess = document.getElementById("guess").value;
    checkGuess(secretCode, guess);
    document.getElementById("guess").value = "";
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="guess">Enter a guess</label>
        <input
          id="guess"
          autoFocus={true}
          type="tel"
          minLength={4}
          maxLength={4}
          pattern={"^[0-9]+$"}
          required={true}
          style={{
            width: "10rem",
            height: "3rem",
            textAlign: "center",
            fontSize: "2rem",
          }}
          onChange={validate}
        ></input>

        <button
          name="submitGuess"
          style={{ width: "10rem", marginTop: "1rem", fontSize: "1rem" }}
          onClick={submitGuess}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default GuessInput;
