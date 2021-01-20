import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Component = () => {
  return (
    <footer className={ styles.root }>
      Footer
    </footer>
  );
};

Component.propTypes = {

};

export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};
