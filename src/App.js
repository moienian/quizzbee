import React, { Component } from "react";
import "./App.scss";
import quizBank from "./quizBank";
import QuestionBox from "./components/QuestionBox";

class App extends Component {
  state = {
    questionBank: [],
  };
  getQuestions = () => {
    quizBank().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quizbee</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(({ questionId, question, answers }) => (
            <QuestionBox
              key={questionId}
              question={question}
              options={answers}
            />
          ))}
      </div>
    );
  }
}

export default App;
