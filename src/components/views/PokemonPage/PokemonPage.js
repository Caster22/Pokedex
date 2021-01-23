import React from 'react';
import { fetchSelectedPokemon, getAllPokemons } from "../../../redux/PokemonRedux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import styles from './PokemonPage.module.scss';
import {Slider} from "../../Features/Slider/Slider";

class Component extends React.Component {
  componentDidMount() {
    const { selectedPokemon } = this.props;
    selectedPokemon(this.props.match.params.id);
  }

  dataCheck = (i) => {
    const { pokemon } = this.props;
    if(!pokemon.stats[i]) return ' Sorry! Not data Here! ';
    else return pokemon.stats[i].base_stat;
  }
  render() {
    const { pokemon } = this.props;

    if (!pokemon) {
      return (
        <div className='text-center text-warning pt-5'>
          LOADING DATA...
        </div>
      );
    } else {
      return (
        <section className='container'>
          <div className='container'>
            <div className={styles.window}>
              <h1 className='text-center pt-2 pb-4'>{ pokemon.name }</h1>
              <div className='row justify-content-center'>
                <div className='col-10 col-lg-5 mx-1 text-center '>
                  <Slider images={pokemon.sprites}/>
                </div>
                <div className='col-12 col-lg-6 pl-5 mb-4'>
                  <div className={styles.data}>
                    <h2>Base Data:</h2>
                    <div className='row pt-2'>
                      <div className='col-6'>HP: &nbsp;&nbsp; {this.dataCheck(0)}</div>
                      <div className='col-6'>Attack: &nbsp;&nbsp; {this.dataCheck(1)}</div>
                      <div className='col-6'>Defense: &nbsp;&nbsp; {this.dataCheck(2)}</div>
                      <div className='col-6'>Special Attack: &nbsp;&nbsp; {this.dataCheck(3)}</div>
                      <div className='col-6'>Special Defense: &nbsp;&nbsp; {this.dataCheck(4)}</div>
                      <div className='col-6'>Speed: &nbsp;&nbsp; {this.dataCheck(5)}</div>
                    </div>
                  </div>
                  <div className={styles.data}>
                    <h2>Abilities Data:</h2>
                    <div className='row pt-2'>
                      {pokemon.abilities.map(item => (
                        <div key={item.ability.name} className={'col-12'}>Name: &nbsp;&nbsp; {item.ability.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

Component.propTypes = {
  pokemon: PropTypes.object,
};

const mapStateToProps = state => ({
  pokemon: getAllPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  selectedPokemon: id => dispatch(fetchSelectedPokemon(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

//If need -> below easy way for switch container/component
export {
  //Component as PokemonPage,
  Container as PokemonPage,
  Component as PokemonPageComponent,
};
