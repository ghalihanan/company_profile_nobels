import React, { Component } from "react";
import { Hero, OurTeams, Skills } from '../../components'
import "./about.scss";
import "react-multi-carousel/lib/styles.css";



const About = () => {
  return (
    <div className="container">
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
          <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63444.346750461984!2d106.80205327910159!3d-6.3588719999999785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3e3fc27869%3A0x8bd02a6316563408!2sPondok%20Bunda!5e0!3m2!1sid!2sid!4v1622625933060!5m2!1sid!2sid"></iframe>
          </div>
        </div>
      </div>

      <OurTeams />

      <Skills />
    </div>
  );
};
  
export default About;

