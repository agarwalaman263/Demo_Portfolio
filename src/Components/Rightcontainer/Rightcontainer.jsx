import React, { Component } from "react";
import ReactDom from "react-dom";
import "./../../fonts.css";
import "./Rightcontainer.css";
import Particles from "react-particles-js";
// import { $ } from "jquery";
import Typed from "react-typed";
import parameters from "./particleConfig";
import { Helmet } from "react-helmet";

class Rightcontainer extends Component {
  state = {
    list: [
      "Web Developer.",
      "Software Engineer.",
      "ML Enthusiast.",
      "Tech Geek.",
      "Anime Lover",
      "Apple Fanboy"
    ],
    params: parameters
  };
  render() {
    return (
      <div
        className="Rightcontainer"
        style={{
          position: "relative"
        }}
      >
        <Helmet>
          <title>Aman Agarawl | Home</title>
        </Helmet>
        <Particles
          params={this.state.params}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndexs: -1
          }}
        />
        <div className="name">
          <div className="start"> Hey Folks, My name is </div>
          <div className="Full-name">Aman Agarwal</div>
        </div>
        <div className="caption">
          <div className="start"> I am a </div>
          <div className="designation">
            <Typed
              strings={this.state.list}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Rightcontainer;
