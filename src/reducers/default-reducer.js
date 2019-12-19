import { FETCH_DATA } from '../action';

const initialState = {
    pokemonList: null,
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA:
            return Object.assign({}, state, { pokemonList: action.pokemonList });

        default:
            return state;
    }
};

export default defaultReducer;