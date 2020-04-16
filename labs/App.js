import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Contacts from './components/contacts/index.js';
//import Profile from './components/profile/index.js';

class App extends Component {
  state = {contacts:[]}
  userProfile() {
    fetch('http://plato.mrl.ai:8080/profile', {
        method:'GET',
        headers: {
            API: 'jundzil',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      console.log(body);
      if (body.profile !== undefined) {
          console.log("Successful");
          this.setState({contacts:body.profile})
        } else {
            console.log("Unsuccessful");
        } 
    });
      
  }
  componentDidMount() {
    console.log("fetch")
    fetch('http://plato.mrl.ai:8080/contacts', {
        method:'GET',
        headers: {
            API: 'jundzil',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        console.log(body);
        if (body.contacts !== undefined) {
            console.log("Successful");
            this.setState({contacts:body.contacts})
        } else {
            console.log("Unsuccessful");
        }
      });
  }
  removeContact(position) {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
        method:'POST',
        headers: {
            API: 'jundzil',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({position:position})
    })
    .then((response) => {
        return response.json()
      })
    .then((body) => {
        console.log(body);
        if (body.removed !== undefined) {
            console.log("Successful");
            const newBody = this.state.contacts.filter((v,i) =>
                (i !== position))
            this.setState({contacts: newBody})
        } 
      });
  }
  addContact(nameRef, numberRef) {

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();

    fetch('http://plato.mrl.ai:8080/contacts/add', {
        method:'POST',
        headers: {
            API: 'jundzil',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: this.state.nameRef,
            number: this.state.numberRef
        })
    })
    .then((response) => {
        return response.json()
      })
    .then((body) => {
        console.log(body);
        if (body.added !== undefined) {
            console.log("Successful");
            this.setState({"name": nameRef, "number": numberRef});
        } 
      })
  }
    render() {
        return (
            <View style={styles.container}>
                <Contacts contactList={this.state.contacts} removeItem = {(position) => this.removeContact(position)} />
                <Input placeholder="Name"
                    ref={this.nameRef} />
                <Input placeholder="Number"
                    ref={this.numberRef} />
                <Button style={styles.button} title="Add" onPress={() => this.addContact(this.state.nameRef, this.state.numberRef)}></Button>
            </View>
        );
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
  
  export default App;

  //hi