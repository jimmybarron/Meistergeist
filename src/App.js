import "./App.css";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import { useEffect, useState } from "react";

function App() {
  // Get secret code
  let secretCode = "3409";

  const [guesses, setGuesses] = useState([]);

  // If 'numAndPosMatch' === 4; player wins, If 'numAndPosMatch' < 4 and 'guessAttempts' <= 9; player loses.
  useEffect(() => {});

  return (
    <>
      <div className="App">Mastermind</div>
      <GuessAttempts
        guesses={guesses}
        numAndPosMatch={numAndPosMatch}
        nunmMatch={numMatch}
      />
      <GuessInput
        secretCode={secretCode}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default App;
