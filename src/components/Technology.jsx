import React, { Component } from "react";

export class Technology extends Component {
  render() {
    return (
      <div id="technology" className="text-center">
        <div className="container">
          <div className="row img-container">
              <img src={this.props.data ? this.props.data.img : "Loading"}></img>
          </div>
          <div className="row">
            <h3>{this.props.data ? this.props.data.text1 : "Loading"}</h3>
          </div>
          <div className="row">
            <h2>{this.props.data ? this.props.data.text2 : "Loading"}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;
