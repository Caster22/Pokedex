import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './PokemonPicker.module.scss'
import ArrowUp from '../../../img/sort-up.svg';
import ArrowDown from '../../../img/sort-down.svg';

const Component = ({ pokemons }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState('');

  const filterPokemons = () => {
    if (!value) return pokemons.length;
    else return pokemons.filter(item => item.name.includes(value)).length;
  };

  const halfwayIndex = Math.ceil(filterPokemons() /2);

  const itemHeight = 55;

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
        if (prevIndex + 1 > filterPokemons() - 1) {
          return 0;
        }
        return prevIndex + 1;
      }
      if (prevIndex - 1 < 0) {
        return filterPokemons() -1;
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
        return -((filterPokemons() + activeIndex) - itemIndex) * itemHeight;
      }
    }
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (filterPokemons() - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <section className={styles.mainFrame}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='filter by name'
      />
      <div className={ styles.outer_container }>
        <div className='row p-0'>

          <div className={styles.carousel_wrapper + ' col-12'}>
            <button
              type='button'
              className={styles.carousel_button}
              onClick={() => handleClick('next')}
            >
              <img src={ArrowUp} alt='arUp'/>
            </button>
            <div className={styles.carousel}>
              <div className={styles.slides}>
                <div className={styles.carousel_inner}>
                  {pokemons.filter(item => {
                    if (!value) return true;
                    if (item.name.includes(value)) return true;
                    return false;
                  }).map((item, i) => (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(i);
                      }}
                      className={cn(styles.carouselItem, {
                        active: activeIndex === i,
                        visible: Math.abs(determinePlacement(i)) <= visibilityStyleThreshold,
                      })}
                      key={item.name}
                      style={{ transform: `translateY(${determinePlacement(i)}px)` }}
                    >
                      <a className='text-center' href={`/pokemon/${idCreator(item.url)}`}>{item.name}</a>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              type='button'
              className={styles.carousel_button}
              onClick={() => {
                handleClick('prev');
              }}
            >
              <img src={ArrowDown} alt='arDown'/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Component.propTypes = {
  pokemons: PropTypes.array,
};

//If need -> below easy way for switch container/component
export {
  Component as PokemonPicker,
  //Container as PokemonPicker,
  Component as PokemonPickerComponent,
};
