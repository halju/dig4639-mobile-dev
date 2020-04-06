import React from 'react'
import { Text, Button } from 'react-native'

class Questions extends React.Component {
render() {
  return( 
    <>
    <Text>{this.props.question}</Text>
    {this.props.answers.map((v, i) => {
      return <Button key={i} title={v.text}
      onPress={() => this.props.nextQuestion(v.correct)}></Button>
    })}
    </>
    )
  }
}

export default Questions