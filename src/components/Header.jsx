import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="intro">
          <div className="container">
            <div className="row">
              <div className="type-writer-container">
                <div className="row intro-text">
                  <p className="type-writer">{this.props.data ? this.props.data.typeWriter : "Loading"}</p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <p>{this.props.data ? this.props.data.text1 : "Loading"}</p>
            </div>
            <div className="row text-center">
              <div className="container">
                <a href={this.props.data ? this.props.data.getStartedButton : "Loading"} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-custom1 btn-lg"><i className="fa fa-send"></i> Get started</button>
                </a>
              </div>
            </div>
            <div className="row text-center">
              <a href={this.props.data ? this.props.data.button2 : "Loading"} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-custom2">Something</button>
              </a>
              <a href={this.props.data ? this.props.data.button3 : "Loading"} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-custom2">Join our Channel</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;