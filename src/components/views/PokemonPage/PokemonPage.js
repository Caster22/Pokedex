import React from 'react';
import { fetchSelectedPokemon, getAllPokemons } from "../../../redux/PokemonRedux";
import {connect} from "react-redux";
//import PropTypes from 'prop-types';
import styles from './PokemonPage.module.scss';
import {Slider} from "../../Features/Slider/Slider";

class Component extends React.Component {
  componentDidMount() {
    const { selectedPokemon } = this.props;
    selectedPokemon(this.props.match.params.id);
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
          {console.log(pokemon)}
          <div>{ pokemon.name } page</div>
          <div className='container'>
            <div className={styles.window}>
              <h1 className='text-center pt-2 pb-4'>{ pokemon.name }</h1>
              <div className='row'>
                <div className='col-5 mx-1'>
                  <Slider images={pokemon.sprites}/>
                </div>
                <div className='col-6'>
                  <div>
                    <h3>Data</h3>
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

const mapStateToProps = state => ({
  pokemon: getAllPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  selectedPokemon: id => dispatch(fetchSelectedPokemon(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PokemonPage,
  Container as PokemonPage,
  Component as PokemonPageComponent,
};
