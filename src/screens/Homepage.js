import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1>Homepageee :)</h1>
      
      <h1 onClick={() => history.push("/about")}>go to about :)</h1>
    </div>
  );
};

export default Homepage;