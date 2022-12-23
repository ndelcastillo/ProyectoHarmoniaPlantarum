import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carouselHeader.css';

function CarouselHeader() {
  return (
    <div className='carouselHeaderMain'>
      <Carousel className='mx-auto w-100 mt-5'>
        <Carousel.Item>
          <img
            src="/assets/images/header/carousel/portadaFilotaxia0.jpg"
            className="d-block w-100 "
            alt="First slide"
          />
          {/*<Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/images/header/carousel/portadaFilotaxia2.jpg"
            className="d-block w-100"
            alt="Second slide"
          />

          {/*<Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/header/carousel/portadaFilotaxia1.jpg"
            alt="Third slide"
          />

          {/*<Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>*/}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHeader
