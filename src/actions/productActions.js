/**
Main Redux Actions for this test. Defines all available actions for the "Product" entity.
In this case, only exposing an action to retrieve iPad details, but it could contain CRUD actions.
*/

import * as types from './actionTypes';
import productApi from '../api/mockProductApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadProductSuccess(product) {
    return { type: types.LOAD_PRODUCT_SUCCESS, product };
}

export function loadProduct() {
    return function (dispatch) {
        //Dispatch this action to perform any activities required on the UI
        dispatch(beginAjaxCall());

        //Call the product Api (async call)
        return productApi.getProductDetails().then(product => {
            //Dispatch corresponding action
            dispatch(loadProductSuccess(product));
        }).catch(error => {
            //Dispatch error in order to do proper error handling:
            //- Register log in back-end or;
            //- Gather stack info and report in console log or;
            //- Push a custom error page to React Router
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}