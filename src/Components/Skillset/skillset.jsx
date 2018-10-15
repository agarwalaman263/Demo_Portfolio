import React, { Component } from "react";
import ReactDom from "react-dom";
import "./skillset.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretSquareRight);

class Skillset extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    skills: {
      "Front-End Web Development": [
        "React",
        "Angular",
        "Ember",
        "Vanilla",
        "HTML",
        "CSS",
        "JS",
        "SASS",
        "Node",
        "Webpack"
      ],
      "Back-End Development": ["Python"]
    }
  };
  render() {
    const aman = (
      <div className="Skillset">
        aman
        {Object.keys(this.state.skills).forEach(key => {
          return (
            <div className="domain">
              <div className="domain-title">{this.state.skills[key]}</div>
              <div className="domainstack">
                {this.state.skills[key].forEach((item, index) => {
                  console.log(<div className="skill">{item}</div>);
                  return <div className="skill">{item}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );

    return aman;
  }
}
export default Skillset;
