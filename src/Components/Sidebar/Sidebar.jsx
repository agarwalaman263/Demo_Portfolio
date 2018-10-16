import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Sidebar.css";
import $ from "jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGhost,
  faHome,
  faGraduationCap,
  faProjectDiagram,
  faBuilding,
  faEye,
  faEnvelope,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
library.add(faGhost);
library.add(faHome);
library.add(faGraduationCap);
library.add(faProjectDiagram);
library.add(faBuilding);
library.add(faEye);
library.add(faEnvelope);
library.add(faStickyNote);
class Sidebar extends Component {
  state = {
    imgURL: "https://picsum.photos/120/120"
  };
  toggle = () => {
    $(".menuItems")
      .not(".toggle")
      .toggle();
    if (
      $(".menuItems")
        .not(".toggle")
        .css("display") === "block"
    ) {
      $(".menuItems")
        .not(".toggle")
        .css("display", "flex");
    }
  };

  render() {
    return (
      <div className="Sidebar">
        <div className="menuItems toggle" onClick={this.toggle}>
          |||
        </div>

        <img src={this.state.imgURL} alt="" />
        <NavLink to="/">
          <div className="menuItems">
            <FontAwesomeIcon icon="home" />
            Home
          </div>
        </NavLink>
        <NavLink to="/skillset">
          <div className="menuItems">
            <FontAwesomeIcon icon="ghost" />
            SkillSet
          </div>
        </NavLink>
        <NavLink to="/education">
          <div className="menuItems">
            <FontAwesomeIcon icon="graduation-cap" />
            Education
          </div>
        </NavLink>
        <NavLink to="/projects">
          <div className="menuItems">
            <FontAwesomeIcon icon="project-diagram" />
            Projects
          </div>
        </NavLink>
        <div className="menuItems">
          <FontAwesomeIcon icon="building" />
          Experience
        </div>
        <div className="menuItems">
          <FontAwesomeIcon icon="eye" />
          Social Apperaence
        </div>
        <div className="menuItems">
          <FontAwesomeIcon icon="envelope" />
          Contact ME
        </div>
        <div className="menuItems">
          <FontAwesomeIcon icon="sticky-note" />
          Dev Stack
        </div>
      </div>
    );
  }
}
export default Sidebar;
