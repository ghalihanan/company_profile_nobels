import React from "react";
import "./our-team.scss";
import Carousel from "react-multi-carousel";

const OurTeams = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 400 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };
  
  return (
        <div className="team">
        <h1>Our Team</h1>
           <Carousel responsive={responsive}>
            <div className="slide"> <img src="https://www.kindpng.com/picc/m/84-847409_sponge-bob-png-spongebob-squarepants-png-transparent-png.png"  /></div>
            <div className="slide"> <img src="https://www.kindpng.com/picc/m/84-847409_sponge-bob-png-spongebob-squarepants-png-transparent-png.png"  /></div>
            <div className="slide"> <img src="https://www.kindpng.com/picc/m/84-847409_sponge-bob-png-spongebob-squarepants-png-transparent-png.png"  /></div>
            <div className="slide"> <img src="https://www.kindpng.com/picc/m/84-847409_sponge-bob-png-spongebob-squarepants-png-transparent-png.png"  /></div>
            <div className="slide"> <img src="https://www.kindpng.com/picc/m/84-847409_sponge-bob-png-spongebob-squarepants-png-transparent-png.png"  /></div>
          </Carousel>
      </div>
    );
    };
    
    export default OurTeams;
    