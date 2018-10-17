import React, { Component } from "react";
import ReactDom from "react-dom";
import "./projects.css";
import { Helmet } from "react-helmet";
class projects extends Component {
  state = {
    projects: {
      VOS: {
        Description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus."
        ],
        Link: "Private"
      },
      "Career Matrix": {
        Description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus."
        ],
        Link: "Private"
      },
      "VIT Feedback Portal": {
        Description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus."
        ],
        Link: (
          <a href="https://www.google.com" target="_blank">
            VIT Teachers Portal
          </a>
        )
      },
      "Stock Prediction": {
        Description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus."
        ],
        Link: "Private"
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
                <div className="project-title">
                  {this.state.projects[item].Link == "Private" ? (
                    <React.Fragment>{item}</React.Fragment>
                  ) : (
                    this.state.projects[item].Link
                  )}
                </div>
                <div className="project-status">
                  {this.state.projects[item].Link === "Private"
                    ? this.state.projects[item].Link
                    : null}
                </div>
              </div>
              <div className="project-desc">
                {this.state.projects[item].Description}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default projects;
