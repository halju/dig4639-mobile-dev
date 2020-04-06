import React from 'react';
import Questions from '../Questions';
import questions from '.../questions.json';

const TITLE_STATE = 0
const QUESTION_STATE = 1
const TIME_LIMIT = 10

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {titleText: "Welcome to the Rodent Quiz!",
    currentState: TITLE_STATE,
    counter: 0,
    currentQuestion: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion() {
    clearInterval(this.timer)
    this.setState({
      titleText:"You answered early!",
      currentState: TITLE_STATE
    })
  }

  start() {
    console.log("Starting!")
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})
    this.timer = setInterval(() => { 
      console.log("INTERVAL CALLED")
      this.setState({counter : this.state.counter+1})
      if(this.state.counter < this.timeLimit) {
        this.setState({titleText:"Begin the quiz! " + this.state.counter})
      } else {
        this.setState({titleText:"Time's up!"})
        clearInterval(this.timer)
      }
    }, 1000);
  }
  render(props) {
    console.log("RENDER CALLED")
    return (
      <div className='App'>
        <div>{this.timeLimit - this.state.counter}</div>
      {(this.state.currentState === QUESTION_STATE) ?
        <Questions answers={questions[this.state.currentQuestion].possibleAnswers} 
        question={questions[this.state.currentQuestion].question} 
        nextQuestion={() => this.nextQuestion()} />
        : 
        <h1 className='title'>{this.state.titleText}</h1>}
        <input id='startButton' type="button" value="Start" onClick={() => this.start()}></input>
      </div>
    )
  }
}

export default Home;