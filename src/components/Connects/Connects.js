import React from "react";
import {Text } from "@chakra-ui/react";
import "./connect.scss";

const Connects = () => {
  return (
    <>
        <div className="container-conn">
          <div className="container-img">
            <div className="cont-img1">
              <div className="img1">
                .
              </div>
            </div>
            <div className="cont-img2">
              <div className="img2">
                .
              </div>
            </div>
          </div>
          
            <div className="container-text">
              <div className="box">
                <div className="text">
                  <Text fontWeight='extrabold' fontSize="4xl">Connects .</Text>
                  <Text fontSize="md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                </div>
                <div className="input">
                  <div>
                    <input type="text" className="name" placeholder="Your Name"></input>
                  </div>
                  <div>
                    <input type="email" className="email" placeholder="E-Mail"></input>
                  </div>
                  <div>
                    <textarea className="description" placeholder="Description"></textarea>
                  </div>
                  <button className="btn btn1">Connect Us</button>
                </div>
              </div>
              <div className="container-img2">
                <div className="img3">
                  .
                </div>
              </div>
            </div>
            
        </div>
    </>
  );
};

export default Connects;