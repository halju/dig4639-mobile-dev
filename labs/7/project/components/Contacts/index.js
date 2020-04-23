import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class Contacts extends React.Component {
    render() {
      return (
          this.props.contactList.map((contact, i) =>
          <View style={styles.view}>
            <Text><Text style={styles.bold}>Name: </Text>{contact.name}{"\n"}
            <Text style={styles.bold}>Number: </Text>{contact.number}   </Text>
          <Button style={styles.button} title="Remove" onPress={() => this.props.removeItem(i)}></Button></View> 
          )
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
    view: {
      flexDirection: 'row',
      padding: 10,
    },
    bold: {
      fontWeight: 'bold'
    }
});

export default Contacts;