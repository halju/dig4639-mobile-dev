import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Contacts from './components/Contacts/index.js';
//import Profile from './components/profile/index.js';

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
    submitDisabled: true,
    nameText: '',
    numberText: '',
    contacts:[]
    }
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
          this.setState({"name": user.name, "count": user.contacts.length});
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
  nameInput(name) {
    if (name.length > 0) {
      this.setState(
        {
          submitDisabled: false,
          nameText: name
        }
      )
    } else {
      this.setState({ submitDisabled: true })
      console.log(name);
    }
  }
   numberInput(number) {
    if (number.length > 0) {
      this.setState(
        {
          submitDisabled: false,
          numberText: number
        }
      )
    } else {
      this.setState({ submitDisabled: true })
      console.log(number);
    }
  }
  addContact() {
    fetch('http://plato.mrl.ai:8080/contacts/add', {
        method:'POST',
        headers: {
            API: 'jundzil',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: this.state.nameText,
            number: this.state.numberText
        })
    })
    .then((response) => {
        return response.json()
      })
    .then((body) => {
        console.log(body);
        if (body.added !== undefined) {
            console.log("Successful");
            this.setState({ name: name, number: number})
        } else {
          console.log(this.state.nameText);
          console.log(this.state.numberText);
        }
      })
  }
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.title}>Hi</Text>
              <Text style={styles.subtitle}>Contact List:{"\n"}</Text>
                <View style={styles.paragraph}><Contacts contactList={this.state.contacts}
                 removeItem = {(position) => this.removeContact(position)} /></View>
                <Text style={styles.subtitle}>{"\n"}Add Your Own:{"\n"}</Text>
                <Input placeholder="Name"
                    onChangeText={name => this.nameInput(name)} />
                <Input placeholder="Number"
                    onChangeText={number => this.numberInput(number)} />
                <Button style={styles.button} title="ADD" onPress={() => this.addContact()}></Button>
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
    view: {
      flexDirection: 'row',
      padding: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
    title: {
      padding: 10,
      fontSize: 42,
      color: "#14151c",
      fontWeight: "black",
      textAlign: "center",
      fontFamily: "Roboto",
    },
    subtitle: {
      padding: 10,
      fontSize: 24,
      color: "#14151c",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Roboto",
    },
});
  
  export default App;