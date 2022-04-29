import "./GuessAttempts.css";
import Markers from "./Markers.js";

const GuessAttempts = ({ guesses, secretCode }) => {
  return (
    <div className="pastGuessContain">
      {guesses.map((guess, index) => {
        return (
          // <div
          //   key={index}
          //   style={{
          //     width: "16rem",
          //     padding: "0 0 1rem 0",
          //   }}
          // >
          <div className="pastGuess">
            <div>{guess.guessNum}</div>
            <Markers
              numMatch={guess.numMatch}
              numAndPosMatch={guess.numAndPosMatch}
            />
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default GuessAttempts;
