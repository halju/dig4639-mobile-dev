import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import Home from './components/Home/index.js';


class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
