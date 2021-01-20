import React from "react";
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = () => {
  return (
    <div className={ styles.root }>
      Header
    </div>
  );
};

Component.protoTypes = {

};

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};
