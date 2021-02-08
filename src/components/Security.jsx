import React, { Component } from "react";

export class Security extends Component {
  render() {
    return (
      <div id="security">
        <div className="container">
          <div className="section-title text-center">
            <h2>Security</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="security">
                      <div className="security-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="security-content">
                        <p>"{d.text}"</p>
                        <div className="security-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Security;
