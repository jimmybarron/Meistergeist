import { useState } from "react";
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

  // Controlled input
  const [guessInput, setGuessInput] = useState("");
  const onChange = (event) => {
    setGuessInput(event.target.value);
    // Validate
    if (event.target.value.length > 3) {
      event.target.form[0].checkValidity();
      event.target.form[0].reportValidity();
    }
  };

  const submitGuess = (event) => {
    event.preventDefault();
    checkGuess(secretCode, guessInput);
    setGuessInput("");
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
        <label
          style={{ textAlign: "center", marginBottom: "1rem" }}
          htmlFor="guess"
        >
          Enter a 4 digit code,
          <br />
          using only 0 - 7
        </label>
        <input
          id="guess"
          autoFocus={true}
          type="tel"
          minLength={4}
          maxLength={4}
          pattern={"^[0-9]+$"}
          required={true}
          autoComplete="off"
          style={{
            width: "10rem",
            height: "3rem",
            textAlign: "center",
            fontSize: "2rem",
          }}
          onChange={onChange}
          value={guessInput}
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
