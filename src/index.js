/**
React entry point. Some of the main tasks performed here are:
- Init of required Redux stores/data. In this case, we only need the iPad info
(This could also be refactored to load data only when container component is loaded)
- React Router module
*/

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadProduct} from './actions/productActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadProduct());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);