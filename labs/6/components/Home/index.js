import React from 'react';
import Questions from '../Questions';
import questions from '../../questions.json';
import { View, Text, Button, StyleSheet } from 'react-native'
const TITLE_STATE = 0
const QUESTION_STATE = 1
const TIME_LIMIT = 10
const SCORE_STATE = 2

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleText: "Welcome to the Rodent Quiz!",
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion: 0,
      currentScore: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(isCorrect) {
    console.log(isCorrect)
    if (isCorrect == true) {
      this.setState({currentScore: this.state.currentScore + 1})
    }
    clearInterval(this.timer)
    console.log(this.state.currentQuestion)
    console.log(questions.length)
    if (this.state.currentQuestion >= questions.length - 1) {
      console.log("This is the end")
      this.setState({titleText: "This is the end",
        currentState: SCORE_STATE,
        counter: 0})
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }

  start() {
    console.log("Starting!")
    this.setState({counter:0,
      currentQuestion: 0,
      currentScore: 0})
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
      <View style={styles.container}>
        <View style={styles.item}>{this.timeLimit - this.state.counter}</View>
      {(this.state.currentState === QUESTION_STATE) 
        ?
        <Questions answers={questions[this.state.currentQuestion].possibleAnswers} 
        question={questions[this.state.currentQuestion].question} 
        nextQuestion={(isCorrect) => this.nextQuestion(isCorrect)} />
        : (this.state.currentState === TITLE_STATE) ?
        <>
          <Text style={styles.title}>{this.state.titleText}</Text>
          <Button style={styles.button} title="Start" onPress={() => this.start()}></Button>
        </>
        :
        <>
        <Text style={styles.title}>Your score is {this.state.currentScore}/3</Text>
        <Button style={styles.button} title="Restart" onPress={() => this.start()}></Button>
        </>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22,
   alignSelf: "center",
  },
  item: {
    padding: 10,
    height: 44,
    alignSelf: "center",
  },
  title: {
    padding: 10,
    fontSize: 30,
    color: "#14151c",
    fontWeight: "bold",
    textAlign: "center"
    
  },
  button: {
    padding: 10,
    alignSelf: "center",
  }
});

export default Home;