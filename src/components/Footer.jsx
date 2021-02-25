import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="footer" className="text-center">
        <div className="container">
          <div className="row">
            <h3>{this.props.data ? this.props.data.text : "Loading"}</h3>
          </div>
          <div className="row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-custom1 btn-lg"> <i className="fa fa-send"></i> Get started</button>
            </a>
          </div>
          <div id="">
            <div className="container text-left">
              <div className="row">
                <p>
                  {this.props.data ? this.props.data.footer1 : "Loading"}
                </p>
              </div>
              <div className="row">
                <p>
                  {this.props.data ? this.props.data.footer2 : "Loading"}
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
