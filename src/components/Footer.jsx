import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="footer" className="text-center">
        <div className="container">
          <div className="row">
            <h3>I'm interested, how do I get started?</h3>
          </div>
          <div className="row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-custom1 btn-lg">Get started</button>
            </a>
          </div>
          <div id="">
            <div className="container text-left">
              <div className="row">
                <p>
                  Icons made by Freepik from flaticon.com
                </p>
              </div>
              <div className="row">
                <p>
                  &copy; 2021 Yastabot
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
