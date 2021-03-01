
import React, { Component } from "react";

export class InAction extends Component {
  render() {
    return (
      <div id="in-action" className="text-center">
        <div className="container">
          <div className="row img-container">
            <h2>{this.props.data ? this.props.data.title : "Loading"}</h2>
          </div>
          <div className="row img-container">
              <img className ="inaction-img" src={this.props.data ? this.props.data.img : "Loading"}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InAction;