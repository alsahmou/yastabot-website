// import React, { Component } from "react";

// export class Features extends Component {
//   render() {
//     return (
//       <div id="features" className="text-center">
//         <div className="container">
//           <div className="row">
//             <h2>Features</h2>
//           </div>
//           <div className="row">
//             <div className="col-xs-2">
//               <div className="row">
//                 <img src="img/refresh.png"></img>
//               </div>
//               <div className="row">
//                 <h3>Set Recurring Reminders</h3>
//               </div>
//               <div className="row">
//                 <h4>"remind me everyday at 9pm to take my medication"</h4>
//               </div>
//             </div>
//             <div className="col-xs-3">
//             </div>
//             <div className="col-xs-2">
//               <div className="row">
//                 <img src="img/add-reminder.png"></img>
//               </div>
//               <div className="row">
//                 <h3>Set Simple Reminders</h3>
//               </div>
//               <div className="row">
//                 <h4>"remind me in 20m to check the oven"</h4>
//               </div>
//             </div>
//             <div className="col-xs-3">
//             </div>
//             <div className="col-xs-2">
//               <div className="row">
//                 <img src="img/team.png"></img>
//               </div>
//               <div className="row">
//                 <h3>Use it in a Group</h3>
//               </div>
//               <div className="row">
//                 <h4>your roommates will never forget to pay rent again</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Features;

import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="row">
            <h2>Features</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="features-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
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

export default Features;
