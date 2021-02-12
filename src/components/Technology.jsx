import React, { Component } from "react";

export class Technology extends Component {
  render() {
    return (
      <div id="technology" className="text-center">
        <div className="container">
          <div className="row img-container">
              <img src="img/machine.png"></img>
          </div>
          <div className="row">
            <h3>Our sophisticated NLP algorithm uses the latest state of the art 
                technologies to set reminders with barely any effort from you.</h3>
          </div>
          <div className="row">
            <h2>Yastabot does the heavy lifting for you</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;


{/* <div className="row">
            <div className="col-md-8 section-title text-center">
              <h3>Our sophisticated NLP algorithm uses the latest state of the art 
                technologies to set reminders with barely any effort from you.</h3>
                <h2>Yastabot does the heavy lifting for you</h2>
            </div>
          </div> */}
