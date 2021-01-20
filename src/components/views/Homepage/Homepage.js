import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      Home Page!
    </div>
  </div>
);

export {
  Component as Homepage,
  // Container as Homepage,
  // Component as HomepageComponent,
};
