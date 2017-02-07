/**
Definition of Ajax/Async Redux Actions. They won't do much on its own but to dispatch events 
after an async call (in order to improve UEX) 
*/

import * as types from './actionTypes';

export function beginAjaxCall() {
    return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
    return {type: types.AJAX_CALL_ERROR};
}