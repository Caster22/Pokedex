import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import logo from '../../../img/Logo1.png';
import { PokemonPicker } from '../../Features/PokemonPicker/PokemonPicker';
import {fetchAllPokemons, getAllPokemons} from "../../../redux/PokemonRedux";
import {connect} from "react-redux";

class Component extends React.Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  render() {
    const { pokemons } = this.props;

    if (!pokemons) {
      return (
        <div className='text-center text-warning pt-5'>
          LOADING DATA...
        </div>
      );
    } else {
      return (
        <div className={ styles.root }>
          <div className='container'>
            <div className={styles.window}>
              <div className='row'>
                <div className='col-3'>
                  <img className={styles.logo} src={ logo } alt='logo'/>
                </div>
                <div className='col-12 text-center  col-md-9'>
                  <h1 className={`text-center mt-3 ` + styles.title}>Pokédex</h1>
                  <PokemonPicker pokemons={pokemons.results} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

Component.propTypes = {
  pokemons: PropTypes.object,
};

const mapStateToProps = state => ({
  pokemons: getAllPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchAllPokemons()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

//If need -> below easy way for switch container/component
export {
  //Component as Homepage,
  Container as Homepage,
  // Component as HomepageComponent,
};

