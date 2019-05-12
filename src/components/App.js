import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import NavBar from "./common/NavBar/NavBar";
import Editor from "./Editor/Editor";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/posts" component={Editor} />
        </Switch>
      </div>
    );
  }
}

export default App;
