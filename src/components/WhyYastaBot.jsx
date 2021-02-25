import React, { Component } from 'react'

export class WhyYastabot extends Component {
  render() {
    return (
      <div id="why-yastabot" className="text-center">
        <div className="container">
          <div className="row">
            <h2>{this.props.data ? this.props.data.title : "Loading"}</h2>
          </div>
          <div className="row">
            <h4>{this.props.data ? this.props.data.text1 : "Loading"}</h4>
          </div>
          <div className="row img-container">
            <div className="row">
              <div className="col-md-6">
                <img src={this.props.data ? this.props.data.img1 : "Loading"}></img>
                <h3>{this.props.data ? this.props.data.img1caption : "Loading"}</h3>
              </div>
              <div className="col-md-6">
                <img src={this.props.data ? this.props.data.img2 : "Loading"}></img>
                <h3>{this.props.data ? this.props.data.img2caption : "Loading"}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyYastabot

