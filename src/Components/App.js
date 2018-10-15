import React, { Component } from "react";
import ReactDom from "react-dom";
import Sidebar from "./Sidebar/Sidebar";
import Rightcontainer from "./Rightcontainer/Rightcontainer";
import skillset from "./Skillset/skillset";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Sidebar />
          <Switch>
            <Route path="/" component={Rightcontainer} exact />
            <Route path="/skillset" component={skillset} />
            <Route path="/education" component={Rightcontainer} />
            <Route path="/projects" component={Rightcontainer} />
            <Route path="/social" component={Rightcontainer} />
            <Route path="/contact" component={Rightcontainer} />
            <Route component={Rightcontainer} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
