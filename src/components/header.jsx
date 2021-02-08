import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="intro">
            <div className="container">
              <div className="row intro-text text-center">
                <div className="type-writer-container">
                  <p className="type-writer">/remind me in 20 minutes to workout</p>
                </div>
              </div>
              <div className="row text-center">
                <p className="type-writer">/remind me in 20 minutes to workout</p>
              </div>
              <div className="row text-center">
                <p>Yastabot uses the latest AI and NLP technlogoy to make it easy for you to set reminders</p>
              </div>
              <div className="row text-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-custom1 btn-lg">Get started</button>
                </a>
              </div>
              <div className="row text-center">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-custom2">Something</button>
                </a>
                <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
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


{/* <div className="col-md-12 text-center intro-text">
                  <h2>
                    Insert typewriter here
                  </h2>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div> */}