import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Sidebar.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGhost } from "@fortawesome/free-solid-svg-icons";

// library.add(faGhost);
class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        imgURL: "https://picsum.photos/120/120"
    };
    render() {
        return (
            <div className="Sidebar">
                <img src={this.state.imgURL} alt="" />
                <div className="menuItems">
                    {/* <FontAwesomeIcon icon="ghost" /> */}
                    Home
                </div>
                <div className="menuItems">SkillSet</div>
                <div className="menuItems">Education</div>
                <div className="menuItems">Projects</div>
                <div className="menuItems">Experience</div>
                <div className="menuItems">Social Apperaence</div>
                <div className="menuItems">Contact ME</div>
                <div className="menuItems">Dev Stack</div>
            </div>
        );
    }
}
export default Sidebar;
