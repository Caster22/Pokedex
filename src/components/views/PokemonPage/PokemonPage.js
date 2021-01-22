import React from 'react';
import { fetchSelectedPokemon, getAllPokemons } from "../../../redux/PokemonRedux";
import {connect} from "react-redux";
//import PropTypes from 'prop-types';
import styles from './PokemonPage.module.scss';

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
          <div>{ pokemon.name } page</div>
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
