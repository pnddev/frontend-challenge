import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles/app.css";

const Swipe = () => { 
 
    const mouseDownCoords = e => {
        window.checkForDrag = e.clientX;
        //console.log(e.clientX);  additional checks for click
  };

  return (
    <div className="container">
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}
      >
        <Slider
        onMouseDown={e => mouseDownCoords(e)}
        className="slider"
        >
          <Slide index={0}
          className="slide-0">
            🐰 Slide one
          </Slide>

          <Slide index={1}
          className="slide-1">
            Slide two
          </Slide>

          <Slide index={2}
          className="slide-2">
            <span>
              Slide three 
            </span>
          </Slide>

        </Slider>
      </CarouselProvider>
    </div>
  );
};


export default Swipe;