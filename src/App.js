import "./App.css";
import GuessInput from "./GuessInput.js";
import { useState } from "react";

function App() {
  // Get secret code
  let secretCode = "3409";

  // Get user guess attempt
  let guess = "3410";

  const [guessSummary, setGuessSummary] = useState({
    numMatch: 0,
    numAndPosMatch: 0,
  });

  // If 'numAndPosMatch' === 4; player wins, If 'numAndPosMatch' < 4 and 'guessAttempts' <= 9; player loses.

  return (
    <>
      <div className="App">Mastermind</div>
      <GuessInput
        secretCode={secretCode}
        guess={guess}
        setGuessSummary={setGuessSummary}
      />
    </>
  );
}

export default App;
