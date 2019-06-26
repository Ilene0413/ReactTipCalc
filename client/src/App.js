import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tips from "./Pages/Tips";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Tips} />
          <Route exact path="/Tips" component={Tips} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
