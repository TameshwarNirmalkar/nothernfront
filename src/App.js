import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

import { getPokemon } from './action';
import PokemonList from './components/pokemonList';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <PokemonList dataList={pokemonList}></PokemonList>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
const mapStateToProps = (state) => {
  return {
    pokemonList: state.account.pokemonList,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
