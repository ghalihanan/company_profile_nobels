import React from "react";
import { Jumbotron, ProjectProtofolio,Connects } from "../components";


const Homepage = () => {
console.log('ini ngerjain storynya');
  return (
    <div className="container">
      <Jumbotron />


      <Connects />

      <ProjectProtofolio/>

    </div>
  );
};

export default Homepage;
