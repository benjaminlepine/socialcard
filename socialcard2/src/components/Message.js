import React, { Component } from 'react';

class Message extends React.Component {
  render(){
    return (
      <section className="message">
       <h4 className="message__headline">
        {this.props.title}
        </h4>
        <p className="message__body"> 
          {this.props.message}
        </p>
        <a href={this.props.url} className="message__url">
          {this.props.urlDisplayName}
        </a>
      </section>
    );
  }
}

export default Message;