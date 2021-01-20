import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

const Component =  ({ children }) => (
  <div className={ styles.root }>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  //Container as MainLayout,
  Component as MainLayoutComponent,
};
