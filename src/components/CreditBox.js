import React, { Component } from 'react';

class CreaditBox extends React.Component {
    render(){
        return (
            <div className="credit-box">
                <p className="credit-box__name">{this.props.name}</p>
                <img src={this.props.creditImageURL} alt="person" className="credit-box__headshot" />
            </div>
        );
    }
    
}

export default CreaditBox;