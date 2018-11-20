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
                <button className='add-mountain' onClick={this.addMountain}>{this.state.add ? 'Collapse Form': 'Add Mountain'}</button>
                {this.state.add ? <AddMountain /> : ''}
            </header>
        )
    }
}

export default Nav