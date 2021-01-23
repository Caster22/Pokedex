import React from "react";
import styles from './Header.module.scss';
import soundUrl from '../../../audio/101-opening.mp3';
import BgAudio from "../../Features/BgAudio/BgAudio";
const Component = () => {

  return (
    <header className={ styles.root }>
      <div className='container'>
        <div className='row pt-2'>
          <div className={`col-6 text-left ` + styles.home }>
            <a href='/'>Home</a>
          </div>
          <div className='col-6 text-right'>
            <BgAudio url={soundUrl}/>
          </div>
        </div>
        <div className='row align-items-center pb-3'>
          <div className={`col-12 text-center ` + styles.title }>
            <a href='/'>Your Special Pokédex! </a>
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
