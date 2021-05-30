import React, { Component } from "react";
import { Hero } from '../components'

const About = () => {
  return (
    <div>
      <Hero />
      <div className="content">
        <div class="left">
          <h1>About</h1>
            <p>Noble's House provides services in the process of making UI / UX Design, Web Based Apps, Mobile Apps & IT Consultants.
            We can also assist in the creation process from the beginning as well as those already in the development phase,  
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
            using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
            web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
        </div>

        <div class="right">
          <h1>Our Office</h1>
        </div>
      </div>
      
    </div>
  );
};

export default About;
