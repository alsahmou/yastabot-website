// import React, { Component } from "react";

// export class InAction extends Component {
//   render() {
//     return (
//       <div id="in-action" className="text-center">
//         <div className="container">
//           <div className="col-md-6 col-md-offset-3 section-title">
//             <h2>See how easy it is to set reminders!</h2>
//           </div>
//           <img src="img/in-action.png"></img>
//         </div>
//       </div>
//     );
//   }
// }

// export default InAction;


/* <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div> */


          import React, { Component } from "react";

export class InAction extends Component {
  render() {
    return (
      <div id="in-action" className="text-center">
        <div className="container">
          <div className="row">
            <h2>See how easy it is to set reminders!</h2>
          </div>
          <div className="row img-container">
              <img src="img/in-action.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InAction;