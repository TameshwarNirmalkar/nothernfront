import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchPokemonSuccess, getPokemon } from './index';

import * as data from './data/data.json';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

it('should execute fetch data', () => {
    const store = mockStore({});

    // Return the promise
    return store.dispatch(getPokemon())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(fetchPokemonSuccess(data.results));
        })
})