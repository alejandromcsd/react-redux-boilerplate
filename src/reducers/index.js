/**
Redux combiner. Currently we only have two reducers (ajaxCalls and product)
but potentially other entities reducers will also be combined here
*/

import {combineReducers} from 'redux';
import product from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    product,
    ajaxCallsInProgress
});

export default rootReducer;