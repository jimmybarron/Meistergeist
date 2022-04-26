const GuessAttempt = ({ guess, numMatch, numAndPosMatch }) => {
  return (
    <div
      className={
        numAndPosMatch > 0
          ? "numAndPosMatchStyle"
          : numMatch > 0
          ? "numMatchStyle"
          : "noMatchStyle"
      }
    >
      {guess}
    </div>
  );
};

export default GuessAttempt;
