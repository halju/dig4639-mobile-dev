import React from 'react'
import { Text, Button, StyleSheet } from 'react-native'

class Questions extends React.Component {
  render() {
    return( 
      <>
      <Text style={styles.title}>{this.props.question}</Text>
      {this.props.answers.map((v, i) => {
        return <Text style={styles.fixToText}><Button key={i} title={v.text}
        onPress={() => this.props.nextQuestion(v.correct)}></Button></Text> })}
      </>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    alignSelf: "center",
    alignItems: "center",
   },
   item: {
     padding: 10,
     height: 44,
     alignSelf: "center",
     alignItems: "center",
   },
  title: {
    padding: 10,
    fontSize: 30,
    color: "#14151c",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "HelveticaNeue"
    
  },
  button: {
    padding: 10,
    alignSelf: "center",
    margin: 10,
    lineHeight: 110,
    backgroundColor: "#5687b8",
    color: "#14151c",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  }
});

export default Questions