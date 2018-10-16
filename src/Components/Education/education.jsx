import React, { Component } from "react";
import ReactDom from "react-dom";
import "./education.css";
import { Helmet } from "react-helmet";
class education extends Component {
  state = {
    education: {
      "Bachhelor in Technology": {
        duration: "2015-2019",
        desc: [
          "Branch: Computer Science ",
          " Vellore Institute of Technology, Vellore"
        ]
      },
      "Senior Secondary ": {
        duration: "2013-2014",
        desc: [
          "Delhi Public School, Indore",
          "Central Board of Secondary Education (CBSE)"
        ]
      },
      "Higher Secondary": {
        duration: "2011-2012",
        desc: [
          "Delhi Public School, Indore",
          "Central Board of Secondary Education (CBSE)"
        ]
      }
    }
  };
  render() {
    return (
      <div className="education">
        <Helmet>
          <title>Aman Agarwal | Education</title>
        </Helmet>
        {Object.keys(this.state.education).map(key => {
          return (
            <div className="degree">
              <div className="degree-heading">
                <div className="degree-title">{key}</div>
                <div className="degree-duration">
                  {this.state.education[key].duration}
                </div>
              </div>
              <div className="degree-desc">
                {this.state.education[key].desc.map(element => {
                  return <div>{element}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default education;
