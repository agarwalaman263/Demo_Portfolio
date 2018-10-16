import React, { Component } from "react";
import ReactDom from "react-dom";
import "./projects.css";
import { Helmet } from "react-helmet";
class projects extends Component {
  state = {
    projects: {
      VOS: {
        status: ["Halted"],
        Description: ["lorem ipsum"],
        Stack: ["HTML", "CSS", "JS", "Cheerio", "ELectron", "jQuery", "Node"],
        Link: ["Private"],
        Team: ["Karthik Rajaraman", "Aman Agarwal"]
      },
      "Career Matrix": {
        status: ["Completed"],
        Description: ["aman"],
        Stack: ["HTML", "SASS", "Vanilla", "Webpack", "jQuery"],
        Link: ["Private"],
        Team: ["Mihir Dutta", "Aman Agarwal"]
      },
      "VIT Feedback Portal": {
        status: ["Ongoing"],
        Description: ["aman"],
        Stack: ["HTML", "SASS", "JS", "jQuery", "PHP"],
        Link: ["Private"],
        Team: ["Priyanshi Raj", "Aman Agarwal"]
      },
      "Stock Prediction": {
        status: ["Ongoing"],
        Description: ["aman"],
        Stack: ["agarwal"],
        Link: ["Private"],
        Team: ["Roshan Tapas Basu", "Aman AGarwal"]
      }
    }
  };
  render() {
    return (
      <div className="projects">
        <Helmet>
          <title>Aman Agarwal | Projects</title>
        </Helmet>
        {Object.keys(this.state.projects).map((item, key) => {
          return (
            <div className="project-each">
              <div className="project-heading">
                <div className="project-title">{item}</div>
                <div className="project-status">
                  {this.state.projects[item].status}
                </div>
              </div>
              <div className="project-desc">
                {Object.keys(this.state.projects[item]).map((items, keys) => {
                  if (items !== "status") {
                    return (
                      <div className="detail-head">
                        <div className="desc-title">{items}</div>
                        <div className="value">
                          {this.state.projects[item][items].map(keyss => {
                            return <div>{keyss}</div>;
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default projects;
