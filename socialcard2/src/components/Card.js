import React, { Component } from 'react';

import Logo from './Logo';
import Headline from './Headline';
import CreditBox from './CreditBox';
import Message from './Message';

class Card extends React.Component {

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    addone(a){
        this.setState({
            count: this.state.count + a
        });
    }

    render(){
        return (
            <div className="card">
                <section className="main">
                    <Logo logo={this.props.logoURL} />
                    <Headline headline={this.props.headline} />
                    <CreditBox
                        name={this.props.name}
                        creditImageURL={this.props.creditImageURL}
                    />
                </section>
                <Message
                    title={this.props.headline}
                    message={this.props.message}
                    url={this.props.url}
                    urlDisplayName={this.props.urlDisplayName}
                />
                <button onClick={()=> this.addone(1)}>INCREMENT</button>
                <button onClick={this.addone.bind(this, -1)}>DECREMENT</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default Card;