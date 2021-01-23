import React from 'react';
import styles from './Footer.module.scss';

const Component = () => {
  return (
    <footer className={ styles.root }>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-12 col-md-6 text-md-right text-center'>
            Copyright Ⓒ 2021
          </div>
          <div className='col-12 col-md-6 text-md-left text-center'>
            Fake-Mardesoft-Fake
          </div>
          <div className='col-12 text-center'>
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};
