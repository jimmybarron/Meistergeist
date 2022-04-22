import "./App.css";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import { useEffect, useState } from "react";

function App() {
  // Get secret code
  let secretCode = "3409";

  const [numAndPosMatch, setNumAndPosMatch] = useState(0);
  const [numMatch, setNumMatch] = useState(0);
  const [guess, setGuess] = useState();

  // If 'numAndPosMatch' === 4; player wins, If 'numAndPosMatch' < 4 and 'guessAttempts' <= 9; player loses.
  useEffect(() => {
    console.log("fromUseEffect: ", numAndPosMatch, numMatch);
  }, [numAndPosMatch, numMatch]);

  return (
    <>
      <div className="App">Mastermind</div>
      <GuessAttempts
        guess={guess}
        numAndPosMatch={numAndPosMatch}
        nunmMatch={numMatch}
        setNumAndPosMatch={setNumAndPosMatch}
        setNumMatch={setNumMatch}
      />
      <GuessInput
        secretCode={secretCode}
        guess={guess}
        setGuess={setGuess}
        setNumAndPosMatch={setNumAndPosMatch}
        setNumMatch={setNumMatch}
      />
    </>
  );
}

export default App;
