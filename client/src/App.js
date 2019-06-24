import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      charities: []
    }
  }

  fetchData = () => {
    axios.get('/api/charities') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.charities) // Just the message

      this.setState({
        charities: response.data.charities
      });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
        {this.state.charities.map(charity => <p>{charity.name}</p>)}
      </div>
    );
  }
}

export default App;
