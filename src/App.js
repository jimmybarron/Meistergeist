import "./Normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import ResetButton from "./ResetButton.js";
import Announcement from "./Announcement";

function App() {
  const [secretCode, setSecretCode] = useState();
  const [win, setWin] = useState();
  const [guesses, setGuesses] = useState([]);
  const [error, setError] = useState([]);

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
      <div className="App">
        <div className="logo">Meistergeist</div>
        <div>
          <GuessAttempts guesses={guesses} secretCode={secretCode} />
          {/* Hide Input or Reset Button based on win state */}
          {win === undefined ? (
            <GuessInput
              secretCode={secretCode}
              guesses={guesses}
              setGuesses={setGuesses}
              setWin={setWin}
              error={error}
              setError={setError}
            />
          ) : (
            <ResetButton handleClick={resetGame} />
          )}
        </div>
        <Announcement secretCode={secretCode} win={win} />
      </div>
    </>
  );
}

export default App;
