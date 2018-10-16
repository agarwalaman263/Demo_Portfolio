import React, { Component } from "react";
import ReactDom from "react-dom";
import "./experience.css";
import { Helmet } from "react-helmet";
export default class experience extends Component {
  state = {
    experience: {
      "Kuehne Nagel": {
        Designation: "Intern",
        work: [
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        alias dignissimos. Modi nobis possimus reiciendis eligendi vero
        ratione laborum nam laudantium. Vitae beatae perferendis ipsa
        ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Minus, voluptas. Adipisci
        voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
        mollitia velit eveniet nostrum, perferendis quod vero asperiores
        doloribus deserunt.`
        ]
      },
      "IEEE SPS VIT": {
        Designation: "Board Member",
        work: [
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        alias dignissimos. Modi nobis possimus reiciendis eligendi vero
        ratione laborum nam laudantium. Vitae beatae perferendis ipsa
        ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Minus, voluptas. Adipisci
        voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
        mollitia velit eveniet nostrum, perferendis quod vero asperiores
        doloribus deserunt.`
        ]
      },
      "Gravitas 2016": {
        Designation: "Core Designer",
        work: [
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        alias dignissimos. Modi nobis possimus reiciendis eligendi vero
        ratione laborum nam laudantium. Vitae beatae perferendis ipsa
        ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Minus, voluptas. Adipisci
        voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
        mollitia velit eveniet nostrum, perferendis quod vero asperiores
        doloribus deserunt.`
        ]
      },
      "Apple Developers Group VIT": {
        Designation: "Core Designer",
        work: [
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        alias dignissimos. Modi nobis possimus reiciendis eligendi vero
        ratione laborum nam laudantium. Vitae beatae perferendis ipsa
        ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Minus, voluptas. Adipisci
        voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
        mollitia velit eveniet nostrum, perferendis quod vero asperiores
        doloribus deserunt.`
        ]
      }
    }
  };
  render() {
    return (
      <div className="experience">
        <Helmet>
          <title>Aman Agarwal | Experience</title>
        </Helmet>
        {Object.keys(this.state.experience).map((item, key) => {
          return (
            <div className="institute">
              <div className="institute-heading">
                <div className="institite-title">{item}</div>
                <div className="institite-duration">
                  {this.state.experience[item].Designation}
                </div>
              </div>
              <div className="institute-desc">
                {this.state.experience[item].work.map(element => {
                  return <React.Fragment>{element}</React.Fragment>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// <div className="institute">
//           <div className="institute-heading">
//             <div className="institite-title">Kuehne Nagel</div>
//             <div className="institite-duration">Octb-2019</div>
//           </div>
//           <div className="institute-desc">aman</div>
//         </div>
