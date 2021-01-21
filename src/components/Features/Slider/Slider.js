import React from 'react';
//import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import placeholderImg from '../../../img/12.png';


class Component extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 1</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 2</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 3</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 4</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 5</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 6</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 7</span>
        </div>
        <div>
          <img src={placeholderImg} alt='img'/>
          <span className='legend'> pokemon 8</span>
        </div>
      </Carousel>
    );
  }
}

export {
  Component as Slider,
  //Container as Slider,
  Component as SliderComponent,
};
