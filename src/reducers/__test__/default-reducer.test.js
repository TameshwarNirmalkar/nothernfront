import defaultReducer from '../default-reducer';
import * as types from '../../action';
import * as data from '../../action/data/data.json';

describe('pokemon reducer', () => {

    it('should return the initial state', () => {
        expect(defaultReducer(undefined, {})).toEqual({
                pokemonList: null,
            })
    })

    it('should handle FETCH_DATA', () => {
        expect(defaultReducer([], {
            type: types.FETCH_DATA,
            pokemonList: data
        })).toEqual({ 
            pokemonList: { 
                    ...data
            }
        })
    })
})