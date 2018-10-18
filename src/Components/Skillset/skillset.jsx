import React, { Component } from "react";
import ReactDom from "react-dom";
import "./skillset.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

library.add(faCaretSquareRight);
library.add(faCheck);

class Skillset extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    skills: {
      "Competitive Coding": ["C++", "C", "Python"],
      "Front-End Web Development": ["HTML", "CSS", "JS"],
      "CSS Preprocessors": ["SASS"],
      "Web Frameworks": ["React", "Vanilla"],
      "Task Runners": ["Gulp", "Grunt", "Webpack"],
      "File Bundlers": ["Webpack"],
      "Back-End Development": ["Flask", "php", "node"],
      "Server Tech": ["Heroku", "000webhost"],
      Databases: ["mySQL", "mongodb"],
      "Version Control": ["GIT"],
      "Online Repositories": ["GitHub", "BitBucket", "gitLab"]
    }
  };
  render() {
    const aman = (
      <div className="Skillset">
        <Helmet>
          <title>Aman Agarwal | Skillset</title>
        </Helmet>
        {Object.keys(this.state.skills).map(key => {
          return (
            <div className="domain">
              <div className="domain-title">{key}</div>
              <div className="domainstack">
                {this.state.skills[key].map(item => (
                  <div className="skill">
                    <FontAwesomeIcon icon="check" />
                    {item}
                  </div>
                ))}
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
