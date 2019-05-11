import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
