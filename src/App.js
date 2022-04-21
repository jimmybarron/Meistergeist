import "./App.css";

function App() {
  // Get secret code
  let secretCode = "3409";

  // Get user guess attempt
  let guess = "3410";

  let guessSummary = {
    numMatch: 0,
    numAndPosMatch: 0,
  };

  // Iterate through guess. Check for matching character, and matching position.
  // If number is contained in guess, log 'numMatch' and 'numAndPosMatch' for both, to guessSummary object
  for (let i = 0; i < guess.length; i++) {
    for (let j = 0; j < secretCode.length; j++) {
      if (i === j && guess.charAt(i) === secretCode.charAt(j)) {
        guessSummary.numAndPosMatch++;
      } else if (guess.charAt(i) === secretCode.charAt(j)) {
        guessSummary.numMatch++;
      }
    }
  }

  console.log(guessSummary);
  // If 'numAndPosMatch' === 4; player wins, If 'numAndPosMatch' < 4 and 'guessAttempts' <= 9; player loses.

  return <div className="App">Mastermind</div>;
}

export default App;
