import "./App.css";
import GuessInput from "./GuessInput.js";
import GuessAttempts from "./GuessAttempts.js";
import { useEffect, useState } from "react";

function App() {
  const [secretCode, setSecretCode] = useState();
  const [win, setWin] = useState();
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    // Get secret code
    let getSecretCode = async () => {
      await fetch(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&rnd=new&format=plain",
        {
          method: "GET",
          mode: "cors",
        }
      )
        // Wait for the fetch to resolve
        .then((resp) => {
          // wait for the text method to resolve to a string
          resp.text().then((resp) => {
            setSecretCode(resp.replace(/\n/g, ""));
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getSecretCode();
  }, []);

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
