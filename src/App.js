import "./App.css";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import ResetButton from "./ResetButton.js";
import { useEffect, useState } from "react";

function App() {
  // ❔ Should all this be in one piece of state, would that be better?
  const [secretCode, setSecretCode] = useState();
  const [win, setWin] = useState();
  const [guesses, setGuesses] = useState([]);

  // Get secret code
  const getSecretCode = async () => {
    try {
      let response = await fetch(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&rnd=new&format=plain",
        {
          method: "GET",
          mode: "cors",
        }
      );
      let respText = await response.text();
      setSecretCode(respText.replace(/\n/g, ""));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Reset Game
  const resetGame = () => {
    setWin();
    setGuesses([]);
    getSecretCode();
  };

  // Initial secret code fetch
  useEffect(() => {
    getSecretCode();
  }, []);

  // Debugging log
  useEffect(() => {
    console.log(secretCode);
  }, [secretCode]);

  // Check for losing conditions
  useEffect(() => {
    if (guesses.length > 9) {
      setWin(false);
    }
  }, [guesses, win]);

  return (
    <>
      <div
        className="App"
        style={{ fontSize: "2rem", margin: "1rem 0", fontWeight: "bold" }}
      >
        Mastermind
      </div>
      <div id="announcement" style={{ textAlign: "center", margin: "2rem" }}>
        {win === true
          ? "You Are A Winner"
          : win === false
          ? "You Are Not A Winner"
          : ""}
      </div>
      <GuessAttempts guesses={guesses} secretCode={secretCode} />

      {/* Hide Input or Reset based on win state */}
      {win === undefined ? (
        <GuessInput
          secretCode={secretCode}
          guesses={guesses}
          setGuesses={setGuesses}
          setWin={setWin}
        />
      ) : (
        <ResetButton handleClick={resetGame} />
      )}
    </>
  );
}

export default App;
