import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
const middlewares = [thunk];

// import logger from 'redux-logger';

export const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

export const configureStore = () => {
    // Allow for hot reloading with redux. See:
    // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    if (module.hot) {
        module.hot.accept(() => {
            // store.replaceReducer(getRootReducer());
            // epicMiddleware.replaceEpic(getRootEpic());
        });
    }

    return store;
};

export const getDispatch = () => configureStore().dispatch;