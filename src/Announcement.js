import "./Announcement.css";
import { motion } from "framer-motion";

const Announcement = ({ secretCode, win, guesses }) => {
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
      <motion.div
        className="winLose"
        animate={{ opacity: win !== undefined ? 1 : 0 }}
        transition={{ delay: 0.8 }}
      >
        {win === false ? "YOU LOSE" : win === true ? "YOU WIN" : ""}
      </motion.div>
      <motion.div
        className="codeReveal"
        animate={{ opacity: win !== undefined ? 1 : 0 }}
        transition={{ delay: 1.2 }}
      >
        {secretCode}
      </motion.div>
      <motion.div
        className="coolLine"
        initial={{ x: -200, y: -200, rotate: 45 }}
        animate={{
          x: 0,
          y: 0,
          rotate: -45,
          opacity: win !== undefined ? 1 : 0,
        }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Announcement;
