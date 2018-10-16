import React, { Component } from "react";
import ReactDom from "react-dom";
import "./../../fonts.css";
import "./Rightcontainer.css";

// import { $ } from "jquery";
// import Typed from "typed.js";

class Rightcontainer extends Component {
  state = {
    list: [
      "Web Developer.",
      "Software Engineer.",
      "ML Enthusiast.",
      "Tech Geek."
    ],
    current: "particle making spare in millions"
  };
  // changeDesignation = () => {
  //   for (let i = 0; i < this.state.list.length; i++) {
  //     for (var j = 0; j < this.state.list[i].length; j++) {
  //       var new1 = this.state.list[i].slice(0, j);
  //       this.setState({ current: new1 });
  //       for (var start = 1; start < 10; start++)
  //         setTimeout(function() {}, 3000 * start);
  //     }
  //     i = i % this.state.list.length;
  //   }
  // };
  render() {
    return (
      <div className="Rightcontainer">
        <div className="name">
          Hey Folks, My name is <div className="Full-name">Aman Agarwal</div>
        </div>
        <div className="caption">
          I am a
          <div className="designation" onClick={this.changeDesignation}>
            {this.state.current}
          </div>
          <div className="blinker">|</div>
        </div>
      </div>
    );
  }
}
export default Rightcontainer;
