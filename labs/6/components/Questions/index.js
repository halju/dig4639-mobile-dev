import React from 'react'

class Questions extends React.Component {
render() {
  return( 
    <>
    <h2>{this.props.question}</h2>
    {this.props.answers.map((v) => {
      return <input type="button" 
      value={v.text} 
      className="answerButton" 
      onClick={() => this.props.nextQuestion()}></input>
    })}
    </>
    )
  }
}

export default Questions