import { combineReducers } from 'redux';

// calling the default reducer to create a link
import account from './default-reducer';
// import { reducer as reduxFormReducer } from 'redux-form';

const rtReducers = { account };
const rootReducers = combineReducers(rtReducers);

export default rootReducers;