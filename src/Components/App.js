import React, { Component } from "react";
import ReactDom from "react-dom";
import Sidebar from "./Sidebar/Sidebar";
import RightContainer from "./RightContainer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Sidebar">
                    <Sidebar />
                </div>
            </React.Fragment>
        );
    }
}
export default App;
