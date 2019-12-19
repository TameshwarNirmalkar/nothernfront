export const FETCH_DATA = 'FETCH_DATA';
export const API_ERROR = 'API_ERROR';


const fetchPokemonSuccess = (state) => {
    return {
        type: FETCH_DATA,
        pokemonList: state,
        pending: true
    };
}

const fetchPokemonError = (state) => {
    return {
        type: API_ERROR,
        ...state,
        pending: false
    };
}
// default function to display redux action format
export const getPokemon = () => {
    return dispatch => {
        
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPokemonSuccess(res.results));
                return res.results;
            })
            .catch(error => {
                dispatch(fetchPokemonError(error));
            })
    };
}
