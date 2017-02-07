/**
React Router: Simple definition with couple of routes to demonstrate use
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import WidgetPage from './components/widget/WidgetPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="widget" component={WidgetPage} />
    </Route>
);