import React from "react";
import BasicButton from "../common/Buttons/BasicButton";
import BasicInput from "../common/Inputs/BasicInput";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Read It</h1>
      <br />
      <BasicInput sign="$" ariaLabel="Dollars" placeholder="Some dollars man" />
      <BasicButton title="Login" className="btn-primary" />
    </div>
  );
};

export default Home;
