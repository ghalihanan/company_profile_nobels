import React from "react";
import {Text } from "@chakra-ui/react";
import "./jumbotron.scss";

const Jumbotron = () => {
  return (
    <div className="container-jumbotron">
      <section className='jumbotron-text'>
        <section className='box'>
        <Text fontSize="4xl" fontWeight='extrabold'>Everybody loves the internet</Text>
        <Text fontSize="sm">Accelerate business performance using technologies</Text>
        <button className='btn-jumbotron'>Connect Us</button>
        </section>
      </section>
      <section className='jumbotron-image'>
        .
      </section>
  
    </div>
  );
};

export default Jumbotron;
