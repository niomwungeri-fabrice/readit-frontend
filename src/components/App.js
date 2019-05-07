import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SinUp from "./signIn/SignIn";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SinUp} />
      </Switch>
    </div>
  );
};

export default App;
