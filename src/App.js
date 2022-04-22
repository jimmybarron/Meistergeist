import "./App.css";
import GuessInput from "./GuessInput.js";
import { useEffect, useState } from "react";

function App() {
  // Get secret code
  let secretCode = "3409";

  const [numAndPosMatch, setNumAndPosMatch] = useState(0);
  const [numMatch, setNumMatch] = useState(0);

  useEffect(() => {
    console.log("fromUseEffect: ", numAndPosMatch, numMatch);
  }, [numAndPosMatch, numMatch]);

  // If 'numAndPosMatch' === 4; player wins, If 'numAndPosMatch' < 4 and 'guessAttempts' <= 9; player loses.

  return (
    <>
      <div className="App">Mastermind</div>
      <GuessInput
        secretCode={secretCode}
        setNumAndPosMatch={setNumAndPosMatch}
        setNumMatch={setNumMatch}
      />
    </>
  );
}

export default App;
