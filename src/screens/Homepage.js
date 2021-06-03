import React from "react";
import { Jumbotron } from "../components";
import { Connects } from '../components';

const Homepage = () => {
  return (
    <div className="container">
      <Jumbotron />

      <Connects />
    </div>
  );
};

export default Homepage;
