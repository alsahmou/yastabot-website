import React, { Component } from "react";

export class Security extends Component {
  render() {
    return (
      <div id="security">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <h2>{this.props.data ? this.props.data.title1 : "Loading"}</h2>
              </div>
              <div className="row">
                <h3>{this.props.data ? this.props.data.paragraph1 : "Loading"}</h3>
              </div>
            </div>  
            <div className="col-lg-6 text-center">
              <img src={this.props.data ? this.props.data.img1 : "Loading"}></img>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="row">
                <img src={this.props.data ? this.props.data.img2 : "Loading"}></img>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="row">
                <h2>{this.props.data ? this.props.data.title2 : "Loading"}</h2>
              </div>
              <div className="row">
                <h3>{this.props.data ? this.props.data.paragraph2 : "Loading"}</h3>
              </div>
            </div>  
            </div>
        </div>
      </div>
    );
  }
}

export default Security;