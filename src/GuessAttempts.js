import "./GuessAttempts.css";

const GuessAttempts = ({ guesses, ...props }) => {
  return (
    <div>
      {guesses.map((guess, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default GuessAttempts;
