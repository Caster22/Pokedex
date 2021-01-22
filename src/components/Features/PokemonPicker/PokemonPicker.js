import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './PokemonPicker.module.scss'
import ArrowUp from '../../../img/sort-up.svg';
import ArrowDown from '../../../img/sort-down.svg';


const Component = ({ leadingText, pokemons }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const halfwayIndex = Math.ceil(pokemons.length /2);

  const itemHeight = 50;

  const shuffleThreshold = halfwayIndex * itemHeight;

  const visibilityStyleThreshold = shuffleThreshold /2;

  const idCreator = idString => {
    const newIdString = idString.substr(34, 10);
    const goodId = newIdString.replace('/','');
    return goodId;
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'prev') {
        if (prevIndex + 1 > pokemons.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }
      if (prevIndex - 1 < 0) {
        return pokemons.length -1;
      }
      return prevIndex - 1;
    });
  };

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;
    if (itemIndex >= halfwayIndex) {
      if (activeIndex > (itemIndex - halfwayIndex)) {
        return (itemIndex - activeIndex) * itemHeight
      } else {
        return -((pokemons.length + activeIndex) - itemIndex) * itemHeight;
      }
    }
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (pokemons.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <section className={styles.mainFrame}>
      <div className={ styles.outer_container }>
        <div className='row p-0'>
          <div className={styles.content + ` col-12 col-md-6`}>
            <img
              src={pokemons[activeIndex].url}
              alt={pokemons[activeIndex].url}
            />
            <p>{pokemons[activeIndex].name}</p>
          </div>
          <div className={styles.carousel_wrapper + ' col-12 col-md-6'}>
            <button
              type='button'
              className={styles.carousel_button}
              onClick={() => handleClick('next')}
            >
              <img src={ArrowUp} alt='arUp'/>
            </button>
            <div className={styles.carousel}>
              <div className={styles.leadingText}>
                <p>-></p>
              </div>
              <div className={styles.slides}>
                <div className={styles.carousel_inner}>
                  {pokemons.map((item, i) => (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={cn(styles.carouselItem, {
                        active: activeIndex === i,
                        visible: Math.abs(determinePlacement(i)) <= visibilityStyleThreshold,
                      })}
                      key={item.name}
                      style={{ transform: `translateY(${determinePlacement(i)}px)` }}
                    >
                       {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type='button'
              className={styles.carousel_button}
              onClick={() => handleClick('prev')}
            >
              <img src={ArrowDown} alt='arDown'/>
            </button>
          </div>
        </div>
      </div>
      <div className={`text-center py-4 mt-5 ` + styles.title}>
        <a href={`/pokemon/${idCreator(pokemons[activeIndex].url)}`}>
          More info about {pokemons[activeIndex].name}
        </a>
      </div>
    </section>

  );
}

Component.propTypes = {
  data: PropTypes.array,
  leadingText: PropTypes.string,
};

export {
  Component as PokemonPicker,
  //Container as PokemonPicker,
  Component as PokemonPickerComponent,
};
