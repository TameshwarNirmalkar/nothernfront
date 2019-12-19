import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PokemonList from '../components/pokemonList';
import configureStore, { createMockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { getPokemon, FETCH_DATA } from '../action';


describe('>>>APP --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
    const pokemonList = {
        account: {
            pokemonList: [
                { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
                { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
                { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
            ]
        },
        fetchData: jest.fn()
    };
    const initialState = { ...pokemonList };
    const mockStore = configureStore();
    let store, container, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        // container = mount(<Provider store={store}><PokemonList dataList={pokemonList} /></Provider>);
        // wrapper = shallow(<App store={store} />)
    });

    it('+++ render the PokemonList component', () => {
        // const str = createMockStore([])({});
        const tree = create(
            <Provider store={store}>
                <PokemonList dataList={initialState.account.pokemonList} />
            </Provider>,
        );

        expect(tree).toMatchSnapshot();
    });

    

});
