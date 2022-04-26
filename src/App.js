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
    if (win === true) {
      document.getElementById("announcement").innerText = "You Win!";
      document.getElementById("announcement").style.display = "block";
    }
    if (win === false) {
      document.getElementById("announcement").innerText = "You Lose!";
      document.getElementById("announcement").style.display = "block";
    }
  }, [guesses, win]);

  return (
    <>
      <div className="App">Mastermind</div>
      <div id="announcement" style={{ display: "none" }}></div>
      <div>{guesses}</div>
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
