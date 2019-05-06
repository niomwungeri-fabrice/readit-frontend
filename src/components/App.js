import React from "react";
import Home from "./home/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
