import React from "react";
import "./hero.scss";
import { Button } from "@chakra-ui/react"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <section className="text-box">
          <h1>We Ready To Digitalized Your Idea</h1>
          <p>Accelerate business performance using technologies</p>
          <Button colorScheme="blue" size='sm' mt='30px'>Button</Button>
        </section>
      </div>
    </>
  );
};

export default Hero;
