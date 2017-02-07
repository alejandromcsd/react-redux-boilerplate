/**
This Redux reducer is implemented to control pending async calls in the pipeline.
This will help to control pending tasks and improve UX
*/

import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    //There are other patterns to filter success calls
    //But I know this one is validated by the Redux author, so lets go with it.
    return type.endsWith('_SUCCESS');
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if(action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if(action.type===types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}