import "./Announcement.css";
import { motion } from "framer-motion";

const Announcement = ({ secretCode, win, guesses }) => {
  console.log(`${guesses.length * 10}vh`);
  return (
    <motion.div
      id="announcement"
      className={
        win === false
          ? "loseStyle"
          : win === true
          ? "winStyle"
          : win === undefined
          ? "playingStyle"
          : ""
      }
      animate={{ height: `${guesses.length * 10}vh` }}
    >
      <div className="winLose">
        {win === false ? "YOU LOSE" : win === true ? "YOU WIN" : ""}
      </div>
      <div className="codeReveal">{secretCode}</div>
      <div className="coolLine"></div>
    </motion.div>
  );
};

export default Announcement;
