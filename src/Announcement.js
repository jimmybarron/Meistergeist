import "./Announcement.css";

const Announcement = ({ secretCode, win }) => {
  return (
    <div
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
    >
      <div className="winLose">
        {win === false ? "YOU LOSE" : win === true ? "YOU WIN" : ""}
      </div>
      <div className="codeReveal">{secretCode}</div>
      <div className="coolLine"></div>
    </div>
  );
};

export default Announcement;
