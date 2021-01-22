import React from 'react';
//import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.scss';


class Component extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <Carousel className={styles.wrapper}>
        <div>
          <img src={images.other.dream_world.front_default} alt='img'/>
        </div>
        <div>
          <img src={images.front_default} alt='img'/>
        </div>
        <div>
          <img src={images.front_shiny} alt='img'/>
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
