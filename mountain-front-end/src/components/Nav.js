import React, { Component } from 'react'
import logo from '../logo.svg'
import AddMountain from './AddMountain'
class Nav extends Component {

    state={
        add: false
    }

    addMountain = (e) => {
        e.preventDefault()
        this.setState({add: !this.state.add})
    }

    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <AddMountain 
                    handleMountainNameChange={this.props.handleMountainNameChange}
                    handleMountainElevationChange={this.props.handleMountainElevationChange}
                    handleMountainRangeChange={this.props.handleMountainRangeChange}
                    handleMountainImgChange={this.props.handleMountainImgChange}
                    handleMountainRankChange={this.props.handleMountainRankChange}
                    handleSubmit={this.props.handleSubmit}
                    handleAddMountain={this.props.handleAddMountain}
                    newMountains={this.props.newMountains}
                    handleRemoveMountain={this.props.handleRemoveMountain}
                    mountains={this.props.mountains}
                    handleUserMountainAdd={this.props.handleUserMountainAdd}
                    consoleL={this.props.consoleL}
                /> 
            </header>
        )
    }
}

export default Nav