import React, { Component } from "react";

export class Security extends Component {
  render() {
    return (
      <div id="security">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <h2>Security</h2>
              </div>
              <div className="row">
                <h3>Yastabot was designed and implemented with multiple layers of protection with your privacy in mind.
                  Your data is encrypted both in transport and in storage with the latest AWS technologies.</h3>
              </div>
            </div>  
            <div className="col-lg-6 text-center">
              <img src="img/security.png"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="row">
                <img src="img/locked-padlock.png"></img>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="row">
                <h2>Privacy</h2>
              </div>
              <div className="row">
                <h3>We believe that you are the owner of your data. We will never sell your data and we’re committed to protecting you and your information.</h3>
              </div>
            </div>  
            </div>
        </div>
      </div>
    );
  }
}

export default Security;