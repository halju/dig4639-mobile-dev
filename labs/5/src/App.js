import React from 'react';
import './App.css';
import Card from './components/Card'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:"", list: []}
  }
  
  async getServerData() {
    const response = await fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    console.log("Received response from server!")
    console.log(response)
    const obj = await response.json()
    console.log("Processed response as JSON: ", obj)
    this.setState({list:obj.properties.periods})
  }

  componentDidMount() {
    console.log("Component did mount!")
    this.getServerData()
  }

  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        {this.state.list.map((obj, index) =>
        <Card key={index} title={obj.name}>
          <h1>{obj.temperature} {obj.temperatureUnit}</h1>
          <p>{obj.detailedForecast}</p>
          </Card>
        )}
      </div>
    )
  }
}

export default App;
