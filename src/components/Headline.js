import React, { Component } from 'react';

class Headline extends React.Component {
    render(){
        return (
            <h3 className="main__headline">
                {this.props.headline}
            </h3>
        );
    }
}

export default Headline;