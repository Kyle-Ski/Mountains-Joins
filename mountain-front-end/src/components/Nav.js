import React, { Component } from 'react'
import logo from '../logo.svg'
import AddMountain from './AddMountain'
import DeleteMountain from './DeleteMountain'

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
                    handleSubmit={this.props.handleSubmit}
                    handleAddMountain={this.props.handleAddMountain}
                    newMountains={this.props.newMountains}
                    handleRemoveMountain={this.props.handleRemoveMountain}
                    mountains={this.props.mountains}
                    handleUserMountainAdd={this.props.handleUserMountainAdd}
                    consoleL={this.props.consoleL}
                /> 
                <DeleteMountain 
                    mountains={this.props.mountains} 
                    selectMountainId={this.props.selectMountainId}
                    deleteMountain={this.props.deleteMountain}
                    userMountains={this.props.userMountains}
                />

            </header>
        )
    }
}

export default Nav