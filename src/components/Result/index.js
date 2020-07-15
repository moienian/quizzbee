import React from "react";
import "./Result.scss";

const Result = ({ score, playAgain }) => {
  return (
    <div className="score-board">
      <div className="score">You scored {score} / 5 correct answers!</div>
      <button className="playBtn" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Result;
