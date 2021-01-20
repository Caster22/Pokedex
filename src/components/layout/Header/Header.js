import React from "react";
//import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = () => {
  return (
    <header className={ styles.root }>
      <div className='container'>
        <div className='row pt-2'>
          <div className={`col-6 text-left ` + styles.home }>
            <a href='/'>Home</a>
          </div>
          <div className='col-6 text-right'>
            <span className={styles.home}>Music</span>
          </div>
        </div>
        <div className='row align-items-center pb-3'>
          <div className={`col-12 text-center ` + styles.title }>
            Your Special Pokédex!
          </div>
        </div>
      </div>
    </header>
  );
};

Component.protoTypes = {

};

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};
