import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./Feed";
import Upload from "./Upload";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}

export default App;
