import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './PokemonPicker.module.scss'
import ArrowUp from '../../../img/sort-up.svg';
import ArrowDown from '../../../img/sort-down.svg';

const Component = ({ pokemons }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonId, setPokemonId] = useState('');

  const filterPokemons = () => {
    if (!value) return pokemons.length;
    else return pokemons.filter(item => item.name.includes(value)).length;
  };

  const idSelector = () => {
    if (!value) return pokemons[activeIndex].url;
    else return pokemonId;
  };
  const nameSelector = () => {
    if (!value) return pokemons[activeIndex].name;
    else return pokemonName;
  };

  const selectDom = () => {
    const element = document.getElementsByClassName('active');
    if (!element[0]) return 'loading';
    else {
      const domObj = {
        name: element[0].innerHTML,
        id: element[0].value,
      };
      return domObj;
    }
  };

  const halfwayIndex = Math.ceil(filterPokemons() /2);

  const itemHeight = 50;

  const shuffleThreshold = halfwayIndex * itemHeight;

  const visibilityStyleThreshold = shuffleThreshold /2;

  const idCreator = idString => {
    const newIdString = idString.substr(34, 10);
    const goodId = newIdString.replace('/','');
    return goodId;
  };

  const handleClick = (direction) => {
    const name = selectDom().name;
    const id = selectDom().id;
    if (value) { setPokemonName(name); setPokemonId(id);}
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
              <div className={styles.leadingText}>
                <p>-></p>
              </div>
              <div className={styles.slides}>
                {console.log('log:', pokemonName, pokemonId)}
                {console.log('log2:', selectDom())}
                <div className={styles.carousel_inner}>
                  {pokemons.filter(item => {
                    if (!value) return true;
                    if (item.name.includes(value)) return true;
                    return false;
                  }).map((item, i) => (
                    <button
                      type="button"
                      value={item.url}
                      onClick={() => {
                        setActiveIndex(i);
                        setPokemonName(item.name);
                        setPokemonId(item.url);
                      }}
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
              onClick={() => {
                handleClick('prev');
              }}
            >
              <img src={ArrowDown} alt='arDown'/>
            </button>
          </div>
        </div>
      </div>
      <div className={`text-center py-4 mt-5 ` + styles.title}>
        <a href={`/pokemon/${idCreator(idSelector())}`}>
          More info about {nameSelector()}
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
