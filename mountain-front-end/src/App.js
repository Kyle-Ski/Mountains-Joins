import React, { Component } from 'react';
import './App.css';
import MountainRange from './components/MountainRange';
import Nav from './components/Nav'
class App extends Component {

  state = {
    mountains: []
  }

  async componentDidMount(){
    fetch('http://localhost:3111/mountains')
      .then(response => response.json())
      .then(data => {
        this.setState({mountains: data.mountains})
      })
  } 

  render() {
    return (
      <div className="App">
        <Nav />
        <div className='mountain-range'>
          <MountainRange mountains={this.state.mountains} />
        </div>
      </div>
    );
  }
}

export default App;
