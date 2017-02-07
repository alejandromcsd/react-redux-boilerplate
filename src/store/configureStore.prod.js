/**
Redux store configuration for production environment.
We want an specific configuration in order to avoid injecting unnecessary 
middleware to the store creation (testing, mutation checking, others)
*/

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}