import React, { Component } from 'react'
import logo from '../logo.svg'

class Nav extends Component {

    state={
        add: false
    }

    addMountain = () => {
        this.setState({add: !this.state.add})
    }

    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.addMountain}>Click Me</button>
                {this.state.add ? <p>Am I showing?</p> : ''}
            </header>
        )
    }
}

export default Nav