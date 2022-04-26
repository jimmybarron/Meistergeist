import "./App.css";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import { useEffect, useState } from "react";

function App() {
  // Get secret code
  let secretCode = "3409";
  const [win, setWin] = useState();
  const [guesses, setGuesses] = useState([]);

  // Check for losing conditions
  useEffect(() => {
    if (guesses.length > 9) {
      setWin(false);
    }
  }, [guesses, win]);

  return (
    <>
      <div className="App">Mastermind</div>
      <div id="announcement" style={{ textAlign: "center", margin: "2rem" }}>
        {win === true
          ? "You Are A Winner"
          : win === false
          ? "You Not A Winner"
          : ""}
      </div>
      <GuessAttempts guesses={guesses} />
      <GuessInput
        secretCode={secretCode}
        guesses={guesses}
        setGuesses={setGuesses}
        setWin={setWin}
      />
    </>
  );
}

export default App;
