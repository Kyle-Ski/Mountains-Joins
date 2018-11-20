import React, {Component} from 'react'

class AddMountain extends Component {

    state={
        name: '',
        elevation: 0,
        range: '',
        url: '',
        newMountains: [{name: '', elevation: '', range: '', imageUrl: ''}]
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
        
    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
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
            <div className='button-group'>
                <button className='add-mountain' onClick={this.handleAddShareholder}>+ Another Mountain</button>
                <button className='add-mountain'>Add Mountains</button>
                <button className='add-mountain' onClick={this.consoleL}>console log new mountains</button>
            </div>
            {this.state.newMountains.map((mountain, idx)=>(
                <form onSUbmit={this.handleSubmit} className='add-m-form'>
                    <input onChange={this.handleMountainNameChange(idx)} placeholder={`Mountain${idx + 1} Name`} value={mountain.name}/>
                    <label>Elevation:</label>
                    <input onChange={this.handleMountainElevationChange(idx)} type='number' min='0' value={mountain.elevation}/>
                    <input onChange={this.handleMountainRangeChange(idx)} placeholder='Range' value={mountain.range}/>
                    <input onChange={this.handleMountainImgChange(idx)} placeholder='Image URL' value={mountain.imageUrl}/>
                    <button className='minus-mountain' onClick={this.handleRemoveMountain(idx)}>-</button>
                </form>
            ))}
                </div>
                
                
        )
    }
}

export default AddMountain