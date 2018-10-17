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
  hideSidebar = () => {
    if ($("body").width() <= 600) {
      $(".menuItems")
        .not(".toggle")
        .hide();
    }
  };

  render() {
    return (
      <div>
        <div className="Sidebar">
          <div className="menuItems toggle" onClick={this.toggle}>
            |||
          </div>

          <img src={this.state.imgURL} alt="" />
          <NavLink to="/">
            <div className="menuItems" onClick={this.hideSidebar}>
              <FontAwesomeIcon icon="home" />
              Home
            </div>
          </NavLink>
          <NavLink to="/skillset">
            <div className="menuItems" onClick={this.hideSidebar}>
              <FontAwesomeIcon icon="ghost" />
              SkillSet
            </div>
          </NavLink>
          <NavLink to="/education">
            <div className="menuItems" onClick={this.hideSidebar}>
              <FontAwesomeIcon icon="graduation-cap" />
              Education
            </div>
          </NavLink>
          <NavLink to="/projects">
            <div className="menuItems" onClick={this.hideSidebar}>
              <FontAwesomeIcon icon="project-diagram" />
              Projects
            </div>
          </NavLink>
          <NavLink to="/experience">
            <div className="menuItems" onClick={this.hideSidebar}>
              <FontAwesomeIcon icon="building" />
              Experience
            </div>
          </NavLink>

          <div className="menuItems" onClick={this.hideSidebar}>
            <FontAwesomeIcon icon="eye" />
            My Work
          </div>
          <div className="menuItems" onClick={this.hideSidebar}>
            <FontAwesomeIcon icon="envelope" />
            Contact ME
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
