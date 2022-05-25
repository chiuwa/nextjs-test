import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default class NextJsCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>

        <div>
          <img src="https://via.placeholder.com/1400x600" alt="image1" />
          <p className="legend">Image 1</p>
        </div>

        <div>
          <img src="https://via.placeholder.com/1400x600" alt="image2" />
          <p className="legend">Image 2</p>
        </div>

        <div>
          <img src="https://via.placeholder.com/1400x600" alt="image3" />
          <p className="legend">Image 3</p>
        </div>

      </Carousel>
    );
  }
};