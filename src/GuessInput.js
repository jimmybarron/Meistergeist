import { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({ secretCode, guesses, setGuesses, setWin, ...props }) => {
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

    // Validate
    // if (event.target.value.length > 3) {
    //   event.target.form[0].checkValidity();
    //   event.target.form[0].reportValidity();
    // }
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
        <div>{10 - guesses.length} Guess Remaining</div>
        <input
          id="guess"
          autoFocus={true}
          type="tel"
          minLength={4}
          maxLength={4}
          pattern={"[0-7]{4}"}
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
          onKeyPress={(event) => {
            if (!/[0-7]/.test(event.key) && event.key !== "Enter") {
              event.preventDefault();
            }
          }}
        ></input>
        <label
          style={{
            fontSize: "0.7rem",
            textAlign: "center",
            margin: "0.5rem 0",
          }}
          htmlFor="guess"
        >
          Enter a 4 digit code,
          <br />
          using only 0 - 7
        </label>

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
