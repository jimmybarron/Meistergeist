import "./GuessAttempts.css";

const GuessAttempts = ({ guesses, ...props }) => {
  //   const pastGuessAttempts = guesses.map((guess, index) => {
  //     <div
  //       key={index}
  //       class={
  //         numMatch > 0
  //           ? numMatchStyle
  //           : numAndPosMatch
  //           ? numAndPosMatchStyle
  //           : noMatchStyle
  //       }
  //     >
  //       {guess}
  //     </div>;
  //   });

  return guesses.map((guess) => {
    return guess;
  });
};

export default GuessAttempts;
