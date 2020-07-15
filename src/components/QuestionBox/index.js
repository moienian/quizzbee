import React, { useState } from "react";
import "./QuestionBox.scss";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            answer.length > 1
              ? selected(text)
              : console.log("This Question has answerd!");
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
