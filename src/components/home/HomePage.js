/**
Default component to render. I could use stateless component here,
but there are some issues with root component & hot reloading.
*/

import React from 'react';
import {Link} from 'react-router';
import './HomePage.scss';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>react-redux-boilerplate</h1>
                <p>Author: Alejandro Perez</p>
                <Link to="widget" className="btn btn-primary btn-lg">See widget >></Link>
            </div>
        );
    }
}

export default HomePage;
