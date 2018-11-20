import React, {Component} from 'react'

class AddMountain extends Component {

    state={
        name: '',
        elevation: 0,
        range: '',
        url: '',
        newMountains: []
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setRange = (e) => {
        this.setState({range: e.target.value})
    }

    setUrl = (e) => {
        this.setState({url: e.target.value})
    }

    setElevation = (e) => {
        this.setState({elevation: Number(e.target.value)})
    }

    submit = () => {
        let newM = {name: this.state.name, elevation: this.state.elevation, range: this.state.range, url: this.state.url}
        this.setState({newMountains: [...this.state.newMountains.concat(newM)]})
    }
    consoleL = () => {
        console.log(this.state.newMountains)
    }

    render(){
        return (
            <div>
            <form className='add-m-form'>
                <input onChange={this.setName} placeholder='Mountain Name'/>
                <label>Elevation:</label>
                <input onChange={this.setElevation} type='number' min='0' />
                <input onChange={this.setRange} placeholder='Range'/>
                <input onChange={this.setUrl} placeholder='Image URL' />
            </form>
                <button onClick={this.submit}>Add Mountain</button>
                <button onClick={this.consoleL}>console log new mountains</button>
                </div>
                
                
        )
    }
}

export default AddMountain