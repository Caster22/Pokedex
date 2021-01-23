import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.scss';
import placholderImg from '../../../img/NoImage.png';




class Component extends React.Component {

  imageCheck = (image) => {
    if(!image) return placholderImg;
    else return image;
  }

  render() {
    const { images } = this.props;
    return (
      <Carousel className={styles.wrapper}>
        <div>
          <img src={this.imageCheck(images.other.dream_world.front_default)} alt='img'/>
        </div>
        <div>
          <img src={this.imageCheck(images.front_default)} alt='img'/>
        </div>
        <div>
          <img src={this.imageCheck(images.front_shiny)} alt='img'/>
        </div>
      </Carousel>
    );
  }
}


Component.propTypes = {
  images: PropTypes.object,
};

export {
  Component as Slider,
  //Container as Slider,
  Component as SliderComponent,
};
