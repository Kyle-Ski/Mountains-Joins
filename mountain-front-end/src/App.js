import React, { Component } from 'react';
import './App.css';
import MountainRange from './components/MountainRange';
import Nav from './components/Nav'
import { Dropdown } from 'semantic-ui-react'
const url = 'http://localhost:3111'


class App extends Component {

  state = {
    mountains: [],
    newMountains: [{name: '', elevation: '', range: '', rank: '', imageUrl: ''}],
    userMountains: [],
  }

  async componentDidMount(){
    fetch('http://localhost:3111/mountains')
      .then(response => response.json())
      .then(data => {
        this.setState({mountains: data.mountains})
      })
      fetch('http://localhost:3111/user_mountains')
      .then(response => response.json())
      .then(data => {
        this.setState({userMountains: data.mountains})
      })
  } 

  handleUserMountainAdd = (idx) => (evt) => {
    // const selected = this.state.mountains.filter((mountain) => {
    //   return mountain.name === evt.target.innerText
    // })
    const elevation = this.state.mountains.filter(mountain => mountain.name === evt.target.innerText)[0].elevation
    const range = this.state.mountains.filter(mountain => mountain.name === evt.target.innerText)[0].range
    const rank = this.state.mountains.filter(mountain => mountain.name === evt.target.innerText)[0].rank
    const imageUrl = this.state.mountains.filter(mountain => mountain.name === evt.target.innerText)[0].imageUrl

    const mountains = this.state.newMountains.map((mountain, sidx) => {
      if (idx !== sidx){
        return mountain
      } else {
        return { ...mountain, name: evt.target.innerText, elevation: elevation, range: range, rank: rank, imageUrl: imageUrl }
      }
    })
    this.setState({newMountains: mountains})
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
      const thingsToAdd  = this.state.newMountains;
      const data = JSON.stringify(thingsToAdd.map(item => (item)))
      fetch(`${url}/user_mountains`, {
          method: 'POST',
          mode: 'cors',
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: data
      })
          .then(response => response.json())
          .then(addingMountains => this.setState({userMountains: this.state.userMountains.concat(addingMountains.mountain)}))
  }

  handleAddMountain = (e) => {
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
    const structureDropdown = (mountain) => {
      return mountain.map(mountain => {
          return(
              {
                  text: mountain.name,
                  value: mountain.id
              }
          )
      })
  }
    return (
      <div className="App">
        <Nav 
          handleMountainNameChange={this.handleMountainNameChange}
          handleMountainElevationChange={this.handleMountainElevationChange}
          handleMountainRangeChange={this.handleMountainRangeChange}
          handleMountainImgChange={this.handleMountainImgChange}
          handleMountainRankChange={this.handleMountainRankChange}
          handleSubmit={this.handleSubmit}
          handleAddMountain={this.handleAddMountain}
          newMountains={this.state.newMountains}
          handleRemoveMountain={this.handleRemoveMountain}
          mountains={this.state.mountains}
          handleUserMountainAdd={this.handleUserMountainAdd}
          consoleL={this.consoleL}
        />
        <Dropdown placeholder='Mountain' fluid multiple search selection options={structureDropdown(this.state.mountains)} />
        <div className='mountain-range'>
          <MountainRange mountains={this.state.userMountains} />
        </div>
      </div>
    );
  }
}

export default App;
