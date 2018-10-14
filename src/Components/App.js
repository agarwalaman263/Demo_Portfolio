import React, { Component } from "react";
import ReactDom from "react-dom";
import Sidebar from "./Sidebar/Sidebar";
import Rightcontainer from "./Rightcontainer/Rightcontainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar />
                <Rightcontainer />
            </React.Fragment>
        );
    }
}
export default App;
