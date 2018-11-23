import React, { Component } from 'react';
import './App.css';
import MountainRange from './components/MountainRange';
import Nav from './components/Nav'
const url = 'http://localhost:3111'


class App extends Component {

  state = {
    mountains: [],
    newMountains: [{name: '', elevation: '', range: '', rank: '', imageUrl: ''}],
    userMountains: [],
    itemToDelete: null,
  }

  async componentDidMount(){
    fetch(`${url}/mountains`)
      .then(response => response.json())
      .then(data => {
        this.setState({mountains: data.mountains})
      })
      fetch(`${url}/user_mountains`)
      .then(response => response.json())
      .then(data => {
        this.setState({userMountains: data.mountains})
      })
  } 

  handleUserMountainAdd = (idx) => (evt) => {
    if (!evt.target.type){
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
  }
      
  handleSubmit = (evt) => {
    evt.preventDefault()
    if(this.state.newMountains.name !== undefined){
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

  selectMountainId = (e) => {
    let mountainId = this.state.userMountains.filter(mountain => mountain.name === e.target.innerText)[0].id
    this.setState({itemToDelete: mountainId})
  } 

  deleteMountain = async (e) => {
    e.preventDefault()
    fetch(`${url}/user_mountains/${this.state.itemToDelete}`, {
      method: 'DELETE',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(this.deleteHandler)
  }
  

  deleteHandler = (data) => {
    let newMountains = this.state.userMountains.filter(item => item.id !== data.deleted.id)
    this.setState({userMountains: newMountains})
  }

  consoleL = () => {
      console.log(this.state.newMountains)
  }


  render() {
    return (
      <div className="App">
        <Nav 
          handleSubmit={this.handleSubmit}
          handleAddMountain={this.handleAddMountain}
          newMountains={this.state.newMountains}
          handleRemoveMountain={this.handleRemoveMountain}
          mountains={this.state.mountains}
          handleUserMountainAdd={this.handleUserMountainAdd}
          consoleL={this.consoleL}
          deleteMountain={this.deleteMountain}
          selectMountainId={this.selectMountainId}
          userMountains={this.state.userMountains}
        />
        <div className='mountain-range'>
          <MountainRange mountains={this.state.userMountains} />
        </div>
      </div>
    );
  }
}

export default App;
