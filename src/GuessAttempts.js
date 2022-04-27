import "./GuessAttempts.css";

const GuessAttempts = ({ guesses, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "1rem 0",
      }}
    >
      {guesses.map((guess, index) => {
        return (
          <div
            style={{
              width: "16rem",
              padding: "0 0 1rem 0",
              border: "1px black solid",
            }}
          >
            <div
              key={index}
              className={
                guess.numAndPosMatch > 0
                  ? "numAndPosMatchStyle"
                  : guess.numMatch > 0
                  ? "numMatchStyle"
                  : "noMatchStyle"
              }
            >
              {guess.guessNum}
            </div>
            <div>Perfect numbers: {guess.numAndPosMatch}</div>
            <div>Just Number Correct: {guess.numMatch}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GuessAttempts;
