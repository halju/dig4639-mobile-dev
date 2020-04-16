import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class AddContact extends React.Component {
    render() {
        return (
            <View><Button style={styles.button} title="Add" 
            onPress={() => this.addItem()}></Button></View>
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
    fontSize: 18,
    height: 44,
  },
  button: {
      padding: 10,
      alignSelf: "center",
      margin: 10,
      lineHeight: 110
    },
});

export default AddContact;