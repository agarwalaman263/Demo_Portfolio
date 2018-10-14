import React, { Component } from "react";
import ReactDom from "react-dom";
import "./../../fonts.css";
import "./Rightcontainer.css";

class Rightcontainer extends Component {
  state = {
    list: [
      "Web Developer.",
      "Software Engineer.",
      "ML Enthusiast.",
      "Tech Geek."
    ]
  };
  render() {
    return (
      <div className="Rightcontainer">
        <div className="name">
          Hey Folks, My name is <div className="Full-name">Aman Agarwal</div>
        </div>
        <div className="caption">
          I am a<div className="designation">Developer</div>
          <div className="blinker">|</div>
        </div>
      </div>
    );
  }
}
export default Rightcontainer;
