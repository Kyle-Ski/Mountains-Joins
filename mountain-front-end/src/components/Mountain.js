import React, { Component } from 'react'

const style = {
    div: {
        borderBottom: '5px solid black',
        width: '75vw'
    }
}

class Mountain extends Component {


    render() {
        return(
            <div style={style.div}>
            <h1>{this.props.name}</h1>
            <h2>Rank: {this.props.rank}, Elevation: {this.props.elevation}</h2>
            <img className='mountain-img' src={this.props.imageUrl} alt={this.props.name} />
            </div>
        )
    }
}

export default Mountain