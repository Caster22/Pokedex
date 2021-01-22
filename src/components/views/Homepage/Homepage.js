import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import logo from '../../../img/Logo1.png';
import { PokemonPicker } from '../../Features/PokemonPicker/PokemonPicker';
import pokemon from "../../../img/12.png";
import pokemon2 from "../../../img/122.png";
import {fetchAllPokemons, getAllPokemons} from "../../../redux/PokemonRedux";
import {connect} from "react-redux";

const mockText = '№';
const mockData = [
  {
    intro: 'introduction1',
    id: 1,
    content: {
      image: pokemon2,
      copy: 'lorem lorem ipsum ipsum1',
    },
  },
  {
    intro: 'introduction2',
    id: 2,
    content: {
      image: pokemon,
      copy: 'lorem lorem ipsum ipsum2',
    },
  },
  {
    intro: 'introduction3',
    id: 3,
    content: {
      image: pokemon2,
      copy: 'lorem lorem ipsum ipsum3',
    },
  },
  {
    intro: 'introduction4',
    id: 4,
    content: {
      image: pokemon,
      copy: 'lorem lorem ipsum ipsum4',
    },
  },
  {
    intro: 'introduction5',
    id: 5,
    content: {
      image: pokemon2,
      copy: 'lorem lorem ipsum ipsum5',
    },
  },
  {
    intro: 'introduction6',
    id: 6,
    content: {
      image: pokemon,
      copy: 'lorem lorem ipsum ipsum6',
    },
  },
  {
    intro: 'introduction7',
    id: 7,
    content: {
      image: pokemon,
      copy: 'lorem lorem ipsum ipsum7',
    },
  },
  {
    intro: 'introduction8',
    id: 8,
    content: {
      image: pokemon,
      copy: 'lorem lorem ipsum ipsum8',
    },
  },
];

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
                  <PokemonPicker data={mockData} pokemons={pokemons.results} leadingText={mockText}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  pokemons: getAllPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchAllPokemons()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  // Component as HomepageComponent,
};

/* const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      <div className={styles.window}>
        <div className='row'>
          <div className='col-3'>
            <img className={styles.logo} src={ logo } alt='logo'/>
          </div>
          <div className='col-12 text-center  col-md-9'>
            <h1 className={`text-center mt-3 ` + styles.title}>Pokédex</h1>
            <PokemonPicker data={mockData} leadingText={mockText}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);
 */
