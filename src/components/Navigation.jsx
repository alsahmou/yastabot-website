import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/logo.png" alt="YastaBot Logo"></img>
              YastaBot for Telegram
            </a>{" "} */}
            <a href="#page-top">
              <a className="navbar-brand page-scroll">YastaBot for Telegram</a>
              <img src="img/logo.png" alt="YastaBot Logo"></img>
            </a>{" "}
          </div>

          {/* <a href="#page-top">
              <div className="row"></div>
                <div className="col-xs-12 col-md-2">
                  <img src="img/logo.png" alt="YastaBot Logo"></img>
                </div>
              <div className="col-xs-12 col-md-10">
                <a className="navbar-brand page-scroll">YastaBot for Telegram</a>
              </div>
              
            </a>{" "} */}

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#in-action" className="page-scroll">
                  See it in Action
                </a>
              </li>
              <li>
                <a href="#why-yastabot" className="page-scroll">
                  Why Yastabot?
                </a>
              </li>
              <li>
                <a href="#technology" className="page-scroll">
                  Technology
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#security" className="page-scroll">
                  Security
                </a>
              </li>
              {/* <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
