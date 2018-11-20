import React, { Component } from 'react';
import './App.css';
import MountainRange from './components/MountainRange';
import Nav from './components/Nav'
const url = 'http://localhost:3111'


class App extends Component {

  state = {
    mountains: [],
    newMountains: [{name: '', elevation: 0, range: '', rank: 0, imageUrl: ''}]
  }

  async componentDidMount(){
    fetch('http://localhost:3111/mountains')
      .then(response => response.json())
      .then(data => {
        this.setState({mountains: data.mountains})
      })
  } 

  handleMountainNameChange = (idx) => (evt) => {
      const mountains = this.state.newMountains.map((mountain, sidx) => {
          if (idx !== sidx) return mountain;
          return { ...mountain, name: evt.target.value };
          });
      
          this.setState({ newMountains: mountains });
  }
  handleMountainElevationChange = (idx) => (evt) => {
      const mountains = this.state.newMountains.map((mountain, sidx) => {
          if (idx !== sidx) return mountain;
          return { ...mountain, elevation: evt.target.value };
          });
      
          this.setState({ newMountains: mountains });
  }
  handleMountainRangeChange = (idx) => (evt) => {
      const mountains = this.state.newMountains.map((mountain, sidx) => {
          if (idx !== sidx) return mountain;
          return { ...mountain, range: evt.target.value };
          });
      
          this.setState({ newMountains: mountains });
  }
  handleMountainImgChange = (idx) => (evt) => {
      const mountains = this.state.newMountains.map((mountain, sidx) => {
          if (idx !== sidx) return mountain;
          return { ...mountain, imageUrl: evt.target.value };
          });
      
          this.setState({ newMountains: mountains });
  }
  handleMountainRankChange = (idx) => (evt) => {
      const mountains = this.state.newMountains.map((mountain, sidx) => {
          if (idx !== sidx) return mountain;
          return { ...mountain, rank: evt.target.value };
          });
      
          this.setState({ newMountains: mountains });
  }
      
  handleSubmit = (evt) => {
      evt.preventDefault()
      const { newMountains } = this.state;
      fetch(`${url}/mountains`, {
          method: 'POST',
          mode: 'cors',
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(newMountains)
      })
          .then(response => response.json())
          .then(addingMountains => this.setState({mountains: [...this.state.mountains, addingMountains.mountain]}))
      alert(`Incorporated: with ${newMountains.length} shareholders`);
  }

  handleAddShareholder = (e) => {
      e.preventDefault()
      this.setState({
      newMountains: this.state.newMountains.concat([{name: '', elevation: '', range: '', imageUrl: ''}])
      });
  }

  handleRemoveMountain = (idx) => (e) => {
      e.preventDefault()
      this.setState({
      newMountains: this.state.newMountains.filter((s, sidx) => idx !== sidx)
      });
  }


  consoleL = () => {
      console.log(this.state.newMountains)
  }


  render() {
    return (
      <div className="App">
        <Nav 
          handleMountainNameChange={this.handleMountainNameChange}
          handleMountainElevationChange={this.handleMountainElevationChange}
          handleMountainRangeChange={this.handleMountainRangeChange}
          handleMountainImgChange={this.handleMountainImgChange}
          handleMountainRankChange={this.handleMountainRankChange}
          handleSubmit={this.handleSubmit}
          handleAddShareholder={this.handleAddShareholder}
          newMountains={this.state.newMountains}
          handleRemoveMountain={this.handleRemoveMountain}
        />
        <div className='mountain-range'>
          <MountainRange mountains={this.state.mountains} />
        </div>
      </div>
    );
  }
}

export default App;
