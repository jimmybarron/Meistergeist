import { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({
  secretCode,
  guesses,
  setGuesses,
  setWin,
  error,
  setError,
  ...props
}) => {
  // Iterate through guess. Check for matching character, and matching position.
  // If number is contained in guess, log 'numMatch' and 'numAndPosMatch' for both, to guessSummary object
  const checkGuess = (secretCode, guess) => {
    // Track number of digits that are in the answer, and also in the right position as well
    let numAndPosMatch = 0;
    let numMatch = 0;

    // Check for correct answer and return early
    if (guess === secretCode) {
      setWin(true);
      return;
    }

    // Check for matching numbers and positions, then log and remove them from the search if so
    let smallerGuess = "";
    let smallerSecretCode = "";

    for (let i = 0; i < guess.length; i++) {
      if (guess.charAt(i) === secretCode.charAt(i)) {
        numAndPosMatch++;
      } else {
        smallerGuess += guess.charAt(i);
        smallerSecretCode += secretCode.charAt(i);
      }
    }

    // Search for matching numbers
    for (let i = 0; i < smallerGuess.length; i++) {
      let currentNumMatch = false;
      for (let j = 0; j < smallerSecretCode.length; j++) {
        if (smallerGuess.charAt(i) === smallerSecretCode.charAt(j)) {
          currentNumMatch = true;
        }
        // At the end of the iteration only return one type of match
        if (j === smallerSecretCode.length - 1) {
          if (currentNumMatch) {
            numMatch++;
          }
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
  };

  // Submit Guess
  const submitGuess = (event) => {
    event.preventDefault();
    // Validate;
    if (guessInput.length > 3) {
      checkGuess(secretCode, guessInput);
      setGuessInput("");
      setError("");
    } else if (guessInput.length < 4) {
      setError(`Enter a 4 digit code using only 0 - 7`);
    }
  };

  return (
    <>
      <form className="guessForm">
        <div style={{ display: "flex", position: "relative" }}>
          <input
            id="guess"
            autoFocus={true}
            type="tel"
            minLength={4}
            maxLength={4}
            pattern={"[0-7]{4}"}
            required={true}
            autoComplete="off"
            onChange={onChange}
            value={guessInput}
            onKeyPress={(event) => {
              if (!/[0-7]/.test(event.key) && event.key !== "Enter") {
                event.preventDefault();
              }
            }}
          ></input>
          <button
            name="submitGuess"
            className="submitBtn"
            onClick={submitGuess}
          >
            <div className="submitBtnSymbol">+</div>
          </button>
        </div>
        <label
          style={{
            position: "absolute",
            bottom: "-50%",
            fontSize: "0.7rem",
            textAlign: "center",
            margin: "0.5rem 0",
            color: "var(--accent)",
          }}
          htmlFor="guess"
        >
          {error}
        </label>
      </form>
    </>
  );
};

export default GuessInput;
