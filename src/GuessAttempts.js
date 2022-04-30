import "./GuessAttempts.css";
import Markers from "./Markers.js";
import { motion } from "framer-motion";

const GuessAttempts = ({ guesses, secretCode }) => {
  return (
    <div className="pastGuessContain">
      {guesses.map((guess, index) => {
        return (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className="pastGuess"
          >
            <div>{guess.guessNum}</div>
            <Markers
              numMatch={guess.numMatch}
              numAndPosMatch={guess.numAndPosMatch}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default GuessAttempts;
